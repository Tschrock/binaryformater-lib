import { BufferReader } from "../BufferReader";

export class UInt32Primitive {

    constructor(
        public Value: number
    ) { };

    public static read(buffer: BufferReader): UInt32Primitive {
        return new UInt32Primitive(buffer.readUInt32LE());
    }
    
}