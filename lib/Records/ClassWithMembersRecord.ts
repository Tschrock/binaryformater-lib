import { BufferReader } from "../BufferReader";

import { ClassInfo } from "../DataStructures/ClassInfo";

import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

import { Int32Primitive } from "../PrimitiveTypes/Int32Primitive";

export class ClassWithMembersRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.ClassWithMembers);

    constructor(
        public ClassInfo: ClassInfo, // tslint:disable-line:no-shadowed-variable
        public LibraryId: Int32Primitive,
    ) { }

    public static read(buffer: BufferReader): ClassWithMembersRecord {

        return new ClassWithMembersRecord(
            ClassInfo.read(buffer),
            Int32Primitive.read(buffer),
        );
    }

}
