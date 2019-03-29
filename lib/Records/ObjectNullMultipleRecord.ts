import { BufferReader } from "../BufferReader";

import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

import { Int32Primitive } from "../PrimitiveTypes/Int32Primitive";

export class ObjectNullMultipleRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.ObjectNullMultiple);

    constructor(
        public NullCount: Int32Primitive,
    ) { }

    public static read(buffer: BufferReader): ObjectNullMultipleRecord {

        return new ObjectNullMultipleRecord(Int32Primitive.read(buffer));

    }

}
