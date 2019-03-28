import JSBI from "jsbi";

import { BufferReader } from "../BufferReader";

export class UInt64Primitive {

    constructor(
        public Value: JSBI,
    ) { }

    public static read(buffer: BufferReader): UInt64Primitive {
        return new UInt64Primitive(buffer.readUInt64LE());
    }

}
