export interface OuvertureTarifInterface {
    ouverturetitle: string;
    ouverture: OuvertureInterface[];
    tariftitle: string;
    tarif: TarifInterface[];
}

export interface OuvertureInterface {
    key: string;
    value: string;
}

export interface TarifInterface {
    key: string;
    value: string;
}