<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="section-header">
        <span class="pixel-label">// SKILLS</span>
        <h2 class="section-title">Technical Arsenal</h2>
        <div class="title-underline"></div>
      </div>

      <div class="skills-grid">
        <div class="skill-cat" v-for="cat in categories" :key="cat.name">
          <div class="cat-header">
            <span class="cat-icon">{{ cat.icon }}</span>
            <span class="cat-name">{{ cat.name }}</span>
          </div>
          <div class="tags">
            <span class="tag" v-for="s in cat.skills" :key="s">{{ s }}</span>
          </div>
        </div>
      </div>

      <!-- Proficiency bars -->
      <div class="proficiency">
        <h3 class="prof-title">Core Proficiency</h3>
        <div class="bar-item" v-for="item in proficiency" :key="item.name">
          <div class="bar-meta">
            <span class="bar-name">{{ item.name }}</span>
            <span class="bar-pct">{{ item.pct }}%</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" :style="{ width: item.pct + '%', background: item.color }"></div>
            <div class="bar-dots">
              <span v-for="d in 20" :key="d" class="dot" :class="{ active: d <= Math.floor(item.pct / 5) }"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    icon: '🎨',
    name: 'Frontend',
    skills: ['React.js', 'Next.js', 'Vue.js', 'Nuxt.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'],
  },
  {
    icon: '⚙️',
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Python (Flask)', 'Microservices', 'Java', 'C#'],
  },
  {
    icon: '☁️',
    name: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'AWS (EC2, S3)', 'Azure VMs', 'GitHub Actions', 'CI/CD', 'Vercel', 'Linux'],
  },
  {
    icon: '🗄️',
    name: 'Databases & AI',
    skills: ['MongoDB Atlas', 'MySQL', 'Firebase', 'OpenAI API', 'Grok LLM API', 'Prompt Engineering'],
  },
  {
    icon: '📋',
    name: 'Practices',
    skills: ['Agile', 'Scrum', 'SDLC', 'OOP', 'Data Structures', 'SQA', 'Software Architecture', 'Git'],
  },
]

const proficiency = [
  { name: 'React.js / Next.js / Vue.js', pct: 90, color: '#49B6E5' },
  { name: 'Node.js / Express.js', pct: 88, color: '#2A3FE5' },
  { name: 'MongoDB / Firebase', pct: 85, color: '#16A34A' },
  { name: 'Docker / Kubernetes', pct: 80, color: '#D97706' },
  { name: 'AWS / Azure / Terraform', pct: 78, color: '#F4B9B0' },
]
</script>

<style scoped>
.skills {
  padding: 110px 0;
  background: #08080f;
  position: relative;
  overflow: hidden;
}

.skills::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 28px 28px;
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

/* Skills grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 72px;
  position: relative;
  z-index: 1;
}

.skill-cat {
  border: 2px dashed rgba(42, 63, 229, 0.45);
  padding: 28px;
  background: rgba(255,255,255,0.02);
  transition: border-color 0.25s, background 0.25s;
}

.skill-cat:hover {
  border-color: #49B6E5;
  background: rgba(73,182,229,0.04);
}

.cat-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.cat-icon { font-size: 18px; }

.cat-name {
  font-family: 'Press Start 2P', monospace;
  font-size: 9px;
  color: #49B6E5;
  letter-spacing: 1px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: rgba(255,255,255,0.75);
  background: rgba(42, 63, 229, 0.15);
  border: 1px solid rgba(42, 63, 229, 0.35);
  padding: 4px 11px;
  transition: all 0.2s;
  cursor: default;
}

.tag:hover {
  background: rgba(73,182,229,0.18);
  border-color: #49B6E5;
  color: #49B6E5;
}

/* Proficiency */
.proficiency {
  max-width: 680px;
  margin: 0 auto;
  padding: 40px 44px;
  border: 2px solid rgba(42,63,229,0.3);
  background: rgba(255,255,255,0.015);
  position: relative;
  z-index: 1;
}

.proficiency::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, #2A3FE5, #49B6E5, transparent);
}

.prof-title {
  font-family: 'Press Start 2P', monospace;
  font-size: 9px;
  color: #49B6E5;
  letter-spacing: 2px;
  margin-bottom: 36px;
  text-align: center;
}

.bar-item { margin-bottom: 24px; }

.bar-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.bar-name {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 14px;
  color: rgba(255,255,255,0.8);
}

.bar-pct {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: rgba(255,255,255,0.35);
}

.bar-track {
  height: 8px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  position: relative;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  transition: width 1.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.bar-fill::after {
  content: '';
  position: absolute;
  top: 0; right: 0;
  width: 3px; height: 100%;
  background: rgba(255,255,255,0.6);
  border-radius: 1px;
}

.bar-dots {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  gap: 0;
  pointer-events: none;
}

.dot {
  flex: 1;
  height: 3px;
  background: transparent;
}

@media (max-width: 768px) {
  .skills-grid { grid-template-columns: 1fr; }
  .proficiency { padding: 24px; }
}
</style>
