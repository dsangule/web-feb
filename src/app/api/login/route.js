import { db } from "@/lib/db";

export async function POST(req) {

    if(req.method !== 'POST'){
        return;
    }

    const { username=null, password=null } = req.body

    const query = `SELECT * FROM users WHERE username = "${username}" and password = "${password}"`;
    const values = [ username, password ];

    const data = await db({query: query, values: values});
    const success = data.length ? '1' : '0';
    
    return Response.json({success: success});
}