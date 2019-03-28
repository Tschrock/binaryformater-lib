import JSBI from "jsbi";

import { BufferReader } from "../BufferReader";

export class Int64Primitive {

    constructor(
        public Value: JSBI,
    ) { }

    public static read(buffer: BufferReader): Int64Primitive {
        return new Int64Primitive(buffer.readInt64LE());
    }

}
