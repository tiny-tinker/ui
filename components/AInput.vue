<template>
  <input :class="{ input: true, [color]: color }" :placeholder="placeholder" aria-label="placeholder" :value="value" @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
  props: ['color', 'placeholder', 'value'],
};
</script>

<style scoped lang="styl">
.input
  font-size: 1em;
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 15px 20px;
  margin-bottom: 10px;
  background-color: rgba(35,35,35,1);
  color: rgba(190,190,190,1);
  transition: all 0.2s ease-in-out;
  outline: none;

.input.white
  border 1px solid #C7C7C7
  padding 15px 20px
  margin-bottom 10px
  background-color #FBFBFB
  box-shadow 0 1px 2px 0 rgba(208,208,208,0.5)

.input:focus
  border-color: #515CF9;
  filter: brightness(120%);
  color: white;
  &.white
    color: black;

.input:invalid
  border-color: #F74545;
  color: #F74545;
</style>