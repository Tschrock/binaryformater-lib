import { BufferReader } from "../BufferReader";

export class SinglePrimitive {

    constructor(
        public Value: number,
    ) { }

    public static read(buffer: BufferReader) {
        return new SinglePrimitive(buffer.readFloatLE());
    }

}
