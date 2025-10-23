document.addEventListener("DOMContentLoaded", function () {
    const goalSelect = document.getElementById("goal");
    const customGoalInput = document.getElementById("customGoal");
    const calculateBtn = document.getElementById("calculateBtn");
    const bmiResult = document.getElementById("bmiResult");
    const mealSuggestBtn = document.getElementById("mealSuggestBtn");

    // Show/hide custom goal input
    goalSelect.addEventListener("change", function () {
        if (goalSelect.value === "custom") {
            customGoalInput.style.display = "block";
        } else {
            customGoalInput.style.display = "none";
        }
    });

    // BMI Calculation
    calculateBtn.addEventListener("click", function () {
        let weight = parseFloat(document.getElementById("weight").value);
        let height = parseFloat(document.getElementById("height").value) / 100; // convert cm to m

        if (!weight || !height) {
            bmiResult.innerHTML = "⚠ Please enter valid weight and height.";
            return;
        }

        let bmi = (weight / (height * height)).toFixed(2);
        let category = "";

        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 24.9) category = "Normal weight";
        else if (bmi < 29.9) category = "Overweight";
        else category = "Obese";

        bmiResult.innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`;

        // Show meal suggestion button
        mealSuggestBtn.style.display = "block";
    });

    // Redirect to meal page
    mealSuggestBtn.addEventListener("click", function () {
        window.location.href = "meal.html";
    });
});
