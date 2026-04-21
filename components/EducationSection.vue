<template>
  <section id="education" class="education">
    <div class="container">
      <div class="section-header">
        <span class="pixel-label">// EDUCATION & ACHIEVEMENTS</span>
        <h2 class="section-title">Academic Background</h2>
        <div class="title-underline"></div>
      </div>

      <!-- Education card -->
      <div class="edu-card">
        <div class="edu-left">
          <div class="edu-icon-wrap">🎓</div>
        </div>
        <div class="edu-right">
          <div class="edu-degree">BS Software Engineering</div>
          <div class="edu-uni">FAST NUCES — Chiniot-Faisalabad Campus</div>
          <div class="edu-period">2022 – Present</div>

          <div class="coursework-section">
            <span class="cw-label">Relevant Coursework</span>
            <div class="cw-tags">
              <span class="cw-tag" v-for="c in coursework" :key="c">{{ c }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications & Achievements -->
      <div class="certs-title-row">
        <span class="pixel-label" style="text-align:left; display:inline-block;">// CERTIFICATIONS & ACHIEVEMENTS</span>
      </div>

      <div class="certs-grid">
        <div class="cert-card" v-for="cert in certs" :key="cert.title">
          <div class="cert-top-bar"></div>
          <div class="cert-body">
            <div class="cert-icon">{{ cert.icon }}</div>
            <div class="cert-content">
              <div class="cert-title">{{ cert.title }}</div>
              <div class="cert-issuer">{{ cert.issuer }}</div>
              <p class="cert-desc">{{ cert.desc }}</p>
            </div>
            <div class="cert-year">{{ cert.year }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const coursework = [
  'Web Engineering', 'DevOps', 'Cloud Computing',
  'Data Structures', 'Software Architecture',
  'Artificial Intelligence', 'SQA', 'OOP',
]

const certs = [
  {
    icon: '🤖',
    title: 'Google AI Essentials',
    issuer: 'Google / Coursera',
    desc: 'Generative AI tools, prompt engineering & responsible AI practices.',
    year: '2026',
  },
  {
    icon: '🏆',
    title: 'NSCT — Top 7% Nationwide',
    issuer: 'HEC · MoITT · PSEB · P@SHA · NCEAC',
    desc: 'Scored 93.3% on Pakistan\'s national industry-endorsed engineering assessment.',
    year: '93.3%',
  },
]
</script>

<style scoped>
.education {
  padding: 110px 0;
  background: #f0f7ff;
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

/* Edu card */
.edu-card {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  background: #ffffff;
  border: 3px solid #263D5B;
  box-shadow: 9px 9px 0 #49B6E5;
  padding: 40px;
  margin-bottom: 56px;
  max-width: 820px;
  margin-left: auto;
  margin-right: auto;
}

.edu-icon-wrap {
  font-size: 52px;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 4px;
}

.edu-degree {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 26px;
  color: #111827;
  font-weight: 700;
  margin-bottom: 6px;
}

.edu-uni {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: #2A3FE5;
  margin-bottom: 6px;
}

.edu-period {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: #9CA3AF;
  margin-bottom: 24px;
}

.cw-label {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: #263D5B;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 12px;
}

.cw-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.cw-tag {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 13px;
  color: #263D5B;
  background: rgba(73,182,229,0.1);
  border: 2px solid rgba(73,182,229,0.5);
  padding: 5px 14px;
  border-radius: 2px;
}

/* Cert title row */
.certs-title-row {
  max-width: 820px;
  margin: 0 auto 24px;
}

/* Certs grid */
.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 24px;
  max-width: 820px;
  margin: 0 auto;
}

.cert-card {
  background: #ffffff;
  border: 3px solid #49B6E5;
  box-shadow: 6px 6px 0 #263D5B;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cert-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 9px 9px 0 #263D5B;
}

.cert-top-bar {
  height: 4px;
  background: linear-gradient(90deg, #49B6E5, #2A3FE5);
}

.cert-body {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
  position: relative;
}

.cert-icon {
  font-size: 36px;
  flex-shrink: 0;
  line-height: 1;
  margin-top: 2px;
}

.cert-title {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 17px;
  color: #111827;
  font-weight: 700;
  margin-bottom: 4px;
}

.cert-issuer {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  color: #6B7280;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
}

.cert-desc {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 13px;
  color: #374151;
  line-height: 1.7;
}

.cert-year {
  position: absolute;
  top: 16px;
  right: 16px;
  font-family: 'Press Start 2P', monospace;
  font-size: 9px;
  color: white;
  background: #2A3FE5;
  padding: 6px 10px;
}

@media (max-width: 768px) {
  .edu-card { flex-direction: column; padding: 28px; }
  .certs-grid { grid-template-columns: 1fr; }
}
</style>
