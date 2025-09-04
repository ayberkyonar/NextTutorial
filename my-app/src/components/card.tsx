export const Card = ({ children } : { children: React.ReactNode }) => {
    const cardStyle = {
        border: "1px solid #eee",
        borderRadius: "4px",
        padding: "16px",
        margin: "16px 0",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    };

    return (
        <div className="card" style={cardStyle}>
            {children}
        </div>
    )
}