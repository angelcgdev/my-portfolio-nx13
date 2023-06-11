import { Locale } from "../../i18n-config";

export type Response<T = undefined> = T extends undefined ? {
    error?: string;
    data?: T
}:{
    message?: string | null;
    data: T;
};


export interface CommonParams {
    lang: Locale
}

export interface Context<T = CommonParams> {
    params: T
}