import { BufferReader } from "../BufferReader";

import { ArrayInfo } from "../DataStructures/ArrayInfo";

import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

export class ArraySingleStringRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.ArraySingleString);

    constructor(
        public ArrayInfo: ArrayInfo, // tslint:disable-line:no-shadowed-variable
    ) { }

    public static read(buffer: BufferReader): ArraySingleStringRecord {

        return new ArraySingleStringRecord(ArrayInfo.read(buffer));

    }
}
