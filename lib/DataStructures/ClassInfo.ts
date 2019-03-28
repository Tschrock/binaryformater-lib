import { BufferReader } from "../BufferReader";
import { Int32Primitive } from "../PrimitiveTypes/Int32Primitive";
import { LengthPrefixedString } from "../PrimitiveTypes/LengthPrefixedString";
import { Sequence } from "./Sequence";

export class ClassInfo {

    constructor(
        public ObjectId: Int32Primitive,
        public Name: LengthPrefixedString,
        public MemberCount: Int32Primitive,
        public MemberNames: Sequence<LengthPrefixedString>
    ) { }

    public static read(reader: BufferReader): ClassInfo {

        const id = Int32Primitive.read(reader);
        const name = LengthPrefixedString.read(reader);
        const memberCount = Int32Primitive.read(reader);
        const memberNames = Sequence.read(reader, LengthPrefixedString.read, memberCount.Value);

        return new ClassInfo(id, name, memberCount, memberNames);

    }
}