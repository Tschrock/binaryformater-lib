import { BufferReader } from "../BufferReader";
import JSBI from 'jsbi';

export class TimeSpanPrimitive {

    constructor(
        public Value: JSBI
    ) { };

    public static read(buffer: BufferReader): TimeSpanPrimitive {
        return new TimeSpanPrimitive(buffer.readUInt64LE());
    }
    
}