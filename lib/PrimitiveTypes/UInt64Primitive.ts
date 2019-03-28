import { BufferReader } from "../BufferReader";
import JSBI from 'jsbi';

export class UInt64Primitive {

    constructor(
        public Value: JSBI
    ) { };

    public static read(reader: BufferReader): UInt64Primitive {
        return new UInt64Primitive(reader.readUInt64LE());
    }
    
}