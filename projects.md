---
title: Projects
permalink: /projects/
---


<div class="portfolio-projects">

  <header class="projects-heading">
    <p class="eyebrow">/ ARCHIVE / PROJECTS</p>
    <h1>Things I've <span class="accent">built.</span></h1>
    <p class="projects-intro">
      A collection of projects, experiments, and ideas brought to life.
      Here's a closer look at what I've created and how I created it.
    </p>
  </header>

  <!-- PROJECT 01: PERSONAL WEBSITE -->
  <article class="showcase-project website-project">

    <div class="showcase-visual website-visual">
      <div class="website-orb">
        <div class="orb-core"></div>
        <div class="orb-ring ring-one"></div>
        <div class="orb-ring ring-two"></div>
        <div class="orb-ring ring-three"></div>
      </div>
      <span class="visual-caption">A HOME FOR EVERYTHING I CREATE</span>
    </div>

    <div class="showcase-content">
      <p class="project-type">01 / WEB DEVELOPMENT</p>
      <h2>Personal Website<span>.</span></h2>
      <p class="project-tech">HTML · CSS · JavaScript · Jekyll</p>

      <p class="project-summary">
        What started as a simple attempt to give my GitHub Pages website
        a new theme eventually became a complete redesign. I wanted
        something that felt more personal, more interactive, and more
        representative of the things I enjoy building.
      </p>

      <div class="project-story">
        <h3>The inspiration</h3>
        <p>
          I wanted a central place where people could explore my creations
          and follow my development journey. I decided on a futuristic neon
          aesthetic, with glowing elements and a dark interface.
        </p>

        <h3>The build</h3>
        <p>
          With help from ChatGPT, I transformed the original website into
          a custom-designed portfolio. I worked on the layout, animations,
          interactive effects, project cards, and individual pages.
        </p>

        <h3>What makes it special</h3>
        <p>
          This website is more than a portfolio. It's an ongoing project
          that I continue to improve as I learn new things and create
          new projects.
        </p>
      </div>

      <div class="showcase-actions">
        <a class="showcase-button primary-button"
           href="{{ '/' | relative_url }}">
          VISIT WEBSITE ↗
        </a>
        <a class="showcase-button secondary-button"
           href="https://github.com/leo2358406/leo2358406.github.io"
           target="_blank" rel="noopener noreferrer">
          VIEW SOURCE ↗
        </a>
      </div>
    </div>
  </article>

  <!-- PROJECT 02: DESERT BULL DODGE -->
  <article class="showcase-project desert-project">

    <div class="showcase-visual desert-visual">
      <img
        src="{{ '/assets/images/projects/bull-dodge.gif' | relative_url }}"
        alt="Desert Bull Dodge gameplay"
        loading="lazy"
      >
      <span class="visual-caption">DODGE. SURVIVE. SCORE.</span>
    </div>

    <div class="showcase-content">
      <p class="project-type">02 / GAME DEVELOPMENT</p>
      <h2>Desert Bull Dodge<span>.</span></h2>
      <p class="project-tech">Python · Pygame · Pygbag</p>

      <p class="project-summary">
        A top-down arcade game where players switch between lanes to
        dodge charging bulls. The longer you survive, the faster and
        more numerous the bulls become.
      </p>

      <div class="project-story">
        <h3>The idea</h3>
        <p>
          I wanted to create a simple arcade game with an easy-to-understand
          objective but an increasingly challenging experience.
        </p>

        <h3>The gameplay</h3>
        <p>
          Players move between lanes to avoid incoming bulls. Each bull
          passed increases the score, while the difficulty gradually
          increases through faster movement and more bulls appearing
          at once.
        </p>

        <h3>The build</h3>
        <p>
          I developed the game in Python using Pygame, with help from
          Brave browser's search AI, Leo AI. I then used Pygbag to
          convert it into a browser-playable game.
        </p>
      </div>

      <div class="showcase-actions">
        <a class="showcase-button primary-button desert-button"
           href="{{ '/game.html' | relative_url }}">
          PLAY GAME ↗
        </a>
        <a class="showcase-button secondary-button"
           href="https://github.com/leo2358406/leo2358406.github.io"
           target="_blank" rel="noopener noreferrer">
          VIEW SOURCE ↗
        </a>
      </div>
    </div>
  </article>

  <!-- PROJECT 03: WEB SAFETY GAME -->
  <article class="showcase-project safety-project">

    <div class="showcase-visual safety-visual">
      <img
        src="{{ '/assets/images/projects/web-safety.gif' | relative_url }}"
        alt="Web Safety Game showing an interactive learning scene"
        loading="lazy"
      >
      <span class="visual-caption">LEARN. THINK. STAY SAFE.</span>
    </div>

    <div class="showcase-content">
      <p class="project-type">03 / WEB DEVELOPMENT · EDUCATION</p>
      <h2>Web Safety Game<span>.</span></h2>
      <p class="project-tech">HTML · JavaScript</p>

      <p class="project-summary">
        A short, interactive browser game designed to teach the basics
        of internet ethics, online law, and digital safety in about
        five minutes.
      </p>

      <div class="project-story">
        <h3>The goal</h3>
        <p>
          I wanted to make learning about online responsibility more
          engaging than simply reading through information. The game
          teaches these concepts through interactive situations.
        </p>

        <h3>How it works</h3>
        <p>
          The experience contains five questions, each accompanied
          by an interactive scene. Players receive hints when they
          answer incorrectly and get a final score at the end.
        </p>

        <h3>The build</h3>
        <p>
          I built the game using HTML and JavaScript with help from
          Claude Sonnet 5.5. The result is a quick educational
          experience that combines learning with gameplay.
        </p>
      </div>

      <div class="showcase-actions">
        <a class="showcase-button primary-button safety-button"
           href="https://leo2358406.github.io/Web-Safety-Game/index.html"
           target="_blank" rel="noopener noreferrer">
          PLAY GAME ↗
        </a>
        <a class="showcase-button secondary-button"
           href="https://github.com/leo2358406/Web-Safety-Game"
           target="_blank" rel="noopener noreferrer">
          VIEW SOURCE ↗
        </a>
      </div>
    </div>
  </article>

  <footer class="projects-footer">
    <a href="{{ '/' | relative_url }}">← BACK TO HOME</a>
  </footer>

</div>
