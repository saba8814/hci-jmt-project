<template>
  <div class="minaret-navbar">
  <nav class="navbar navbar-expand-md navbar-dark fixed-top">
    <div class="container">
      <button
        :class="['navbar-toggler', !navbarExpanded && 'collapsed']"
        type="button"
        aria-controls="navbarDefault"
        :aria-expanded="navbarExpanded"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarDefault" :class="['collapse navbar-collapse', navbarExpanded && 'show']">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" exact exact-active-class="active" class="nav-link" @click.native="collapseNavbar"
              >PRAYERS</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/Quran" class="nav-link" @click.native="collapseNavbar">QURAN</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Hadith" class="nav-link" @click.native="collapseNavbar">HADITH</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Qibla" class="nav-link" @click.native="collapseNavbar">QIBLA</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Profile" class="nav-link" @click.native="collapseNavbar">PROFILE</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarExpanded: false
    }
  },
  methods: {
    toggleNavbar() {
      this.navbarExpanded = !this.navbarExpanded
    },
    collapseNavbar() {
      this.navbarExpanded = false
    }
  }
}
</script>
