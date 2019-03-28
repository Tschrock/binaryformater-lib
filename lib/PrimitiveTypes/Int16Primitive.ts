import { BufferReader } from "../BufferReader";

export class Int16Primitive {

    constructor(
        public Value: number
    ) { };

    public static read(buffer: BufferReader): Int16Primitive {
        return new Int16Primitive(buffer.readInt16LE());
    }
    
}