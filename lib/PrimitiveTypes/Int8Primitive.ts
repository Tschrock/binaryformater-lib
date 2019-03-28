import { BufferReader } from "../BufferReader";

export class Int8Primitive {

    constructor(
        public Value: number,
    ) { }

    public static read(buffer: BufferReader): Int8Primitive {
        return new Int8Primitive(buffer.readInt8());
    }

}
