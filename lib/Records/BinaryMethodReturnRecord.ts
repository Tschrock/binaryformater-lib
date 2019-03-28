import { BufferReader } from "../BufferReader";
import { RecordTypeEnumeration, RecordType } from "../Enumerations/RecordTypeEnumeration";
import { MessageFlagsEnumeration, MessageFlags } from "../Enumerations/MessageFlagsEnumeration";
import { ValueWithCode } from "../DataStructures/ValueWithCode";
import { StringValueWithCode } from "../DataStructures/StringValueWithCode";
import { ArrayOfValueWithCode } from "../DataStructures/ArrayOfValueWithCode";

export class BinaryMethodReturnRecord {
    public readonly RecordTypeEnum: RecordTypeEnumeration = new RecordTypeEnumeration(RecordType.MethodReturn);

    constructor(
        public MessageEnum: MessageFlagsEnumeration,
        public ReturnValue: ValueWithCode | null,
        public CallContext: StringValueWithCode | null,
        public Args: ArrayOfValueWithCode | null
    ) { };

    public static read(buffer: BufferReader): BinaryMethodReturnRecord {

        const messageEnum = MessageFlagsEnumeration.read(buffer);

        let returnValue: ValueWithCode | null = null;
        if(messageEnum.Value & MessageFlags.ReturnValueInline) {
            returnValue = ValueWithCode.read(buffer);
        }

        let callContext: StringValueWithCode | null = null;
        if(messageEnum.Value & MessageFlags.ContextInline) {
            callContext = StringValueWithCode.read(buffer);
        }

        let args: ArrayOfValueWithCode | null = null;
        if(messageEnum.Value & MessageFlags.ArgsInline) {
            args = ArrayOfValueWithCode.read(buffer);
        }

        return new BinaryMethodReturnRecord(messageEnum, returnValue, callContext, args);

    }

}