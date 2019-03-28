import { BufferReader } from "../BufferReader";

export enum BinaryType {
    Primitive = 0,
    String = 1,
    Object = 2,
    SystemClass = 3,
    Class = 4,
    ObjectArray = 5,
    StringArray = 6,
    PrimitiveArray = 7,
}

export class BinaryTypeEnumeration {

    constructor(
        public Value: BinaryType,
    ) { }

    public static read(buffer: BufferReader): BinaryTypeEnumeration {
        return new BinaryTypeEnumeration(buffer.readUInt8());
    }

}
