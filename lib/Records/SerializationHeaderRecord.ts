import { BufferReader } from "../BufferReader";

import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

import { Int32Primitive } from "../PrimitiveTypes/Int32Primitive";

export class SerializationHeaderRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.SerializedStreamHeader);

    constructor(
        public RootId: Int32Primitive,
        public HeaderId: Int32Primitive,
        public MajorVersion: Int32Primitive,
        public MinorVersion: Int32Primitive,
    ) { }

    public static read(buffer: BufferReader) {

        return new SerializationHeaderRecord(
            Int32Primitive.read(buffer),
            Int32Primitive.read(buffer),
            Int32Primitive.read(buffer),
            Int32Primitive.read(buffer),
        );

    }
}
