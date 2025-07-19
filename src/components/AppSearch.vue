<template>
  <BButton
    variant="link"
    class="text-decoration-none text-dark rounded-circle"
    @click="toggleSearch"
    aria-label="Search"
  >
    <i class="mdi mdi-magnify mdi-24px"></i>
  </BButton>
  <BModal
    size="xl"
    body-class="bg-search-dialog"
    v-model="searchModel"
    no-header
    no-footer
    content-class="rounded-0"
  >
    <BImg
      src="/dark-logo.png"
      alt="Logo"
      height="64"
      class="d-inline-block align-top mb-3"
    />
    <BButton class="position-absolute end-0 top-0 py-3 px-4" variant="link">
      <i class="mdi mdi-close mdi-24px text-white" @click="toggleSearch"></i>
    </BButton>
    <BContainer
      fluid
      class="d-flex flex-column align-items-center justify-content-center h-100"
    >
      <div class="position-relative mb-2" :class="screenWidth < 1024 ? 'w-100' : 'w-75'">
        <BFormInput
          size="lg"
          type="text"
          placeholder="Type your keyword..."
          class="w-100 mb-3 search-input"
          aria-label="Search input"
        />
        <BButton class="search-button">
          <i class="mdi mdi-magnify"></i>
        </BButton>
      </div>

      <BCard class="bg-transparent border-0 text-center w-100 mb-3" body-class="d-flex flex-column align-items-center justify-content-center">

        <BListGroup :class="screenWidth < 1024 ? 'w-100' : 'w-75'">
          <BListGroupItem
            class="d-flex justify-content-between align-items-center recent-search-bg border-0"
          >
            <i class="mdi mdi-clock-outline mdi-16px text-white me-2"></i>
            <div class="ms-2 me-auto text-ellipsis">
              <div class="text-white">Lorem Ipsum</div>
            </div>
            <i class="mdi mdi-magnify mdi-24px text-white"></i>
          </BListGroupItem>
          <BListGroupItem
            class="d-flex justify-content-between align-items-center recent-search-bg border-0"
          >
            <i class="mdi mdi-clock-outline mdi-16px text-white me-2"></i>
            <div class="ms-2 me-auto text-ellipsis">
              <div class="text-white">Lorem Ipsum</div>
            </div>
            <i class="mdi mdi-magnify mdi-24px text-white"></i>
          </BListGroupItem>
          <BListGroupItem
            class="d-flex justify-content-between align-items-center recent-search-bg border-0"
          >
            <i class="mdi mdi-clock-outline mdi-16px text-white me-2"></i>
            <div class="ms-2 me-auto text-ellipsis">
              <div class="text-white">Lorem Ipsum</div>
            </div>
            <i class="mdi mdi-magnify mdi-24px text-white"></i>
          </BListGroupItem>
          <BListGroupItem
            class="d-flex justify-content-between align-items-center recent-search-bg border-0"
          >
            <i class="mdi mdi-clock-outline mdi-16px text-white me-2"></i>
            <div class="ms-2 me-auto text-ellipsis">
              <div class="text-white">Lorem Ipsum</div>
            </div>
            <i class="mdi mdi-magnify mdi-24px text-white"></i>
          </BListGroupItem>
          <BListGroupItem
            class="d-flex justify-content-between align-items-center recent-search-bg border-0"
          >
            <i class="mdi mdi-clock-outline mdi-16px text-white me-2"></i>
            <div class="ms-2 me-auto text-ellipsis">
              <div class="text-white">Lorem Ipsum</div>
            </div>
            <i class="mdi mdi-magnify mdi-24px text-white"></i>
          </BListGroupItem>
        </BListGroup>
      </BCard>
    </BContainer>
  </BModal>
</template>
<script setup lang="ts">
import { ref } from "vue";
const searchModel = ref(false);
const screenWidth = ref(window.innerWidth);

const toggleSearch = () => {
  searchModel.value = !searchModel.value;
};

window.addEventListener("resize", () => {
  screenWidth.value = window.innerWidth;
});
</script>

<style lang="scss">
.bg-search-dialog {
  background-color: #392414;
  color: #fff;
  padding: 20px;
  min-height: 250px;
  transition: all 0.5s ease-in-out;
  width: 100%;
}

.search-input {
  background-color: transparent !important;
  border: 1px solid #392414 !important;
  color: #fff !important;
  padding: 10px;
  width: 100%;
  transition: all 0.3s ease-in-out;
  border-width: 0 0 2px 0 !important;
  border-color: #dfdfdf !important;
  border-radius: 0 !important;
}

.search-input:focus {
  box-shadow: none !important;
  border-color: #fff !important;
}

.search-input::-webkit-input-placeholder {
  color: #fff !important;
}

.search-input:-moz-placeholder {
  color: #fff !important;
}

.search-input::-moz-placeholder {
  color: #fff !important;
}

.search-input:-ms-input-placeholder {
  color: #fff !important;
}

.search-button {
  background-color: transparent !important;
  border: none !important;
  font-size: 24px !important;
  position: absolute !important;
  right: 0 !important;
  top: 0 !important;

  i {
    color: #fff !important;
  }

  &:hover {
    border: none !important;
  }
}

.recent-search-bg {
    background: #553311 !important;
}

.text-ellipsis {
    max-width: calc(100% - 70px);
}

.text-ellipsis > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
