<template>
<b-navbar class="sidebar flex-column">
    <b-navbar-brand>
        <b-img class="sidebar-profile" src="https://www.cornelldti.org/static/members/ew469.jpg"/>
    </b-navbar-brand>
    <h1>Evan Welsh</h1>
    <b-navbar-nav class="menu-nav flex-column">
        <b-nav-item to="/"><img class="sidebar-icon" src="../assets/updates.png"/>Home</b-nav-item>
        <b-nav-item to="/profile"><img class="sidebar-icon" src="../assets/profile.png"/>Edit Profile</b-nav-item>
    </b-navbar-nav>
</b-navbar>
</template>

<script>
</script>

<style lang="scss">
.menu-nav{
    margin-top:1.5rem;
    color:white;
}

.sidebar .menu-nav .nav-link{
    color:white;
    
    &:hover{
        color:white;
    }
}

h1{
    font-size:1.5rem;
}
.nav-item{
    text-align:left;
    list-style:none;
    width:100%;
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
    min-width:15rem;
    max-width:20rem;
}
.sidebar-profile{
    margin-top:10%;
    border-radius:50%;
    height:6rem;
}
.sidebar-icon{
    height:1.25rem;
    margin-right:.625rem;
}
</style>