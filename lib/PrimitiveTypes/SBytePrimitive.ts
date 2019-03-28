import { BufferReader } from "../BufferReader";

export class SBytePrimitive {

    constructor(
        public Value: number,
    ) { }

    public static read(buffer: BufferReader) {
        return new SBytePrimitive(buffer.readInt8());
    }

}
