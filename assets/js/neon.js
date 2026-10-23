document.documentElement.classList.add("js-ready");


const revealElements =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach((element) => {
  observer.observe(element);
});


/*
 * Give repository cards a subtle cursor-reactive glow.
 */

const cards =
  document.querySelectorAll(".repo-card, .project-card");


cards.forEach((card) => {

  card.addEventListener(
    "pointermove",
    (event) => {

      const rect =
        card.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) / rect.width) * 100;

      const y =
        ((event.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty(
        "--mouse-x",
        `${x}%`
      );

      card.style.setProperty(
        "--mouse-y",
        `${y}%`
      );

    }
  );


  card.addEventListener(
    "pointerleave",
    () => {

      card.style.removeProperty("--mouse-x");
      card.style.removeProperty("--mouse-y");

    }
  );

});



/*
 * Add a smooth parallax effect to the hero orb.
 */

const orb = document.querySelector(".hero-orb");

if (orb) {
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let animationFrame = null;

  function animateOrb() {
    // Ease toward the target instead of jumping directly to it.
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    orb.style.transform =
      `translateY(-50%) translate3d(${currentX}px, ${currentY}px, 0)`;

    // Keep animating until the orb is close to its target.
    if (
      Math.abs(targetX - currentX) > 0.1 ||
      Math.abs(targetY - currentY) > 0.1
    ) {
      animationFrame = requestAnimationFrame(animateOrb);
    } else {
      currentX = targetX;
      currentY = targetY;

      orb.style.transform =
        `translateY(-50%) translate3d(${currentX}px, ${currentY}px, 0)`;

      animationFrame = null;
    }
  }

  window.addEventListener("pointermove", (event) => {
    targetX = (event.clientX / window.innerWidth - 0.5) * 18;
    targetY = (event.clientY / window.innerHeight - 0.5) * 18;

    // Only start a new animation loop when one isn't already running.
    if (animationFrame === null) {
      animationFrame = requestAnimationFrame(animateOrb);
    }
  });
}



/*
 * Give the current year to any element using
 * data-current-year.
 */

document
  .querySelectorAll("[data-current-year]")
  .forEach((element) => {

    element.textContent =
      new Date().getFullYear();

  });