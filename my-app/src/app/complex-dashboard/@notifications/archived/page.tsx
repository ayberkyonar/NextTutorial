import { Card } from "@/components/card"
import Link from "next/link"

export default function ArchivedNotifications() {
    return (
    <>
    <Card>
        <div>ArchivedNotifications</div>
        <div>
            <Link href="/complex-dashboard">Default</Link>
        </div>
    </Card>
    </>

    )
}