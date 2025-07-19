<template>
  <footer class="footer text-white pt-5 pb-4">
    <BContainer>
      <BRow>
        <!-- Company Info Section -->

        <BCol md="3" class="text-center text-md-start mb-3 mb-md-0">
          <BImg src="/dark-logo.png" height="56" style="margin-top: -16px; margin-left: -16px;"></BImg>
          <p class="footer-text pe-4">
            We are a leading carpentry company dedicated to providing high-quality
            craftsmanship and exceptional service. Our team of skilled craftsmen is
            committed to bringing your vision to life.
          </p>
        </BCol>

        <!-- About Section -->
        <BCol md="3" class="text-center text-md-start mb-3 mb-md-0">
          <h5 class="text-white fw-bold">Quick Links</h5>
          <div class="d-flex flex-column align-items-center align-items-md-start mt-2">
            <a href="/" class="footer-link">Home</a>
            <a href="/about" class="footer-link">About Us</a>
            <a href="/services" class="footer-link">Services</a>
            <a href="/projects" class="footer-link">Projects</a>
            <a href="/contact-us" class="footer-link">Contact Us</a>
          </div>
        </BCol>

        <!-- Social Media Section -->
        <BCol md="3" class="text-center text-md-start mb-3 mb-md-0">
          <h5 class="text-white fw-bold">Office Address</h5>
          <p class="footer-text mb-4">1234 Wood Street, Craftsville, CA 12345</p>
          <h5 class="text-white fw-bold">Contact Us</h5>
          <p class="footer-text">
            <i class="mdi mdi-16px mdi-email text-white me-3"></i>
            <a href="mailto:info@yourcompany.com" class="footer-link"
              >info@yourcompany.com</a
            >
          </p>
          <p class="footer-text">
            <i class="mdi mdi-16px mdi-phone text-white me-3"></i>
            <a href="tel:+1234567890" class="footer-link">+1 234 567 890</a>
          </p>
        </BCol>

        <!-- Contact and Links Section -->
        <BCol md="3" class="text-center text-md-start">
          <h5 class="text-white fw-bold">Follow Us</h5>
          <div class="d-flex gap-3 mt-2 justify-content-center justify-content-md-start">
            <a href="#" class="text-white">
              <i class="footer-link mdi mdi-facebook mdi-24px"></i>
            </a>
            <a href="#" class="text-white">
              <i class="footer-link mdi mdi-twitter mdi-24px"></i>
            </a>
            <a href="#" class="text-white">
              <i class="footer-link mdi mdi-instagram mdi-24px"></i>
            </a>
            <a href="#" class="text-white">
              <i class="footer-link mdi mdi-linkedin mdi-24px"></i>
            </a>
            <a href="#" class="text-white">
              <i class="footer-link mdi mdi-pinterest mdi-24px"></i>
            </a>
          </div>
          <h5 class="text-white fw-bold mt-4">Newsletter</h5>

          <BFormInput
            type="email"
            placeholder="Enter your email"
            class="mb-2"
            aria-label="Email input"
          />
          <BButton class="mb-4" variant="light">Subscribe</BButton>
        </BCol>
        <BCol md="12" class="text-center mt-4">
          <p class="footer-text">&copy; 2025 Your Company Name. All rights reserved.</p>
        </BCol>
      </BRow>
    </BContainer>
  </footer>
</template>
<style scoped lang="scss">
.footer {
  background-color: #392414;
  position: relative;
  bottom: 0;
  width: 100%;
}

.footer-text {
  font-size: 0.9rem;
  color: #ffffffbb;
  line-height: 2.2em;
  margin-bottom: 0px;
}

.footer-link {
  color: #ffffffbb;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  margin-bottom: 5px;
  margin-top: 5px;
}

.footer-link:hover {
  color: #ffffff;
}
</style>
