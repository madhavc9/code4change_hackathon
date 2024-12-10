const scriptURL = 'https://script.google.com/macros/s/AKfycbyF7PyBmDiNPubcD1Yh77OGM8onNFNHPpHxJNsoHFs8r8c_vp02vj0g3pHFgKoePDdBdQ/exec';
const form = document.forms['google-sheet'];
const message = document.getElementById('message');
const teamSizeSelect = document.getElementById('teamSize');
const teamMembersDiv = document.getElementById('teamMembers');
const phoneRegex = /^\d{10}$/;

form.addEventListener('submit', e => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!form.checkValidity()) {
        alert("Please fill out all required fields.");
        return;
    }

    const leaderPhone = form['Leader Phone No.'].value;

    // Validate phone number
    if (!phoneRegex.test(leaderPhone)) {
        alert("Please enter a valid 10-digit phone number for the team leader.");
        return;
    }

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
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

teamSizeSelect.addEventListener('change', () => {
    const selectedSize = parseInt(teamSizeSelect.value);
    let numMembers = selectedSize - 1; // Number of additional members (excluding team leader)
    if (selectedSize < 2) {
        numMembers = 0;
    }
    teamMembersDiv.innerHTML = ''; // Clear previous member details

    if (selectedSize > 1) {
        for (let i = 1; i <= numMembers; i++) {
            const memberDiv = document.createElement('div');
            memberDiv.innerHTML = `
                <div>
                    <label for="member${i}Name">Member ${i} Name:</label>
                    <input type="text" id="member${i}Name" name="Member ${i} Name" placeholder="Enter member ${i}'s name" required>
                </div>
                <div>
                    <label for="member${i}RegNo">Member ${i} Registration No. :</label>
                    <input type="text" id="member${i}RegNo" name="Member ${i} Registration No." placeholder="Enter member ${i}'s registration number" required>
                </div>
                <div>
                    <label for="member${i}Phone">Member ${i} Phone No. :</label>
                    <input type="tel" id="member${i}Phone" name="Member ${i} Phone No." placeholder="Enter member ${i}'s phone number" required>
                </div>
            `;
            teamMembersDiv.appendChild(memberDiv);
        }
        teamMembersDiv.style.display = 'block';
    } else {
        teamMembersDiv.style.display = 'none';
    }
});

// Hide success message when any input field is clicked
form.addEventListener('input', () => {
    if (message.style.display === 'block') {
        message.style.display = 'none';
    }
});
