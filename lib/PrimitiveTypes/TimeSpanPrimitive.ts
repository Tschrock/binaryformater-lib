import { BufferReader } from "../BufferReader";
import JSBI from 'jsbi';

export class TimeSpanPrimitive {

    constructor(
        public Value: JSBI
    ) { };

    public static read(reader: BufferReader): TimeSpanPrimitive {
        return new TimeSpanPrimitive(reader.readUInt64LE());
    }
    
}