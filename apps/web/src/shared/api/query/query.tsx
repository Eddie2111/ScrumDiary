// import axios from 'axios';
// import { ITodo, IErrorProps } from "@/types/interfaces";

// class Queries {
//     private APIEndpoints = "http://localhost:5000/api/v1/todo";

//     async createTodo(data: ITodo) {
//         try {
//             const response = await axios.post(this.APIEndpoints, data);
//             return { message: "Todo created", status: true, data: response.data };
//         } catch (err: unknown) {
//             const errors = err as IErrorProps;
//             return { message: errors.message, status: false };
//         }
//     }

//     async getTodos() {
//         try {
//             const response = await axios.get(this.APIEndpoints);
//             return { message: "Todos retrieved", status: true, data: response.data };
//         } catch (err: unknown) {
//             const errors = err as IErrorProps;
//             return { message: errors.message, status: false };
//         }
//     }

//     async updateTodo(id: number, data: ITodo) {
//         try {
//             const response = await axios.put(`${this.APIEndpoints}/${id}`, data);
//             return { message: "Todo updated", status: true, data: response.data };
//         } catch (err: unknown) {
//             const errors = err as IErrorProps;
//             return { message: errors.message, status: false };
//         }
//     }

//     async deleteTodo(id: number) {
//         try {
//             await axios.delete(`${this.APIEndpoints}/${id}`);
//             return { message: "Todo deleted", status: true };
//         } catch (err: unknown) {
//             const errors = err as IErrorProps;
//             return { message: errors.message, status: false };
//         }
//     }
// }

// const query = new Queries();

// export default query;
