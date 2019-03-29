import { BufferReader } from "../BufferReader";

import { ArrayOfValueWithCode } from "../DataStructures/ArrayOfValueWithCode";
import { StringValueWithCode } from "../DataStructures/StringValueWithCode";

import { MessageFlagsEnumeration, MessageFlags } from "../Enumerations/MessageFlagsEnumeration";
import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";

export class BinaryMethodCallRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.MethodCall);

    constructor(
        public MessageEnum: MessageFlagsEnumeration,
        public MethodName: StringValueWithCode,
        public TypeName: StringValueWithCode,
        public CallContext: StringValueWithCode | null,
        public Args: ArrayOfValueWithCode | null,
    ) { }

    public static read(buffer: BufferReader): BinaryMethodCallRecord {

        const messageEnum = MessageFlagsEnumeration.read(buffer);
        const methodName = StringValueWithCode.read(buffer);
        const typeName = StringValueWithCode.read(buffer);

        let callContext: StringValueWithCode | null = null;
        if (messageEnum.Value & MessageFlags.ContextInline) {
            callContext = StringValueWithCode.read(buffer);
        }

        let args: ArrayOfValueWithCode | null = null;
        if (messageEnum.Value & MessageFlags.ArgsInline) {
            args = ArrayOfValueWithCode.read(buffer);
        }

        return new BinaryMethodCallRecord(messageEnum, methodName, typeName, callContext, args);

    }

}
