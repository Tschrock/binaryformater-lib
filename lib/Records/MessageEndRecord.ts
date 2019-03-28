import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";
import { BufferReader } from "../BufferReader";

export class MessageEndRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.MessageEnd);

    constructor(
    ) { };

    static read(buffer: BufferReader) {
        return new MessageEndRecord();
    }
}