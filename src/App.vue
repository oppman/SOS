<script setup>
//import Home from './views/Home.vue';
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
<NavBar />
<RouterView/>
 <!--<Home/>-->
<Footer/>        
</template>

