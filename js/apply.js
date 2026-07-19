(() => {
  const form = document.getElementById("hostForm");
  const modal = document.getElementById("successModal");
  const submitBtn = document.getElementById("submitBtn");
  const continueBtn = document.getElementById("continueBtn");
  const backStepBtn = document.getElementById("backStepBtn");
  const formError = document.getElementById("formError");
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const stepLabel = document.getElementById("stepLabel");
  const progressFill = document.getElementById("progressFill");
  const progressBar = document.getElementById("progressBar");
  if (!form || !modal || !submitBtn || !continueBtn || !step1 || !step2) return;

  const STORAGE_KEY = "nexa_host_waitlist_applications";
  const UTM_KEY = "nexa_waitlist_utm";
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvgljwa";
  const ENDPOINT = window.NEXA_WAITLIST_ENDPOINT || FORMSPREE_ENDPOINT;

  let currentStep = 1;
  let formStartFired = false;
  let step1CompleteFired = false;

  function t(key) {
    return window.NexaI18n?.t(key) || key;
  }

  function track(name) {
    try {
      if (typeof window.va === "function") {
        window.va("event", { name });
      }
    } catch {
      /* ignore */
    }
  }

  function captureAttribution() {
    try {
      const params = new URLSearchParams(window.location.search);
      const keys = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
        "fbclid",
        "gclid",
      ];
      const data = {};
      let found = false;
      keys.forEach((k) => {
        const v = params.get(k);
        if (v) {
          data[k] = v;
          found = true;
        }
      });
      if (found) {
        sessionStorage.setItem(UTM_KEY, JSON.stringify(data));
        return data;
      }
      const stored = sessionStorage.getItem(UTM_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  }

  const attribution = captureAttribution();

  function openModal() {
    modal.classList.remove("opacity-0", "pointer-events-none");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.add("opacity-0", "pointer-events-none");
    modal.setAttribute("aria-hidden", "true");
  }

  function showError(message) {
    if (!formError) return;
    formError.textContent = message;
    formError.classList.remove("hidden");
  }

  function clearError() {
    if (!formError) return;
    formError.textContent = "";
    formError.classList.add("hidden");
  }

  function saveLocally(payload) {
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      existing.push({ ...payload, submittedAt: new Date().toISOString() });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    } catch {
      /* ignore */
    }
  }

  async function parseFormspreeError(res) {
    try {
      const body = await res.json();
      if (typeof body?.error === "string" && body.error) return body.error;
      if (Array.isArray(body?.errors) && body.errors.length) {
        return body.errors
          .map((e) => e.message || e.error || String(e))
          .filter(Boolean)
          .join(" ");
      }
    } catch {
      /* ignore */
    }
    return t("apply.errSubmit");
  }

  function setStep(step) {
    currentStep = step;
    if (step === 1) {
      step1.classList.remove("hidden");
      step1.removeAttribute("hidden");
      step2.classList.add("hidden");
      step2.setAttribute("hidden", "");
      if (stepLabel) {
        stepLabel.textContent = t("apply.step1of2");
        stepLabel.setAttribute("data-i18n", "apply.step1of2");
      }
      if (progressFill) progressFill.style.width = "50%";
      if (progressBar) progressBar.setAttribute("aria-valuenow", "1");
    } else {
      step1.classList.add("hidden");
      step1.setAttribute("hidden", "");
      step2.classList.remove("hidden");
      step2.removeAttribute("hidden");
      if (stepLabel) {
        stepLabel.textContent = t("apply.step2of2");
        stepLabel.setAttribute("data-i18n", "apply.step2of2");
      }
      if (progressFill) progressFill.style.width = "100%";
      if (progressBar) progressBar.setAttribute("aria-valuenow", "2");
      step2.querySelector("input, textarea, button")?.focus?.();
    }
  }

  function validateStep1() {
    clearError();
    const fullName = form.querySelector("#fullName");
    const email = form.querySelector("#email");
    const phone = form.querySelector("#phone");
    const city = String(form.querySelector("#city")?.value || "").trim();
    const typeChecked = form.querySelector('input[name="propertyType"]:checked');

    if (fullName && !fullName.checkValidity()) {
      fullName.reportValidity();
      return false;
    }
    if (email && !email.checkValidity()) {
      email.reportValidity();
      return false;
    }
    if (phone && !phone.checkValidity()) {
      phone.reportValidity();
      return false;
    }
    if (!city) {
      showError(t("apply.errCity"));
      document.getElementById("cityTrigger")?.focus();
      return false;
    }
    if (!typeChecked) {
      showError(t("apply.errPropertyType"));
      return false;
    }
    return true;
  }

  function maybeFormStart() {
    if (formStartFired) return;
    formStartFired = true;
    track("form_start");
  }

  form.addEventListener(
    "focusin",
    () => {
      maybeFormStart();
    },
    true,
  );
  form.addEventListener(
    "input",
    () => {
      maybeFormStart();
    },
    true,
  );

  continueBtn.addEventListener("click", () => {
    if (!validateStep1()) return;
    if (!step1CompleteFired) {
      step1CompleteFired = true;
      track("step1_complete");
    }
    setStep(2);
  });

  backStepBtn?.addEventListener("click", () => {
    clearError();
    setStep(1);
  });

  modal.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearError();

    if (currentStep !== 2) {
      if (validateStep1()) {
        if (!step1CompleteFired) {
          step1CompleteFired = true;
          track("step1_complete");
        }
        setStep(2);
      }
      return;
    }

    const data = new FormData(form);
    const city = String(data.get("city") || "").trim();
    if (!city) {
      showError(t("apply.errCity"));
      setStep(1);
      document.getElementById("cityTrigger")?.focus();
      return;
    }

    const hostExp = form.querySelector('input[name="hostExperience"]:checked');
    const propCount = form.querySelector('input[name="propertyCount"]:checked');
    const hostActivity = form.querySelector('input[name="hostActivity"]:checked');
    if (!propCount || !hostExp || !hostActivity) {
      showError(t("apply.errStep2"));
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const phoneRaw = String(data.get("phone") || "").replace(/\s+/g, "");
    const email = String(data.get("email") || "").trim().toLowerCase();
    const lang = window.NexaI18n?.getLang?.() || "en";
    const payload = {
      fullName: String(data.get("fullName") || "").trim(),
      phone: phoneRaw.startsWith("+")
        ? phoneRaw
        : `+212${phoneRaw.replace(/^0+/, "")}`,
      email,
      city,
      propertyType: String(data.get("propertyType") || ""),
      propertyCount: String(data.get("propertyCount") || ""),
      hostExperience: String(data.get("hostExperience") || ""),
      hostActivity: String(data.get("hostActivity") || ""),
      propertyDetails: String(data.get("propertyDetails") || "").trim(),
      source: "waitlist-web",
      language: lang,
      ...attribution,
      _replyto: email,
      _subject: `Nexa Stays host waitlist — ${city}`,
    };

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="material-symbols-outlined animate-spin text-[20px]">progress_activity</span> ${t("apply.submitting")}`;

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(await parseFormspreeError(res));
      }

      track("form_submit");
      saveLocally(payload);
      form.reset();
      window.NexaCitySelect?.reset();
      const riad = form.querySelector('input[name="propertyType"][value="RIAD"]');
      if (riad) riad.checked = true;
      const count1 = form.querySelector('input[name="propertyCount"][value="1"]');
      if (count1) count1.checked = true;
      const expNew = form.querySelector('input[name="hostExperience"][value="new"]');
      if (expNew) expNew.checked = true;
      const actMost = form.querySelector('input[name="hostActivity"][value="most_weeks"]');
      if (actMost) actMost.checked = true;
      setStep(1);
      formStartFired = false;
      step1CompleteFired = false;
      openModal();
    } catch (err) {
      showError(err instanceof Error ? err.message : t("apply.errGeneric"));
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = t("apply.submit");
      submitBtn.setAttribute("data-i18n", "apply.submit");
    }
  });

  setStep(1);
})();
