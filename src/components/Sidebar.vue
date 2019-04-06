<template>
    <b-nav class="flex-column">
        <div class="nav-item">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/profile">Edit Profile</b-nav-item>
        </div>
    </b-nav>
</template>

<script>

</script>
<style lang="scss" scoped>
    .nav-item{
        text-align:left;
        list-style:none;
        a{
            color:black;
            text-decoration:none;
            &.router-link-exact-active {
            font-weight:bold;
    }
        }
    }
</style>