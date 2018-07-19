<template>
<div class="dropdown-container">
  <div class="dropdown-trigger">
    <slot></slot>
  </div>
  <div class="dropdown-menu">
    <div class="dropdown-content">
      <div class="dropdown-item" v-for="item in items" :key="item.text">
        <component v-if="linkComponent" :is="linkComponent" :to="item.to">{{item.text}}</component>
        <a :href="item.to" v-else>{{item.text}}</a>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  props: ['items', 'linkComponent'],
};
</script>

<style scoped lang="styl">
.dropdown-container
  display inline-block
  position relative
  &:hover .dropdown-menu
    display block

.dropdown-menu
  display none
  position absolute
  top 100%
  z-index 20
  right 0
  padding-top 14px

.dropdown-content
  padding 0.5rem 0
  border-radius 4px
  background #363636

.dropdown-item
  font-size .9rem
  padding .375rem 1rem
  line-height 1.5
  padding-right 3rem
  text-align left
  white-space nowrap

  a
    color white
    text-decoration none

    &:hover
      color #D1D1D1

</style>