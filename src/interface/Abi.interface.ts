export interface Abi {
    anonymous: boolean;
    inputs?: (InputsEntity)[] | null;
    name: string;
    type: string;
}
export interface InputsEntity {
    indexed: boolean;
    internalType: string;
    name: string;
    type: string;
}
