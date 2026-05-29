<template>
   <div class="min-h-screen bg-gray-100">

 
     <!-- Hero Section -->
     <section              
       class="relative h-[90vh] bg-cover bg-center"
       style="background-image: url('/src/assets/images/image4.png');"
     >
       <div class="absolute inset-0 bg-black/50"></div>
 
       <div
         class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
       >
         <h2 class="text-5xl md:text-7xl font-extrabold mb-6">
           Discover the Beauty of Rwanda
         </h2>
 
         <p class="max-w-2xl text-lg md:text-2xl mb-8">
           Explore mountains, wildlife, lakes, culture, and unforgettable
           adventures across the Land of a Thousand Hills.
         </p>
 
         <button
           class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-full text-lg transition duration-300"
         >
           Explore Now
         </button>
       </div>
     </section>
 
     <!-- Popular Destinations -->
     <section class="py-16 px-6 max-w-7xl mx-auto">
       <h2 class="text-4xl font-bold text-center text-green-800 mb-12">
         Popular Destinations
       </h2>
 
       <div class="grid md:grid-cols-3 gap-8">
         
         <!-- Card 1 -->
         <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
           <img
             src="/src/assets/images/image9.png"
             alt="Volcanoes National Park"
             class="h-64 w-full object-cover"
           />
 
           <div class="p-6">
             <h3 class="text-2xl font-bold text-green-700 mb-3">
               Volcanoes National Park
             </h3>
 
             <p class="text-gray-600">
               Experience mountain gorillas and breathtaking volcanic scenery.
             </p>
           </div>
         </div>
 
         <!-- Card 2 -->
         <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
           <img
             src="/src/assets/images/image.png"
             alt="Lake Kivu"
             class="h-64 w-full object-cover"
           />
 
           <div class="p-6">
             <h3 class="text-2xl font-bold text-green-700 mb-3">
               Lake Kivu
             </h3>
 
             <p class="text-gray-600">
               Relax by the beautiful shores and enjoy Rwanda’s peaceful lakes.
             </p>
           </div>
         </div>
 
         <!-- Card 3 -->
         <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
           <img
             src="/src/assets/images/logo.png"
             alt="Kigali City"
             class="h-64 w-full object-cover"
           />
 
           <div class="p-6">
             <h3 class="text-2xl font-bold text-green-700 mb-3">
               Kigali City
             </h3>
 
             <p class="text-gray-600">
               Discover one of Africa's cleanest and most vibrant cities.
             </p>
           </div>
         </div>


       </div>
     </section>
 

   </div>
 </template>
 
 <script setup>
 // No script needed for now
 </script>