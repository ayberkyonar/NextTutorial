import Notifications from "./@notifications/page";
import RevenueMetrics from "./@revenue/page";
import UsersAnalytics from "./@users/page";

export default function ComplexDashboardPage({
    children,
    users,
    revenue,
    notifications
}: { 
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
}) {
    return (
        <>
        <div>{children}</div>
        <div style={{display: "flex", flexDirection: "column"}}>
            <div>{users}</div>
            <div>{revenue}</div>
        </div>
        <div style={{display: "flex", flex: 1}}>{notifications}</div>
        
        {/* <UsersAnalytics/>
        <RevenueMetrics/>
        <Notifications/> */}
        </>
    )
}