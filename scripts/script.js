/* Site Navigation */
// Select all the a elements in the nav
const navLinks = document.querySelectorAll(".nav a");
console.log(navLinks);

// Apply event listener to them all.
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Get the target section based on the link's href
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // Scroll the target section into view
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

/* section1 background select */
const bgSelect = document.querySelector("#bgc");
// console.log(bgSelect);

bgSelect.addEventListener("change", changeBG);

function changeBG() {
  const section1 = document.getElementById("section1");
  let currentValue = bgSelect.value;
  if (currentValue !== "") {
    section1.style.backgroundImage = `url("${currentValue}")`;
  }
}

// const modal1 = document.querySelector("#modal1");
// const modal2 = document.querySelector("#modal2");
// const modal3 = document.querySelector("#modal3");
// const modal4 = document.querySelector("#modal4");

// const openModal1 = document.querySelector("#open-modal1");
// const openModal2 = document.querySelector("#open-modal2");
// const openModal3 = document.querySelector("#open-modal3");
// const openModal4 = document.querySelector("#open-modal4");

// openModal1.addEventListener("click", () => {
//   modal1.showModal();
// });
// modal1.addEventListener("click", () => {
//   modal1.close();
// });
// openModal2.addEventListener("click", () => {
//   modal2.showModal();
// });
// modal2.addEventListener("click", () => {
//   modal2.close();
// });
// openModal3.addEventListener("click", () => {
//   modal3.showModal();
// });
// modal3.addEventListener("click", () => {
//   modal3.close();
// });
// openModal4.addEventListener("click", () => {
//   modal4.showModal();
// });
// modal4.addEventListener("click", () => {
//   modal4.close();
// });

// const modals = [
//   document.querySelector("#modal1"),
//   document.querySelector("#modal2"),
//   document.querySelector("#modal3"),
//   document.querySelector("#modal4"),
// ];

// const openModal = [
//   document.querySelector("#open-modal1"),
//   document.querySelector("#open-modal2"),
//   document.querySelector("#open-modal3"),
//   document.querySelector("#open-modal4"),
// ];

// written into classes is definitely most satisfying.
const modals = document.querySelectorAll(".modal");
const openModal = document.querySelectorAll(".open-modal");
console.log(modals);
console.log(openModal);

openModal.forEach((link, index) => {
  link.addEventListener("click", () => {
    modals[index].showModal();
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", () => {
    modal.close();
  });
});

linkedIn = document.getElementById("linkedin");

linkedIn.addEventListener("click", () => {
  alert("Linked in not yet set up. Coming soon!");
});
