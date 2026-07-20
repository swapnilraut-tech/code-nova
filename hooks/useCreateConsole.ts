import { createConsole, SourceCode } from "@/services";
import { useMutation } from "@tanstack/react-query"

export const useCreateConsole = ()=>{
    return useMutation({
      mutationFn:(data:SourceCode) => createConsole(data)
    });
}