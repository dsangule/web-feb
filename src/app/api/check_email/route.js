import { db } from "@/lib/db";

export async function POST(req) {
  if (req.method !== "POST") {
    return;
  }

  const { email } = await req.json();

  const query = `SELECT email FROM users WHERE email="${email}"`;
  const values = [ email ];

  const data = await db({ query: query, values: values });

  const success = data.length ? '1' : '0';
  return Response.json({success: success});
}
