import { TextFileSync } from './TextFileSync.js';
export class JSONFileSync {
    constructor(filename) {
        this.adapter = new TextFileSync(filename);
    }
    read() {
        const data = this.adapter.read();
        if (data === null) {
            return null;
        }
        else {
            return JSON.parse(data);
        }
    }
    write(obj) {
        this.adapter.write(JSON.stringify(obj, null, 2));
    }
}
