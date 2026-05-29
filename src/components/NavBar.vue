<template >
    <nav class="border-b border-green-500 backdrop-blur-md bg-black sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
  
        <div class="flex items-center gap-3 -ml-13">
          <img
            src="../assets/images/image.png"
            alt="Logo"
            class="w-10 h-10  bg-green-400 rounded-full p-0.5"
          /> 
  
          <span class="text-2xl font-bold text-green-500 ">
            TEMBERA U RWANDA 
          </span>
        </div>
  
        <ul class="flex gap-9 text-lg text-green-500 font-medium">
          <li><RouterLink to="/" class="hover:text-yellow-400 transition">Home</RouterLink> </li>
          <li><RouterLink to="/About" class="hover:text-yellow-400 transition">About </RouterLink></li>
          <li><RouterLink to="/Services" class="hover:text-yellow-400 transition"> Services</RouterLink></li>
          <li class="relative group"><a href="#" class="hover:text-yellow-400 transition">Gallery <span >▼</span> </a>
          <ul class="invisible-group-hover:visible-opacity-0 group-hover-opacity-100 hidden group-hover:block absolute bg-white text-green-400 rounded shadow w-48 top-full left-0 z-50">
            <li><RouterLink to="/Photos" class="block px-4 py-2 hover:bg-green-400 hover:text-white " >Photos</RouterLink></li>
            <li><RouterLink to="/Videos" class="block px-4 py-2 hover:bg-green-400 hover:text-white ">Videos</RouterLink></li>
          </ul></li>
          <li class="relative group"><a href="#" class="hover:text-yellow-400 transition">Destinations <span>▼</span></a>
            <ul class="invisible-group-hover:visible-opacity-0 group-hover-opacity-100 hidden group-hover:block absolute bg-white text-green-400 rounded shadow w-48 top-full left-0 z-50">
            <li><RouterLink to="/Kigali" class="block px-4 py-2 hover:bg-green-400 hover:text-white " >Kigali City</RouterLink></li>
            <li><RouterLink to="/Northern" class="block px-4 py-2 hover:bg-green-400 hover:text-white " >Northern Province</RouterLink></li>
            <li><RouterLink to="/Southern" class="block px-4 py-2 hover:bg-green-400 hover:text-white ">Souther Province</RouterLink></li>
            <li><RouterLink to="/Eastern" class="block px-4 py-2 hover:bg-green-400 hover:text-white ">Eastern Province</RouterLink></li>
            <li><RouterLink to="/Western" class="block px-4 py-2 hover:bg-green-400 hover:text-white ">Westen Province</RouterLink></li>
          </ul></li> 
          <li><RouterLink to="/Contact" class="hover:text-yellow-400 transition">Contact </RouterLink></li>
        </ul>
  
      </div>

    </nav>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script> l