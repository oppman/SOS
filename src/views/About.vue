<template>
  <div class="bg-stone-50 font-body">

    <!-- Hero Section -->
    <section
      class="relative h-[70vh] bg-cover bg-center flex items-end"
      style="background-image: url('/src/assets/images/image6.png');"
    >
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      <div class="relative z-10 px-8 md:px-20 pb-16 max-w-5xl">
        <span class="inline-block text-yellow-400 font-semibold tracking-[0.3em] uppercase text-sm mb-4">
          Our Story
        </span>
        <h1 class="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight">
          About<br />
          <span class="text-yellow-400">Tembera U Rwanda</span>
        </h1>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="max-w-6xl mx-auto px-6 md:px-16 py-24 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <span class="text-yellow-500 font-semibold tracking-widest uppercase text-xs">Who We Are</span>
        <h2 class="text-4xl font-display font-bold text-green-900 mt-3 mb-6 leading-snug">
          Your Trusted Guide to the Land of a Thousand Hills
        </h2>
        <p class="text-gray-600 text-lg leading-relaxed mb-5">
          <strong class="text-green-800">Tembera U Rwanda</strong> — meaning <em>"Visit Rwanda"</em> in Kinyarwanda — was born from a deep love for this remarkable country. We are a passionate team of local guides, storytellers, and travel experts dedicated to sharing Rwanda's hidden wonders with the world.
        </p>
        <p class="text-gray-600 text-lg leading-relaxed">
          From the misty peaks of the Virunga volcanoes to the tranquil shores of Lake Kivu, we craft authentic, immersive experiences that connect travelers to Rwanda's breathtaking landscapes, vibrant culture, and warm people.
        </p>
      </div>
      <div class="relative">
        <img
          src="/src/assets/images/image4.png"
          alt="Rwanda landscape"
          class="rounded-2xl w-full h-80 object-cover shadow-2xl"
        />
        <div class="absolute -bottom-6 -left-6 bg-yellow-400 rounded-2xl p-6 shadow-xl">
          <p class="text-green-900 font-bold text-3xl">10+</p>
          <p class="text-green-900 text-sm font-semibold">Years of Experience</p>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="bg-green-800 py-14">
      <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
        <div>
          <p class="text-yellow-400 font-display font-extrabold text-5xl">5K+</p>
          <p class="text-green-200 mt-2 text-sm tracking-wide uppercase">Happy Travelers</p>
        </div>
        <div>
          <p class="text-yellow-400 font-display font-extrabold text-5xl">30+</p>
          <p class="text-green-200 mt-2 text-sm tracking-wide uppercase">Destinations</p>
        </div>
        <div>
          <p class="text-yellow-400 font-display font-extrabold text-5xl">15</p>
          <p class="text-green-200 mt-2 text-sm tracking-wide uppercase">Expert Guides</p>
        </div>
        <div>
          <p class="text-yellow-400 font-display font-extrabold text-5xl">4.9★</p>
          <p class="text-green-200 mt-2 text-sm tracking-wide uppercase">Average Rating</p>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="max-w-6xl mx-auto px-6 md:px-16 py-24 grid md:grid-cols-2 gap-10">
      <!-- Mission -->
      <div class="bg-white border border-gray-100 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
          <svg class="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
          </svg>
        </div>
        <h3 class="text-2xl font-display font-bold text-green-800 mb-4">Our Mission</h3>
        <p class="text-gray-600 leading-relaxed">
          To create meaningful, responsible travel experiences that celebrate Rwanda's natural beauty, cultural richness, and the resilient spirit of its people — while supporting local communities and preserving the environment for future generations.
        </p>
      </div>
      <!-- Vision -->
      <div class="bg-green-800 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="w-14 h-14 bg-green-700 rounded-2xl flex items-center justify-center mb-6">
          <svg class="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
        <h3 class="text-2xl font-display font-bold text-yellow-400 mb-4">Our Vision</h3>
        <p class="text-green-200 leading-relaxed">
          To be Rwanda's most trusted and beloved tourism platform — making the wonders of the Land of a Thousand Hills accessible, memorable, and inspiring to every traveler who sets foot on this sacred soil.
        </p>
      </div>
    </section>

    <!-- Core Values -->
    <section class="bg-stone-100 py-24 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-yellow-500 font-semibold tracking-widest uppercase text-xs">What Drives Us</span>
          <h2 class="text-4xl font-display font-bold text-green-900 mt-3">Our Core Values</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="value in values" :key="value.title"
            class="bg-white rounded-2xl p-8 shadow-md hover:scale-105 transition-transform duration-300 border-b-4 border-yellow-400">
            <div class="text-4xl mb-4">{{ value.icon }}</div>
            <h4 class="text-xl font-bold text-green-800 mb-3">{{ value.title }}</h4>
            <p class="text-gray-500 leading-relaxed text-sm">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>



   
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const values = [
  {
    icon: '🌿',
    title: 'Sustainability',
    description: 'We are committed to eco-friendly tourism that protects Rwanda\'s pristine ecosystems, wildlife, and natural heritage for generations to come.',
  },
  {
    icon: '🤝',
    title: 'Community First',
    description: 'Every tour, booking, and experience is designed to uplift local communities, support small businesses, and create lasting economic impact.',
  },
  {
    icon: '✨',
    title: 'Authentic Experiences',
    description: 'We go beyond tourist traps — connecting you with the real Rwanda through genuine cultural exchanges, local cuisine, and hidden gems.',
  },
  {
    icon: '🛡️',
    title: 'Safety & Trust',
    description: 'Your safety is our top priority. Our experienced guides and vetted partners ensure every journey is comfortable, secure, and worry-free.',
  },
  {
    icon: '❤️',
    title: 'Passion for Rwanda',
    description: 'We are Rwandans who love our country deeply. That passion shows in every itinerary, every story told, and every smile we share.',
  },
  {
    icon: '🌍',
    title: 'Inclusive Travel',
    description: 'Rwanda belongs to everyone. We design experiences that are welcoming, accessible, and enriching for all kinds of travelers.',
  },
]

</script>