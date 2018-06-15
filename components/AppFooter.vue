<template>
  <div class="app-footer">
    <div class='columns'>
      <nav class='column'>
        <div class="menu-header">Product</div>
        <ul class="ul">
          <li class="li"><a href='https://asyncy.com/platform'>Platform</a></li>
          <li class="li"><a href='https://docs.asyncy.com'>Documentation</a></li>
          <li class="li"><a href='https://docs.asyncy.com/faq'>FAQ</a></li>
          <li class="li">
            <a href="https://asyncy.click/feedback" target="_blank">Give Feedback</a>
          </li>
        </ul>
      </nav>
      <nav class='column'>
        <div class="menu-header">Resources</div>
        <ul class="ul">
          <li class="li"><a href='https://asyncy.com/events'>Events</a></li>
          <li class="li"><a href='https://medium.com/asyncy'>Blog</a></li>
        </ul>
      </nav>
      <nav class='column'>
        <div class="menu-header">Company</div>
        <ul class="ul">
          <li class="li"><a href='https://asyncy.com//about'>About</a></li>
          <li class="li"><a href='https://angel.co/asyncy/jobs'>Jobs</a></li>
          <li class="li"><a href='https://asyncy.com/contact'>Contact</a></li>
        </ul>
      </nav>
      <div class='column'>
        <div>
          <a href='http://asyncy.click/slack' target="_blank">
            <img :src="slackLogo" :style="{
              display: 'inline-block',
              width: '30px',
              opacity: 0.8,
            }" alt="Slack"/>
          </a>
          <a href='https://github.com/asyncy' target="_blank">
            <img :src="githubLogo" :style="{
              display: 'inline-block',
              width: '30px',
              marginLeft: '25px',
              opacity: 0.8,
            }" alt="Github"/>
          </a>
          <a href='https://twitter.com/asyncy' target="_blank">
            <img :src="twitterLogo" :style="{
              display: 'inline-block',
              width: '30px',
              marginLeft: '25px',
              opacity: 0.8,
            }" alt="Twitter"/>
          </a>
        </div>
        <div class="copyright">
          © 2018 Asyncy, Inc.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slackLogo from '../assets/images/slack_logo.svg';
import githubLogo from '../assets/images/github_logo.svg';
import twitterLogo from '../assets/images/twitter_logo.svg';

export default {
  data() {
    return {
      slackLogo,
      githubLogo,
      twitterLogo,
    };
  },
}
</script>

<style scoped lang="scss">
.app-footer {
  font-family: Graphik Web,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
  background: #111;
  font-size: 0.9em;
  padding-top: 75px;
  padding-bottom: 55px;
}

.app-footer .columns {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 25px;
}

.ul {
  list-style: none;
  padding-left: 0;
  text-align: left;
}

.li {
  font-size: 1.1em;
  margin-bottom: 0.5em;
}

.li a {
  color: #A3A3A3;
  font-size: 0.95em;
  font-weight: 400;
  line-height: 1.6em;
  text-decoration: none;
}

.li a:hover {
  color: white;
  transition: color 0.3s ease-out;
  -webkit-transition: color 0.3s ease-out;
  -moz-transition: color 0.3s ease-out;
  -o-transition: color 0.3s ease-out;
  transition: color 0.3s ease-out;
}

.menu-header {
  font-size: 1em;
  color: white;
  margin-bottom: 1em;
  text-align: left;
}

.copyright {
  color: #666;
  margin-top: 1em;
}
</style>
