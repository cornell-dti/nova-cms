<template>
<b-navbar class="sidebar flex-column">
    <b-navbar-brand>
        <b-img class="sidebar-profile" src="https://www.cornelldti.org/static/members/ew469.jpg"/>
    </b-navbar-brand>
    <h1>Evan Welsh</h1>
    <b-navbar-nav class="menu-nav flex-column">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/profile">Edit Profile</b-nav-item>
    </b-navbar-nav>
</b-navbar>
</template>

<script>
</script>

<style lang="scss">
.sidebar .menu-nav .nav-link{
    color:white;
    &:hover{
        text-decoration:none;
        color:white;
    }
}

h1{
    font-size:1.5rem;
}
.nav-item{
    text-align:left;
    list-style:none;
    a{
        color:white;
        text-decoration:none;
        &.router-link-exact-active {
        font-weight:bold;
        background-color:#FF324A;
}
    }
}
.sidebar{
    background-color:#373737;
    color:white;
    min-width:17.5%;
    max-width:30%;
}
.sidebar-profile{
    margin-top:10%;
    border-radius:50%;
    height:6rem;
}
</style>