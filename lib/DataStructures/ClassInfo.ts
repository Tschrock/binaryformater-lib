import { BufferReader } from "../BufferReader";
import { INT32 } from "../PrimitiveTypes/INT32";
import { LengthPrefixedString } from "./LengthPrefixedString";
import { Sequence } from "./Sequence";

export class ClassInfo {

    constructor(
        public ObjectId: INT32,
        public Name: LengthPrefixedString,
        public MemberCount: INT32,
        public MemberNames: Sequence<LengthPrefixedString>
    ) { }

    public static read(reader: BufferReader): ClassInfo {

        const id = INT32.read(reader);
        const name = LengthPrefixedString.read(reader);
        const memberCount = INT32.read(reader);
        const memberNames = Sequence.read(reader, LengthPrefixedString.read, memberCount.Value);

        return new ClassInfo(id, name, memberCount, memberNames);

    }
}