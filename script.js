function calculateAge() {
    const today = new Date();
    const birthdateInput = document.getElementById("birthdate").value.trim();
    const birthdateParts = birthdateInput.split("-");
    
    if (birthdateParts.length !== 3) {
        alert("Invalid Date Format: Please enter a valid date in DD-MM-YYYY format.");
        return;
    }

    const birthDay = parseInt(birthdateParts[0]);
    const birthMonth = parseInt(birthdateParts[1]) - 1; // Month is 0-based
    const birthYear = parseInt(birthdateParts[2]);
    const birthDate = new Date(birthYear, birthMonth, birthDay);

    const isValidDate = (date) => {
        return date instanceof Date && !isNaN(date);
    };

    if (!isValidDate(birthDate)) {
        alert("Invalid Date: Please ensure the date exists in the DD-MM-YYYY format.");
        return;
    }

    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.436875);
    const ageInYears = Math.floor(ageInDays / 365.35);

    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");
    result.innerHTML = `
        <div class="result-item">
            <h3>Age:</h3>
            <p>${ageInYears} Years, ${ageInMonths % 12} Months, ${ageInDays % 30} Days</p>
        </div>
        <div class="result-item">
            <h3>Months Passed:</h3>
            <p>${ageInMonths}</p>
        </div>
        <div class="result-item">
            <h3>Weeks Passed:</h3>
            <p>${ageInWeeks}</p>
        </div>
        <div class="result-item">
            <h3>Days Passed:</h3>
            <p>${ageInDays}</p>
        </div>
        <div class="result-item">
            <h3>Hours Passed:</h3>
            <p>${ageInHours}</p>
        </div>
        <div class="result-item">
            <h3>Minutes Passed:</h3>
            <p>${ageInMinutes}</p>
        </div>
        <div class="result-item">
            <h3>Seconds Passed:</h3>
            <p>${ageInSeconds}</p>
        </div>`;
    resultContainer.style.display = "block";
}

const ageCalculateForm = document.getElementById("ageCalculator");
ageCalculateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAge();
});
