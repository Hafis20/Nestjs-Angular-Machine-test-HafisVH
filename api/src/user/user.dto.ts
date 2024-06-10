export interface UserObj {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
}

export interface UpdateUserObj extends UserObj {
    _id: string;
}

export interface UserIdObj {
    _id: string;
}