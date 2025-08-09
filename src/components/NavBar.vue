<template>
  <BNavbar :class="{ 'sticky-navbar': isSticky, shadow: isSticky }" toggleable="lg">
    <BContainer
      :fluid="width < 992"
      class="d-flex flex-wrap flex-lg-nowrap align-items-md-center"
      :style="{ paddingRight: width < 992 ? '80px' : '' }"
    >
      <BNavbarBrand href="#" class="flex-grow-1">
        <BImg v-if="width > 1400" src="/logo.png" alt="Logo" height="50" />
        <BImg v-else src="/favicon.png" alt="Logo" height="50" />
      </BNavbarBrand>

      <AppSearch v-if="width < 992" />
      <BNavbarToggle target="nav-collapse" style="top: 17px" />
      <BCollapse id="nav-collapse" is-nav>
        <BNavbarNav>
          <template v-for="item in navBarArray" :key="item.name">
            <!-- Normal Nav Item -->
            <BNavItem
              v-if="!item.children"
              :to="item.path"
              class="px-lg-2 px-xl-3 px-3 pb-2 text-capitalize"
              :active="String(activeItem).toLowerCase() === item.path.toLowerCase()"
            >
              {{ item.name }}
            </BNavItem>

            <!-- Dropdown Nav Item -->
            <BDropdown
              v-else
              :text="item.name"
              variant="link"
              class="pb-2 text-capitalize"
              toggle-class="dropdown-toggle-custom"
              :class="{
                active: String(activeItem).toLowerCase() === item.path.toLowerCase(),
              }"
            >
              <BDropdownItem
                class="text-capitalize nav--dropdown-item"
                v-for="child in item.children"
                :key="child.name"
                :to="child.path"
                :active="
                  String(activeChildItem).toLowerCase() === child.path.toLowerCase()
                "
              >
                {{ child.name }}
              </BDropdownItem>
            </BDropdown>
          </template>
        </BNavbarNav>

        <BNavbarNav class="ms-auto">
          <BNavItem class="d-flex align-items-center" v-if="width >= 992">
            <AppSearch />
          </BNavItem>
          <BNavItem class="d-flex align-items-center">
            <BButton class="ms-2 fs-6" variant="primary" to="/contact-us">
              Get Started
            </BButton>
          </BNavItem>
        </BNavbarNav>
      </BCollapse>
    </BContainer>
  </BNavbar>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import AppSearch from "./AppSearch.vue";
import { useRoute } from "vue-router";
import { useWindowSize } from "@vueuse/core";

const navBarArray = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects & Pricing", path: "/projects" },
  { name: "Contact Us", path: "/contact-us" },
  {
    name: "Documentation",
    path: "/docs",
    children: [
      { name: "Architectural Overview", path: "/docs/architectural-overview" },
      { name: "Typography", path: "/docs/typography" },
      { name: "Color System", path: "/docs/color-system" },
      { name: "Buttons", path: "/docs/buttons" },
    ],
  },
];
const route = useRoute();
const { width } = useWindowSize();

const activeItem = computed(() => {
  const currentPath = route.matched?.[0]?.path;
  return navBarArray.find((item) => item.path === currentPath) ? currentPath : "/";
});

const activeChildItem = computed(() => {
  const currentPath = route.matched?.[1]?.path;
  for (const item of navBarArray) {
    if (item.children) {
      const child = item.children.find((child) => child.path === currentPath);
      if (child) return child.path;
    }
  }
  return null;
});

const isSticky = ref(false);
const handleScroll = () => {
  isSticky.value = window.scrollY > 75;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
ul:has(> .nav--dropdown-item) {
  background-color: #392414;
  min-width: 250px;
  padding: 16px;

  a {
    color: #eee !important;
    padding-left: 36px !important;
    
    &:focus,
    &:active,
    &.router-link-active,
    &.active {
      background-color: #392414 !important;
      color: rgb(249, 149, 74) !important;
    }

    &:hover {
      transform: scale(1.1);
      transition: transform 0.2s ease;
      background-color: #392414 !important;
      color: #fff !important;
    }
    
  }
}
</style>
