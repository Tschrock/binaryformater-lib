import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";
import { INT32 } from "../PrimitiveTypes/INT32";
import { BufferReader } from "../BufferReader";
import { ClassInfo } from "../DataStructures/ClassInfo";
import { MemberTypeInfo } from "../DataStructures/MemberTypeInfo";

export class ClassWithMembersAndTypesRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration( RecordType.ClassWithMembersAndTypes );

    constructor(
        public ClassInfo: ClassInfo,
        public MemberTypeInfo: MemberTypeInfo,
        public LibraryId: INT32
    ) { };

    static read(buffer: BufferReader) {

        const classInfo = ClassInfo.read(buffer);
        const memberTypeInfo = MemberTypeInfo.read(buffer, classInfo.MemberCount.Value);
        const libraryId = INT32.read(buffer);
        
        return new ClassWithMembersAndTypesRecord(classInfo, memberTypeInfo, libraryId);
    }
}