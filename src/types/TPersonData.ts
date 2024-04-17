import { TSex } from "./TSex";
import { TDop } from "./TDop";

export type TPersonData = {
    name: string;
    age: number;
    sex: TSex;
    stage: number;
    profession: string;
    healf: string;
    phobie: string;
    baggage: string;
    haracter: string;
    hobby: string;
    pfact: string;
    nfact: string;
    dcard: TDop[]
}