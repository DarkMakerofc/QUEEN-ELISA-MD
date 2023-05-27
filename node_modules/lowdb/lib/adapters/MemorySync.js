export class MemorySync {
    constructor() {
        this.data = null;
    }
    read() {
        return this.data || null;
    }
    write(obj) {
        this.data = obj;
    }
}
