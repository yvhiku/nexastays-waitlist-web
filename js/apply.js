(() => {
  const form = document.getElementById("hostForm");
  const modal = document.getElementById("successModal");
  const submitBtn = document.getElementById("submitBtn");
  const formError = document.getElementById("formError");
  if (!form || !modal || !submitBtn) return;

  const STORAGE_KEY = "nexa_host_waitlist_applications";

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
      showError("Please select a city.");
      document.getElementById("cityTrigger")?.focus();
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const phoneRaw = String(data.get("phone") || "").replace(/\s+/g, "");
    const payload = {
      fullName: String(data.get("fullName") || "").trim(),
      phone: phoneRaw.startsWith("+") ? phoneRaw : `+212${phoneRaw.replace(/^0+/, "")}`,
      email: String(data.get("email") || "").trim().toLowerCase(),
      city,
      propertyType: String(data.get("propertyType") || ""),
      propertyCount: Number(data.get("propertyCount") || 1),
      propertyDetails: String(data.get("propertyDetails") || "").trim(),
      source: "waitlist-web",
    };

    const original = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML =
      '<span class="material-symbols-outlined animate-spin text-[20px]">progress_activity</span> Submitting…';

    try {
      const endpoint = window.NEXA_WAITLIST_ENDPOINT;
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Could not submit right now. Please try again.");
      } else {
        await new Promise((r) => setTimeout(r, 700));
        saveLocally(payload);
      }
      form.reset();
      window.NexaCitySelect?.reset();
      const riad = form.querySelector('input[name="propertyType"][value="RIAD"]');
      if (riad) riad.checked = true;
      openModal();
    } catch (err) {
      showError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = original;
    }
  });
})();
