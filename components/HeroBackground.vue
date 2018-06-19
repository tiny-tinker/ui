<template>
  <div>
    <div class="left-image" :style="{
      position: 'absolute',
      zIndex: '0',
      left: '-30px',
      top: '0px',
    }">
      <img :src="leftImage" :style="{
        position: 'relative',
        left: leftX ? `${leftX}px` : '-750px',
        top: leftY ? `${leftY}px` : '-45px',
        width: `calc(1200px * ${scale || 1})`,
        height: `calc(700px * ${scale || 1})`,
      }" alt="null"/>
    </div>
    <div class="right-image" :style="{
      position: 'absolute',
      zIndex: '0',
      width: '450px',
      height: '700px',
      overflow: 'hidden',
      top: '0px',
      right: '0px',
    }">
      <img :src="rightImage" :style="{
        position: 'relative',
        width: `calc(1200px * ${scale || 1})`,
        height: `calc(700px * ${scale || 1})`,
        top: rightY ? `${rightY}px` : '-170px',
        right: rightX ? `${rightX}px` : '0px',
      }" alt="null"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['leftImage', 'rightImage', 'leftX', 'leftY', 'rightX', 'rightY', 'scale'],
}
</script>

<style scoped lang="scss">
@media (max-width: 1250px) and (min-width: 1101px) {
  .left-image {
    left: calc(100vw - 1265px) !important;
  }
  .right-image {
    width: calc(-780px + 100vw) !important;
  }
}

@media (max-width: 1100px) and (min-width: 626px) {
  .left-image {
    left: -155px !important;
  }

  .right-image {
    width: 326px !important;
  }
}

@media (max-width: 625px) {
  .left-image {
    left: -270px !important;
  }
  .right-image {
    width: 215px !important;
  }
}
</style>
