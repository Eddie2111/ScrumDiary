export type TTodo = {
    id: number
    title: string
    status: "To Do" | "In Progress" | "Done"
    description: string
    creationDate: string
}