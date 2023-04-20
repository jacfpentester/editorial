

export interface Empleado {
    id?: number;
    fullName: string;
    email: string;
    password: string;
    isActive?: boolean;
    token?: string;
    roles?: string[]
}

