/* Logos des moyens de paiement acceptés par la boutique (Spreadshop) : carte, PayPal, Apple Pay */
(function(){
  const logos = [
    ["Visa", `<svg viewBox="0 0 60 38"><rect width="60" height="38" rx="5" fill="#fff"/><text x="30" y="25" text-anchor="middle" font-family="Arial,sans-serif" font-size="15" font-weight="900" font-style="italic" fill="#1a1f71">VISA</text></svg>`],
    ["Mastercard", `<svg viewBox="0 0 60 38"><rect width="60" height="38" rx="5" fill="#fff"/><circle cx="25" cy="19" r="10" fill="#eb001b"/><circle cx="35" cy="19" r="10" fill="#f79e1b" fill-opacity=".9"/></svg>`],
    ["Carte bancaire", `<svg viewBox="0 0 60 38"><rect width="60" height="38" rx="5" fill="#fff"/><rect x="12" y="10" width="36" height="18" rx="3" fill="none" stroke="#1d3c6e" stroke-width="2"/><rect x="12" y="14" width="36" height="3.5" fill="#1d3c6e"/><text x="30" y="26" text-anchor="middle" font-family="Arial,sans-serif" font-size="6" font-weight="700" fill="#1d3c6e">CB</text></svg>`],
    ["PayPal", `<svg viewBox="0 0 60 38"><rect width="60" height="38" rx="5" fill="#fff"/><text x="30" y="24" text-anchor="middle" font-family="Arial,sans-serif" font-size="12.5" font-weight="900" font-style="italic"><tspan fill="#003087">Pay</tspan><tspan fill="#0070e0">Pal</tspan></text></svg>`],
    ["Apple Pay", `<svg viewBox="0 0 60 38"><rect width="60" height="38" rx="5" fill="#fff"/><path d="M17.6 13.4c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1 1.6-.9 2.6 1 .1 2-.5 2.6-1.2zm.9 1.4c-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.9-.8-1.5 0-2.8.9-3.6 2.2-1.5 2.6-.4 6.5 1.1 8.7.7 1 1.6 2.2 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.9.7c1.2 0 1.9-1.1 2.7-2.1.8-1.2 1.2-2.4 1.2-2.4s-2.3-.9-2.3-3.5c0-2.2 1.8-3.2 1.9-3.3-1-1.5-2.6-1.7-3.2-1.8z" fill="#000"/><text x="38" y="24.5" text-anchor="middle" font-family="-apple-system,Arial,sans-serif" font-size="12" font-weight="600" fill="#000">Pay</text></svg>`],
  ];
  document.querySelectorAll("[data-paiement]").forEach(el => {
    el.innerHTML = logos.map(([nom, svg]) => `<span class="paylogo" title="${nom}" role="img" aria-label="${nom}">${svg}</span>`).join("");
  });
})();
