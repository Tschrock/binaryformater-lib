import JSBI from "jsbi";

import { BufferReader } from "../BufferReader";

export class TimeSpanPrimitive {

    constructor(
        public Value: JSBI,
    ) { }

    public static read(buffer: BufferReader): TimeSpanPrimitive {
        return new TimeSpanPrimitive(buffer.readUInt64LE());
    }

}
