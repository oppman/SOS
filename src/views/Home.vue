<template>
  <div>

    <!-- HERO SECTION -->

    <section
      class="relative h-screen bg-cover bg-center"
      style="background-image: url(/src/assets/images/gorilla.jpg)"
    >
      <div class="absolute inset-0 bg-black/60"></div>

      <div
        class="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6"
      >
        <p
          class="uppercase tracking-[8px] text-green-400 font-semibold mb-4"
        >
          Visit Rwanda
        </p>

        <h1
          class="text-5xl md:text-8xl font-black max-w-6xl leading-tight"
        >
          Discover The Land Of A Thousand Hills
        </h1>

        <p
          class="text-lg md:text-2xl mt-8 max-w-3xl text-gray-200"
        >
          Experience wildlife, mountains, lakes, culture,
          adventure and unforgettable memories.
        </p>

        <div class="mt-10 flex flex-wrap gap-4 justify-center">

          <router-link
            to="/kigali"
            class="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-bold"
          >
            Explore Rwanda
          </router-link>

          <router-link
            to="/about"
            class="border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
          >
            Learn More
          </router-link>

        </div>
      </div>
    </section>

    <!-- PROVINCE EXPLORER -->

    <section class="py-24 bg-gray-50">

      <div class="max-w-7xl mx-auto px-6">

        <h2
          class="text-5xl font-black text-center text-gray-800"
        >
          Explore Rwanda
        </h2>

        <p
          class="text-center text-gray-500 mt-4 mb-16"
        >
          Choose a destination and begin your adventure
        </p>

        <div
          class="grid md:grid-cols-5 gap-6"
        >

          <router-link
            to="/kigali"
            class="group h-80 rounded-3xl overflow-hidden relative"
          >
            <img
              src="/src/assets/images/kigali.jpg"
              class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div
              class="absolute inset-0 bg-black/40"
            ></div>

            <h3
              class="absolute bottom-6 left-6 text-white text-2xl font-bold"
            >
              Kigali
            </h3>
          </router-link>

          <router-link
            to="/northern"
            class="group h-80 rounded-3xl overflow-hidden relative"
          >
            <img
              src="/src/assets/images/northern.jpg"
              class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div class="absolute inset-0 bg-black/40"></div>

            <h3
              class="absolute bottom-6 left-6 text-white text-2xl font-bold"
            >
              Northern
            </h3>
          </router-link>

          <router-link
            to="/southern"
            class="group h-80 rounded-3xl overflow-hidden relative"
          >
            <img
              src="/src/assets/images/southern.jpg"
              class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div class="absolute inset-0 bg-black/40"></div>

            <h3
              class="absolute bottom-6 left-6 text-white text-2xl font-bold"
            >
              Southern
            </h3>
          </router-link>

          <router-link
            to="/eastern"
            class="group h-80 rounded-3xl overflow-hidden relative"
          >
            <img
              src="/src/assets/images/eastern.jpg"
              class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div class="absolute inset-0 bg-black/40"></div>

            <h3
              class="absolute bottom-6 left-6 text-white text-2xl font-bold"
            >
              Eastern
            </h3>
          </router-link>

          <router-link
            to="/western"
            class="group h-80 rounded-3xl overflow-hidden relative"
          >
            <img
              src="/src/assets/images/western.jpg"
              class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div class="absolute inset-0 bg-black/40"></div>

            <h3
              class="absolute bottom-6 left-6 text-white text-2xl font-bold"
            >
              Western
            </h3>
          </router-link>

        </div>
      </div>

    </section>

    <!-- FEATURED DESTINATIONS -->

    <section class="py-24 bg-white">

      <div class="max-w-7xl mx-auto px-6">

        <h2
          class="text-5xl font-black text-center mb-16"
        >
          Featured Experiences
        </h2>

        <div
          class="grid md:grid-cols-3 gap-10"
        >

          <div
            class="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition"
          >
            <img
              src="/src/assets/images/gorilla.jpg"
              class="h-64 w-full object-cover"
            />

            <div class="p-8">
              <h3 class="text-2xl font-bold">
                Gorilla Trekking
              </h3>

              <p class="mt-4 text-gray-600">
                Meet Rwanda's famous mountain gorillas.
              </p>
            </div>
          </div>

          <div
            class="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition"
          >
            <img
              src="/src/assets/images/kivu.jpg"
              class="h-64 w-full object-cover"
            />

            <div class="p-8">
              <h3 class="text-2xl font-bold">
                Lake Kivu
              </h3>

              <p class="mt-4 text-gray-600">
                Relax on Rwanda's most beautiful lake.
              </p>
            </div>
          </div>

          <div
            class="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition"
          >
            <img
              src="/src/assets/images/culture.jpg"
              class="h-64 w-full object-cover"
            />

            <div class="p-8">
              <h3 class="text-2xl font-bold">
                Culture & Heritage
              </h3>

              <p class="mt-4 text-gray-600">
                Discover Rwanda's traditions and history.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>

    <!-- STATISTICS -->

    <section class="bg-green-600 py-20 text-white">

      <div
        class="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center"
      >

        <div>
          <h3 class="text-6xl font-black">1000+</h3>
          <p class="mt-3">Hills</p>
        </div>

        <div>
          <h3 class="text-6xl font-black">4</h3>
          <p class="mt-3">National Parks</p>
        </div>

        <div>
          <h3 class="text-6xl font-black">5</h3>
          <p class="mt-3">Provinces</p>
        </div>

        <div>
          <h3 class="text-6xl font-black">13M+</h3>
          <p class="mt-3">People</p>
        </div>

      </div>

    </section>



  </div>
</template>

<script setup>
</script>