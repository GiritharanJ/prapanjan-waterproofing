// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('#mobileMenu a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach((item) => {
  const btn = item.querySelector('.faq-q');
  const answer = item.querySelector('.faq-a');

  btn.addEventListener('click', () => {
    const isOpen = item.getAttribute('data-open') === 'true';

    // close all others
    document.querySelectorAll('.faq-item').forEach((other) => {
      if (other !== item) {
        other.setAttribute('data-open', 'false');
        other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        other.querySelector('.faq-a').style.maxHeight = null;
      }
    });

    item.setAttribute('data-open', String(!isOpen));
    btn.setAttribute('aria-expanded', String(!isOpen));
    answer.style.maxHeight = !isOpen ? answer.scrollHeight + 'px' : null;
  });
});

// Contact form -> WhatsApp
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  const lines = [
    '*New Quote Request*',
    '',
    `*Name:* ${name}`,
    `*Phone:* ${phone}`,
    `*Service:* ${service || 'Not specified'}`,
    `*Message:* ${message || '-'}`
  ];

  const whatsappMessage = encodeURIComponent(lines.join('\n'));
  const whatsappNumber = '919498828572';

  window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  this.reset();
});
