<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header">
        <span class="pixel-label">// ABOUT ME</span>
        <h2 class="section-title">Who Am I?</h2>
        <div class="title-underline"></div>
      </div>

      <div class="about-grid">
        <!-- Image side -->
        <div class="about-image-side">
          <div class="image-frame">
            <img src="/images/avatar2.jpg" alt="Shaheera Imtiaz" />
            <div class="deco-bar deco-top"></div>
            <div class="deco-bar deco-right"></div>
          </div>
          <div class="status-badge">
            <span class="badge-dot"></span>
            <div>
              <div class="badge-line">Available for</div>
              <div class="badge-value">Opportunities</div>
            </div>
          </div>
        </div>

        <!-- Content side -->
        <div class="about-content">
          <span class="greeting-chip">Hello, World! 👋</span>

          <p class="about-text">
            I'm a <strong>Software Engineer & Full Stack Developer</strong> from Multan, Pakistan,
            specializing in <strong>MERN Stack, DevOps, and Cloud Computing</strong>.
            Currently pursuing BS Software Engineering at <strong>FAST NUCES</strong>.
          </p>

          <p class="about-text">
            Built full-stack real-estate platforms, AI-powered companion apps, and freelance
            marketplaces. As <strong>DevOps Intern at Systems Limited</strong>, deployed
            production infrastructure on AWS & Azure — cutting setup time by 60%.
          </p>

          <p class="about-text">
            Ranked <strong>top 7% nationwide</strong> on Pakistan's NSCT scoring 93.3% —
            an industry-endorsed assessment by HEC, MoITT, PSEB, P@SHA & NCEAC.
          </p>

          <div class="info-grid">
            <div class="info-item" v-for="item in info" :key="item.label">
              <span class="info-label">{{ item.label }}</span>
              <span class="info-value">{{ item.value }}</span>
            </div>
          </div>

          <div class="about-actions">
            <a href="/Shaheera_Imtiaz.pdf" download class="btn-doodle">
              ↓ &nbsp;Download CV
            </a>
            <a href="#contact" class="btn-pac">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const info = [
  { label: 'Location', value: 'Multan, Pakistan' },
  { label: 'University', value: 'FAST NUCES' },
  { label: 'Degree', value: 'BS Software Engineering' },
  { label: 'Batch', value: '2022 – Present' },
  { label: 'Email', value: 'shaheeramalik533@gmail.com' },
  { label: 'Focus', value: 'MERN · DevOps · AI' },
]
</script>

<style scoped>
.about {
  padding: 110px 0;
  background: #ffffff;
}

.section-header {
  text-align: center;
  margin-bottom: 72px;
}

.pixel-label {
  font-family: 'Press Start 2P', monospace;
  font-size: 9px;
  color: #2A3FE5;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 14px;
}

.section-title {
  font-family: 'Delius Swash Caps', cursive;
  font-size: clamp(32px, 5vw, 54px);
  color: #111827;
  margin-bottom: 16px;
}

.title-underline {
  width: 80px;
  height: 4px;
  background: #49B6E5;
  margin: 0 auto;
  border-radius: 2px;
  box-shadow: 6px 0 0 #263D5B;
}

/* Grid */
.about-grid {
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 80px;
  align-items: center;
}

/* Image side */
.about-image-side {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.image-frame {
  position: relative;
  width: 100%;
  max-width: 380px;
}

.image-frame img {
  width: 100%;
  border-radius: 16px;
  border: 4px solid #49B6E5;
  box-shadow: 9px 9px 0 #263D5B;
  display: block;
}

.deco-bar {
  position: absolute;
  background: #263D5B;
}

.deco-top {
  width: 64px;
  height: 7px;
  top: -14px;
  left: 24px;
  border-radius: 3px;
}

.deco-right {
  width: 7px;
  height: 64px;
  bottom: 24px;
  right: -14px;
  background: #49B6E5;
  border-radius: 3px;
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #08080f;
  color: white;
  padding: 14px 20px;
  border: 2px dashed #2A3FE5;
  width: fit-content;
}

.badge-dot {
  width: 10px;
  height: 10px;
  background: #16A34A;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 8px #16A34A;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 6px #16A34A; }
  50% { box-shadow: 0 0 14px #16A34A; }
}

.badge-line {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  color: rgba(255,255,255,0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2px;
}

.badge-value {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  color: #49B6E5;
}

/* Content side */
.greeting-chip {
  display: inline-block;
  font-family: 'Press Start 2P', monospace;
  font-size: 9px;
  color: #49B6E5;
  background: rgba(73, 182, 229, 0.06);
  border: 2px solid #49B6E5;
  box-shadow: 3px 3px 0 #263D5B;
  padding: 9px 14px;
  margin-bottom: 28px;
  letter-spacing: 1px;
}

.about-text {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 16px;
  color: #374151;
  line-height: 1.95;
  margin-bottom: 18px;
}

.about-text strong {
  color: #111827;
}

/* Info grid */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 32px 0;
  padding: 24px 28px;
  background: #f8fbff;
  border: 3px solid #263D5B;
  box-shadow: 6px 6px 0 #49B6E5;
  border-radius: 4px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.info-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  color: #9CA3AF;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.info-value {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 14px;
  color: #111827;
  font-weight: 600;
}

.about-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

@media (max-width: 960px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .about-image-side {
    align-items: center;
  }

  .image-frame {
    max-width: 300px;
  }
}
</style>
