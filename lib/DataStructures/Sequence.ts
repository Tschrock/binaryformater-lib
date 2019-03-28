import { BufferReader } from "../BufferReader";

export class Sequence<T> {

    constructor(
        public Values: T[]
    ) { };

    public static read<T>(buffer: BufferReader, valueReader: (buffer: BufferReader) => T, count: number): Sequence<T> {

        let values: T[] = [];
        for (let i = 0; i < count; ++i) {
            values.push(valueReader(buffer));
        }

        return new Sequence(values);

    }
}