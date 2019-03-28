import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";
import { LengthPrefixedString } from "../PrimitiveTypes/LengthPrefixedString";
import { Int32Primitive } from "../PrimitiveTypes/Int32Primitive";
import { BufferReader } from "../BufferReader";

export class BinaryLibraryRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.BinaryLibrary);

    constructor(
        public LibraryId: Int32Primitive,
        public LibraryName: LengthPrefixedString,
    ) {};

    static read(buffer: BufferReader) {
        return new BinaryLibraryRecord(
            Int32Primitive.read(buffer),
            LengthPrefixedString.read(buffer)
        );
    }
}