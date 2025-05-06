import { handleCallback } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return handleCallback(request);
}
