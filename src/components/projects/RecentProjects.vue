<template>
  <BContainer style="min-height: 470px" class="pt-5 pb-lg-4">
    <MiniTitle title="OUR RECENT PROJECTS" />
    <MainTitle
      title="Showcasing Masterpieces: Our Recent Creations"
      class="text-center"
    />
    <BRow class="pt-4">
      <BCol
        v-for="(project, idx) in projects"
        :key="idx"
        cols="12"
        md="6"
        lg="4"
        class="mb-4 d-flex flex-column align-items-center"
      >
        <BCard class="rounded-0 position-relative card-container">
          <BCardImg
            :src="project.img"
            alt="Card image"
            top
            height="380"
            class="rounded-0 card--img"
          />
          <div
            class="overlay d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100"
          >
            <div class="d-flex flex-column justify-content-center h-100 w-100">
              <h5 class="text-white fs-4 fw-semibold">{{ project.title }}</h5>
              <p class="text-white p-3 card-overlay-text my-5">
                {{ project.desc }}
              </p>
              <div class="text-center">
                <BButton
                  variant="light"
                  class="fw-semibold card-overlay--button"
                  size="md"
                  :to="project.link"
                >
                  KNOW MORE
                </BButton>
              </div>
            </div>
          </div>
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import MainTitle from "../headings/MainTitle.vue";
import MiniTitle from "../headings/MiniTitle.vue";

const projects = [
  {
    img: "/CustomFurniture.jpg",
    title: "Bedroom Furnitures",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque veniam rem dolorem architecto suscipit inventore fugiat praesentium corporis odio cum optio neque, distinctio veritatis iure autem iste aspernatur alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque veniam rem dolorem architecto suscipit inventore fugiat praesentium corporis odio cum optio neque, distinctio veritatis iure autem iste aspernatur alias!",
    link: "/projects/12345",
  },
  {
    img: "/Cabinetry.jpg",
    title: "Kitchen Cabinet",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque veniam rem dolorem architecto suscipit inventore fugiat praesentium corporis odio cum optio neque, distinctio veritatis iure autem iste aspernatur alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque veniam rem dolorem architecto suscipit inventore fugiat praesentium corporis odio cum optio neque, distinctio veritatis iure autem iste aspernatur alias!",
    link: "/projects/12345",
  },
  {
    img: "/StructuralWoodwork.jpg",
    title: "Wooden Doors & Windows",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque veniam rem dolorem architecto suscipit inventore fugiat praesentium corporis odio cum optio neque, distinctio veritatis iure autem iste aspernatur alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque veniam rem dolorem architecto suscipit inventore fugiat praesentium corporis odio cum optio neque, distinctio veritatis iure autem iste aspernatur alias!",
    link: "/projects/12345",
  },
  {
    img: "/Renovation.jpg",
    title: "Hall Renovation",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque veniam rem dolorem architecto suscipit inventore fugiat praesentium corporis odio cum optio neque, distinctio veritatis iure autem iste aspernatur alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque veniam rem dolorem architecto suscipit inventore fugiat praesentium corporis odio cum optio neque, distinctio veritatis iure autem iste aspernatur alias!",
    link: "/projects/12345",
  },
  {
    img: "/office.jpg",
    title: "Office Furnitures",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque veniam rem dolorem architecto suscipit inventore fugiat praesentium corporis odio cum optio neque, distinctio veritatis iure autem iste aspernatur alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque veniam rem dolorem architecto suscipit inventore fugiat praesentium corporis odio cum optio neque, distinctio veritatis iure autem iste aspernatur alias!",
    link: "/projects/12345",
  },
  {
    img: "/library.jpg",
    title: "Library Furnitures",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque veniam rem dolorem architecto suscipit inventore fugiat praesentium corporis odio cum optio neque, distinctio veritatis iure autem iste aspernatur alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque veniam rem dolorem architecto suscipit inventore fugiat praesentium corporis odio cum optio neque, distinctio veritatis iure autem iste aspernatur alias!",
    link: "/projects/12345",
  },
];
</script>

<style lang="scss">
.card-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  border: none !important;

  .card-body {
    padding: 0 !important;
  }

  .card--img {
    transition: transform 0.7s ease-in-out;
  }

  .overlay {
    background-color: rgba(221, 102, 11, 0.4);
    opacity: 0;
    transition: opacity 0.7s ease-in-out;

    h5 {
      width: 100%;
      margin: 0;
      padding: 15px 0 20px;
      text-align: center;
      position: absolute;
      top: 16px;
      transition: bottom 0.7s ease-in-out;
    }

    .card-overlay-text {
      height: 0;
      overflow-y: hidden;
      overflow: hidden;
      text-align: justify;
      transition: height 0.7s ease-in-out;
    }
  }

  .card-overlay--button {
    position: relative;
    top: -50px;
    opacity: 0 !important;
    transition: opacity 0.7s ease-in-out, top 0.7s ease-in-out;
  }

  &:hover {
    .overlay {
      opacity: 1;

      h5 {
        bottom: 0;
      }

      .card-overlay-text {
        height: 160px;
      }
    }

    .card-overlay--button {
      top: 0;
      opacity: 1 !important;
    }

    .card--img {
      transform: scale(1.05);
    }
  }
}
</style>
