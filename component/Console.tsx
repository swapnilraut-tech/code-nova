
"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
export interface ConsoleResponse {
    data: {
        token: string;
        source_code: string;
        language_id: number;
        stdin: string;
        expected_output: string | null;
        stdout: string | null;
        stderr: string | null;
        compile_output: string | null;
        message: string | null;
        created_at: string;
        finished_at: string;
        time: string;
        wall_time: string;
        memory: number | null;
        exit_code: number;
        exit_signal: string | null;
    }
}
export default function Console({ data, ispending, language, editorRef }: { language: string, ispending: boolean, editorRef: React.RefObject<any>, data: ConsoleResponse }) {
    const output = useSelector(
        (state: RootState) => state.editor.output
    );

    const error = useSelector(
        (state: RootState) => state.editor.error
    );
    
    return (

        <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950">

            <div className="border-b border-zinc-800 px-4 py-3">

                <h2 className="font-semibold text-white">
                    Console
                </h2>

            </div>

            <div className="p-4">

                {error ? (

                    <pre className="text-red-500 whitespace-pre-wrap">
                        {error}
                    </pre>

                ) : (

                        <pre className={`${data?.data.stderr ? "text-red-400" :"text-green-400"} whitespace-pre-wrap`}>
                            {data?.data.stderr ? data?.data.stderr : data ? data.data.stdout : ispending ? "Running..." : "no output"}
                    </pre>

                )}

            </div>
        </div>

    )

}