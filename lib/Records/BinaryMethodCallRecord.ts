import { BufferReader } from "../BufferReader";
import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";
import { MessageFlagsEnumeration, MessageFlags } from "../Enumerations/MessageFlagsEnumeration";
import { StringValueWithCode } from "../DataStructures/StringValueWithCode";
import { ArrayOfValueWithCode } from "../DataStructures/ArrayOfValueWithCode";

export class BinaryMethodCallRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.MethodCall);

    constructor(
        public MessageEnum: MessageFlagsEnumeration,
        public MethodName: StringValueWithCode,
        public TypeName: StringValueWithCode,
        public CallContext: StringValueWithCode | null,
        public Args: ArrayOfValueWithCode | null
    ) { };

    public static read(reader: BufferReader): BinaryMethodCallRecord {

        const messageEnum = MessageFlagsEnumeration.read(reader);
        const methodName = StringValueWithCode.read(reader);
        const typeName = StringValueWithCode.read(reader);

        let callContext: StringValueWithCode | null = null;
        if(messageEnum.Value & MessageFlags.ContextInline) {
            callContext = StringValueWithCode.read(reader);
        }

        let args: ArrayOfValueWithCode | null = null;
        if(messageEnum.Value & MessageFlags.ArgsInline) {
            callContext = StringValueWithCode.read(reader);
        }

        return new BinaryMethodCallRecord(messageEnum, methodName, typeName, callContext, args);

    }

}