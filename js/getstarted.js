document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("waiting-list-form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const role = document.getElementById("role").value;
        const location = document.getElementById("location").value;
        const insights = document.getElementById("insights").value;

        if (fullName && email && role && location) {
            const userData = { fullName, email, role, location, insights };

            try {
                const response = await fetch("https://engin-backend.onrender.com/api/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(userData),
                });

                if (response.ok) {
                    window.location.href = "success.html";  // Ensure correct path
                } else {
                    alert("Registration failed. Please try again.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Failed to connect to the server.");
            }
        } else {
            alert("Please fill out all required fields.");
        }
    });
});
