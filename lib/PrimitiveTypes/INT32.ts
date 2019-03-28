import { BufferReader } from "../BufferReader";

export class INT32 {

    constructor(
        public Value: number
    ) { };

    public static read(reader: BufferReader): INT32 {
        var val = reader.Buffer.readInt32LE(reader.CurrentIndex);
        reader.CurrentIndex += 4;
        return new INT32(val);
    }
}