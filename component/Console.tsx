
"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Console({ language, editorRef }: { language: string, editorRef: React.RefObject<any> }) {
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

                    <pre className="text-green-400 whitespace-pre-wrap">
                        {output || "No Output"}
                    </pre>

                )}

            </div>

        </div>

    )

}