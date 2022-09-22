<template>
  <div id="app">
    <header class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo">Modals</div>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <router-link class="navbar-link" :title="link.title" :to="link.url">{{link.title}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <router-view/>

  <!-- footer -->

  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {title: 'Examples form', url: '/form-examples' },
          {title: 'Form with password validation', url: '/form-valid' },
          {title: 'Form with login and auth', url: '/form-login-auth' }
        ],
        modalValidate: false
      }
    }
  }
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.navbar-link {
  &.router-link-exact-active {
    color: #5247e7;
  }
}
</style>
