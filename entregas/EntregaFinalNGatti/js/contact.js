document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const commentType = document.getElementById("commentType").value;
        const comments = document.getElementById("comments").value.trim();

        if (validateForm(name, email, comments)) {
            alert(`Form submitted successfully!\n\nName: ${name}\nEmail: ${email}\nType: ${commentType}\nComments: ${comments}`);
        }
    });

    function validateForm(name, email, comments) {
        if (name === "") {
            alert("Name is required.");
            return false;
        }
        if (email === "" || !isValidEmail(email)) {
            alert("A valid email is required.");
            return false;
        }
        if (comments === "") {
            alert("Comments are required.");
            return false;
        }
        return true;
    }

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }
});
