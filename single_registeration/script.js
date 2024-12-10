const scriptURL = 'https://script.google.com/macros/s/AKfycbwuSZ2S2s8cnn5hgwb-0kdgGNFsOwtvqKmji1SNjW5rPARJdVM7_QqbKeFJsJX397NxJw/exec';         
const form = document.forms['google-sheet'];
const message = document.getElementById('message');
const phoneRegex = /^\d{10}$/;

form.addEventListener('submit', e => {
    e.preventDefault();

    // Check if all required fields are filled
    const allFieldsFilled = [...form.elements].every(element => element.value.trim() !== '');
    if (!allFieldsFilled) {
        alert("Please fill out all required fields.");
        return;
    }

    // Validate phone number
    const leaderPhone = form['Phone No.'].value;
    if (!phoneRegex.test(leaderPhone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // If all validations pass, submit the form
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            if (response.ok) {
                message.style.display = 'block'; // Display success message
                form.reset(); // Reset form fields
                setTimeout(() => {
                    message.style.display = 'none'; // Hide success message after a delay
                }, 5000); // Adjust delay time as needed (currently set to 5 seconds)
            } else {
                throw new Error('Failed to submit form.');
            }
        })
        .catch(error => console.error('Error!', error.message))
});
