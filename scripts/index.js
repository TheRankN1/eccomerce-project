

function toggleAccordion(section) {
     var accordion = document.querySelector(`.accordionContentAcc.${section} > .contentAcc`);
   if (accordion.style.display === "none") {
     accordion.style.display = "block";
   } else {
     accordion.style.display = "none";
   }
   
  }