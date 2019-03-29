import { BufferReader } from "../BufferReader";

import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

import { Int32Primitive } from "../PrimitiveTypes/Int32Primitive";
import { LengthPrefixedString } from "../PrimitiveTypes/LengthPrefixedString";

export class BinaryObjectStringRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.BinaryObjectString);

    constructor(
        public ObjectId: Int32Primitive,
        public Value: LengthPrefixedString,
    ) { }

    public static read(buffer: BufferReader): BinaryObjectStringRecord {

        return new BinaryObjectStringRecord(
            Int32Primitive.read(buffer),
            LengthPrefixedString.read(buffer),
        );

    }
}
