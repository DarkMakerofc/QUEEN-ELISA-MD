/// <reference types="node" />
import { Logger } from 'pino';
import { proto } from '../../WAProto';
import { KeyPair } from '../Types';
import { BinaryNode } from '../WABinary';
export declare const makeNoiseHandler: ({ public: publicKey, private: privateKey }: KeyPair, logger: Logger) => {
    encrypt: (plaintext: Uint8Array) => Buffer;
    decrypt: (ciphertext: Uint8Array) => Buffer;
    authenticate: (data: Uint8Array) => void;
    mixIntoKey: (data: Uint8Array) => void;
    finishInit: () => void;
    processHandshake: ({ serverHello }: proto.HandshakeMessage, noiseKey: KeyPair) => Buffer;
    encodeFrame: (data: Buffer | Uint8Array) => Buffer;
    decodeFrame: (newData: Buffer | Uint8Array, onFrame: (buff: Uint8Array | BinaryNode) => void) => void;
};
