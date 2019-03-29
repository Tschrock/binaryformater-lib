import { BufferReader } from "../BufferReader";

export enum BinaryArrayType {
    Single = 0,
    Jagged = 1,
    Rectangular = 2,
    SingleOffset = 3,
    JaggedOffset = 4,
    RectangularOffset = 5,
}

export class BinaryArrayTypeEnumeration {

    constructor(
        public Value: BinaryArrayType,
    ) { }

    public static read(buffer: BufferReader): BinaryArrayTypeEnumeration {
        return new BinaryArrayTypeEnumeration(buffer.readUInt8());
    }

}
