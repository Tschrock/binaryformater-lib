import { BufferReader } from "../BufferReader";
import JSBI from 'jsbi';

export class Int64Primitive {

    constructor(
        public Value: JSBI
    ) { };

    public static read(buffer: BufferReader): Int64Primitive {
        return new Int64Primitive(buffer.readInt64LE());
    }
    
}