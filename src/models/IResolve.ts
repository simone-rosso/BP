export interface IResolve {
    data: any[],
    meta: IResMeta
}

export interface IResMeta {
    criteria: any,
    page: number,
    limit: number,
    pages: number,
    count: number
}