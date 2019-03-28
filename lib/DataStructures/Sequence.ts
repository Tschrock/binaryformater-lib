import { BufferReader } from "../BufferReader";

export class Sequence<T> {

    constructor(
        public Values: T[]
    ) { };

    public static read<T>(reader: BufferReader, valueReader: (reader: BufferReader) => T, count: number): Sequence<T> {

        let values: T[] = [];
        for (let i = 0; i < count; ++i) {
            values.push(valueReader(reader));
        }

        return new Sequence(values);

    }
}