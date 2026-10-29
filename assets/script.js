"use strict";
(() => {
  const phone = String(window.TREIPO_CONFIG?.phone || "").trim();
  const ready = /^[1-9]\d{7,14}$/.test(phone);
  const defaultMessage = "Hi Treipo Travels, I would like to enquire about a vehicle rental. Please share availability and a quote.";
  const whatsappUrl = message => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  document.querySelectorAll("[data-whatsapp], [data-phone]").forEach(link => {
    if (ready) {
      link.href = link.hasAttribute("data-whatsapp") ? whatsappUrl(defaultMessage) : `tel:+${phone}`;
      if (link.hasAttribute("data-whatsapp")) { link.target = "_blank"; link.rel = "noopener"; }
    } else {
      link.href = "contact.html#contact-status";
      link.title = "Booking number awaiting confirmation. Prepare an enquiry on the Contact page.";
    }
  });
  if (ready) {
    document.querySelectorAll(".contact-status").forEach(el => el.textContent = "Call or WhatsApp +" + phone + ". Availability and booking details are confirmed personally.");
    const heading = document.querySelector("#contact-status strong");
    if (heading) heading.textContent = "Speak with Treipo Travels";
  }
  const menu = document.querySelector(".menu"), nav = document.querySelector("#navigation");
  menu.hidden = false;
  const closeMenu = () => { menu.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); };
  menu.addEventListener("click", () => { const open = menu.getAttribute("aria-expanded") !== "true"; menu.setAttribute("aria-expanded", String(open)); nav.classList.toggle("open", open); });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", e => { if (e.key === "Escape") { closeMenu(); if (document.activeElement && nav.contains(document.activeElement)) menu.focus(); } });
  const form = document.querySelector("#quoteForm");
  if (!form) return;
  const params = new URLSearchParams(location.search);
  ["vehicle", "destination"].forEach(key => { if (params.has(key)) { const field = form.elements.namedItem(key); const value = params.get(key).slice(0,160); if (key !== "vehicle" || [...field.options].some(o => o.value === value)) field.value = value; } });
  if (params.has("service")) form.elements.notes.value = "Service: " + params.get("service").slice(0,160);
  const localDate = new Date(); localDate.setMinutes(localDate.getMinutes() - localDate.getTimezoneOffset());
  const today = localDate.toISOString().slice(0,10);
  form.elements.date.min = today; form.elements.returnDate.min = today;
  form.elements.date.addEventListener("change", () => { form.elements.returnDate.min = form.elements.date.value || today; });
  form.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(form), get = key => String(data.get(key) || "").trim();
    const error = document.querySelector("#form-error"); error.textContent = "";
    if (!get("name") || !get("pickup") || !get("destination") || !/\d{7}/.test(get("phone").replace(/[^0-9]/g,""))) { error.textContent = "Please enter your name, route and a phone number with at least 7 digits."; return; }
    if (get("returnDate") && get("returnDate") < get("date")) { error.textContent = "Return date must be on or after departure."; return; }
    const message = ["Hi Treipo Travels, I would like a vehicle rental quote.", "", `Name: ${get("name")}`, `Phone: ${get("phone")}`, `Pickup: ${get("pickup")}`, `Destination: ${get("destination")}`, `Departure: ${get("date")}`, `Return: ${get("returnDate") || "To discuss"}`, `Passengers: ${get("passengers")}`, `Vehicle: ${get("vehicle") || "Please suggest"}`, `Notes: ${get("notes") || "None"}`, "", "Please confirm availability, vehicle details, price, inclusions and booking terms."].join("\n");
    document.querySelector("#prepared-message").value = message;
    document.querySelector("#message-preview").hidden = false;
    const send = document.querySelector("#send-message");
    send.hidden = !ready;
    if (ready) send.href = whatsappUrl(message);
    document.querySelector("#message-status").textContent = ready ? "Review the message, then continue to WhatsApp to send it. Nothing has been sent yet." : "Nothing has been sent. Booking number is awaiting confirmation; you can copy your enquiry for later.";
    document.querySelector("#preview-title").focus();
  });
  document.querySelector("#copy-message").addEventListener("click", async () => {
    const field = document.querySelector("#prepared-message"), status = document.querySelector("#message-status");
    try { await navigator.clipboard.writeText(field.value); status.textContent = "Message copied. Nothing has been sent."; }
    catch { field.focus(); field.select(); status.textContent = "Select and copy the message manually. Nothing has been sent."; }
  });
  form.addEventListener("input", () => { document.querySelector("#message-preview").hidden = true; });
})();
