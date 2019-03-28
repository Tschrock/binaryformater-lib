
type FilteredKeys<T, U> = { [P in keyof T]: T[P] extends U ? P : never }[keyof T];
type BufferFiltered = { [Q in FilteredKeys<Buffer, (index: number) => number>]: Buffer[Q] };

export class BufferReader {

    constructor(
        public readonly Buffer: Buffer,
        public CurrentIndex: number = 0
    ) {};

    private doAndIncrement(func: keyof(BufferFiltered), inc: number) {
        var val = this.Buffer[func](this.CurrentIndex);
        this.CurrentIndex += inc;
        return val;
    }

    readInt8() {
        return this.doAndIncrement("readInt8", 2);
    }

    readInt16BE() {
        return this.doAndIncrement("readInt16BE", 2);
    }

    readInt16LE() {
        return this.doAndIncrement("readInt16LE", 2);
    }

    readInt32BE() {
        return this.doAndIncrement("readInt32BE", 4);
    }

    readInt32LE() {
        return this.doAndIncrement("readInt32LE", 4);
    }

    readUInt8() {
        return this.doAndIncrement("readUInt8", 2);
    }

    readUInt16BE() {
        return this.doAndIncrement("readUInt16BE", 2);
    }

    readUInt16LE() {
        return this.doAndIncrement("readUInt16LE", 2);
    }

    readUInt32BE() {
        return this.doAndIncrement("readUInt32BE", 4);
    }

    readUInt32LE() {
        return this.doAndIncrement("readUInt32LE", 4);
    }

    readString(encoding: string, length: number) {
        return this.Buffer.toString(encoding, this.CurrentIndex, this.CurrentIndex += length);
    }
}