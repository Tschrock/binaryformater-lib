import { BufferReader } from "../BufferReader";
import { PrimitiveTypeEnumeration, PrimitiveType } from "../Enumerations/PrimitiveTypeEnumeration";
import { LengthPrefixedString } from "../PrimitiveTypes/LengthPrefixedString";

export class StringValueWithCode {
    public readonly PrimitiveTypeEnum: PrimitiveTypeEnumeration = new PrimitiveTypeEnumeration(PrimitiveType.String);

    constructor(
        public Value: LengthPrefixedString
    ) { };

    public static read(reader: BufferReader): StringValueWithCode {

        return new StringValueWithCode(LengthPrefixedString.read(reader));

    }
}