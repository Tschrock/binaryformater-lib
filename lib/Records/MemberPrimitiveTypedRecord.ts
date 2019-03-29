import { BufferReader } from "../BufferReader";

import { PrimitiveTypeEnumeration, IPrimitiveType } from "../Enumerations/PrimitiveTypeEnumeration";
import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

export class MemberPrimitiveTypedRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.MemberPrimitiveTyped);

    constructor(
        public PrimitiveTypeEnum: PrimitiveTypeEnumeration,
        public Value: IPrimitiveType,
    ) { }

    public static read(buffer: BufferReader): MemberPrimitiveTypedRecord {

        const primitiveTypeEnum = PrimitiveTypeEnumeration.read(buffer);
        const value = PrimitiveTypeEnumeration.readPrimitiveForType(buffer, primitiveTypeEnum.Value);

        return new MemberPrimitiveTypedRecord(primitiveTypeEnum, value);
    }

}
