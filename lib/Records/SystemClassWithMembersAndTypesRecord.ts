import { BufferReader } from "../BufferReader";

import { ClassInfo } from "../DataStructures/ClassInfo";
import { MemberTypeInfo } from "../DataStructures/MemberTypeInfo";

import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

export class SystemClassWithMembersAndTypesRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.SystemClassWithMembersAndTypes);

    constructor(
        public ClassInfo: ClassInfo, // tslint:disable-line:no-shadowed-variable
        public MemberTypeInfo: MemberTypeInfo, // tslint:disable-line:no-shadowed-variable
    ) { }

    public static read(buffer: BufferReader): SystemClassWithMembersAndTypesRecord {

        const classInfo = ClassInfo.read(buffer);
        const memberTypeInfo = MemberTypeInfo.read(buffer, classInfo.MemberCount.Value);

        return new SystemClassWithMembersAndTypesRecord(classInfo, memberTypeInfo);

    }
}
