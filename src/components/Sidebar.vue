<template>
    <b-nav class="flexible-column">
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
        background-color:#373737;
        list-style:none;
        a{
            color:white;
            text-decoration:none;
        }
    }
</style>