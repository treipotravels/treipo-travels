/*
  Treipo Travels website configuration.
  IMPORTANT: Replace the placeholder phone number below before publishing.
*/
const TREIPO_PHONE = "919878711912";

document.querySelectorAll("[data-whatsapp]").forEach(el => {
  const message = encodeURIComponent("Hi Treipo Travels, I want to enquire about Tempo Traveller / Urbania rental. Please share availability and pricing.");
  el.href = `https://wa.me/${TREIPO_PHONE}?text=${message}`;
  el.target = "_blank";
  el.rel = "noopener";
});

document.querySelectorAll("[data-phone]").forEach(el => {
  el.href = `tel:+${TREIPO_PHONE}`;
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".site-header nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

const quoteForm = document.getElementById("quoteForm");
if (quoteForm) {
  quoteForm.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(quoteForm);
    const msg = `Hi Treipo Travels, I need a vehicle booking.%0A%0AName: ${data.get("name")}%0APhone: ${data.get("phone")}%0APassengers: ${data.get("passengers")}%0APickup: ${data.get("pickup")}%0ADestination: ${data.get("destination")}%0ATravel date: ${data.get("date")}%0A%0APlease share availability and pricing.`;
    window.open(`https://wa.me/${TREIPO_PHONE}?text=${msg}`, "_blank");
  });
}
