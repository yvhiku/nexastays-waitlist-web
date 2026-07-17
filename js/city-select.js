(() => {
  /** Same city list as nexastays_web/lib/moroccan-cities.ts (+ Other). */
  const CITIES = [
    "Agadir",
    "Asilah",
    "Beni Mellal",
    "Berkane",
    "Casablanca",
    "Chefchaouen",
    "Dakhla",
    "El Jadida",
    "Errachidia",
    "Essaouira",
    "Fes",
    "Guelmim",
    "Ifrane",
    "Kenitra",
    "Khemisset",
    "Khouribga",
    "Laayoune",
    "Larache",
    "Marrakech",
    "Meknes",
    "Mohammedia",
    "Nador",
    "Ouarzazate",
    "Oujda",
    "Rabat",
    "Safi",
    "Sale",
    "Settat",
    "Taghazout",
    "Tangier",
    "Tan-Tan",
    "Taroudant",
    "Taza",
    "Tetouan",
    "Tiznit",
    "Other",
  ];

  const root = document.getElementById("citySelect");
  const hidden = document.getElementById("city");
  const trigger = document.getElementById("cityTrigger");
  const labelEl = document.getElementById("cityTriggerLabel");
  const list = document.getElementById("cityList");
  const chevron = document.getElementById("cityChevron");
  if (!root || !hidden || !trigger || !labelEl || !list) return;

  let open = false;
  let value = "";

  function renderOptions() {
    list.innerHTML = "";
    CITIES.forEach((city) => {
      const li = document.createElement("li");
      li.setAttribute("role", "presentation");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("role", "option");
      btn.dataset.value = city;
      btn.textContent = city;
      btn.className =
        "w-full px-3.5 py-2.5 text-left text-sm font-medium transition-colors text-nexa-ink hover:bg-nexa-primary-soft hover:text-nexa-primary";
      btn.addEventListener("click", () => selectCity(city));
      li.appendChild(btn);
      list.appendChild(li);
    });
    syncSelectedStyles();
  }

  function syncSelectedStyles() {
    list.querySelectorAll('[role="option"]').forEach((btn) => {
      const selected = btn.dataset.value === value;
      btn.setAttribute("aria-selected", selected ? "true" : "false");
      btn.className = selected
        ? "w-full px-3.5 py-2.5 text-left text-sm font-medium transition-colors bg-nexa-primary text-white"
        : "w-full px-3.5 py-2.5 text-left text-sm font-medium transition-colors text-nexa-ink hover:bg-nexa-primary-soft hover:text-nexa-primary";
    });
  }

  function setOpen(next) {
    open = next;
    trigger.setAttribute("aria-expanded", open ? "true" : "false");
    list.classList.toggle("hidden", !open);
    chevron?.classList.toggle("rotate-180", open);
    chevron?.classList.toggle("text-nexa-primary", open);
    chevron?.classList.toggle("text-nexa-ink-4", !open);
    trigger.classList.toggle("border-nexa-primary", open);
    trigger.classList.toggle("border-nexa-line", !open);
    trigger.classList.toggle("ring-2", open);
    trigger.classList.toggle("ring-nexa-primary/20", open);
  }

  function selectCity(city) {
    value = city;
    hidden.value = city;
    labelEl.textContent = city;
    labelEl.classList.remove("text-nexa-ink-4");
    labelEl.classList.add("text-nexa-ink");
    syncSelectedStyles();
    setOpen(false);
    hidden.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function reset() {
    value = "";
    hidden.value = "";
    labelEl.textContent = "Select a city";
    labelEl.classList.add("text-nexa-ink-4");
    labelEl.classList.remove("text-nexa-ink");
    syncSelectedStyles();
    setOpen(false);
  }

  trigger.addEventListener("click", () => setOpen(!open));

  document.addEventListener("mousedown", (e) => {
    if (!open) return;
    if (!root.contains(e.target)) setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && open) setOpen(false);
  });

  renderOptions();

  window.NexaCitySelect = { reset, getValue: () => value };
})();
