interface ITodo {
    id?: number;
    text: string;
}

interface IErrorProps {
    message: string;
    status?: boolean;
}

export type {
    ITodo,
    IErrorProps
}