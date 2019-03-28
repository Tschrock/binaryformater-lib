import { BinaryTypeEnumeration, BinaryType } from "../Enumerations/BinaryTypeEnumeration";
import { PrimitiveTypeEnumeration } from "../Enumerations/PrimitiveTypeEnumeration";
import { LengthPrefixedString } from "../PrimitiveTypes/LengthPrefixedString";
import { BufferReader } from "../BufferReader";
import { Sequence } from "./Sequence";
import { ClassTypeInfo } from "./ClassTypeInfo";

export class MemberTypeInfo {

    constructor(
        public BinaryTypeEnums: Sequence<BinaryTypeEnumeration>,
        public AdditionalInfos: Array<PrimitiveTypeEnumeration | LengthPrefixedString | ClassTypeInfo>
    ) { };

    public static read(buffer: BufferReader, memberCount: number): MemberTypeInfo {
        const binaryTypeEnums = Sequence.read(buffer, BinaryTypeEnumeration.read, memberCount);

        const additionalInfos: Array<PrimitiveTypeEnumeration | LengthPrefixedString | ClassTypeInfo> = [];

        for (const typeEnum of binaryTypeEnums.Values) {

            switch (typeEnum.Value) {

                case BinaryType.Primitive:
                case BinaryType.PrimitiveArray:
                
                    additionalInfos.push(PrimitiveTypeEnumeration.read(buffer));
                    break;
                
                case BinaryType.SystemClass:
                
                    additionalInfos.push(LengthPrefixedString.read(buffer));
                    break;
                
                case BinaryType.Class:
                
                    additionalInfos.push(ClassTypeInfo.read(buffer));
                    break;

                default:
                    break;
            }
            
        }

        return new MemberTypeInfo(binaryTypeEnums, additionalInfos);
    }

}