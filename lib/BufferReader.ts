import JSBI from 'jsbi';

type FilteredKeys<T, U> = { [P in keyof T]: T[P] extends U ? P : never }[keyof T];
type BufferFiltered = { [Q in FilteredKeys<Buffer, (index: number) => number>]: Buffer[Q] };

export class BufferReader {

    constructor(
        public readonly Buffer: Buffer,
        public CurrentIndex: number = 0,
    ) { }

    private doAndIncrement(func: keyof (BufferFiltered), inc: number) {
        const val = this.Buffer[func](this.CurrentIndex);
        this.CurrentIndex += inc;
        return val;
    }

    public readInt8() {
        return this.doAndIncrement("readInt8", 1);
    }

    public readInt16BE() {
        return this.doAndIncrement("readInt16BE", 2);
    }

    public readInt16LE() {
        return this.doAndIncrement("readInt16LE", 2);
    }

    public readInt32BE() {
        return this.doAndIncrement("readInt32BE", 4);
    }

    public readInt32LE() {
        return this.doAndIncrement("readInt32LE", 4);
    }

    public readUInt8() {
        return this.doAndIncrement("readUInt8", 1);
    }

    public readUInt16BE() {
        return this.doAndIncrement("readUInt16BE", 2);
    }

    public readUInt16LE() {
        return this.doAndIncrement("readUInt16LE", 2);
    }

    public readUInt32BE() {
        return this.doAndIncrement("readUInt32BE", 4);
    }

    public readUInt32LE() {
        return this.doAndIncrement("readUInt32LE", 4);
    }

    public readDoubleBE() {
        return this.doAndIncrement("readDoubleBE", 8);
    }

    public readDoubleLE() {
        return this.doAndIncrement("readDoubleLE", 8);
    }

    public readFloatBE() {
        return this.doAndIncrement("readFloatBE", 8);
    }

    public readFloatLE() {
        return this.doAndIncrement("readFloatLE", 8);
    }

    public readInt64LE() {
        return JSBI.add(
            JSBI.leftShift(
                JSBI.BigInt(this.readInt32LE()),
                JSBI.BigInt(32)
            ),
            JSBI.BigInt(this.readInt32LE())
        );
    }

    public readUInt64LE() {
        return JSBI.add(
            JSBI.leftShift(
                JSBI.BigInt(this.readUInt32LE()),
                JSBI.BigInt(32)
            ),
            JSBI.BigInt(this.readUInt32LE())
        );
    }

    public readString(encoding: string, length: number) {
        return this.Buffer.toString(encoding, this.CurrentIndex, this.CurrentIndex += length);
    }
}
