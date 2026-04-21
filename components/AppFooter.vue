<template>
  <footer class="footer">
    <div class="footer-line"></div>
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="pixel-tag">SI</span>
        <span class="brand-name">Shaheera Imtiaz</span>
      </div>

      <div class="footer-links">
        <a v-for="link in links" :key="link.id" :href="`#${link.id}`">{{ link.label }}</a>
      </div>

      <div class="footer-copy">
        <span class="tech-badge">Nuxt.js · Vue.js · Doodle × Pacman</span>
        <span class="copy-text">© 2026 Shaheera Imtiaz. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
</script>

<style scoped>
.footer {
  background: #050510;
  padding: 44px 0 32px;
  position: relative;
}

.footer-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(42,63,229,0.5), rgba(73,182,229,0.5), transparent);
  margin-bottom: 40px;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pixel-tag {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  background: #2A3FE5;
  color: white;
  padding: 7px 9px;
}

.brand-name {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 20px;
  color: rgba(255,255,255,0.9);
}

.footer-links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-links a {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 13px;
  color: rgba(255,255,255,0.4);
  transition: color 0.2s;
}

.footer-links a:hover { color: #49B6E5; }

.footer-copy {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.tech-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  color: rgba(255,255,255,0.25);
  letter-spacing: 1px;
}

.copy-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  color: rgba(255,255,255,0.18);
}
</style>
