import { BufferReader } from "../BufferReader";

export class UInt16Primitive {

    constructor(
        public Value: number
    ) { };

    public static read(reader: BufferReader): UInt16Primitive {
        return new UInt16Primitive(reader.readUInt16LE());
    }
    
}