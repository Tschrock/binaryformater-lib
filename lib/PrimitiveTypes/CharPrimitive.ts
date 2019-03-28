import { BufferReader } from "../BufferReader";

export class CharPrimitive {

    constructor(
        public Value: string
    ) { };

    public static read(buffer: BufferReader) {

        // UTF-8 characters can have a variable number of bytes:
        //   0xxxxxxx
        //   110xxxxx 10xxxxxx
        //   1110xxxx 10xxxxxx 10xxxxxx
        //   11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

        let firstByte = buffer.readUInt8();
        let valueCharCode = firstByte;

        if (firstByte & 0b10000000) { // First bit is set, so this is probably a multi-byte character

            if (firstByte & 0b01000000) { // Second bit is set, so at least 2 bytes

                let secondByte = buffer.readUInt8();

                if((secondByte & 0b10000000) && (~secondByte & 0b010000000)) { // Second byte isn't a continuation byte
                    throw new Error(`Error reading character at ${(buffer.CurrentIndex - 2).toString(16)}: Byte 2 (${secondByte.toString(16)}: ${secondByte.toString(2)}) is not a valid UTF-8 continuation byte.`);
                }

                valueCharCode = (valueCharCode << 8) & secondByte;

                if (firstByte & 0b00100000) { // Third bit is set, so at least 3 bytes

                    let thirdByte = buffer.readUInt8();

                    if((thirdByte & 0b10000000) && (~thirdByte & 0b010000000)) { // Third byte isn't a continuation byte
                        throw new Error(`Error reading character at ${(buffer.CurrentIndex - 3).toString(16)}: Byte 3 (${thirdByte.toString(16)}: ${thirdByte.toString(2)}) is not a valid UTF-8 continuation byte.`);
                    }

                    valueCharCode = (valueCharCode << 8) & thirdByte;

                    if (firstByte & 0b00010000) { // Forth bit is set, so at least 4 bytes
                
                        let fourthByte = buffer.readUInt8();

                        if((fourthByte & 0b10000000) && (~fourthByte & 0b010000000)) { // Fourth byte isn't a continuation byte
                            throw new Error(`Error reading character at ${(buffer.CurrentIndex - 3).toString(16)}: Byte 4 (${fourthByte.toString(16)}: ${fourthByte.toString(2)}) is not a valid UTF-8 continuation byte.`);
                        }
    
                        valueCharCode = (valueCharCode << 8) & fourthByte;

                        if (firstByte & 0b00001000) { // Fifth bit is set, that's invalid
                            throw new Error(`Error reading character at ${(buffer.CurrentIndex - 4).toString(16)}: Byte 1 (${firstByte.toString(16)}: ${firstByte.toString(2)}) is not a valid UTF-8 start byte.`);
                        }

                    }

                }

            }
            else { // Oops, that's a continuation byte, not a start byte
                throw new Error(`Error reading character at ${(buffer.CurrentIndex - 1).toString(16)}: ${firstByte.toString(16)} is not a valid UTF-8 start byte (It looks like it's a continuation byte?).`);
            }

        }

        return new CharPrimitive(String.fromCharCode(valueCharCode));

    }

}