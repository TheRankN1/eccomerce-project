function toggleAccordion(section) {
  const accordion = document.querySelector(
    `[data-type=accordion-${section}] > .contentAcc`
  );

  if (accordion.style.display === "none") {
    accordion.style.display = "block";
  } else {
    accordion.style.display = "none";
  }
  const icon = document.querySelector(
    `[data-type=accordion-${section}] > .title-box > .demo-icon`
  );
  const isReversed = icon.classList.contains("reverse");

  if (isReversed) {
    icon.classList.remove("reverse");
  } else {
    icon.classList.add("reverse");
  }
}
