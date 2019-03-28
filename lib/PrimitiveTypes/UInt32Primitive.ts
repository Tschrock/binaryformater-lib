import { BufferReader } from "../BufferReader";

export class UInt32Primitive {

    constructor(
        public Value: number
    ) { };

    public static read(reader: BufferReader): UInt32Primitive {
        return new UInt32Primitive(reader.readUInt32LE());
    }
    
}