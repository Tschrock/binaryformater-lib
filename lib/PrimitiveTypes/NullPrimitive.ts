import { BufferReader } from "../BufferReader";

export class NullPrimitive {

    public static read(buffer: BufferReader) {
        return new NullPrimitive();
    }

}
