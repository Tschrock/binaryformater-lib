import { BufferReader } from "../BufferReader";

import { ClassTypeInfo } from "../DataStructures/ClassTypeInfo";
import { Sequence } from "../DataStructures/Sequence";

import { BinaryArrayTypeEnumeration, BinaryArrayType } from "../Enumerations/BinaryArrayTypeEnumeration";
import { BinaryTypeEnumeration, BinaryType } from "../Enumerations/BinaryTypeEnumeration";
import { PrimitiveTypeEnumeration } from "../Enumerations/PrimitiveTypeEnumeration";
import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

import { Int32Primitive } from "../PrimitiveTypes/Int32Primitive";
import { LengthPrefixedString } from "../PrimitiveTypes/LengthPrefixedString";

export class BinaryArrayRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.BinaryArray);

    constructor(
        public ObjectId: Int32Primitive,
        public BinaryArrayTypeEnum: BinaryArrayTypeEnumeration,
        public Rank: Int32Primitive,
        public Lengths: Sequence<Int32Primitive>,
        public LowerBounds: Sequence<Int32Primitive> | null,
        public TypeEnum: BinaryTypeEnumeration,
        public AdditionalTypeInfo: PrimitiveTypeEnumeration | LengthPrefixedString | ClassTypeInfo | null,
    ) { }

    public static read(buffer: BufferReader): BinaryArrayRecord {

        const objectId = Int32Primitive.read(buffer);
        const binaryArrayTypeEnum = BinaryArrayTypeEnumeration.read(buffer);
        const rank = Int32Primitive.read(buffer);
        const lengths = Sequence.read(buffer, Int32Primitive.read, rank.Value);

        let lowerBounds: Sequence<Int32Primitive> | null = null;
        if (
            binaryArrayTypeEnum.Value === BinaryArrayType.SingleOffset
            || binaryArrayTypeEnum.Value === BinaryArrayType.JaggedOffset
            || binaryArrayTypeEnum.Value === BinaryArrayType.RectangularOffset
        ) {
            lowerBounds = Sequence.read(buffer, Int32Primitive.read, rank.Value);
        }

        const typeEnum = BinaryTypeEnumeration.read(buffer);

        let additionalTypeInfo = null;
        switch (typeEnum.Value) {

            case BinaryType.Primitive:
            case BinaryType.PrimitiveArray:

                additionalTypeInfo = PrimitiveTypeEnumeration.read(buffer);
                break;

            case BinaryType.SystemClass:

                additionalTypeInfo = LengthPrefixedString.read(buffer);
                break;

            case BinaryType.Class:

                additionalTypeInfo = ClassTypeInfo.read(buffer);
                break;

            default:
                break;
        }

        return new BinaryArrayRecord(objectId, binaryArrayTypeEnum, rank, lengths, lowerBounds, typeEnum, additionalTypeInfo);

    }
}
