(() => {
  const form = document.getElementById("hostForm");
  const modal = document.getElementById("successModal");
  const submitBtn = document.getElementById("submitBtn");
  const formError = document.getElementById("formError");
  if (!form || !modal || !submitBtn) return;

  const STORAGE_KEY = "nexa_host_waitlist_applications";
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvgljwa";
  const ENDPOINT = window.NEXA_WAITLIST_ENDPOINT || FORMSPREE_ENDPOINT;

  function t(key) {
    return window.NexaI18n?.t(key) || key;
  }

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
      /* ignore quota / private mode */
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
      /* ignore parse errors */
    }
    return t("apply.errSubmit");
  }

  modal.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearError();

    const data = new FormData(form);
    const city = String(data.get("city") || "").trim();

    if (!city) {
      showError(t("apply.errCity"));
      document.getElementById("cityTrigger")?.focus();
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
      phone: phoneRaw.startsWith("+") ? phoneRaw : `+212${phoneRaw.replace(/^0+/, "")}`,
      email,
      city,
      propertyType: String(data.get("propertyType") || ""),
      propertyCount: Number(data.get("propertyCount") || 1),
      propertyDetails: String(data.get("propertyDetails") || "").trim(),
      source: "waitlist-web",
      language: lang,
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

      saveLocally(payload);
      form.reset();
      window.NexaCitySelect?.reset();
      const riad = form.querySelector('input[name="propertyType"][value="RIAD"]');
      if (riad) riad.checked = true;
      openModal();
    } catch (err) {
      showError(err instanceof Error ? err.message : t("apply.errGeneric"));
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = t("apply.submit");
      submitBtn.setAttribute("data-i18n", "apply.submit");
    }
  });
})();
