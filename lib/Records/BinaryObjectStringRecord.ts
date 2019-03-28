import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";
import { BufferReader } from "../BufferReader";

export class BinaryObjectStringRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration( RecordType.BinaryObjectString );

    constructor(
    ) { };

    static read(buffer: BufferReader) {

        // TODO: impliment BinaryObjectStringRecord

    }
}