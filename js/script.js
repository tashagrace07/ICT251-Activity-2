console.log('script.js loaded');

// Shows or hides a project's details when its button is clicked
function setupExpandableProjects() {
    const buttons = document.querySelectorAll('.expand-btn');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const details = button.nextElementSibling;
            const isHidden = details.hidden;

            details.hidden = !isHidden;
            button.setAttribute('aria-expanded', String(isHidden));
            button.textContent = isHidden ? 'Hide details' : 'Show details';
        });
    });
}

// Validates the contact form and shows a local preview on success
function setupContactForm() {
    const form = document.getElementById('contact-form');
    console.log('form found:', form);

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const topicInput = document.getElementById('topic');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const preview = document.getElementById('form-preview');

    if (!form) return;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function showError(input, errorEl, message) {
        errorEl.textContent = message;
        input.classList.toggle('invalid', Boolean(message));
    }

    function validateField(input, errorEl, label) {
        const value = input.value.trim();
        if (value === '') {
            showError(input, errorEl, `${label} cannot be empty or just spaces.`);
            return false;
        }
        if (input === emailInput && !emailPattern.test(value)) {
            showError(input, errorEl, 'Please enter a valid email address.');
            return false;
        }
        showError(input, errorEl, '');
        return true;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // stop the page from reloading

        const isNameValid = validateField(nameInput, nameError, 'Name');
        const isEmailValid = validateField(emailInput, emailError, 'Email');
        const isMessageValid = validateField(messageInput, messageError, 'Message');

        if (isNameValid && isEmailValid && isMessageValid) {
            preview.innerHTML = '';

            const heading = document.createElement('h3');
            heading.textContent = 'Message validated (not sent)';

            const nameLine = document.createElement('p');
            nameLine.textContent = `Name: ${nameInput.value.trim()}`;

            const emailLine = document.createElement('p');
            emailLine.textContent = `Email: ${emailInput.value.trim()}`;

            const topicLine = document.createElement('p');
            topicLine.textContent = `Topic: ${topicInput.options[topicInput.selectedIndex].text}`;

            const messageLine = document.createElement('p');
            messageLine.textContent = `Message: ${messageInput.value.trim()}`;

            preview.append(heading, nameLine, emailLine, topicLine, messageLine);
            preview.hidden = false;
        } else {
            preview.hidden = true;
        }
    });
}

/* ============================================================
   GALLERY VIEWER FEATURE
   Previous / Next buttons cycle through the 4 photos.
   Wraps from last -> first and first -> last.
   ============================================================ */

// Photo data taken from the four <figure> blocks in index.html
const galleryPhotos = [
  {
    src: "images/photo1.jpg",
    alt: "A laptop displaying Python Turtle programming code",
    caption: "Practising Python programming with Turtle graphics."
  },
  {
    src: "images/photo2.jpg",
    alt: "A student wearing a lab coat",
    caption: "Taking part in practical learning activities."
  },
  {
    src: "images/photo3.jpg",
    alt: "A view of Mulungushi University",
    caption: "At Mulungushi University."
  },
  {
    src: "images/photo4.jpg",
    alt: "A student studying outdoors with a laptop",
    caption: "Studying and practising my computer skills."
  }
];

let currentPhotoIndex = 0; // which photo is showing


function setupGalleryViewer() {
  const galleryImage   = document.getElementById("galleryImage");
  const galleryCaption = document.getElementById("galleryCaption");
  const galleryStatus  = document.getElementById("galleryStatus");
  const prevBtn        = document.getElementById("prevPhoto");
  const nextBtn        = document.getElementById("nextPhoto");

  if (!galleryImage || !galleryCaption || !prevBtn || !nextBtn) return;

  function showPhoto(index) {
    const photo = galleryPhotos[index];
    galleryImage.src = photo.src;
    galleryImage.alt = photo.alt;
    galleryCaption.textContent = photo.caption;

    if (galleryStatus) {
      galleryStatus.textContent =
        "Photo " + (index + 1) + " of " + galleryPhotos.length;
    }
  }

  function showPreviousPhoto() {
    currentPhotoIndex =
      (currentPhotoIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
    showPhoto(currentPhotoIndex);
  }

  function showNextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % galleryPhotos.length;
    showPhoto(currentPhotoIndex);
  }

  prevBtn.addEventListener("click", showPreviousPhoto);
  nextBtn.addEventListener("click", showNextPhoto);
  showPhoto(currentPhotoIndex);
}
/* ============================================================
   THEME SWITCH FEATURE
   Toggles light / dark mode and remembers the choice.
   ============================================================ */

function setupThemeSwitch() {
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    toggleBtn.textContent = "Light Mode";
  }

  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
setupExpandableProjects();
setupContactForm();
setupGalleryViewer();
setupThemeSwitch();