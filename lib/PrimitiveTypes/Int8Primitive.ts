import { BufferReader } from "../BufferReader";

export class Int8Primitive {

    constructor(
        public Value: number
    ) { };

    public static read(reader: BufferReader): Int8Primitive {
        return new Int8Primitive(reader.readInt8());
    }

}