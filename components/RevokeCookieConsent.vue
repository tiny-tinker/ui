<template>
  <div v-if="show">
    Thanks for letting us use cookies! <a href="javascript:void(0)" @click="revokeConsent">Revoke your consent.</a>
  </div>
</template>

<script>
import EventBus from '../helpers/EventBus';

export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    revokeConsent() {
      EventBus.$emit('cookie-consent-revoked');
      this.show = false;
    },
  },
  mounted() {
    EventBus.$on('cookie-consent-received', () => {
      this.show = true;
    });
  },
};
</script>

<style>
</style>