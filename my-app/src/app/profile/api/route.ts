import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
    // const requestHeaders = new Headers(request.headers)
    // console.log(requestHeaders.get("Authorization"))

    const headersList = await headers();
    console.log(headersList.get("authorization"))

    const theme = request.cookies.get("theme")
    console.log(theme);

    const cookieStore = await cookies()
    cookieStore.set("resultsPerPage", "20")

    return new Response("Profile API data", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark",
        }
    });
}

