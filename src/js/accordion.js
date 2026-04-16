document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".faq-accordion");
  
    accordions.forEach((accordion) => {
      const header = accordion.querySelector(".faq-header");
      const body = accordion.querySelector("p");
  
      if (!header || !body) return;
  
      // Start closed
      body.hidden = true;
      accordion.classList.remove("is-open");
  
      header.setAttribute("role", "button");
      header.setAttribute("tabindex", "0");
      header.setAttribute("aria-expanded", "false");
  
      const toggleAccordion = () => {
        const isOpen = accordion.classList.contains("is-open");
  
        // Close all accordions first
        accordions.forEach((item) => {
          const itemBody = item.querySelector("p");
          const itemHeader = item.querySelector(".faq-header");
  
          item.classList.remove("is-open");
  
          if (itemBody) itemBody.hidden = true;
          if (itemHeader) itemHeader.setAttribute("aria-expanded", "false");
        });
  
        // If the clicked one was closed, open it
        if (!isOpen) {
          accordion.classList.add("is-open");
          body.hidden = false;
          header.setAttribute("aria-expanded", "true");
        }
      };
  
      header.addEventListener("click", toggleAccordion);
  
      header.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleAccordion();
        }
      });
    });
  });