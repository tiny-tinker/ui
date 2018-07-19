<template>
  <div>
    <div class="left-image" :style="{
      position: 'absolute',
      zIndex: '0',
      left: '0px',
      top: '0px',
    }">
      <img :src="leftImage" :style="{
        position: 'relative',
        left: leftX ? `${leftX}px` : '0px',
        top: leftY ? `${leftY}px` : '0px',
        height: `calc(${rightImageHeight}px * ${scaleLeft || scale || 1})`,
      }" alt="null"/>
    </div>
    <div class="right-image" :style="{
      position: 'absolute',
      zIndex: '0',
      top: '0px',
      right: '0px',
    }">
      <img :src="rightImage" :style="{
        position: 'relative',
        height: `calc(${rightImageHeight}px * ${scaleRight || scale || 1})`,
        top: rightY ? `${rightY}px` : '0px',
        right: rightX ? `${rightX}px` : '0px',
      }" alt="null"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['leftImage', 'rightImage', 'leftX', 'leftY', 'rightX', 'rightY', 'scale', 'scaleLeft', 'scaleRight'],
  data() {
    return {
      rightImageHeight: 150,
      leftImageHeight: 150,
    };
  },
}
</script>

<style scoped lang="styl">
.left-image, .right-image {
  pointer-events: none;
}

@media (max-width: 1250px) and (min-width: 1101px) {
  .left-image {
    left: -70px !important;
  }
  .right-image {
    right: -70px !important;
  }
}

@media (max-width: 1100px) and (min-width: 626px) {
  .left-image {
    left: -155px !important;
  }

  .right-image {
    right: -155px !important;
  }
}

@media (max-width: 625px) {
  .left-image {
    left: -270px !important;
  }
  .right-image {
    right: -270px !important;
  }
}
</style>
