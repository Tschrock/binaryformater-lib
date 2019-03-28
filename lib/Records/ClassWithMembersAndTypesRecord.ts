import { BufferReader } from "../BufferReader";

import { ClassInfo } from "../DataStructures/ClassInfo";
import { MemberTypeInfo } from "../DataStructures/MemberTypeInfo";

import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

import { Int32Primitive } from "../PrimitiveTypes/Int32Primitive";

export class ClassWithMembersAndTypesRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration( RecordType.ClassWithMembersAndTypes );

    constructor(
        public ClassInfo: ClassInfo, // tslint:disable-line:no-shadowed-variable
        public MemberTypeInfo: MemberTypeInfo, // tslint:disable-line:no-shadowed-variable
        public LibraryId: Int32Primitive,
    ) { }

    public static read(buffer: BufferReader) {

        const classInfo = ClassInfo.read(buffer);
        const memberTypeInfo = MemberTypeInfo.read(buffer, classInfo.MemberCount.Value);
        const libraryId = Int32Primitive.read(buffer);

        return new ClassWithMembersAndTypesRecord(classInfo, memberTypeInfo, libraryId);
    }
}
