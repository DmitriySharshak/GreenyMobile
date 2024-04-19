export interface IUser {
    id: number,
    firstName:string,
    lastName: string,
    middleName: string,
    email: string,
    isAdmin: boolean,
}

export interface IUserRegister {
    firstName:string,
    lastName: string,
    middleName: string,
    email: string,
    password: string,
    phoneNumber: string,
    address: string,
}

export interface IAuthResponse {
	user: IUser
}

export interface IAuthFormData {
    login: string,
    password: string
}

//export interface IAuthFormData extends Pick<IUser, 'phoneNumber' | 'password'> {}