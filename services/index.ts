import { items } from "@/constant/data";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async(language:string  , sourceCode:any) => {
const res  = await apiClient.post("/execute",{
  "language": language,
  "version": items[language as keyof typeof items],
  "files": [
    {
      "name": "my_cool_code.js",
      "content":sourceCode
    }
  ],
})
}