document.addEventListener("DOMContentLoaded", function () {
   // 1️⃣ Ocultar/Mostrar Header en Scroll
   let lastScrollTop = 0;
   const header = document.querySelector("header");

   window.addEventListener("scroll", function () {
       let scrollTop = window.scrollY || document.documentElement.scrollTop;

       if (scrollTop > lastScrollTop) {
           // Bajando -> Oculta el header
           header.style.transform = "translateY(-100%)";
       } else {
           // Subiendo -> Muestra el header
           header.style.transform = "translateY(0)";
       }

       lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
   });

   // 2️⃣ Animación de Botones "Ver"
   const buttons = document.querySelectorAll(".btn");

   buttons.forEach(button => {
      button.addEventListener("mouseover", () => {
         button.style.boxShadow = "0px 4px 15px rgba(255, 255, 255, 0.3)";
      });

      button.addEventListener("mouseout", () => {
         button.style.boxShadow = "none";
      });
   });

   // 3️⃣ Mostrar botón "Ir arriba" en scroll
   const scrollBtn = document.createElement("a");
   scrollBtn.href = "#top";
   scrollBtn.id = "scrollToTop";
   scrollBtn.className = "scroll-top-btn";
   scrollBtn.textContent = "↑";
   document.body.appendChild(scrollBtn);

   window.addEventListener("scroll", function () {
       if (window.scrollY > 200) {
           scrollBtn.style.display = "block";
       } else {
           scrollBtn.style.display = "none";
       }
   });
});
