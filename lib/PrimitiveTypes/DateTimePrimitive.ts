import JSBI from "jsbi";

import { BufferReader } from "../BufferReader";

export enum TimeZoneKind {
    NONE = 0,
    UTC = 1,
    LOCAL = 2,
}

export class DateTimePrimitive {

    constructor(
        public Ticks: JSBI,
        public Kind: TimeZoneKind,
    ) { }

    public static read(buffer: BufferReader): DateTimePrimitive {

        const fullValue = buffer.readUInt64LE();

        return new DateTimePrimitive(
            JSBI.signedRightShift(fullValue, JSBI.BigInt(2)),
            JSBI.toNumber(JSBI.bitwiseAnd(fullValue, JSBI.BigInt(0b11))),
        );
    }

}
