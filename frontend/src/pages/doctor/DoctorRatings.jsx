export default function RatingsPage() {
    const reviews = [
        {
            id: 1,
            description:
                "Dr. Patel truly changed my life. I came in feeling hopeless after months of misdiagnoses, and she listened carefully, explained everything with patience, and got me the right treatment. I'm now finally on the path to healing. Thank you for your compassion and brilliance.",
        },
        {
            id: 2,
            description:
                "Very professional, knowledgeable, and kind. The appointment was on time, and all my concerns were addressed. Highly recommend!",
        },
        {
            id: 3,
            description:
                "I appreciated the thoroughness of the examination. It's clear Dr. Patel has a lot of experience, though the interaction felt more clinical than personal. Some people may prefer that style.",
        },
        {
            id: 4,
            description:
                "It took a little while to feel comfortable, but by the end of the visit I felt more informed. Not every part of the experience went smoothly, but I believe Dr. Patel had good intentions throughout.",
        },
        {
            id: 5,
            description:
                "Excellent bedside manner and very thorough in explaining the diagnosis and treatment options. Dr. Patel made me feel at ease during a stressful time.",
        },
        {
            id: 6,
            description:
                "The wait time was longer than expected, but the quality of care made up for it. Dr. Patel is clearly dedicated to her patients' wellbeing.",
        },
    ]

    return (
        <div className="homepage-root">
            {/* Header */}
            <header className="homepage-header">
                <div className="homepage-logo">
                    <img src="/MediLink.png" alt="MediLink Logo" className="homepage-logo-img" />
                    <span className="homepage-logo-text">MEDILINK</span>
                </div>

                <nav className="homepage-nav">
                    <a href="#">Home</a>
                    <a href="#">Manage appointments</a>
                    <a href="#">Patient records</a>
                    <a href="#" style={{ color: "#222", fontWeight: "600" }}>
                        Monitor ratings
                    </a>
                    <a href="#">About</a>
                </nav>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <button
                        style={{
                            background: "transparent",
                            color: "#222",
                            border: "1px solid #ddd",
                            padding: "10px 20px",
                            fontSize: "0.9rem",
                        }}
                    >
                        Profile
                    </button>
                    <button className="homepage-login-btn">Logout</button>
                    <div style={{ width: "20px", height: "20px", color: "#666" }}>⚙</div>
                </div>
            </header>

            {/* Main Content */}
            <main
                style={{
                    maxWidth: "1000px",
                    margin: "0 auto",
                    padding: "48px 32px",
                }}
            >
                {/* Ratings Header */}
                <div style={{ marginBottom: "32px" }}>
                    <h1
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: "bold",
                            color: "#222",
                            marginBottom: "24px",
                        }}
                    >
                        RATINGS
                    </h1>

                    <div
                        style={{
                            display: "flex",
                            gap: "16px",
                            marginBottom: "32px",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "#2196f3",
                                color: "white",
                                padding: "24px",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                minWidth: "180px",
                            }}
                        >
                            <div style={{ fontSize: "32px" }}>⭐</div>
                            <div>
                                <p style={{ fontSize: "0.9rem", opacity: "0.9", margin: "0" }}>Patient Rating</p>
                                <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "0" }}>4.8</p>
                            </div>
                        </div>

                        <div
                            style={{
                                backgroundColor: "#2196f3",
                                color: "white",
                                padding: "24px",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                minWidth: "180px",
                            }}
                        >
                            <div style={{ fontSize: "32px" }}>📈</div>
                            <div>
                                <p style={{ fontSize: "0.9rem", opacity: "0.9", margin: "0" }}>Reviews</p>
                                <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "0" }}>379</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div>
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: "bold",
                            color: "#222",
                            marginBottom: "24px",
                        }}
                    >
                        REVIEWS
                    </h2>

                    {/* Scrollable Reviews Container */}
                    <div
                        style={{
                            border: "2px solid #ddd",
                            borderRadius: "16px",
                            padding: "24px",
                            backgroundColor: "white",
                        }}
                    >
                        <div
                            style={{
                                height: "400px",
                                overflowY: "auto",
                                paddingRight: "8px",
                            }}
                        >
                            {reviews.map((review) => (
                                <div
                                    key={review.id}
                                    style={{
                                        border: "1px solid #e5e7eb",
                                        borderRadius: "8px",
                                        padding: "16px",
                                        marginBottom: "16px",
                                        backgroundColor: "#fafafa",
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: "0.9rem",
                                            fontWeight: "600",
                                            color: "#374151",
                                            marginBottom: "8px",
                                        }}
                                    >
                                        Description
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "0.9rem",
                                            color: "#6b7280",
                                            lineHeight: "1.5",
                                            margin: "0",
                                        }}
                                    >
                                        {review.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}