function formdata() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    return {
        weight,
        height
    }
}

function calculateBMI(weight, height) {
    return weight / ((height / 100) ** 2);
}

function formatnumber(number) {
    let formatted = number.toFixed(2);
    if (formatted.endsWith(".00")) {
        formatted = formatted.slice(0, -3);
    } else if (formatted.endsWith("0")) {
        formatted = formatted.slice(0, -1);
    }
    return formatted;
}

function getCategory(num) {
    if (num < 18.5) {
        return "Kurus";
    } else if (num >= 18.5 && num <= 24.9) {
        return "Normal";
    } else if (num >= 25 && num <= 29.9) {
        return "Gemuk";
    } else {
        return "Obesitas";
    }
}

function submit() {
    const result = document.querySelector(".result");
    const categoryElement = document.getElementById("category");
    const nilai = document.getElementById("nilai");

    let data = formdata();
    let bmi = calculateBMI(data.weight, data.height);
    let num = getCategory(bmi);

    nilai.innerHTML = formatnumber(bmi);
    categoryElement.innerHTML = num;

    result.style.display = "block";
}

const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    submit();
});