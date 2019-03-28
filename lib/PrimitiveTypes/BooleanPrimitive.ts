import { BufferReader } from "../BufferReader";

export class BooleanPrimitive {

    constructor(
        public Value: boolean
    ) { };
    
    public static read(buffer: BufferReader) {
        return new BooleanPrimitive(buffer.readUInt8() == 0);
    }

}