import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";
import { INT32 } from "../PrimitiveTypes/INT32";
import { BufferReader } from "../BufferReader";

export class SerializationHeaderRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.SerializedStreamHeader);

    constructor(
        public RootId: INT32,
        public HeaderId: INT32,
        public MajorVersion: INT32,
        public MinorVersion: INT32
    ) { };

    static read(buffer: BufferReader) {
        return new SerializationHeaderRecord(
            INT32.read(buffer),
            INT32.read(buffer),
            INT32.read(buffer),
            INT32.read(buffer)
        );
    }
}