export interface IUserInfo {
    _id: string,
    name: string,
    email: string
}

export interface IImageInfo {
    _id: string,
    filetype: string,
    date: Date,
    mimetype: string,
    uri: string,
    createdAt: Date,
    type: string,
    results: IResultInfo[],
    deleted: boolean
}

export interface IResultInfo {
    _id: string,
    uri: string,
    result_id: number | null,
    processed: boolean,
    external_id: number | null
}

export default interface ISampleModel {
    _id: string,
    updateAt: Date,
    reference: string,
    type: string,
    user: IUserInfo,
    createdAt: Date,
    deleted: boolean,
    gpo: string,
    timetable: number[],
    images: IImageInfo[],
    result: any[],
    state: string,
    result_type: string
}