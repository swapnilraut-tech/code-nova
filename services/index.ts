import { items } from "@/constant/data";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001",
});

// export const executeCode = async(language:string  , sourceCode:any) => {
// const res  = await apiClient.post("/execute",{
//   "language": language,
//   "version": items[language as keyof typeof items],
//   "files": [
//     {
//       "name": "my_cool_code.js",
//       "content":sourceCode
//     }
//   ],
// })
// }
export interface SourceCode {
  sourceCode: string;
  language: number;
}
interface ConsoleResponse {
  id: number;
  status: string;
}
export const createConsole = async(data:SourceCode):Promise<any>=>{
  try {
    const res = await apiClient.post(
      "/api/console",
      JSON.stringify(data),
    );
    return res
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }

    throw error;
  }
}

