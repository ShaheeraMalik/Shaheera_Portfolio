<template>
  <section id="hero" class="hero">
    <!-- Dot grid background -->
    <div class="dot-grid" aria-hidden="true"></div>

    <!-- Floating blobs -->
    <div class="blob blob-1" aria-hidden="true"></div>
    <div class="blob blob-2" aria-hidden="true"></div>

    <div class="container hero-inner">
      <!-- Left: Text -->
      <div class="hero-content">
        <div class="pixel-badge">
          <span class="blink">▶</span>&nbsp; Full Stack Developer
        </div>

        <h1 class="hero-name">
          Shaheera<br />
          <span class="name-accent">Imtiaz</span>
        </h1>

        <p class="hero-tagline">MERN Stack &nbsp;·&nbsp; DevOps &nbsp;·&nbsp; Cloud &nbsp;·&nbsp; AI</p>

        <p class="hero-desc">
          Building scalable web applications with modern technologies.
          DevOps Intern at Systems Limited. Ranked top 7% nationwide on NSCT with 93.3%.
        </p>

        <div class="hero-ctas">
          <a href="#projects" class="btn-doodle">View Projects</a>
          <a href="#contact" class="btn-pac">Hire Me ▶</a>
        </div>

        <div class="hero-stats">
          <div class="stat" v-for="s in stats" :key="s.label">
            <span class="stat-num">{{ s.value }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>

      <!-- Right: Avatar -->
      <div class="hero-visual">
        <div class="avatar-outer">
          <div class="orbit-ring" aria-hidden="true">
            <span class="orbit-dot" v-for="i in 8" :key="i" :style="orbitStyle(i)"></span>
          </div>
          <div class="avatar-frame">
            <img src="/images/avatar.jpg" alt="Shaheera Imtiaz" class="avatar-img" />
          </div>
          <div class="avatar-glow" aria-hidden="true"></div>
        </div>

        <div class="tech-chips" aria-hidden="true">
          <div class="chip chip-1">React.js</div>
          <div class="chip chip-2">Node.js</div>
          <div class="chip chip-3">Docker</div>
          <div class="chip chip-4">AWS</div>
          <div class="chip chip-5">MongoDB</div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-hint" aria-hidden="true">
      <span class="scroll-text">scroll</span>
      <div class="scroll-bar"></div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '20+', label: 'Components' },
  { value: '15+', label: 'APIs Built' },
  { value: '93.3%', label: 'NSCT Score' },
]

const orbitStyle = (i) => {
  const angle = (i / 8) * 360
  return {
    transform: `rotate(${angle}deg) translateX(110px)`,
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  background: #08080f;
  background-image:
    radial-gradient(ellipse at 15% 55%, rgba(42, 63, 229, 0.18) 0%, transparent 55%),
    radial-gradient(ellipse at 85% 15%, rgba(73, 182, 229, 0.12) 0%, transparent 45%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 100px 0 80px;
}

/* Dot grid */
.dot-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
}

/* Blobs */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.blob-1 {
  width: 500px; height: 500px;
  background: rgba(42, 63, 229, 0.12);
  top: -100px; left: -100px;
}
.blob-2 {
  width: 400px; height: 400px;
  background: rgba(73, 182, 229, 0.08);
  bottom: -80px; right: -60px;
}

/* Hero layout */
.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;
}

/* Pixel badge */
.pixel-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: #49B6E5;
  border: 2px dashed rgba(42, 63, 229, 0.7);
  background: rgba(42, 63, 229, 0.08);
  padding: 10px 16px;
  margin-bottom: 28px;
  letter-spacing: 1px;
}

.blink {
  color: #F4B9B0;
  animation: blink 1s steps(1) infinite;
}

/* Name */
.hero-name {
  font-family: 'Delius Swash Caps', cursive;
  font-size: clamp(52px, 8vw, 96px);
  color: #ffffff;
  line-height: 1.05;
  margin-bottom: 20px;
  letter-spacing: -1px;
}

.name-accent {
  color: #49B6E5;
  position: relative;
  display: inline-block;
}

.name-accent::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, #2A3FE5, #49B6E5);
  transform: skewX(-3deg);
  border-radius: 2px;
}

/* Tagline */
.hero-tagline {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: rgba(255,255,255,0.4);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

/* Desc */
.hero-desc {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 16px;
  color: rgba(255,255,255,0.65);
  max-width: 440px;
  line-height: 1.9;
  margin-bottom: 40px;
}

/* CTAs */
.hero-ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 52px;
}

/* Stats */
.hero-stats {
  display: flex;
  gap: 36px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-num {
  font-family: 'Press Start 2P', monospace;
  font-size: 20px;
  color: #49B6E5;
  line-height: 1;
}

.stat-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  color: rgba(255,255,255,0.35);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

/* Avatar visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.avatar-outer {
  position: relative;
  width: 380px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-glow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(73,182,229,0.15) 0%, transparent 70%);
  animation: pulse-ring 3s ease-in-out infinite;
}

.orbit-ring {
  position: absolute;
  width: 260px;
  height: 260px;
  border: 1px dashed rgba(42,63,229,0.3);
  border-radius: 50%;
  animation: spin 24s linear infinite;
}

.orbit-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #2A3FE5;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  margin: -4px 0 0 -4px;
}

.avatar-frame {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #49B6E5;
  box-shadow:
    0 0 0 10px rgba(73,182,229,0.08),
    8px 8px 0 #2A3FE5,
    0 24px 80px rgba(42,63,229,0.35);
  animation: float 5s ease-in-out infinite;
  flex-shrink: 0;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Tech chips */
.tech-chips {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.chip {
  position: absolute;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  background: rgba(8,8,15,0.92);
  border: 1px solid rgba(73,182,229,0.5);
  color: #49B6E5;
  padding: 5px 11px;
  white-space: nowrap;
  backdrop-filter: blur(6px);
}

.chip-1 { top: 8%; right: -10px; animation: float 3.2s ease-in-out infinite; }
.chip-2 { top: 28%; right: -20px; animation: float 4s ease-in-out 0.5s infinite; }
.chip-3 { top: 50%; right: -8px; animation: float 3.6s ease-in-out 1s infinite; }
.chip-4 { bottom: 28%; right: -15px; animation: float 4.2s ease-in-out 1.5s infinite; }
.chip-5 { bottom: 8%; right: -5px; animation: float 3s ease-in-out 0.8s infinite; }

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.scroll-text {
  font-family: 'Press Start 2P', monospace;
  font-size: 6px;
  color: rgba(255,255,255,0.25);
  letter-spacing: 3px;
}

.scroll-bar {
  width: 1px;
  height: 44px;
  background: linear-gradient(to bottom, rgba(73,182,229,0.6), transparent);
  animation: scroll-pulse 2s ease-in-out infinite;
}

/* Responsive */
@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 48px;
  }

  .hero-visual { order: -1; }

  .avatar-outer { width: 280px; height: 280px; }
  .avatar-frame { width: 220px; height: 220px; }
  .orbit-ring { width: 200px; height: 200px; }

  .hero-ctas, .hero-stats { justify-content: center; }
  .hero-desc { margin: 0 auto 40px; }
  .pixel-badge { display: inline-flex; }
  .tech-chips { display: none; }
}
</style>
