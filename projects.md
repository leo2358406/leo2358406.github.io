---
title: Projects
permalink: /projects/
---

<div class="portfolio-projects">

  <div class="projects-heading">
    <p class="eyebrow">/ ARCHIVE / PROJECTS</p>
    <h1>My Projects<span class="accent">.</span></h1>
    <p class="projects-intro">
      A collection of things I've built, experimented with, and learned from.
    </p>
  </div>

  <div class="project-grid">

<article class="project-card">
  <div class="project-icon">🎮</div>
  <p class="project-type">GAME DEVELOPMENT</p>
  <h2>Desert Bull Dodge</h2>
  <p>
    A browser-playable Python game built with Pygame and Pygbag.
    Play it directly in your browser without downloading anything.
  </p>
  <a class="project-link" href="{{ '/game.html' | relative_url }}">
    PLAY GAME <span>↗</span>
  </a>
</article>

<article class="project-card">
  <div class="project-icon">☕</div>
  <p class="project-type">JAVA DEVELOPMENT</p>
  <h2>Java Projects</h2>
  <p>
    Explore my Java programming projects, experiments, and other
    development work.
  </p>
  <a class="project-link" href="{{ '/java-projects/' | relative_url }}">
    EXPLORE PROJECTS <span>↗</span>
  </a>
</article>

<article class="project-card">
  <div class="project-icon">⌘</div>
  <p class="project-type">WEB DEVELOPMENT</p>
  <h2>Personal Website</h2>
  <p>
    This portfolio — built to showcase my projects, programming
    experiments, and development journey.
  </p>
  <a class="project-link"
     href="https://github.com/leo2358406/leo2358406.github.io"
     target="_blank" rel="noopener noreferrer">
    VIEW SOURCE <span>↗</span>
  </a>
</article>

  </div>

  <div class="projects-footer">
    <a href="{{ '/' | relative_url }}">← BACK TO HOME</a>
  </div>

</div>

<style>
.portfolio-projects {
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 24px 64px;
  color: var(--text-color, #e6edf3);
}

.projects-heading {
  margin-bottom: 42px;
}

.projects-heading .eyebrow,
.project-type {
  color: #00f5a0;
  font-family: monospace;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
}

.projects-heading h1 {
  margin: 12px 0;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.05em;
}

.projects-heading .accent {
  color: #00f5a0;
}

.projects-intro {
  max-width: 600px;
  opacity: 0.75;
  line-height: 1.8;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 270px), 1fr));
  gap: 22px;
}


.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 26px;
  min-height: 290px;
  border: 1px solid rgba(0, 245, 160, 0.2);
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.55);
  overflow: hidden;
  isolation: isolate;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

/* Mouse-following spotlight */
.project-card::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(
    350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(0, 245, 160, 0.14),
    transparent 65%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover::after {
  opacity: 1;
}

/* Keep card content above the glow */
.project-card > * {
  position: relative;
  z-index: 1;
}


.project-card:hover {
  border-color: #00f5a0;
  transform: translateY(-4px);
}

.project-icon {
  font-size: 2rem;
  margin-bottom: 18px;
}

.project-card h2 {
  margin: 8px 0;
  font-size: 1.35rem;
}

.project-card p:not(.project-type) {
  line-height: 1.75;
  opacity: 0.78;
}

.project-link {
  margin-top: auto;
  padding-top: 20px;
  color: #00f5a0;
  font-family: monospace;
  font-weight: 700;
  text-decoration: none;
}

.project-link:hover,
.projects-footer a:hover {
  text-decoration: underline;
}

.project-link span {
  margin-left: 6px;
}

.projects-footer {
  margin-top: 42px;
}

.projects-footer a {
  color: #00f5a0;
  font-family: monospace;
  text-decoration: none;
}

@media (max-width: 480px) {
  .portfolio-projects {
    padding: 30px 16px 44px;
  }

  .project-card {
    padding: 21px;
  }
}
</style>