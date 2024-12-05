document.getElementById("registrationForm").addEventListener("submit", function (e) {
    // Validation for Full Name, Father's Name, and Mother's Name
    const namePattern = /^[A-Za-z\s]+$/;
    const name = document.getElementById("name").value;
    const fname = document.getElementById("fname").value;
    const mname = document.getElementById("mname").value;

    if (!namePattern.test(name) || !namePattern.test(fname) || !namePattern.test(mname)) {
        alert("Name fields can only contain letters and spaces.");
        e.preventDefault();
        return;
    }

    // Validation for Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|yahoo)\.com$/;
    const email = document.getElementById("email").value;
    if (!emailPattern.test(email)) {
        alert("Email must be a valid Gmail, Hotmail, or Yahoo address.");
        e.preventDefault();
        return;
    }

    // Validation for Phone Number
    const phonePattern = /^\d{10}$/;
    const phone = document.getElementById("phone").value;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        e.preventDefault();
        return;
    }

    // Validation for Checkboxes (One at a Time for Gender and Course)
    const genderCheckboxes = document.querySelectorAll('input[name="gender"]');
    const courseCheckboxes = document.querySelectorAll('input[name="course"]');

    if (!validateSingleCheckbox(genderCheckboxes)) {
        alert("Please select only one gender.");
        e.preventDefault();
        return;
    }

    if (!validateSingleCheckbox(courseCheckboxes)) {
        alert("Please select only one course.");
        e.preventDefault();
        return;
    }
});

function validateSingleCheckbox(checkboxes) {
    let selected = 0;
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) selected++;
    });
    return selected === 1;
}
