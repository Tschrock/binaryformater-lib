import { BufferReader } from "../BufferReader";

export class NullPrimitive {

    constructor(
    ) { };
    
    public static read(buffer: BufferReader) {
        return new NullPrimitive();
    }

}