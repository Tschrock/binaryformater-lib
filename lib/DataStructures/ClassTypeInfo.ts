import { BufferReader } from "../BufferReader";

import { Int32Primitive } from "../PrimitiveTypes/Int32Primitive";
import { LengthPrefixedString } from "../PrimitiveTypes/LengthPrefixedString";

export class ClassTypeInfo {

    constructor(
        public TypeName: LengthPrefixedString,
        public LibraryId: Int32Primitive,
    ) { }

    public static read(buffer: BufferReader): ClassTypeInfo {
        return new ClassTypeInfo(
            LengthPrefixedString.read(buffer),
            Int32Primitive.read(buffer),
        );
    }

}
