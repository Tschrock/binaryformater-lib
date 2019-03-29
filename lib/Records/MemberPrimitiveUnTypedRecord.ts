import { BufferReader } from "../BufferReader";

import { PrimitiveTypeEnumeration, IPrimitiveType } from "../Enumerations/PrimitiveTypeEnumeration";

export class MemberPrimitiveUnTypedRecord {

    constructor(
        public Value: IPrimitiveType,
    ) { }

    public static read(buffer: BufferReader, primitiveTypeEnum: PrimitiveTypeEnumeration): MemberPrimitiveUnTypedRecord {

        return new MemberPrimitiveUnTypedRecord(PrimitiveTypeEnumeration.readPrimitiveForType(buffer, primitiveTypeEnum.Value));

    }

}
