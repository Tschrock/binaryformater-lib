import { BufferReader } from "../BufferReader";
import { LengthPrefixedString } from "./LengthPrefixedString";

export class DecimalPrimitive {

    constructor(
        public Value: number
    ) { };

    public static read(buffer: BufferReader) {
        return new DecimalPrimitive(Number.parseFloat(LengthPrefixedString.read(buffer).Value));
    }

}
