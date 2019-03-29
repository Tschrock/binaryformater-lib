import { BufferReader } from "../BufferReader";

import { ArrayInfo } from "../DataStructures/ArrayInfo";

import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

export class ArraySingleObjectRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.ArraySingleObject);

    constructor(
        public ArrayInfo: ArrayInfo, // tslint:disable-line:no-shadowed-variable
    ) { }

    public static read(buffer: BufferReader): ArraySingleObjectRecord {

        return new ArraySingleObjectRecord(ArrayInfo.read(buffer));

    }
}
