import { BufferReader } from "../BufferReader";

import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

export class ObjectNullRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.ObjectNull);

    public static read(buffer: BufferReader): ObjectNullRecord {

        return new ObjectNullRecord();

    }

}
