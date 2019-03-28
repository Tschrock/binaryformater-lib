import { BufferReader } from "../BufferReader";

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
    String = 18
}

export class PrimitiveTypeEnumeration {

    constructor(
        public Value: PrimitiveType
    ) {}

    public static read(buffer: BufferReader): PrimitiveTypeEnumeration {
        return new PrimitiveTypeEnumeration( buffer.readUInt8() );
    }

}