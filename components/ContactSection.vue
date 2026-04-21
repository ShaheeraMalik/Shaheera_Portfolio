<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header">
        <span class="pixel-label">// CONTACT</span>
        <h2 class="section-title">Get In Touch</h2>
        <div class="title-underline"></div>
        <p class="contact-sub">Open to opportunities. Let's build something great together.</p>
      </div>

      <div class="contact-grid">
        <!-- Info panel -->
        <div class="contact-info">
          <h3 class="info-heading">Contact Info</h3>

          <div class="info-items">
            <a v-for="item in contactItems" :key="item.label"
              :href="item.href" class="info-item">
              <div class="item-icon-wrap">{{ item.icon }}</div>
              <div>
                <div class="item-label">{{ item.label }}</div>
                <div class="item-value">{{ item.value }}</div>
              </div>
            </a>
          </div>

          <div class="socials-heading">Find Me Online</div>
          <div class="socials">
            <a v-for="s in socials" :key="s.name"
              :href="s.href" target="_blank" rel="noopener" class="social-btn">
              {{ s.name }}
            </a>
          </div>

          <!-- Small avatar -->
          <div class="contact-avatar">
            <img src="/images/avatar.jpg" alt="Shaheera" />
            <div class="avatar-caption">Shaheera Imtiaz</div>
            <div class="avatar-sub">Full Stack Developer</div>
          </div>
        </div>

        <!-- Form -->
        <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
          <div class="form-top-bar"></div>
          <div class="form-body">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Name *</label>
                <input v-model="form.name" type="text" class="form-input"
                  placeholder="Your name" required />
              </div>
              <div class="form-group">
                <label class="form-label">Email *</label>
                <input v-model="form.email" type="email" class="form-input"
                  placeholder="your@email.com" required />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Subject</label>
              <input v-model="form.subject" type="text" class="form-input"
                placeholder="What's this about?" />
            </div>

            <div class="form-group">
              <label class="form-label">Message *</label>
              <textarea v-model="form.message" class="form-textarea"
                placeholder="Tell me about your project or opportunity..."
                rows="5" required></textarea>
            </div>

            <p v-if="error" class="form-error">{{ error }}</p>
            <button type="submit" class="btn-submit" :disabled="sending || sent">
              <span v-if="sending">Sending...</span>
              <span v-else-if="sent">✓ &nbsp;Message Sent!</span>
              <span v-else>Send Message &nbsp;▶</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = reactive({ name: '', email: '', subject: '', message: '' })
const sent = ref(false)
const sending = ref(false)
const error = ref('')

const handleSubmit = async () => {
  sending.value = true
  error.value = ''
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form },
    })
    sent.value = true
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
    setTimeout(() => { sent.value = false }, 5000)
  } catch (e) {
    error.value = 'Failed to send. Email me directly: shaheeramalik533@gmail.com'
  } finally {
    sending.value = false
  }
}

const contactItems = [
  { icon: '📧', label: 'Email', value: 'shaheeramalik533@gmail.com', href: 'mailto:shaheeramalik533@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+92 309 8439041', href: 'tel:+923098439041' },
  { icon: '📍', label: 'Location', value: 'Multan, Pakistan', href: '#' },
]

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shaheera-malik-35b002318' },
  { name: 'GitHub', href: 'https://github.com/shaheeramalik' },
]
</script>

<style scoped>
.contact {
  padding: 110px 0;
  background: #08080f;
  position: relative;
  overflow: hidden;
}

.contact::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px);
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
  margin: 0 auto 16px;
}

.contact-sub {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 16px;
  color: rgba(255,255,255,0.4);
}

/* Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 56px;
  position: relative;
  z-index: 1;
}

/* Info panel */
.info-heading {
  font-family: 'Press Start 2P', monospace;
  font-size: 9px;
  color: #49B6E5;
  letter-spacing: 2px;
  margin-bottom: 32px;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 36px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  text-decoration: none;
  transition: opacity 0.2s;
}

.info-item:hover { opacity: 0.75; }

.item-icon-wrap {
  font-size: 20px;
  width: 40px;
  height: 40px;
  background: rgba(42,63,229,0.12);
  border: 1px dashed rgba(42,63,229,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.item-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  color: rgba(255,255,255,0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 3px;
}

.item-value {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 14px;
  color: rgba(255,255,255,0.8);
}

.socials-heading {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  color: rgba(255,255,255,0.25);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.socials {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}

.social-btn {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: rgba(255,255,255,0.7);
  border: 1px dashed rgba(255,255,255,0.2);
  padding: 10px 14px;
  transition: all 0.2s;
  letter-spacing: 1px;
}

.social-btn:hover {
  border-color: #49B6E5;
  color: #49B6E5;
}

/* Contact avatar */
.contact-avatar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  margin-top: 8px;
}

.contact-avatar img {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid #49B6E5;
  object-fit: cover;
}

.avatar-caption {
  font-family: 'Delius Swash Caps', cursive;
  font-size: 15px;
  color: white;
}

.avatar-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  color: rgba(255,255,255,0.35);
}

/* Form */
.contact-form {
  background: rgba(255,255,255,0.025);
  border: 2px solid rgba(42,63,229,0.3);
  overflow: hidden;
}

.form-top-bar {
  height: 3px;
  background: linear-gradient(90deg, #2A3FE5, #49B6E5);
}

.form-body { padding: 36px 36px 32px; }

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group { margin-bottom: 20px; }

.form-label {
  display: block;
  font-family: 'Press Start 2P', monospace;
  font-size: 7px;
  color: rgba(255,255,255,0.35);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.form-input,
.form-textarea {
  width: 100%;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.9);
  font-family: 'Delius Swash Caps', cursive;
  font-size: 14px;
  padding: 12px 16px;
  outline: none;
  transition: border-color 0.2s, background 0.2s;
  resize: none;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255,255,255,0.18);
}

.form-input:focus,
.form-textarea:focus {
  border-color: #49B6E5;
  background: rgba(73,182,229,0.04);
}

.form-error {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #DC2626;
  margin-bottom: 12px;
  padding: 10px 14px;
  border: 1px solid rgba(220,38,38,0.3);
  background: rgba(220,38,38,0.06);
}

.btn-submit {
  width: 100%;
  padding: 16px;
  background: #2A3FE5;
  color: white;
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  border: none;
  cursor: pointer;
  letter-spacing: 2px;
  transition: background 0.2s, color 0.2s;
  margin-top: 4px;
}

.btn-submit:hover:not(:disabled) {
  background: #49B6E5;
  color: #08080f;
}

.btn-submit:disabled {
  background: #16A34A;
  cursor: default;
}

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .form-body { padding: 24px; }
}
</style>
