<template>
  <button :class="{ button: true, [color]: color }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['color'],
}
</script>

<style scoped lang="scss">
.button {
  font-family: Graphik Web,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;

  font-weight: 500;
  color: white;
  padding: 13px 22px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #111;
  border: 1px solid #8F8F8F;
  text-align: center;
  transition: all 0.2s;
  font-size: 0.9em;

  &:hover {
    color: #111;
    background-color: white;
    border-color: #8F8F8F;
  }

  &.white {
    color: #111;
    background-color: white;
    border-color: #8F8F8F;

    &:hover {
      color: white;
      background-color: #111;
      border-color: #111;
    }
  }
}
</style>