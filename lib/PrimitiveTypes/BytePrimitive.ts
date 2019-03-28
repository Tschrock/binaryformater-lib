import { BufferReader } from "../BufferReader";

export class BytePrimitive {

    constructor(
        public Value: number,
    ) { }

    public static read(buffer: BufferReader) {
        return new BytePrimitive(buffer.readUInt8());
    }

}
