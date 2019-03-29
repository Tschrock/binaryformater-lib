import { BufferReader } from "../BufferReader";

import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

import { Int32Primitive } from "../PrimitiveTypes/Int32Primitive";

export class MemberReferenceRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.MemberReference);

    constructor(
        public IdRef: Int32Primitive,
    ) { }

    public static read(buffer: BufferReader): MemberReferenceRecord {

        return new MemberReferenceRecord(Int32Primitive.read(buffer));

    }

}
