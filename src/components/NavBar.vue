<template >
    <nav class="border-b border-green-500 backdrop-blur-md bg-green-800/20 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
  
        <div class="flex items-center gap-3 -ml-13">
          <img
            src="../assets/images/image.png"
            alt="Logo"
            class="w-10 h-10  bg-green-400 rounded-full p-0.5"
          /> 
  
          <span class="text-2xl font-bold text-green-400 ">
            TEMBERA U RWANDA 
          </span>
        </div>
  
        <ul class="flex gap-9 text-lg text-green-400 font-medium">
          <li><a href="/" class="hover:text-yellow-400 transition">Home</a> </li>
          <li><a href="/About" class="hover:text-yellow-400 transition">About </a></li>
          <li><a href="/Services" class="hover:text-yellow-400 transition"> Services</a></li>
          <li class="relative group"><a href="#" class="hover:text-yellow-400 transition">Gallery <span >▼</span> </a>
          <ul class="invisible-group-hover:visible-opacity-0 group-hover-opacity-100 hidden group-hover:block absolute bg-white text-green-400 rounded shadow w-48 top-full left-0 z-50">
            <li><a href="/Photos" class="block px-4 py-2 hover:bg-green-400 hover:text-white " >Photos</a></li>
            <li><a href="/Videos" class="block px-4 py-2 hover:bg-green-400 hover:text-white ">Videos</a></li>
          </ul></li>
          <li class="relative group"><a href="#" class="hover:text-yellow-400 transition">Destinations <span>▼</span></a>
            <ul class="invisible-group-hover:visible-opacity-0 group-hover-opacity-100 hidden group-hover:block absolute bg-white text-green-400 rounded shadow w-48 top-full left-0 z-50">
            <li><a href="/Kigali" class="block px-4 py-2 hover:bg-green-400 hover:text-white " >Kigali City</a></li>
            <li><a href="/Northern" class="block px-4 py-2 hover:bg-green-400 hover:text-white " >Northern Province</a></li>
            <li><a href="/Southern" class="block px-4 py-2 hover:bg-green-400 hover:text-white ">Souther Province</a></li>
            <li><a href="/Eastern" class="block px-4 py-2 hover:bg-green-400 hover:text-white ">Eastern Province</a></li>
            <li><a href="/Western" class="block px-4 py-2 hover:bg-green-400 hover:text-white ">Westen Province</a></li>
          </ul></li> 
          <li><a href="/Contact" class="hover:text-yellow-400 transition">Contact </a></li>
        </ul>
  
      </div>

    </nav>
  </template>
  
  <script setup>
  </script> l