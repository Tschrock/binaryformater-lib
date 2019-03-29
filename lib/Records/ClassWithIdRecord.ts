import { BufferReader } from "../BufferReader";

import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

import { Int32Primitive } from "../PrimitiveTypes/Int32Primitive";

export class ClassWithIdRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.ClassWithId);

    constructor(
        public ObjectId: Int32Primitive,
        public MetadataId: Int32Primitive,
    ) { }

    public static read(buffer: BufferReader): ClassWithIdRecord {

        return new ClassWithIdRecord(
            Int32Primitive.read(buffer),
            Int32Primitive.read(buffer),
        );
    }

}
