// Save as script.js
document.addEventListener('DOMContentLoaded', function () {
  // Set current year in all pages
  ['year','year-2','year-3','year-4','year-5'].forEach(function(id){
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });

  // Mobile nav toggle (works across pages)
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(btn => {
    btn.addEventListener('click', function () {
      // find associated nav by id in aria-controls if present, otherwise fallback to first .main-nav
      const navId = btn.getAttribute('aria-controls');
      let nav = navId ? document.getElementById(navId) : document.querySelector('.main-nav');
      if(!nav){
        // fallback
        nav = document.querySelector('.main-nav');
      }
      if (!nav) return;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      // toggle display
      if(getComputedStyle(nav).display === 'none' || nav.style.display === '' ){
        nav.style.display = 'block';
      } else {
        nav.style.display = 'none';
      }
    });
  });

  // Simple client-side form validation & submit behavior (no backend)
  const leadForm = document.getElementById('leadForm');
  if(leadForm){
    leadForm.addEventListener('submit', function(e){
      e.preventDefault();
      // Basic check: name and email required
      const name = leadForm.querySelector('[name="name"]').value.trim();
      const email = leadForm.querySelector('[name="email"]').value.trim();
      if(!name || !email){
        alert('Please provide name and email.');
        return;
      }
      // Normally, here you'd forward to server or email service.
      alert('Thank you! Your request has been recorded. We will contact you shortly.');
      leadForm.reset();
    });
  }

  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]').value.trim();
      const email = contactForm.querySelector('[name="email"]').value.trim();
      if(!name || !email){
        alert('Please provide name and email.');
        return;
      }
      alert('Thank you! Your message has been recorded. We will contact you shortly.');
      contactForm.reset();
    });
  }
});
