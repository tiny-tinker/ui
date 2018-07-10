<template>
  <div v-if="active">
    <transition name="fade">
      <div v-if="show && !showRevoked" class="cookies-banner">
        <div class="side1">
          We use cookies to track your usage of this site. We also share information about your usage with third-party services to help improve your experience. We will never track you without your permission.
        </div>
        <div class="side2">
          <button class="cookie-button" @click="allowAllCookies">Allow all cookies</button>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="cookies-banner" v-if="showThanks">
        Thanks! 🎉 You can always revoke your consent at the bottom of the page.
      </div>
    </transition>
    <transition name="fade">
      <div class="cookies-banner" v-if="showRevoked">
        Your consent has been revoked. We won't track you any longer.
      </div>
    </transition>
    <div v-if="!show" class="revoke-banner">
      Thanks for letting us use cookies! <a href="javascript:void(0)" @click="revokeConsent">Revoke your consent.</a>
    </div>
  </div>
</template>

<script>
import inEU from '@segment/in-eu';

export default {
  props: ['forceActive'],
  data() {
    return {
      active: this.forceActive,
      show: false,
      showThanks: false,
      showRevoked: false,
    }
  },
  mounted() {
    const consent = document.cookie.split(';').find((item) => {
      return item.includes('cookie-consent-received=true');
    });

    if (window.location.search === "?revoked=true") {
      this.onRevoke();
    }

    this.active = this.forceActive || inEU();

    if (!consent) {
      this.show = true;
    } else {
      this.$emit('cookie-consent-received');
    }
  },
  methods: {
    allowAllCookies() {
      this.show = false;
      this.showThanks = true;
      setTimeout(() => {
        this.showThanks = false;
      }, 3000);
      const expiry = new Date();
      expiry.setFullYear(expiry.getFullYear() + 1);
      document.cookie = `cookie-consent-received=true;expires=${expiry.toGMTString()}`
      this.$emit('cookie-consent-received');
    },
    revokeConsent() {
      this.clearAllCookies();
      window.location.search = "?revoked=true";
    },
    onRevoke() {
      window.scrollTo(0, document.body.scrollHeight);

      this.show = true;
      this.showRevoked = true;

      setTimeout(() => {
        this.showRevoked = false;
      }, 3000);

      this.$emit('cookie-consent-revoked');
    },
    clearAllCookies() {
      document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    },
  }
}
</script>

<style scoped lang="styl">
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
  opacity: 0.9;
  pointer-events: none;
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
  pointer-events: auto;
  opacity: 1;
}

.cookie-button:hover {
  filter: brightness(125%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.revoke-banner {
  text-align: center;
  font-family: Graphik Web,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
  background-color: #111;
  font-size: 0.8em;
  color: #666;
  width:100%;
  padding: 25px;
}
</style>