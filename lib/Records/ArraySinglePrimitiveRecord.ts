import { BufferReader } from "../BufferReader";

import { ArrayInfo } from "../DataStructures/ArrayInfo";

import { PrimitiveTypeEnumeration } from "../Enumerations/PrimitiveTypeEnumeration";
import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

export class ArraySinglePrimitiveRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.ArraySinglePrimitive);

    constructor(
        public ArrayInfo: ArrayInfo, // tslint:disable-line:no-shadowed-variable
        public PrimitiveTypeEnum: PrimitiveTypeEnumeration,
    ) { }

    public static read(buffer: BufferReader): ArraySinglePrimitiveRecord {

        return new ArraySinglePrimitiveRecord(
            ArrayInfo.read(buffer),
            PrimitiveTypeEnumeration.read(buffer),
        );

    }
}
