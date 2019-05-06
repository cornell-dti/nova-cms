<template>
  <b-navbar class="sidebar flex-column">
    <b-navbar-brand>
      <b-img class="sidebar-profile" src="https://www.cornelldti.org/static/members/ew469.jpg"/>
    </b-navbar-brand>
    <h1>Evan Welsh</h1>
    <b-navbar-nav class="menu-nav flex-column">
      <b-nav-item to="/">
        <img class="sidebar-icon" src="../assets/updates.png">Home
      </b-nav-item>
      <b-nav-item to="/profile">
        <img class="sidebar-icon" src="../assets/profile.png">Edit Profile
      </b-nav-item>
      <b-nav-item to="/admin">
        <img class="sidebar-icon" src="../assets/admin.png">Admin Tools
      </b-nav-item>
      <b-nav-item to="/edits">Pending Edits</b-nav-item>
      <b-nav-item to="/project">Project</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<style lang="scss">
.menu-nav {
  margin-top: 1.5rem;
  color: white;
  width: 100%;
}

.sidebar .menu-nav .nav-link {
  padding-left: 2rem;
  padding-right: 2rem;

  color: white;

  &:hover {
    color: white;
  }
}

h1 {
  font-size: 1.5rem;
}
.nav-item {
  text-align: left;
  list-style: none;
  width: 100%;
  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    &.router-link-exact-active {
      font-weight: bold;
      background-color: #ff324a;
    }
  }
}
.sidebar {
  background-color: #373737;
  color: white;
  min-width: 15rem;
  max-width: 20rem;
  padding: 0;
}
.sidebar-profile {
  margin-top: 10%;
  border-radius: 50%;
  height: 6rem;
}
.sidebar-icon {
  height: 1.25rem;
  margin-right: 0.625rem;
}
.navbar-brand {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 0;
}
</style>