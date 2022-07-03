<template>
  <div class="w-100 vh-100 bg-grey">
    <div class="abc">
      <!-- <flower-spinner :animation-duration="2500" :size="70" color="#ff1d5e" /> -->
      <div class="flower-spinner">
        <div class="dots-container">
          <div class="bigger-dot">
            <div class="smaller-dot"></div>
          </div>
        </div>
      </div>
      <div class="mt-10 text-red-1 fs-20">加载中</div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { vue3改写组件 } from 'epic-spinners'
// import { FlowerSpinner } from 'epic-spinners'
</script>

<style scoped lang="scss">
.flower-spinner,
.flower-spinner * {
  box-sizing: border-box;
}
.flower-spinner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
}
.flower-spinner .dots-container {
  width: calc(70px / 7);
  height: calc(70px / 7);
}
.flower-spinner .smaller-dot {
  width: 100%;
  height: 100%;
  background: #ff1d5e;
  border-radius: 50%;
  animation: flower-spinner-smaller-dot-animation 2.5s 0s infinite both;
}
.flower-spinner .bigger-dot {
  width: 100%;
  height: 100%;
  padding: 10%;
  background: #ff1d5e;
  border-radius: 50%;
  animation: flower-spinner-bigger-dot-animation 2.5s 0s infinite both;
}

@keyframes flower-spinner-bigger-dot-animation {
  0% {
    box-shadow:
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0;
  }
  50% {
    transform: rotate(180deg);
  }
  25%,
  75% {
    box-shadow:
      rgb(255, 29, 94) 26px 0 0,
      rgb(255, 29, 94) -26px 0 0,
      rgb(255, 29, 94) 0 26px 0,
      rgb(255, 29, 94) 0 -26px 0,
      rgb(255, 29, 94) 19px -19px 0,
      rgb(255, 29, 94) 19px 19px 0,
      rgb(255, 29, 94) -19px -19px 0,
      rgb(255, 29, 94) -19px 19px 0;
  }
  100% {
    box-shadow:
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0;
    transform: rotate(360deg);
  }
}

@keyframes flower-spinner-smaller-dot-animation {
  0% {
    box-shadow:
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0;
  }
  25%,
  75% {
    box-shadow:
      rgb(255, 29, 94) 14px 0 0,
      rgb(255, 29, 94) -14px 0 0,
      rgb(255, 29, 94) 0 14px 0,
      rgb(255, 29, 94) 0 -14px 0,
      rgb(255, 29, 94) 10px -10px 0,
      rgb(255, 29, 94) 10px 10px 0,
      rgb(255, 29, 94) -10px -10px 0,
      rgb(255, 29, 94) -10px 10px 0;
  }
  100% {
    box-shadow:
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0,
      rgb(255, 29, 94) 0 0 0;
  }
}
.abc {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
