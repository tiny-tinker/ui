<template>
  <transition name="open">
    <div v-if="show" class="cookies-banner">
      <div class="side1">
        We use cookies to track your usage of this site. We also share information about your usage with the services we use for form creation, who may combine it with other information that you've provided them or that they've collected from your use of their services. We won't ever track you without your permission.
      </div>
      <div class="side2">
          <button class="cookie-button" @click="allowAllCookies">Allow all cookies</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    onConsentReceived: Function,
  },
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    this.show = true;
  },
  methods: {
    allowAllCookies() {
      this.show = false;
      this.onConsentReceived();
    },
  }
}
</script>

<style scoped>
.cookies-banner {
  font-family: Graphik Web,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
  background-color: #111;
  color: white;
  padding: 25px;
  width: 100%;
  display: flex;
  position: fixed;
  z-index: 200;
  bottom: 0;
}

.side1 {
  line-height: 1.8em;
  display: inline-block;
  width: 70%;
  flex-grow: 1;
}

.side2 {
  flex-grow: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.cookie-button {
  color: white;
  background-color: #515cf9;
  font-size: 1.1em;
  border: none;
  padding: 15px 20px;
  border-radius: 3px;
  transition: all 0.2s;
}

.cookie-button:hover {
  filter: brightness(125%);
}

.open-enter-active, .open-leave-active {
  transition: opacity .5s;
}

.open-enter, .open-leave-to {
  opacity: 0;
}
</style>