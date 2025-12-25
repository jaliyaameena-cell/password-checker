function checkStrength() {
    const password = document.getElementById("passwordInput").value;
    const progress = document.getElementById("strengthProgress");
    const text = document.getElementById("strengthText");

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;

    if (password.length === 0) {
        progress.style.width = "0%";
        text.textContent = "Strength: —";
        return;
    }

    if (strength <= 1) {
        progress.style.width = "25%";
        progress.style.backgroundColor = "#ff4d4d";
        text.textContent = "Strength: Weak ❄️";
    }
    else if (strength === 2 || strength === 3) {
        progress.style.width = "60%";
        progress.style.backgroundColor = "#ffd633";
        text.textContent = "Strength: Medium 🎅";
    }
    else {
        progress.style.width = "100%";
        progress.style.backgroundColor = "#33cc33";
        text.textContent = "Strength: Strong 🎄";
    }
}
