export type Response<T = undefined> = T extends undefined ? {
    message?: string;
    data?: T
}:{
    message?: string;
    data: T;
};