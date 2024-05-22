document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
    
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
    
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
    
    // Add a click event on buttons to open a specific modal with image update
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
      
      $trigger.addEventListener('click', (event) => {
        const clickedElement = event.currentTarget;
        openModal($target);
        
        const modalImage = document.getElementById("modal-image");
        // Check if clicked element has src attribute (assuming it's an image)
        if (clickedElement.src) {
          modalImage.src = clickedElement.src;
        } else {
          // Otherwise, use data attribute for image path
          const imageSrc = clickedElement.dataset.imageSrc;
          modalImage.src = imageSrc;
        }
      });
    });
    
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
      
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
    
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      if(event.key === "Escape") {
        closeAllModals();
      }
    });
  });
  