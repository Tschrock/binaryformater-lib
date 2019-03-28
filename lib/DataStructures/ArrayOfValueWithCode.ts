import { BufferReader } from "../BufferReader";
import { Int32Primitive } from "../PrimitiveTypes/Int32Primitive";
import { Sequence } from "./Sequence";
import { ValueWithCode } from "./ValueWithCode";

export class ArrayOfValueWithCode {

    constructor(
        public Length: Int32Primitive,
        public Values: Sequence<ValueWithCode>
    ) { };

    public static read(reader: BufferReader): ArrayOfValueWithCode {

        const length = Int32Primitive.read(reader);
        const values = Sequence.read(reader, ValueWithCode.read, length.Value);

        return new ArrayOfValueWithCode(length, values);

    }
}