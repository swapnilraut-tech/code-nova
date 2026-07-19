import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sourceCode, language } = body;
    const res = await axios.post(
      "http://localhost:3000/submissions",
      {
        source_code: sourceCode,
        language_id: language,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": "dev-token",
        },
      },
    );
    return NextResponse.json(res.data);
  } catch (error: any) {
    console.error(error, "==================error while calling codeBox submissions API");
    return NextResponse.json(
      {
        error: error?.response?.data || error?.message || "Internal Server Error",
      },
      {
        status: error?.response?.status || 500,
      }
    );
  }
}