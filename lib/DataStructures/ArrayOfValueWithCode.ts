import { BufferReader } from "../BufferReader";
import { Sequence } from "./Sequence";
import { ValueWithCode } from "./ValueWithCode";

import { Int32Primitive } from "../PrimitiveTypes/Int32Primitive";

export class ArrayOfValueWithCode {

    constructor(
        public Length: Int32Primitive,
        public Values: Sequence<ValueWithCode>,
    ) { }

    public static read(buffer: BufferReader): ArrayOfValueWithCode {

        const length = Int32Primitive.read(buffer);
        const values = Sequence.read(buffer, ValueWithCode.read, length.Value);

        return new ArrayOfValueWithCode(length, values);

    }

}
