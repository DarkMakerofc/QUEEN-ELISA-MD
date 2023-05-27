"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusJava = exports.statusBedrock = void 0;
// import dgram, { Socket } from 'dgram'
const events_1 = __importDefault(require("events"));
const net_1 = __importDefault(require("net"));
const utils_js_1 = require("../utils.js");
// TODO
async function statusBedrock(ip, port, opts = { timeout: 5 * 1000 }) { }
exports.statusBedrock = statusBedrock;
// TODO: fix connection timeout
function statusJava(ip, port = 25565, opts = { timeout: 5 * 1000 }) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        var _a;
        setTimeout(() => reject(new utils_js_1.ScraperError('timeout')), opts.timeout);
        // reference https://github.com/PassTheMayo/minecraft-server-util/blob/master/src/status.ts
        const socket = new TCPsocket(ip, port, opts, reject);
        // https://wiki.vg/Server_List_Ping#Handshake
        socket.writeVarInt(0x00);
        socket.writeVarInt(47);
        socket.writeStringVarInt(ip);
        socket.writeUnsignedShort(port);
        socket.writeVarInt(1);
        await socket.send();
        // https://wiki.vg/Server_List_Ping#Request
        socket.writeVarInt(0x00);
        socket.send();
        await socket.waitForResponse();
        socket.readVarInt();
        const responseId = socket.readVarInt();
        // eslint-disable-next-line eqeqeq
        if (responseId == -1)
            reject(new Error('Premature end of stream'));
        // eslint-disable-next-line eqeqeq
        if (responseId != 0x00)
            reject(new Error('Invalid responseId'));
        // https://wiki.vg/Protocol#Response
        const response = JSON.parse(socket.readStringVarInt());
        // https://wiki.vg/Server_List_Ping#Ping
        socket.writeVarInt(0x01);
        const ping = Date.now();
        socket.writeVarLong(ping);
        socket.send();
        await socket.waitForResponse();
        const pong = Date.now() - ping;
        socket.close();
        resolve({
            ip,
            port,
            description: response.description.extra.map(({ text }) => text.trim()).join(' ').trim(),
            descriptionText: response.description.text.trim(),
            players: {
                max: response.players.max,
                online: response.players.online,
                sample: response.players.sample.map(({ name }) => name.trim())
            },
            version: {
                name: response.version.name,
                protocol: response.version.protocol
            },
            favicon: (_a = response.favicon) !== null && _a !== void 0 ? _a : null,
            ping: pong,
            originalResponse: response
        });
    });
}
exports.statusJava = statusJava;
// class UDPsocket extends EventEmitter {
// 	public socket: Socket;
// 	constructor (public ip: string, public port: number, public opts: object) {
// 	  super()
// 	  this.socket = dgram.createSocket('udp4')
// 	}
// 	connect () {
// 	  if (!this.socket) return
// 	  this.socket.bind(this.port, this.ip)
// 	}
// }
class TCPsocket extends events_1.default {
    constructor(ip, port, opts, reject) {
        super();
        this.ip = ip;
        this.port = port;
        this.opts = opts;
        this.reject = reject;
        this.data = Buffer.alloc(0);
        this.response = Buffer.alloc(0);
    }
    connect(opts) {
        this.socket = net_1.default.createConnection({
            host: this.ip,
            port: this.port,
            timeout: this.opts.timeout,
            ...opts
        });
        this.socket.on('data', (data) => {
            this.response = Buffer.concat([this.response, data]);
            this.emit('data', data, this.response);
        });
        this.socket.on('connect', () => {
            this.emit('connect');
        });
        this.socket.on('close', () => {
            // this.reject(new ScraperError('Connection closed'));
            this.emit('close');
        });
        this.socket.on('error', () => {
            this.reject(new utils_js_1.ScraperError('Connection error'));
            this.emit('error');
        });
        this.socket.on('timeout', () => {
            this.reject(new utils_js_1.ScraperError('Connection timeout'));
            this.emit('timeout');
        });
    }
    write(data) {
        return (this.data = Buffer.concat([this.data, data]));
    }
    writeVarInt(value, save = true) {
        const buffer = Buffer.alloc(5);
        let i = 0;
        do {
            buffer[i++] = value & 0x7f | 0x80;
            value >>= 7;
        } while (value > 0);
        buffer[i - 1] &= 0x7f;
        const result = buffer.slice(0, i);
        if (save)
            this.write(result);
        return result;
    }
    writeVarLong(value) {
        const buffer = Buffer.alloc(9);
        let i = 0;
        do {
            buffer[i++] = value & 0x7f | 0x80;
            value >>= 7;
        } while (value > 0);
        buffer[i - 1] &= 0x7f;
        const result = buffer.slice(0, i);
        this.write(result);
        return result;
    }
    writeStringVarInt(value) {
        this.writeVarInt(value.length);
        this.write(Buffer.from(value, 'utf8'));
    }
    writeUnsignedShort(value) {
        this.write(Buffer.from([value >> 8, value & 0xff]));
    }
    readVarInt() {
        let result = 0;
        let i = 0;
        let b;
        do {
            b = this.response[i++];
            result |= (b & 0x7f) << (7 * i);
        } while (b & 0x80);
        this.response = this.response.slice(i);
        return result;
    }
    readVarLong() {
        let result = 0;
        let i = 0;
        let b;
        do {
            b = this.response[i++];
            result |= (b & 0x7f) << (7 * i);
        } while (b & 0x80);
        this.response = this.response.slice(i);
        return result;
    }
    readStringVarInt() {
        let length = 0;
        let i = 0;
        let b;
        do {
            b = this.response[i++];
            length |= (b & 0x7f) << (7 * i);
        } while (b & 0x80);
        // @ts-ignore
        const result = this.response.slice(i, i + length).toString('utf8');
        this.response = this.response.slice(i + length);
        return result;
    }
    readInt64BE() {
        // @ts-ignore
        const result = this.response.slice(0, 8).readBigInt64BE(0);
        this.response = this.response.slice(8);
        return result;
    }
    send() {
        if (!this.socket)
            this.connect();
        return new Promise((resolve, reject) => {
            var _a, _b;
            this.response = Buffer.alloc(0);
            // https://gist.github.com/zh32/7190955#file-serverlistping17-java-L92
            // https://github.com/PassTheMayo/minecraft-server-util/blob/68a7a16beb48226cdd5b63c45604fd3bea6c12ca/src/structure/TCPClient.ts#L464
            const data = Buffer.concat([this.writeVarInt(this.data.byteLength, false), this.data]);
            (_b = (_a = this.socket) === null || _a === void 0 ? void 0 : _a.write) === null || _b === void 0 ? void 0 : _b.call(_a, data, (err) => {
                if (err)
                    return reject(err);
                resolve();
            });
            this.data = Buffer.alloc(0);
        });
    }
    close() {
        var _a, _b, _c, _d, _e, _f;
        (_b = (_a = this.socket) === null || _a === void 0 ? void 0 : _a.end) === null || _b === void 0 ? void 0 : _b.call(_a);
        (_d = (_c = this.socket) === null || _c === void 0 ? void 0 : _c.destroy) === null || _d === void 0 ? void 0 : _d.call(_c);
        (_f = (_e = this.socket) === null || _e === void 0 ? void 0 : _e.removeAllListeners) === null || _f === void 0 ? void 0 : _f.call(_e);
    }
    waitForResponse() {
        return new Promise((resolve) => {
            const timeout = setTimeout(resolve, 250);
            this.on('data', () => {
                // @ts-ignore
                timeout.refresh();
            });
        });
    }
}
//# sourceMappingURL=minecraft.js.map