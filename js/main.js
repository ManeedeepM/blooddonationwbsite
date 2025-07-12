/*
 * LifeFlow – Simple Frontend Flow
 * 1. Home: no JS needed.
 * 2. Donate form: validate + redirect to thankyou.html.
 */
(() => {
  "use strict";

  const donateForm = document.getElementById("donorForm");
  if (!donateForm) return;    // Only present on donate.html

  donateForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Native Bootstrap validation
    if (!donateForm.checkValidity()) {
      donateForm.classList.add("was-validated");
      return;
    }

    // Custom medical criteria
    const age   = +document.getElementById("age").value;
    const plat  = +document.getElementById("platelets").value;
    const hb    = +document.getElementById("hemoglobin").value;
    const sugar = +document.getElementById("sugar").value;

    const ok =
      age >= 18 &&
      plat >= 100000 &&
      hb > 65 &&
      sugar >= 80 &&
      sugar <= 120;

    if (!ok) {
      alert("Please meet all medical criteria:\n" +
            "• Age ≥ 18\n• Platelets ≥ 100,000\n• Hemoglobin > 65\n• Sugar 80–120 mg/dL");
      return;
    }

    // Success → redirect to thank-you
    window.location = "thankyou.html";
  });
})();
