import { db } from "@/lib/db";

export async function POST(req) {
  if (req.method !== "POST") {
    return;
  }

  console.log("____________________________");

  const { username } = await req.json();

  const query = `SELECT username FROM users WHERE username="${username}"`;

  const values = [ username ];
  const data = await db({ query: query, values: values });

  const success = data.length ? '1' : '0';
  return Response.json({success: success});
}
