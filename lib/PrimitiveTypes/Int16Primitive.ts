import { BufferReader } from "../BufferReader";

export class Int16Primitive {

    constructor(
        public Value: number
    ) { };

    public static read(reader: BufferReader): Int16Primitive {
        return new Int16Primitive(reader.readInt16LE());
    }
    
}