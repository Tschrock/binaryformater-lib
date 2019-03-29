import { BufferReader } from "../BufferReader";

import { PrimitiveTypeEnumeration, IPrimitiveType } from "../Enumerations/PrimitiveTypeEnumeration";

export class MemberPrimitiveTypedRecord {

    constructor(
        public Value: IPrimitiveType,
    ) { }

    public static read(buffer: BufferReader, primitiveTypeEnum: PrimitiveTypeEnumeration): MemberPrimitiveTypedRecord {

        return new MemberPrimitiveTypedRecord(PrimitiveTypeEnumeration.readPrimitiveForType(buffer, primitiveTypeEnum.Value));

    }

}
