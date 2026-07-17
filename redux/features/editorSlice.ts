import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditorState {
  code: string;
  output: string;
  error: string;
  lang:string
}

const initialState: EditorState = {
  code: "",
  output: "",
  error: "",
  lang:"javascript"
};

const editorSlice = createSlice({
  name: "editor",
  initialState,

  reducers: {
    setCode(state, action: PayloadAction<string>) {
      state.code = action.payload;
    },

    setOutput(state, action: PayloadAction<string>) {
      state.output = action.payload;
    },

    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setLang(state, action: PayloadAction<string>) {
      state.lang = action.payload;
    },
  },
});

export const { setCode, setOutput, setError, setLang } = editorSlice.actions;

export default editorSlice.reducer;
