import { BufferReader } from "../BufferReader";

import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

import { Int32Primitive } from "../PrimitiveTypes/Int32Primitive";
import { LengthPrefixedString } from "../PrimitiveTypes/LengthPrefixedString";

export class BinaryLibraryRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.BinaryLibrary);

    constructor(
        public LibraryId: Int32Primitive,
        public LibraryName: LengthPrefixedString,
    ) { }

    public static read(buffer: BufferReader): BinaryLibraryRecord {
        return new BinaryLibraryRecord(
            Int32Primitive.read(buffer),
            LengthPrefixedString.read(buffer),
        );
    }
}
