---
layout: default
---

{% include navbar.html %}

<main>

  {% include hero.html %}

  <section class="projects-section" id="projects">

    <div class="section-heading reveal">
      <div>
        <span class="eyebrow">02 / PROJECTS</span>
        <h2>Things I've <span class="gradient-text">built.</span></h2>
      </div>

      <span class="project-count">
        {{ site.projects.size | prepend: "0" | slice: -2, 2 }} PROJECTS
      </span>
    </div>

    <div class="project-grid">

      {% for project in site.projects %}

        {% include repo-card.html project=project %}

      {% endfor %}

    </div>

  </section>


  <section class="about-section" id="about">

    <div class="about-terminal reveal">

      <div class="terminal-header">
        <div class="terminal-dots">
          <span class="terminal-dot red"></span>
          <span class="terminal-dot yellow"></span>
          <span class="terminal-dot green"></span>
        </div>

        <span class="terminal-title">
          leo@neon-forge ~
        </span>
      </div>

      <div class="terminal-body">

        <p>
          <span class="terminal-prompt">leo@forge:~$</span>
          whoami
        </p>

        <p class="terminal-output">
          Leo2358406
        </p>

        <p>
          <span class="terminal-prompt">leo@forge:~$</span>
          cat mission.txt
        </p>

        <p class="terminal-output">
          Building things, learning constantly,<br>
          and occasionally breaking things along the way.
        </p>

        <p>
          <span class="terminal-prompt">leo@forge:~$</span>
          status
        </p>

        <p class="terminal-output status-line">
          <span class="status-dot"></span>
          ONLINE — READY TO BUILD
        </p>

        <p class="terminal-cursor">
          <span class="terminal-prompt">leo@forge:~$</span>
          <span class="cursor"></span>
        </p>

      </div>

    </div>

  </section>

</main>

<footer>

  <div class="footer-inner">

    <span>
      © {{ "now" | date: "%Y" }} Leo2358406
    </span>

    <span class="footer-status">
      <span class="status-dot"></span>
      SYSTEM ONLINE
    </span>

    <a
      href="https://github.com/{{ site.author.github }}"
      target="_blank"
      rel="noopener"
    >
      GITHUB ↗
    </a>

  </div>

</footer>