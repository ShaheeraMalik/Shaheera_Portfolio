<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="section-header">
        <span class="pixel-label">// PROJECTS</span>
        <h2 class="section-title">Key Projects</h2>
        <div class="title-underline"></div>
      </div>

      <div class="projects-grid">
        <div class="project-card" v-for="p in projects" :key="p.name"
          :class="{ featured: p.featured }">
          <div class="card-accent"></div>

          <div class="card-top">
            <span class="project-num">{{ p.num }}</span>
            <span class="project-badge" v-if="p.badge">{{ p.badge }}</span>
          </div>

          <h3 class="project-name">{{ p.name }}</h3>
          <p class="project-desc">{{ p.desc }}</p>

          <div class="project-highlights">
            <div class="hl" v-for="h in p.highlights" :key="h">
              <span class="hl-dot">◆</span> {{ h }}
            </div>
          </div>

          <div class="project-stack">
            <span class="stack-chip" v-for="t in p.stack" :key="t">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    num: '01',
    name: 'SAM – The Twin',
    badge: 'FYP ★',
    featured: true,
    desc: 'AI-powered Android companion app with Grok LLM API integration, mood detection via ML Kit, voice-to-text journaling, and encrypted memory vault.',
    highlights: ['Mood Detection AI', 'Voice-to-Text Journaling', 'Encrypted Memory Vault'],
    stack: ['Android Studio', 'Firebase', 'Firebase ML Kit', 'Grok LLM API'],
  },
  {
    num: '02',
    name: 'SkillSwap',
    badge: null,
    featured: false,
    desc: 'Scalable MERN freelance marketplace built on microservices architecture with JWT auth and WebSocket real-time messaging.',
    highlights: ['Microservices Architecture', 'WebSocket Real-time Chat', 'Automated CI/CD on Vercel'],
    stack: ['React.js', 'Node.js', 'MongoDB', 'WebSocket', 'JWT', 'Vercel'],
  },
  {
    num: '03',
    name: 'Video AI Pro',
    badge: null,
    featured: false,
    desc: 'AI video generation platform built with Next.js + Express.js, featuring third-party AI APIs, real-time job tracking, and SSR for SEO.',
    highlights: ['AI Video Generation', 'Real-time Job Tracking', 'SSR / SEO Optimized'],
    stack: ['Next.js', 'Express.js', 'AI APIs', 'SSR'],
  },
  {
    num: '04',
    name: 'EduConnect Pakistan',
    badge: null,
    featured: false,
    desc: 'Full-featured MERN tutoring platform with admin dashboard, analytics, multi-role access control, and scalable modular backend.',
    highlights: ['Admin Dashboard + Analytics', 'Multi-role Access Control', 'Modular Scalable Backend'],
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
  },
]
</script>

<style scoped>
.projects {
  padding: 110px 0;
  background: #08080f;
  position: relative;
  overflow: hidden;
}

.projects::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
}

.section-header {
  text-align: center;
  margin-bottom: 72px;
  position: relative;
  z-index: 1;
}

.pixel-label {
  font-family: 'Press Start 2P', monospace;
  font-size: 9px;
  color: #49B6E5;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 14px;
}

.section-title {
  font-family: 'Delius Swash Caps', cursive;
  font-size: clamp(32px, 5vw, 54px);
  color: #ffffff;
  margin-bottom: 16px;
}

.title-underline {
  width: 80px;
  height: 4px;
  background: #2A3FE5;
  margin: 0 auto;
}

/* Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  position: relative;
  z-index: 1;
}

.project-card {
  background: rgba(255,255,255,0.025);
  border: 2px solid rgba(73,182,229,0.2);
  padding: 0;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  position: relative;
  overflow: hidden;
}

.project-card:hover {
  border-color: rgba(73,182,229,0.6);
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(42,63,229,0.25), 6px 6px 0 #2A3FE5;
}

.project-card.featured {
  border-color: rgba(73,182,229,0.45);
  background: rgba(73,182,229,0.04);
}

.card-accent {
  height: 3px;
  background: linear-gradient(90deg, #2A3FE5, #49B6E5, transparent);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px 0;
}

.project-num {
  font-family: 'Press Start 2P', monospace;
  font-size: 9px;
  color: rgba(255,255,255,0.15);
  letter-spacing: 2px;
}

.project-badge {
  font-family: 'Press Start 2P', monospace;
  font-size: 7px;
  color: #08080f;
  background: #49B6E5;
  padding: 5px 10px;
}

.project-name {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 22px;
  color: #ffffff;
  padding: 12px 24px 0;
  margin-bottom: 10px;
}

.project-desc {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 14px;
  color: rgba(255,255,255,0.55);
  line-height: 1.75;
  padding: 0 24px;
  margin-bottom: 20px;
}

/* Highlights */
.project-highlights {
  padding: 0 24px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hl {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: rgba(255,255,255,0.45);
}

.hl-dot {
  color: #49B6E5;
  font-size: 7px;
  margin-right: 6px;
}

/* Stack chips */
.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  padding: 16px 24px 24px;
  border-top: 1px solid rgba(255,255,255,0.04);
}

.stack-chip {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: #49B6E5;
  border: 1px dashed rgba(73,182,229,0.4);
  padding: 4px 10px;
}

@media (max-width: 900px) {
  .projects-grid { grid-template-columns: 1fr; }
}
</style>
