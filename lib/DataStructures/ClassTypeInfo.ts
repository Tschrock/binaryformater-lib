import { LengthPrefixedString } from "./LengthPrefixedString";
import { INT32 } from "../PrimitiveTypes/INT32";
import { BufferReader } from "../BufferReader";

export class ClassTypeInfo {

    constructor(
        public TypeName: LengthPrefixedString,
        public LibraryId: INT32
    ) {};

    public static read(buffer: BufferReader): ClassTypeInfo {
        return new ClassTypeInfo(
            LengthPrefixedString.read(buffer),
            INT32.read(buffer)
        );
    }

}