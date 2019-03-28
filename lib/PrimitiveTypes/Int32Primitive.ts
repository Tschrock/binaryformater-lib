import { BufferReader } from "../BufferReader";

export class Int32Primitive {

    constructor(
        public Value: number
    ) { };

    public static read(buffer: BufferReader): Int32Primitive {
        return new Int32Primitive(buffer.readInt32LE());
    }
    
}