import { BufferReader } from "../BufferReader";

import { ClassInfo } from "../DataStructures/ClassInfo";

import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

export class SystemClassWithMembersRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.SystemClassWithMembers);

    constructor(
        public ClassInfo: ClassInfo, // tslint:disable-line:no-shadowed-variable
    ) { }

    public static read(buffer: BufferReader): SystemClassWithMembersRecord {

        return new SystemClassWithMembersRecord(ClassInfo.read(buffer));
    }

}
