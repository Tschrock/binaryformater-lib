import { BufferReader } from "../BufferReader";

import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

import { BytePrimitive } from "../PrimitiveTypes/BytePrimitive";

export class ObjectNullMultiple256Record {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.ObjectNullMultiple256);

    constructor(
        public NullCount: BytePrimitive,
    ) { }

    public static read(buffer: BufferReader): ObjectNullMultiple256Record {

        return new ObjectNullMultiple256Record(BytePrimitive.read(buffer));

    }

}
