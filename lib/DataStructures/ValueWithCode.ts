import { BufferReader } from "../BufferReader";
import { PrimitiveTypeEnumeration, IPrimitiveType } from "../Enumerations/PrimitiveTypeEnumeration";

export class ValueWithCode {

    constructor(
        public PrimitiveTypeEnum: PrimitiveTypeEnumeration,
        public Value: IPrimitiveType
    ) { };

    public static read(buffer: BufferReader): ValueWithCode {

        const primitiveTypeEnum = PrimitiveTypeEnumeration.read(buffer);
        const value = PrimitiveTypeEnumeration.readPrimitiveForType(buffer, primitiveTypeEnum.Value);

        return new ValueWithCode(primitiveTypeEnum, value);

    }
}