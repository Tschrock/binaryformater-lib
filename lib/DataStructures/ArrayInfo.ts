import { BufferReader } from "../BufferReader";

import { Int32Primitive } from "../PrimitiveTypes/Int32Primitive";

export class ArrayInfo {

    constructor(
        public ObjectId: Int32Primitive,
        public Length: Int32Primitive,
    ) { }

    public static read(buffer: BufferReader): ArrayInfo {

        return new ArrayInfo(
            Int32Primitive.read(buffer),
            Int32Primitive.read(buffer),
        );

    }

}
