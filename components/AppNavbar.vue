<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container nav-inner">
      <a href="#hero" class="nav-logo">
        <span class="pixel-tag">SI</span>
        <span class="logo-text">Shaheera</span>
      </a>

      <button class="hamburger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Toggle menu">
        <span :class="{ rotated: menuOpen }"></span>
        <span :class="{ hidden: menuOpen }"></span>
        <span :class="{ rotated2: menuOpen }"></span>
      </button>

      <ul class="nav-links" :class="{ open: menuOpen }">
        <li v-for="link in links" :key="link.id">
          <a :href="`#${link.id}`" @click="menuOpen = false">{{ link.label }}</a>
        </li>
        <li>
          <a href="/Shaheera_Imtiaz.pdf" download class="nav-cta">Download CV</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const isScrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

onMounted(() => {
  const onScroll = () => { isScrolled.value = window.scrollY > 60 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(8, 8, 20, 0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 12px 0;
  border-bottom: 1px dashed rgba(42, 63, 229, 0.35);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
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
  display: inline-block;
}

.logo-text {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 22px;
  color: white;
  font-weight: 700;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-links a {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.75);
  transition: color 0.25s;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #49B6E5;
  transition: width 0.25s;
}

.nav-links a:hover {
  color: #49B6E5;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-cta {
  font-family: 'Press Start 2P', monospace !important;
  font-size: 8px !important;
  color: #49B6E5 !important;
  border: 1px dashed #49B6E5;
  padding: 8px 12px;
  transition: all 0.2s !important;
}

.nav-cta:hover {
  background: #49B6E5 !important;
  color: #0a0a0a !important;
}

.nav-cta::after { display: none !important; }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger span.rotated { transform: rotate(45deg) translate(5px, 5px); }
.hamburger span.hidden { opacity: 0; transform: scaleX(0); }
.hamburger span.rotated2 { transform: rotate(-45deg) translate(5px, -5px); }

@media (max-width: 768px) {
  .hamburger { display: flex; }

  .nav-links {
    display: none;
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: rgba(8, 8, 20, 0.98);
    flex-direction: column;
    align-items: flex-start;
    padding: 28px 24px;
    gap: 24px;
    border-bottom: 2px dashed rgba(42, 63, 229, 0.5);
  }

  .nav-links.open { display: flex; }
}
</style>
