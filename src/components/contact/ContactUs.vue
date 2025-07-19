<template>
  <BContainer class="py-5">
    <BRow class="justify-content-center">
      <BCol cols="12" md="12" lg="6" class="mb-4">
      <!-- style="background: rgb(104, 73, 40);" -->
        <div class="p-5 bg-white" >
          <BForm @submit.prevent="submitForm">
            <BFormGroup class="mb-4">
              <BFormInput
                autocomplete="off"
                id="name"
                v-model="form.name"
                required
                placeholder="Enter your name"
                class="input-field"
              ></BFormInput>
            </BFormGroup>
            <BFormGroup class="mb-4">
              <BFormInput
                autocomplete="off"
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter your email"
                class="input-field"
              ></BFormInput>
            </BFormGroup>
            <BFormGroup class="mb-4">
              <BFormTextarea
                autocomplete="off"
                id="message"
                v-model="form.message"
                required
                placeholder="Type your message"
                rows="5"
                class="input-field"
              ></BFormTextarea>
            </BFormGroup>
            <BButton type="submit" variant="primary" class="px-4 py-2 mt-3">
              Send Message
            </BButton>
          </BForm>
        </div>
      </BCol>
      <BCol cols="12" sm="12" md="12" lg="6" class="px-5">
        <MainTitle class="contact-title mb-4" title="Contact Us" />
        <p class="fs-6 caption mb-3">
          We would love to hear from you! Whether you have a question about our
          services, need assistance, or just want to say hello, feel free to
          reach out.
        </p>
        <BRow class="mt-5">
          <BCol cols="6">
            <div class="d-flex mb-4">
              <span class="mdi mdi-phone-outline contact--icon me-4 contact--icon"></span>
              <div class="text-start">
                <h3 class="fs-5 mt-2">Phone:</h3>
                <a href="tel:+1234567890" class="contact-link contact--link">+1 (234) 567-890</a>
              </div>
            </div>
          </BCol>
          <BCol cols="6">
            <div class="d-flex mb-4">
              <span class="mdi mdi-email-outline contact--icon me-4 contact--icon"></span>
              <div class="text-start">
                <h3 class="fs-5 mt-2">Email:</h3>
                <a href="mailto:info@woodwise.com" class="contact-link contact--link"
                  >info@woodwise.com</a
                >
              </div>
            </div>
          </BCol>
          <BCol cols="12">
            <div class="d-flex my-4">
              <span
                class="mdi mdi-map-marker-outline contact--icon me-4 contact--icon"
              ></span>
              <div class="text-start">
                <h3 class="fs-5 mt-2">Address:</h3>
                <div class="contact--address">
                  123 Woodwise Lane, Greenwood, CA 90210
                </div>
              </div>
            </div>
          </BCol>
        </BRow>
        <div class="mt-4">
          <BButton
            variant="primary"
            href="https://maps.google.com/?q=123+Woodwise+Lane+Greenwood+CA+90210"
            target="_blank"
            class="contact--map-btn px-4"
          >
            <span class="mdi mdi-map"></span> View on Map
          </BButton>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MainTitle from "../headings/MainTitle.vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

function submitForm() {
  alert("Thank you for contacting WoodWise!");
  form.value = { name: "", email: "", message: "" };
}
</script>

<style scoped>

.input-field {
  padding: 12px 24px;
  min-height: 50px;
  border-radius: 0;
  border: none;
  background: rgba(248,249,250);
  transition: border-color 0.2s;
}
.input-field:focus {
  border-color: #8b5c2b;
  background: #fff;
  box-shadow: 0 0 0 2px #c8a97e;
}

.contact--icon {
  font-size: 2.2rem;
  color: #c8a97e;
  margin-right: 12px;
}

.contact--link {
  color: #6d4c41;
  text-decoration: none;
  font-size: 1.05rem;
  transition: color 0.2s;
}
.contact--link:hover {
  color: #c8a97e;
  text-decoration: underline;
}

.contact--address {
  color: #6d4c41;
  font-size: 1rem;
  margin-top: 2px;
}

.contact--map-btn {
  letter-spacing: 0.5px;

  span {
    color: #0d6efd;
    font-size: 1.2rem;
    margin-right: 4px;
  }
}
.contact--map-btn:hover {

  span {
    color: #fff;
  }
}
</style>
