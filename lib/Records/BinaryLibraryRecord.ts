import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";
import { LengthPrefixedString } from "../DataStructures/LengthPrefixedString";
import { INT32 } from "../PrimitiveTypes/INT32";
import { BufferReader } from "../BufferReader";

export class BinaryLibraryRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.BinaryLibrary);

    constructor(
        public LibraryId: INT32,
        public LibraryName: LengthPrefixedString,
    ) {};

    static read(buffer: BufferReader) {
        return new BinaryLibraryRecord(
            INT32.read(buffer),
            LengthPrefixedString.read(buffer)
        );
    }
}