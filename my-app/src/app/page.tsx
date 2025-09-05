import Link from "next/link";

export default function Home(){
    return (
        <>
        <h1>Home Page</h1>
        <Link href="/products">Products Tab</Link>
        <Link href="/articles/my-first-article-123?lang=en">Article English</Link>
        <Link href="/articles/my-first-article-123?lang=fr">Article French</Link>
        <br></br>
        
        <Link href="/dashboard">Dashboard Tab</Link>
        </>
    ) 
}