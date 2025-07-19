<template>
  <BContainer style="min-height: 470px" class="py-5">
    <MiniTitle title="OUR SERVICES" />
    <MainTitle title="Crafting Excellence: Our Services" class="mb-4 text-center" :style="{ color: mainHeadingColor }"/>
    <BRow class="pt-4">
      <BCol
        v-for="(service, idx) in services"
        :key="idx"
        cols="12"
        md="6"
        lg="4"
        class="mb-4 d-flex flex-column align-items-center"
      >
        <BCard class="service-card position-relative" no-body>
          <BCardText class="d-flex flex-column align-items-center h-100 p-4 pt-5">
            <div class="services-card-stripe"></div>
            <BImg
              :src="service.img"
              :alt="service.title"
              class="img-fluid mb-4"
              style="height: 80px"
            />
            <h4 class="text-center fs-4 fw-medium mb-4">{{ service.title }}</h4>
            <p class="text-center test-body-1">
              {{ service.desc }}
            </p>
            <router-link
              :to="service.routerTo + '/12345'"
              class="text-decoration-none know-more-slider-icon d-flex flex-column justify-center align-center"
            >
              <i class="mdi mdi-arrow-up"></i>
              <span class="know-more"> Know More </span>
            </router-link>
          </BCardText>
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import MainTitle from "../headings/MainTitle.vue";
import MiniTitle from "../headings/MiniTitle.vue";

defineProps({
  mainHeadingColor: {
    type: String,
    default: "#fff",
  },
});

const services = [
  {
    title: "Custom Furniture",
    desc: "Handcrafted furniture tailored to your style and needs.",
    img: "/CustomFurniture.png",
    routerTo: "/services",
  },
  {
    title: "Cabinetry",
    desc: "Elegant and functional cabinetry for every room in your home.",
    img: "/Cabinetry.png",
    routerTo: "/services",
  },
  {
    title: "Structural Woodwork",
    desc: "Durable woodwork solutions for structural integrity and beauty.",
    img: "/StructuralWoodwork.png",
    routerTo: "/services",
  },
  {
    title: "Renovations",
    desc: "Transform your space with our expert renovation services.",
    img: "/Renovation.png",
    routerTo: "/services",
  },
  {
    title: "Custom Installations",
    desc: "Personalized installations to enhance your home’s functionality.",
    img: "/CustomInstallations.png",
    routerTo: "/services",
  },
  {
    title: "Outdoor Structures",
    desc: "Beautiful outdoor woodwork to enhance your outdoor living space.",
    img: "/OutdoorStructures.png",
    routerTo: "/services",
  },
];
</script>
<style scoped lang="scss">
.service-card {
  width: 100%;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 0;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
  border: 0;
  min-height: 450px;


  .know-more-slider-icon {
    position: absolute;
    bottom: 0;
    transition: color 0.3s ease-in-out, bottom 0.3s ease-in-out;

    i.mdi {
      font-size: 20px;
    }

    .know-more {
      font-size: 18px;
      visibility: visible;
      margin-top: 0;
      text-decoration: none;
      color: transparent;
      padding: 0 5px 10px;
      transition: visibility 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    &:hover {
      .know-more {
        text-decoration: underline;
      }
    }
  }

  &:before {
    content: "";
    position: absolute;
    left: 12px;
    top: -35px;
    width: 30px;
    height: 30px;
    background: transparent;
    transition: background-color 0.3s ease-in-out, top 0.3s ease-in-out;
  }

  &:after {
    content: "";
    position: absolute;
    right: 12px;
    top: -35px;
    width: 30px;
    height: 30px;
    background: transparent;
    transition: all 0.3s ease-in-out, top 0.3s ease-in-out;
  }

  &:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;

    .know-more {
      visibility: visible;
      color: #000;
    }

    .know-more-slider-icon {
      bottom: 40px;
    }

    &:before,
    &:after {
      background-color: rgb(215, 177, 132);
      top: -5px;
    }
  }
}

.services-card-stripe {
  position: absolute;
  bottom: 20px;
  height: 1px;
  left: 20px;
  right: 20px;
  background-color: rgb(240 214 187);
}
</style>
