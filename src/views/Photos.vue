<template>
    <div>
  
      <!-- Hero Section -->
  
      <section class="relative h-[70vh]">
        <img
          src="/src/assets/images/photos/gallery-hero.jpg"
          class="w-full h-full object-cover"
          alt="Gallery Hero"
        />
  
        <div class="absolute inset-0 bg-black/60"></div>
  
        <div
          class="absolute inset-0 flex items-center justify-center text-center px-6"
        >
          <div>
  
            <h1 class="text-6xl md:text-8xl font-black text-white">
              Photo Gallery
            </h1>
  
            <p class="text-xl md:text-2xl text-gray-200 mt-6">
              Explore Rwanda through stunning photography.
            </p>
  
          </div>
        </div>
      </section>
  
      <!-- Intro -->
  
      <section class="py-20 bg-white text-center">
        <div class="max-w-4xl mx-auto px-6">
  
          <h2 class="text-5xl font-black text-green-700">
            Capturing Rwanda's Beauty
          </h2>
  
          <p class="mt-8 text-lg text-gray-600 leading-9">
            From majestic mountain gorillas and volcanic landscapes
            to vibrant cities and cultural traditions, Rwanda offers
            endless opportunities for unforgettable photography.
          </p>
  
        </div>
      </section>
  
      <!-- Categories -->
  
      <section class="pb-12 bg-white">
        <div class="flex flex-wrap justify-center gap-4">
  
          <button class="px-6 py-3 bg-green-700 text-white rounded-full">
            All
          </button>
  
          <button class="px-6 py-3 bg-gray-100 rounded-full">
            Wildlife
          </button>
  
          <button class="px-6 py-3 bg-gray-100 rounded-full">
            Nature
          </button>
  
          <button class="px-6 py-3 bg-gray-100 rounded-full">
            Culture
          </button>
  
          <button class="px-6 py-3 bg-gray-100 rounded-full">
            Cities
          </button>
  
        </div>
      </section>
  
      <!-- Gallery -->
  
      <section class="bg-gray-50 py-16">
        <div class="max-w-7xl mx-auto px-6">
  
          <div class="grid md:grid-cols-3 gap-8">
  
            <div class="overflow-hidden rounded-3xl shadow-xl group">
              <img
                src="/src/assets/images/photos/gorilla1.jpg"
                class="w-full h-96 object-cover group-hover:scale-110 transition duration-700"
              />
            </div>
  
            <div class="overflow-hidden rounded-3xl shadow-xl group">
              <img
                src="/src/assets/images/photos/lake-kivu.jpg"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>
  
            <div class="overflow-hidden rounded-3xl shadow-xl group">
              <img
                src="/src/assets/images/photos/kigali-night.jpg"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>
  
            <div class="overflow-hidden rounded-3xl shadow-xl group">
              <img
                src="/src/assets/images/photos/culture1.jpg"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>
  
            <div class="overflow-hidden rounded-3xl shadow-xl group">
              <img
                src="/src/assets/images/photos/volcanoes.jpg"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>
  
            <div class="overflow-hidden rounded-3xl shadow-xl group">
              <img
                src="/src/assets/images/photos/akagera.jpg"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>
  
          </div>
  
        </div>
      </section>
  
      <!-- Featured Photo -->
  
      <section class="py-24 bg-black text-white">
  
        <div class="max-w-6xl mx-auto px-6">
  
          <div class="grid md:grid-cols-2 gap-16 items-center">
  
            <img
              src="/src/assets/images/photos/gorilla1.jpg"
              class="rounded-3xl shadow-2xl"
            />
  
            <div>
  
              <span class="uppercase tracking-widest text-green-400">
                Featured Destination
              </span>
  
              <h2 class="text-5xl font-black mt-4">
                Volcanoes National Park
              </h2>
  
              <p class="mt-8 text-lg text-gray-300 leading-9">
                One of Africa's most iconic destinations, home to
                mountain gorillas, breathtaking volcanic scenery
                and unforgettable trekking experiences.
              </p>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
  

  
    </div>
  </template>
  
  <script setup>
  </script> 