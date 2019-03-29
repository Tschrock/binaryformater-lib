import { BufferReader } from "../BufferReader";

import { ArraySingleObjectRecord } from "../Records/ArraySingleObjectRecord";
import { ArraySinglePrimitiveRecord } from "../Records/ArraySinglePrimitiveRecord";
import { ArraySingleStringRecord } from "../Records/ArraySingleStringRecord";
import { BinaryArrayRecord } from "../Records/BinaryArrayRecord";
import { BinaryLibraryRecord } from "../Records/BinaryLibraryRecord";
import { BinaryMethodCallRecord } from "../Records/BinaryMethodCallRecord";
import { BinaryMethodReturnRecord } from "../Records/BinaryMethodReturnRecord";
import { BinaryObjectStringRecord } from "../Records/BinaryObjectStringRecord";
import { ClassWithIdRecord } from "../Records/ClassWithIdRecord";
import { ClassWithMembersAndTypesRecord } from "../Records/ClassWithMembersAndTypesRecord";
import { ClassWithMembersRecord } from "../Records/ClassWithMembersRecord";
import { MemberPrimitiveTypedRecord } from "../Records/MemberPrimitiveTypedRecord";
import { MemberPrimitiveUnTypedRecord } from "../Records/MemberPrimitiveUnTypedRecord";
import { MemberReferenceRecord } from "../Records/MemberReferenceRecord";
import { MessageEndRecord } from "../Records/MessageEndRecord";
import { ObjectNullMultiple256Record } from "../Records/ObjectNullMultiple256Record";
import { ObjectNullMultipleRecord } from "../Records/ObjectNullMultipleRecord";
import { ObjectNullRecord } from "../Records/ObjectNullRecord";
import { SerializationHeaderRecord } from "../Records/SerializationHeaderRecord";
import { SystemClassWithMembersAndTypesRecord } from "../Records/SystemClassWithMembersAndTypesRecord";
import { SystemClassWithMembersRecord } from "../Records/SystemClassWithMembersRecord";

export type IRecordType = SerializationHeaderRecord | ClassWithIdRecord | SystemClassWithMembersRecord | ClassWithMembersRecord
    | SystemClassWithMembersAndTypesRecord | ClassWithMembersAndTypesRecord | BinaryObjectStringRecord | BinaryArrayRecord
    | MemberPrimitiveTypedRecord | MemberPrimitiveUnTypedRecord | MemberReferenceRecord | ObjectNullRecord | MessageEndRecord | BinaryLibraryRecord
    | ObjectNullMultiple256Record | ObjectNullMultipleRecord | ArraySinglePrimitiveRecord | ArraySingleObjectRecord
    | ArraySingleStringRecord | BinaryMethodCallRecord | BinaryMethodReturnRecord;

export enum RecordType {
    SerializedStreamHeader = 0,
    ClassWithId = 1,
    SystemClassWithMembers = 2,
    ClassWithMembers = 3,
    SystemClassWithMembersAndTypes = 4,
    ClassWithMembersAndTypes = 5,
    BinaryObjectString = 6,
    BinaryArray = 7,
    MemberPrimitiveTyped = 8,
    MemberReference = 9,
    ObjectNull = 10,
    MessageEnd = 11,
    BinaryLibrary = 12,
    ObjectNullMultiple256 = 13,
    ObjectNullMultiple = 14,
    ArraySinglePrimitive = 15,
    ArraySingleObject = 16,
    ArraySingleString = 17,
    MethodCall = 21,
    MethodReturn = 22,
}

export class RecordTypeEnumeration {

    constructor(
        public Value: RecordType,
    ) { }

    public static read(buffer: BufferReader): RecordTypeEnumeration {
        return new RecordTypeEnumeration(buffer.readUInt8());
    }

    public static readRecordForType(buffer: BufferReader, recordType: RecordType) {
        switch (recordType) {
            case RecordType.SerializedStreamHeader: return SerializationHeaderRecord.read(buffer);
            case RecordType.ClassWithId: return ClassWithIdRecord.read(buffer);
            case RecordType.SystemClassWithMembers: return SystemClassWithMembersRecord.read(buffer);
            case RecordType.ClassWithMembers: return ClassWithMembersRecord.read(buffer);
            case RecordType.SystemClassWithMembersAndTypes: return SystemClassWithMembersAndTypesRecord.read(buffer);
            case RecordType.ClassWithMembersAndTypes: return ClassWithMembersAndTypesRecord.read(buffer);
            case RecordType.BinaryObjectString: return BinaryObjectStringRecord.read(buffer);
            case RecordType.BinaryArray: return BinaryArrayRecord.read(buffer);
            case RecordType.MemberPrimitiveTyped: return MemberPrimitiveTypedRecord.read(buffer);
            case RecordType.MemberReference: return MemberReferenceRecord.read(buffer);
            case RecordType.ObjectNull: return ObjectNullRecord.read(buffer);
            case RecordType.MessageEnd: return MessageEndRecord.read(buffer);
            case RecordType.BinaryLibrary: return BinaryLibraryRecord.read(buffer);
            case RecordType.ObjectNullMultiple256: return ObjectNullMultiple256Record.read(buffer);
            case RecordType.ObjectNullMultiple: return ObjectNullMultipleRecord.read(buffer);
            case RecordType.ArraySinglePrimitive: return ArraySinglePrimitiveRecord.read(buffer);
            case RecordType.ArraySingleObject: return ArraySingleObjectRecord.read(buffer);
            case RecordType.ArraySingleString: return ArraySingleStringRecord.read(buffer);
            case RecordType.MethodCall: return BinaryMethodCallRecord.read(buffer);
            case RecordType.MethodReturn: return BinaryMethodReturnRecord.read(buffer);
            default: throw Error(`Error reading record: Record Type ${recordType} does not exist or is not supported (at 0x${(buffer.CurrentIndex - 1).toString(16)}).`);
        }
    }

}
