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
            
            // Show loading indicator
            const submitBtn = document.querySelector(".submit-btn");
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = "Submitting...";
            submitBtn.disabled = true;

            try {
                // Update to use your render.com URL
                const response = await fetch("https://engin-backend-wy7x.onrender.com/api/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(userData),
                });

                const data = await response.json();

                if (response.ok) {
                    window.location.href = "success.html";  // Ensure correct path
                } else {
                    alert(`Registration failed: ${data.error || "Please try again."}`);
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Failed to connect to the server. Please try again later.");
            } finally {
                // Reset button state
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        } else {
            alert("Please fill out all required fields.");
        }
    });
});