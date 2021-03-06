import { BufferReader } from "../BufferReader";

const LENGTH_BYTEMASK = 127; // 00000000 00000000 00000000 01111111
const LENGTH_INDICATOR_BYTEMASK = 128; // 00000000 00000000 00000000 10000000

export class LengthPrefixedString {

    constructor(
        public Value: string,
    ) { }

    public static read(buffer: BufferReader): LengthPrefixedString {

        let lengthValue = 0;

        // The length can be up to 5 bytes long
        for (let i = 0; i < 5; i++) {

            // Read the next Byte off the buffer
            const currentByte = buffer.readUInt8();

            // The first 7 bits are the value to be added to our length
            const currentByteValue = currentByte & LENGTH_BYTEMASK;

            // Align the value so it can be added to the length
            const currentByteValueAlligned = currentByteValue << (i * 7);

            // Add it to our length
            lengthValue = lengthValue | currentByteValueAlligned;

            // The last bit is the indicator that the length continues in the next byte
            const nextByteIndicator = currentByte & LENGTH_INDICATOR_BYTEMASK;

            // If we don't have a next byte, break out
            if (!nextByteIndicator) break;

        }

        return new LengthPrefixedString(buffer.readString("utf8", lengthValue));

    }
}
