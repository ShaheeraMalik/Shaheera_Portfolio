<template>
  <section id="experience" class="experience">
    <div class="container">
      <div class="section-header">
        <span class="pixel-label">// EXPERIENCE</span>
        <h2 class="section-title">Work History</h2>
        <div class="title-underline"></div>
      </div>

      <div class="timeline">
        <div class="timeline-track"></div>

        <div class="timeline-item" v-for="(exp, i) in experiences" :key="i">
          <div class="dot-wrapper">
            <div class="timeline-dot"></div>
            <div class="dot-pulse"></div>
          </div>

          <div class="exp-card">
            <div class="card-top-bar"></div>

            <div class="exp-header">
              <div class="exp-meta">
                <h3 class="exp-role">{{ exp.role }}</h3>
                <div class="exp-company-row">
                  <span class="exp-company">{{ exp.company }}</span>
                  <span class="exp-type">{{ exp.type }}</span>
                </div>
              </div>
              <div class="exp-impact">
                <div class="impact-item" v-for="imp in exp.impact" :key="imp.label">
                  <span class="impact-val">{{ imp.val }}</span>
                  <span class="impact-label">{{ imp.label }}</span>
                </div>
              </div>
            </div>

            <ul class="exp-bullets">
              <li v-for="b in exp.bullets" :key="b">{{ b }}</li>
            </ul>

            <div class="exp-tags">
              <span class="exp-tag" v-for="t in exp.tags" :key="t">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    role: 'MERN Stack Developer',
    company: 'Emlak Realty',
    type: 'Full-time',
    impact: [
      { val: '35%', label: 'Faster Load' },
      { val: '40%', label: 'Query Speed' },
    ],
    bullets: [
      'Built full-stack real-estate platform (MERN Stack); developed 20+ React components & 15+ RESTful APIs, reducing page load time by 35%.',
      'Optimized MongoDB Atlas queries for 40% faster data retrieval; applied Agile/Scrum SDLC throughout development.',
    ],
    tags: ['React.js', 'Node.js', 'MongoDB Atlas', 'Express.js', 'REST APIs', 'Agile/Scrum'],
  },
  {
    role: 'DevOps Intern',
    company: 'Systems Limited',
    type: 'Internship',
    impact: [
      { val: '60%', label: 'Setup Time ↓' },
      { val: '45%', label: 'Deploy Time ↓' },
    ],
    bullets: [
      'Deployed production infrastructure on AWS (EC2, S3) & Azure VMs; automated provisioning with Terraform, cutting setup time by 60%.',
      'Containerized 4 microservices with Docker & Kubernetes; built GitHub Actions CI/CD pipelines reducing deployment time by 45%.',
    ],
    tags: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD'],
  },
]
</script>

<style scoped>
.experience {
  padding: 110px 0;
  background: #fafafa;
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

/* Timeline */
.timeline {
  max-width: 820px;
  margin: 0 auto;
  position: relative;
  padding-left: 48px;
}

.timeline-track {
  position: absolute;
  left: 12px;
  top: 8px;
  bottom: 8px;
  width: 3px;
  background: linear-gradient(to bottom, #49B6E5, #2A3FE5, rgba(42,63,229,0.2));
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 52px;
}

.dot-wrapper {
  position: absolute;
  left: -42px;
  top: 22px;
}

.timeline-dot {
  width: 18px;
  height: 18px;
  background: #49B6E5;
  border: 3px solid #263D5B;
  border-radius: 50%;
  position: relative;
  z-index: 2;
}

.dot-pulse {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid rgba(73,182,229,0.4);
  animation: pulse-ring 2.5s ease-out infinite;
}

/* Card */
.exp-card {
  background: #ffffff;
  border: 3px solid #263D5B;
  box-shadow: 7px 7px 0 #49B6E5;
  padding: 0;
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden;
}

.exp-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 10px 10px 0 #49B6E5;
}

.card-top-bar {
  height: 4px;
  background: linear-gradient(90deg, #2A3FE5, #49B6E5);
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  padding: 28px 28px 0;
}

.exp-role {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 22px;
  color: #111827;
  margin-bottom: 6px;
}

.exp-company-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.exp-company {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #2A3FE5;
  letter-spacing: 1px;
}

.exp-type {
  font-family: 'Press Start 2P', monospace;
  font-size: 7px;
  color: white;
  background: #263D5B;
  padding: 4px 8px;
}

.exp-impact {
  display: flex;
  gap: 20px;
  flex-shrink: 0;
}

.impact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 10px 14px;
  background: rgba(73,182,229,0.06);
  border: 1px solid rgba(73,182,229,0.3);
}

.impact-val {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  color: #49B6E5;
}

.impact-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 8px;
  color: #6B7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

/* Bullets */
.exp-bullets {
  list-style: none;
  padding: 20px 28px;
  border-top: 1px solid rgba(0,0,0,0.06);
  margin-top: 20px;
}

.exp-bullets li {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 14px;
  color: #374151;
  line-height: 1.85;
  padding-left: 22px;
  position: relative;
  margin-bottom: 10px;
}

.exp-bullets li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #49B6E5;
  font-size: 12px;
}

/* Tags */
.exp-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px 28px 24px;
  border-top: 1px solid rgba(0,0,0,0.05);
}

.exp-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: #263D5B;
  background: rgba(73,182,229,0.08);
  border: 1px solid rgba(73,182,229,0.5);
  padding: 4px 10px;
}

@media (max-width: 768px) {
  .exp-header { flex-direction: column; }
  .exp-impact { flex-direction: row; }
}
</style>
