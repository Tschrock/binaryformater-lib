import { BufferReader } from "../BufferReader";
import { PrimitiveTypeEnumeration, IPrimitiveType } from "../Enumerations/PrimitiveTypeEnumeration";

export class ValueWithCode {

    constructor(
        public PrimitiveTypeEnum: PrimitiveTypeEnumeration,
        public Value: IPrimitiveType
    ) { };

    public static read(reader: BufferReader): ValueWithCode {

        const primitiveTypeEnum = PrimitiveTypeEnumeration.read(reader);
        const value = PrimitiveTypeEnumeration.readPrimitiveForType(reader, primitiveTypeEnum.Value);

        return new ValueWithCode(primitiveTypeEnum, value);

    }
}