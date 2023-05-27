export class LocalStorage {
    constructor(key) {
        this.key = key;
    }
    read() {
        const value = localStorage.getItem(this.key);
        if (value === null) {
            return null;
        }
        return JSON.parse(value);
    }
    write(obj) {
        localStorage.setItem(this.key, JSON.stringify(obj));
    }
}
