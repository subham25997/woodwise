<template>
  <BContainer class="pt-5 pb-5" style="min-height: 900px">
    <MiniTitle title="OUR TEAM" />
    <MainTitle title="Meet Our Team" class="text-center" />
    <div class="d-flex justify-content-end flex-wrap">
      <div class="left--section">
        <BCard class="owners-card rounded-0">
          <BAvatar size="200" src="/head.jpg" class="top--avatar" />
          <BContainer fluid>
            <MiniTitle title="From Our Head" class="pt-0 pb-2" />
            <p class="text-light text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, iste ratione
              tenetur atque vero laborum accusantium alias saepe excepturi aliquam, a
              doloremque nostrum illum? Corrupti ipsum aliquid minus numquam unde.
            </p>
            <div class="d-flex justify-content-end py-3">
              <h5 class="text-light">- John Doe</h5>
            </div>
          </BContainer>
          <BAvatar size="200" src="/manager.jpg" class="bottom--avatar" />
          <BContainer fluid class="position-relative">
            <div class="thick--divider"></div>
            <MiniTitle title="From Our Manager" class="pt-3 pb-2" />
            <p class="text-light text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, iste ratione
              tenetur atque vero laborum accusantium alias saepe excepturi aliquam, a
              doloremque nostrum illum? Corrupti ipsum aliquid minus numquam unde.
            </p>
            <div class="d-flex justify-content-end py-3">
              <h5 class="text-light">- Lisa Jain</h5>
            </div>
          </BContainer>
        </BCard>
      </div>
      <div class="right--section">
        <BRow>
          <BCol md="6" cols="12" class="text-center position-relative px-2 pb-3">
            <div class="team-image-container">
              <BImg
                src="/team1.jpg"
                alt="Team Member 1"
                class="img-fluid mb-3 team-image"
              />
              <div class="position-absolute p-2 text-panel">
                <h5 class="mb-1">John Doe</h5>
                <p class="mb-0">Lead Carpenter</p>
              </div>
            </div>
          </BCol>
          <BCol md="6" cols="12" class="text-center position-relative px-2 pb-3">
            <div class="team-image-container">
              <BImg
                src="/team2.jpg"
                alt="Team Member 2"
                class="img-fluid mb-3 team-image"
              />

              <div class="position-absolute p-2 text-panel">
                <h5 class="mb-1">John Doe</h5>
                <p class="mb-0">Lead Carpenter</p>
              </div>
            </div>
          </BCol>

          <BCol md="6" cols="12" class="text-center position-relative px-2 pb-3">
            <div class="team-image-container">
              <BImg
                src="/team3.jpg"
                alt="Team Member 3"
                class="img-fluid mb-3 team-image"
              />

              <div class="position-absolute p-2 text-panel">
                <h5 class="mb-1">John Doe</h5>
                <p class="mb-0">Lead Carpenter</p>
              </div>
            </div>
          </BCol>
          <BCol md="6" cols="12" class="text-center position-relative px-2 pb-3">
            <div class="team-image-container">
              <BImg
                src="/team4.jpg"
                alt="Team Member 4"
                class="img-fluid mb-3 team-image"
              />

              <div class="position-absolute p-2 text-panel">
                <h5 class="mb-1">John Doe</h5>
                <p class="mb-0">Lead Carpenter</p>
              </div>
            </div>
          </BCol>
        </BRow>
      </div>
    </div>
  </BContainer>
</template>
<script setup lang="ts">
import MiniTitle from "../headings/MiniTitle.vue";
import MainTitle from "../headings/MainTitle.vue";
</script>
<style scoped lang="scss">
.team-image-container {
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  height: 406px;
}
.team-image {
  height: 406px;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
<style lang="scss" scoped>
.left--section {
  width: 600px;
  padding: 24px 20px 24px 8px;
  padding-top: 60px;

  .owners-card {
    width: 100%;
    padding-top: 111px;
    background-color: rgb(104, 73, 40);
  }
}

.right--section {
  width: calc(100% - 600px);
  padding-right: 10px;
  padding-top: 60px;
}

@media screen and (max-width: 1400px) and (min-width: 1201px) {
  .left--section {
    width: 500px;
  }

  .right--section {
    width: calc(100% - 500px);
  }
}

@media screen and (max-width: 1200px) and (min-width: 1024px) {
  .left--section {
    width: 100%;
    padding-top: 110px;
    padding-right: 0;
    padding-left: 0;
  }

  .owners-card {
    padding-top: 111px;
  }

  .right--section {
    width: 100%;
    padding-top: 0;
    padding-right: 4px;
    padding-left: 4px;
  }
}

@media screen and (max-width: 1024px) {
  .left--section {
    width: 100%;
    padding: 0;
    padding-top: 116px;
    padding-bottom: 12px;
  }

  .right--section {
    width: 100%;
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 4px;
  }
}

.top--avatar {
  width: 150px;
  height: 150px;
  border: 5px solid rgb(246, 246, 246);
  background-color: rgb(255, 207, 169) !important;
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translate(-50%, 0);
}

.thick--divider {
  height: 5px;
  background: rgb(246, 246, 246);
  position: absolute;
  left: -40px;
  right: -41px;
  top: -120px;
}

.bottom--avatar {
  width: 150px;
  height: 150px;
  border: 5px solid rgb(246, 246, 246);
  background-color: rgb(255, 207, 169) !important;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  margin-bottom: 16px;
}

.text-panel {
  left: 30px;
  right: 30px;
  bottom: 30px;
  background-color: rgba(255, 255, 255, 0.9);
}

.text-panel:before {
  content: "";
  position: absolute;
  background: #392414;
  top: 10px;
  bottom: 10px;
  width: 3px;
  left: 10px;
}

.text-panel:after {
  content: "";
  position: absolute;
  background: #392414;
  top: 10px;
  bottom: 10px;
  width: 3px;
  right: 10px;
}
</style>
