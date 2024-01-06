import { NextResponse } from "next/server";
export async function POST(request) {
        
        const requestBody = await request.json();
        
        const cohereResponse = await fetch(
            "https://api.cohere.ai/v1/classify",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: "embed-multilingual-v2.0",
                    inputs: [requestBody.question],
                    examples: JSON.parse(process.env.EXAMPLES),
                }),
            }
        );

        const { classifications } = await cohereResponse.json();

        return NextResponse.json(classifications);
}

