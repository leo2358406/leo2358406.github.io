

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
  document.querySelectorAll(".repo-card");


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
 * Add a subtle parallax effect to the hero orb.
 */

const orb =
  document.querySelector(".hero-orb");


if (orb) {

  window.addEventListener(
    "pointermove",
    (event) => {

      const x =
        (event.clientX / window.innerWidth - 0.5);

      const y =
        (event.clientY / window.innerHeight - 0.5);

      orb.style.transform =
        `translateY(-50%) translate(${x * 18}px, ${y * 18}px)`;

    }
  );

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