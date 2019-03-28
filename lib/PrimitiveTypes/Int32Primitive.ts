import { BufferReader } from "../BufferReader";

export class Int32Primitive {

    constructor(
        public Value: number
    ) { };

    public static read(reader: BufferReader): Int32Primitive {
        return new Int32Primitive(reader.readInt32LE());
    }
    
}