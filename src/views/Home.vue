<template>
  <div class="bg-white">

    <!-- HERO SECTION -->
    <section
      class="relative min-h-screen bg-cover bg-center"
      style="background-image: url(/src/assets/images/southern.jpg)"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      <div
        class="relative z-10 min-h-screen flex items-center px-6 md:px-16"
      >
        <div class="max-w-4xl text-white">

          <span
            class="inline-block px-5 py-2 rounded-full bg-green-500/20 border border-green-400 text-green-300 font-semibold"
          >
            Welcome to Rwanda
          </span>

          <h1
            class="mt-8 text-6xl md:text-8xl font-black leading-tight"
          >
            Discover the Beauty of
            <span class="text-green-400">
              Rwanda
            </span>
          </h1>

          <p
            class="mt-8 text-lg md:text-2xl text-gray-200 max-w-3xl"
          >
            Explore breathtaking landscapes, wildlife adventures,
            rich cultural heritage, and unforgettable experiences
            across the Land of a Thousand Hills.
          </p>

          <div class="flex flex-wrap gap-5 mt-10">

            <router-link
              to="/kigali"
              class="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-bold transition duration-300"
            >
              Explore Now
            </router-link>

            <router-link
              to="/about"
              class="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              Learn More
            </router-link>

          </div>

        </div>
      </div>
    </section>



    <!-- EXPERIENCES -->
    <section class="py-24 bg-white">

      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-16">
          <h2 class="text-5xl font-black text-gray-900">
            Featured Experiences
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-10">

          <div
            class="bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src="/src/assets/images/gorilla.jpg"
              class="h-72 w-full object-cover"
            />

            <div class="p-8">
              <h3 class="text-2xl font-bold">
                Gorilla Trekking
              </h3>

              <p class="mt-4 text-gray-600">
                Encounter mountain gorillas in their natural habitat.
              </p>
            </div>
          </div>

          <div
            class="bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src="/src/assets/images/kivu.jpg"
              class="h-72 w-full object-cover"
            />

            <div class="p-8">
              <h3 class="text-2xl font-bold">
                Lake Kivu
              </h3>

              <p class="mt-4 text-gray-600">
                Relax on stunning beaches and enjoy beautiful sunsets.
              </p>
            </div>
          </div>

          <div
            class="bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src="/src/assets/images/culture.jpg"
              class="h-72 w-full object-cover"
            />

            <div class="p-8">
              <h3 class="text-2xl font-bold">
                Culture & Heritage
              </h3>

              <p class="mt-4 text-gray-600">
                Experience Rwanda's traditions, music, dance and history.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>



  </div>
</template>

<script setup>
</script>