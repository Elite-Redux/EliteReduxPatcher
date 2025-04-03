 /**
 * Elite Redux Patcher - Additional JavaScript functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize accordion functionality
  initAccordion();
});

/**
 * Initialize accordion functionality
 */
function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      // Toggle active class on the header
      this.classList.toggle('active');
      
      // Toggle active class on the content
      const content = this.nextElementSibling;
      content.classList.toggle('active');
    });
  });
}
