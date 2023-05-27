import fs from 'fs';
import path from 'path';
export class TextFileSync {
    constructor(filename) {
        this.filename = filename;
        this.tempFilename = path.join(path.dirname(filename), `.${path.basename(filename)}.tmp`);
    }
    read() {
        let data;
        try {
            data = fs.readFileSync(this.filename, 'utf-8');
        }
        catch (e) {
            if (e.code === 'ENOENT') {
                return null;
            }
            throw e;
        }
        return data;
    }
    write(str) {
        fs.writeFileSync(this.tempFilename, str);
        fs.renameSync(this.tempFilename, this.filename);
    }
}
