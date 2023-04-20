const contactButton = document.getElementById('contact-btn');

contactButton.addEventListener('click', () => {
  const email = 'caleblindelien@gmail.com';
  const subject = 'Website Contact';
  const message = 'Hi Caleb, ';

  const mailToLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`;

  window.location.href = mailToLink;
});
