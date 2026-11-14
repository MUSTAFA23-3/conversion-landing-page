document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Navigation Toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
      mobileToggle.setAttribute("aria-expanded", String(!isExpanded));
      mobileMenu.hidden = isExpanded;
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileMenu.hidden = true;
      });
    });
  }

  // 2. Instant Shipping Quote Estimator
  const routeZone = document.getElementById("routeZone");
  const weightRange = document.getElementById("weightRange");
  const weightDisplay = document.getElementById("weightDisplay");
  const tierInputs = document.querySelectorAll('input[name="serviceTier"]');
  const insuranceCheck = document.getElementById("insuranceCheck");
  const quoteTotal = document.getElementById("quoteTotal");
  const quoteEta = document.getElementById("quoteEta");
  const quoteBreakdown = document.getElementById("quoteBreakdown");
  const lockQuoteBtn = document.getElementById("lockQuoteBtn");
  const quoteNotes = document.getElementById("quoteNotes");

  function computeQuote() {
    const selectedOption = routeZone.options[routeZone.selectedIndex];
    const base = parseFloat(selectedOption.dataset.base);
    const ratePerKg = parseFloat(selectedOption.dataset.rate);
    const eta = selectedOption.dataset.eta;
    const weight = parseFloat(weightRange.value);

    let mult = 1.0;
    let tierName = "Standard";
    tierInputs.forEach((input) => {
      if (input.checked) {
        mult = parseFloat(input.dataset.mult);
        tierName = input.value.charAt(0).toUpperCase() + input.value.slice(1);
      }
    });

    const weightCost = weight * ratePerKg;
    const subtotal = (base + weightCost) * mult;
    const protection = insuranceCheck.checked ? subtotal * 0.035 : 0;
    const total = subtotal + protection;

    weightDisplay.textContent = weight;
    quoteTotal.textContent = `$${total.toFixed(2)}`;
    quoteEta.textContent = eta;
    quoteBreakdown.textContent =
      `Base: $${base.toFixed(2)} • Weight (${weight}kg): $${weightCost.toFixed(2)} • Tier (${mult}x) • Protection: $${protection.toFixed(2)}`;

    return {
      corridor: selectedOption.textContent,
      weight,
      tier: tierName,
      total: total.toFixed(2),
      eta,
    };
  }

  routeZone.addEventListener("change", computeQuote);
  weightRange.addEventListener("input", computeQuote);
  tierInputs.forEach((input) => input.addEventListener("change", computeQuote));
  insuranceCheck.addEventListener("change", computeQuote);
  computeQuote();

  if (lockQuoteBtn && quoteNotes) {
    lockQuoteBtn.addEventListener("click", () => {
      const q = computeQuote();
      quoteNotes.value =
        `[LOCKED QUOTE] Corridor: ${q.corridor} | Weight: ${q.weight} kg | Tier: ${q.tier} | Est. Total: $${q.total} (${q.eta})`;
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      document.getElementById("fullName").focus();
    });
  }

  // 3. Interactive FAQ Accordion
  const faqTriggers = document.querySelectorAll(".faq-trigger");
  faqTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      const panel = trigger.nextElementSibling;
      trigger.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
    });
  });

  // 4. Validated Lead Form & Instant UI Confirmation
  const leadForm = document.getElementById("leadForm");
  const formConfirmation = document.getElementById("formConfirmation");
  const confirmSummary = document.getElementById("confirmSummary");
  const confirmRefId = document.getElementById("confirmRefId");
  const resetFormBtn = document.getElementById("resetFormBtn");

  const fullNameInput = document.getElementById("fullName");
  const companyInput = document.getElementById("companyName");
  const emailInput = document.getElementById("workEmail");

  const errName = document.getElementById("errName");
  const errCompany = document.getElementById("errCompany");
  const errEmail = document.getElementById("errEmail");

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  leadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    errName.textContent = "";
    errCompany.textContent = "";
    errEmail.textContent = "";

    const nameVal = fullNameInput.value.trim();
    const compVal = companyInput.value.trim();
    const emailVal = emailInput.value.trim();

    if (nameVal.length < 2) {
      errName.textContent = "Please enter your full name.";
      valid = false;
    }
    if (compVal.length < 2) {
      errCompany.textContent = "Please enter your company name.";
      valid = false;
    }
    if (!validateEmail(emailVal)) {
      errEmail.textContent = "Please enter a valid work email address.";
      valid = false;
    }

    if (!valid) return;

    const refNum = "SR-" + Math.floor(10000 + Math.random() * 90000);
    confirmRefId.textContent = refNum;
    confirmSummary.textContent = `Thank you, ${nameVal} (${compVal}). Our logistics team has logged your dispatch inquiry and sent a confirmation copy to ${emailVal}.`;

    leadForm.hidden = true;
    formConfirmation.hidden = false;
  });

  resetFormBtn.addEventListener("click", () => {
    leadForm.reset();
    formConfirmation.hidden = true;
    leadForm.hidden = false;
  });
});
