import { db } from "@/lib/db";

export async function POST(req) {
  if (req.method !== "POST") {
    return;
  }

  const { first_name, last_name, username, email, password } = await req.json();

  // only insert the value if username doesn't already exist
  const query = `INSERT INTO users (first_name, last_name, username, email, password) SELECT * from ( SELECT "${first_name}" AS first_name , "${last_name}" AS last_name, "${username}" AS username, "${email}" AS email, "${password}" AS password) AS temp WHERE NOT EXISTS (SELECT * FROM users WHERE username="${username}")`;

  const values = [first_name, last_name, username, email, password];
  const data = await db({ query: query, values: values });

  return Response.json({success: data.affectedRows});
}
