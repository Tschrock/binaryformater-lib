import { BufferReader } from "../BufferReader";

export class UInt16Primitive {

    constructor(
        public Value: number,
    ) { }

    public static read(buffer: BufferReader): UInt16Primitive {
        return new UInt16Primitive(buffer.readUInt16LE());
    }

}
