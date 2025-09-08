// Part 1: Basic Event Handling
const clickMeBtn = document.getElementById('clickMeBtn');
const clickMessage = document.getElementById('clickMessage');

clickMeBtn.addEventListener('click', () => {
    clickMessage.textContent = 'Button was clicked!';
});

const hoverArea = document.getElementById('hoverArea');
const hoverMessage = document.getElementById('hoverMessage');

hoverArea.addEventListener('mouseover', () => {
    hoverMessage.textContent = 'You hovered over the box!';
});
hoverArea.addEventListener('mouseout', () => {
    hoverMessage.textContent = '';
});

const keyInput = document.getElementById('keyInput');
const keyMessage = document.getElementById('keyMessage');

keyInput.addEventListener('input', (e) => {
    keyMessage.textContent = `You typed: "${e.target.value}"`;
});

// Part 2: Interactive Elements

// Light/Dark Mode Toggle
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Counter button
const counterBtn = document.getElementById('counterBtn');
let count = 0;
counterBtn.addEventListener('click', () => {
    count++;
    counterBtn.textContent = `Count: ${count}`;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('active');
    });
});

// Part 3: Form Validation
const userForm = document.getElementById('userForm');
const errorMessages = document.getElementById('errorMessages');
const successMessage = document.getElementById('successMessage');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    errorMessages.textContent = '';
    successMessage.textContent = '';

    const name = userForm.name.value.trim();
    const email = userForm.email.value.trim();
    const password = userForm.password.value.trim();

    let errors = [];

    if (name.length < 2) {
        errors.push('Name must be at least 2 characters.');
    }
    if (!validateEmail(email)) {
        errors.push('Please enter a valid email address.');
    }
    if (password.length < 6) {
        errors.push('Password must be at least 6 characters.');
    }

    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join('<br>');
    } else {
        successMessage.textContent = 'Form submitted successfully!';
        userForm.reset();
    }
});

// Live validation feedback
userForm.email.addEventListener('input', () => {
    if (validateEmail(userForm.email.value.trim())) {
        userForm.email.style.borderColor = 'green';
    } else {
        userForm.email.style.borderColor = 'red';
    }
});

userForm.password.addEventListener('input', () => {
    if (userForm.password.value.trim().length >= 6) {
        userForm.password.style.borderColor = 'green';
    } else {
        userForm.password.style.borderColor = 'red';
    }
});

userForm.name.addEventListener('input', () => {
    if (userForm.name.value.trim().length >= 2) {
        userForm.name.style.borderColor = 'green';
    } else {
        userForm.name.style.borderColor = 'red';
    }
});
