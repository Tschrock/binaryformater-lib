import { BufferReader } from "../BufferReader";
import { Sequence } from "./Sequence";

import { Int32Primitive } from "../PrimitiveTypes/Int32Primitive";
import { LengthPrefixedString } from "../PrimitiveTypes/LengthPrefixedString";

export class ClassInfo {

    constructor(
        public ObjectId: Int32Primitive,
        public Name: LengthPrefixedString,
        public MemberCount: Int32Primitive,
        public MemberNames: Sequence<LengthPrefixedString>,
    ) { }

    public static read(buffer: BufferReader): ClassInfo {

        const id = Int32Primitive.read(buffer);
        const name = LengthPrefixedString.read(buffer);
        const memberCount = Int32Primitive.read(buffer);
        const memberNames = Sequence.read(buffer, LengthPrefixedString.read, memberCount.Value);

        return new ClassInfo(id, name, memberCount, memberNames);

    }

}
