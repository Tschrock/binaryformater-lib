import { BufferReader } from "../BufferReader";

import { BooleanPrimitive } from "../PrimitiveTypes/BooleanPrimitive";
import { BytePrimitive } from "../PrimitiveTypes/BytePrimitive";
import { CharPrimitive } from "../PrimitiveTypes/CharPrimitive";
import { DateTimePrimitive } from "../PrimitiveTypes/DateTimePrimitive";
import { DecimalPrimitive } from "../PrimitiveTypes/DecimalPrimitive";
import { DoublePrimitive } from "../PrimitiveTypes/DoublePrimitive";
import { Int16Primitive } from "../PrimitiveTypes/Int16Primitive";
import { Int32Primitive } from "../PrimitiveTypes/Int32Primitive";
import { Int64Primitive } from "../PrimitiveTypes/Int64Primitive";
import { LengthPrefixedString } from "../PrimitiveTypes/LengthPrefixedString";
import { NullPrimitive } from "../PrimitiveTypes/NullPrimitive";
import { SBytePrimitive } from "../PrimitiveTypes/SBytePrimitive";
import { SinglePrimitive } from "../PrimitiveTypes/SinglePrimitive";
import { TimeSpanPrimitive } from "../PrimitiveTypes/TimeSpanPrimitive";
import { UInt16Primitive } from "../PrimitiveTypes/UInt16Primitive";
import { UInt32Primitive } from "../PrimitiveTypes/UInt32Primitive";
import { UInt64Primitive } from "../PrimitiveTypes/UInt64Primitive";

export type IPrimitiveType = BooleanPrimitive | BytePrimitive | CharPrimitive | DecimalPrimitive | DoublePrimitive
    | Int16Primitive | Int32Primitive | Int64Primitive | SBytePrimitive | SinglePrimitive | TimeSpanPrimitive
    | DateTimePrimitive | UInt16Primitive | UInt32Primitive | UInt64Primitive | NullPrimitive | LengthPrefixedString;

export enum PrimitiveType {
    Boolean = 1,
    Byte = 2,
    Char = 3,
    Decimal = 5,
    Double = 6,
    Int16 = 7,
    Int32 = 8,
    Int64 = 9,
    SByte = 10,
    Single = 11,
    TimeSpan = 12,
    DateTime = 13,
    UInt16 = 14,
    UInt32 = 15,
    UInt64 = 16,
    Null = 17,
    String = 18,
}

export class PrimitiveTypeEnumeration {

    constructor(
        public Value: PrimitiveType,
    ) { }

    public static read(buffer: BufferReader): PrimitiveTypeEnumeration {
        return new PrimitiveTypeEnumeration(buffer.readUInt8());
    }

    public static readPrimitiveForType(buffer: BufferReader, primitiveType: PrimitiveType) {
        switch (primitiveType) {
            case PrimitiveType.Boolean: return BooleanPrimitive.read(buffer);
            case PrimitiveType.Byte: return BytePrimitive.read(buffer);
            case PrimitiveType.Char: return CharPrimitive.read(buffer);
            case PrimitiveType.Decimal: return DecimalPrimitive.read(buffer);
            case PrimitiveType.Double: return DoublePrimitive.read(buffer);
            case PrimitiveType.Int16: return Int16Primitive.read(buffer);
            case PrimitiveType.Int32: return Int32Primitive.read(buffer);
            case PrimitiveType.Int64: return Int64Primitive.read(buffer);
            case PrimitiveType.SByte: return SBytePrimitive.read(buffer);
            case PrimitiveType.Single: return SinglePrimitive.read(buffer);
            case PrimitiveType.TimeSpan: return TimeSpanPrimitive.read(buffer);
            case PrimitiveType.DateTime: return DateTimePrimitive.read(buffer);
            case PrimitiveType.UInt16: return UInt16Primitive.read(buffer);
            case PrimitiveType.UInt32: return UInt32Primitive.read(buffer);
            case PrimitiveType.UInt64: return UInt64Primitive.read(buffer);
            case PrimitiveType.Null: return NullPrimitive.read(buffer);
            case PrimitiveType.String: return LengthPrefixedString.read(buffer);
        }
    }
}
