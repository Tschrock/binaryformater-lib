import { BufferReader } from "../BufferReader";

export class DoublePrimitive {

    constructor(
        public Value: number
    ) { };

    public static read(buffer: BufferReader) {
        return new DoublePrimitive(buffer.readDoubleLE());
    }

}
