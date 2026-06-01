<template>
  <nav
    class="bg-green-600/95 backdrop-blur-md border-b border-green-500 sticky top-0 z-50"
  >
    <div
      class="max-w-7xl mx-auto flex justify-between items-center px-6 py-3"
    >
      <!-- Logo -->

      <router-link
        to="/"
        class="flex items-center gap-3 "
      >
        <img
          src="/src/assets/images/western.jpg"
          alt="Logo"
          class="w-12 h-12 rounded-full border-2 border-white"
        />

        <div>
          <h1
            class="text-white text-2xl md:text-3xl font-black tracking-wide"
          >
            TEMBERA U RWANDA
          </h1>

          
        </div>
      </router-link>

      <!-- Desktop Menu -->

      <ul
        class="hidden lg:flex items-center gap-8 text-white font-semibold"
      >
        <li>
          <router-link
            to="/"
            class="hover:text-yellow-400 transition"
          >
            Home
          </router-link>
        </li>

        <li>
          <router-link
            to="/about"
            class="hover:text-yellow-400 transition"
          >
            About
          </router-link>
        </li>

        <li>
          <router-link
            to="/services"
            class="hover:text-yellow-400 transition"
          >
            Services
          </router-link>
        </li>

        <!-- Gallery Dropdown -->

        <li class="relative group">

          <button
            class="hover:text-yellow-400 transition"
          >
            Gallery ▼
          </button>

          <div
            class="absolute top-full left-0 hidden group-hover:block bg-white rounded-xl shadow-2xl min-w-[200px] overflow-hidden text-black"
          >
            <router-link
              to="/photos"
              class="block px-5 py-4 text-black hover:bg-green-300"
            >
              📸 Photos
            </router-link>

            <router-link
              to="/videos"
              class="block px-5 py-4 text-black hover:bg-green-300"
            >
              🎥 Videos
            </router-link>
          </div>

        </li>

        <!-- Destinations Dropdown -->

        <li class="relative group">

          <button
            class="hover:text-yellow-400 transition"
          >
            Destinations ▼
          </button>

          <div
            class="absolute top-full left-0 hidden group-hover:block bg-white rounded-xl shadow-2xl min-w-[250px] overflow-hidden text-black"
          >
            <router-link
              to="/kigali"
              class="block px-5 py-4 hover:bg-green-300"
            >
              Kigali City
            </router-link>

            <router-link
              to="/northern"
              class="block px-5 py-4 hover:bg-green-300"
            >
              Northern Province
            </router-link>

            <router-link
              to="/southern"
              class="block px-5 py-4 hover:bg-green-300"
            >
              Southern Province
            </router-link>

            <router-link
              to="/eastern"
              class="block px-5 py-4 hover:bg-green-300"
            >
              Eastern Province
            </router-link>

            <router-link
              to="/western"
              class="block px-5 py-4 hover:bg-green-300"
            >
              Western Province
            </router-link>
          </div>

        </li>

        <li>
          <router-link
            to="/contact"
            class="hover:text-yellow-400 transition"
          >
            Contact
          </router-link>
        </li>
      </ul>

      <!-- Mobile Button -->

      <button
        @click="mobileMenu = !mobileMenu"
        class="lg:hidden text-white text-3xl"
      >
        ☰
      </button>
    </div>

    <!-- Mobile Menu -->

    <div
      v-if="mobileMenu"
      class="lg:hidden bg-black text-white border-t border-green-500"
    >
      <router-link
        to="/"
        class="block px-6 py-4 border-b border-gray-800"
      >
        Home
      </router-link>

      <router-link
        to="/about"
        class="block px-6 py-4 border-b border-gray-800"
      >
        About
      </router-link>

      <router-link
        to="/services"
        class="block px-6 py-4 border-b border-gray-800"
      >
        Services
      </router-link>

      <router-link
        to="/photos"
        class="block px-6 py-4 border-b border-gray-800"
      >
        Photos
      </router-link>

      <router-link
        to="/videos"
        class="block px-6 py-4 border-b border-gray-800"
      >
        Videos
      </router-link>

      <router-link
        to="/kigali"
        class="block px-6 py-4 border-b border-gray-800"
      >
        Kigali
      </router-link>

      <router-link
        to="/northern"
        class="block px-6 py-4 border-b border-gray-800"
      >
        Northern
      </router-link>

      <router-link
        to="/southern"
        class="block px-6 py-4 border-b border-gray-800"
      >
        Southern
      </router-link>

      <router-link
        to="/eastern"
        class="block px-6 py-4 border-b border-gray-800"
      >
        Eastern
      </router-link>

      <router-link
        to="/western"
        class="block px-6 py-4 border-b border-gray-800"
      >
        Western
      </router-link>

      <router-link
        to="/contact"
        class="block px-6 py-4"
      >
        Contact
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const mobileMenu = ref(false);
</script>