const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
document.addEventListener('DOMContentLoaded', () => {
    // Fetching members list
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const memberList = document.getElementById('memberList');
            if (memberList) {
                data.forEach(member => {
                    const memberDiv = document.createElement('div');
                    memberDiv.classList.add('member');
                    memberDiv.innerHTML = `
                        <p><strong>Name:</strong> ${member.firstName} ${member.lastName}</p>
                        <p><strong>Reason:</strong> ${member.reason}</p>
                        <p><strong>Contact:</strong> ${member.contact}</p>
                        <p><strong>Email:</strong> ${member.email}</p>
                    `;
                    memberList.appendChild(memberDiv);
                });
            }
        })
        .catch(error => console.error('Error fetching members:', error));

    // Confirmation details
    const urlParams = new URLSearchParams(window.location.search);
    const firstName = urlParams.get('firstName');
    const lastName = urlParams.get('lastName');
    const reason = urlParams.get('reason');
    const contact = urlParams.get('contact');
    const email = urlParams.get('email');

    const confirmationDetails = document.getElementById('confirmationDetails');
    if (confirmationDetails) {
        confirmationDetails.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Reason for Joining:</strong> ${reason}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;
    }

    // Ensure elements exist before setting values
    const confirmFirstName = document.getElementById('confirmFirstName');
    const confirmLastName = document.getElementById('confirmLastName');
    const confirmReason = document.getElementById('confirmReason');
    const confirmContact = document.getElementById('confirmContact');
    const confirmEmail = document.getElementById('confirmEmail');

    if (confirmFirstName) confirmFirstName.value = firstName;
    if (confirmLastName) confirmLastName.value = lastName;
    if (confirmReason) confirmReason.value = reason;
    if (confirmContact) confirmContact.value = contact;
    if (confirmEmail) confirmEmail.value = email;

    // Form action page
    const thankYouMessage = document.getElementById('thankYouMessage');
    if (thankYouMessage) {
        thankYouMessage.innerHTML = `
            <p>Thank you, ${firstName} ${lastName}, for joining the Urban Gardening Community!</p>
            <p><strong>Reason for Joining:</strong> ${reason}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;

        // Add new member to the JSON file (simulated)
        // In a real-world scenario, this should be done server-side
        const newMember = {
            firstName,
            lastName,
            reason,
            contact,
            email
        };

        // Fetch existing members and add the new member
        fetch('data/members.json')
            .then(response => response.json())
            .then(members => {
                members.push(newMember);
                // Simulate saving to the server by logging to the console
                console.log('New member added:', newMember);
            });
    }
    document.getElementById('year').textContent = new Date().getFullYear();

    // Display the last modified date
    document.getElementById('last-modified').textContent = document.lastModified;
    
});
