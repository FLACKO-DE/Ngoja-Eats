// Scroll-to-Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
    if (scrollTopBtn) {
        scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    }
};
scrollTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Opening Hours
function updateOpenStatus() {
    const status = document.getElementById("openStatus");
    if (!status) return;
    const now = new Date();
    const hour = now.getHours();
    const isOpen = hour >= 9 && hour < 21;
    status.textContent = isOpen ? "We are OPEN 🟢" : "We are CLOSED 🔴";
}
updateOpenStatus();

alert("Welcome to Ngoja Eats😘 Your tastebud adventure starts HERE😋! FEAST WITH FLAVOURS😉!!!!!");
  