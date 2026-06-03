<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <div :class="['fixed inset-y-0 left-0 w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 z-50', sidebarOpen ? 'translate-x-0' : '-translate-x-full', 'md:relative md:translate-x-0']">
      <div class="flex flex-col h-full">
        <!-- Logo -->
        <div class="px-6 py-6 border-b border-gray-800">
          <h1 class="text-xl font-bold text-white">Tembera Dashboard</h1>
        </div>

        <!-- Menu Items -->
        <nav class="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <div class="mb-4">
            <p class="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Main</p>
          </div>
          <button @click="activeSection = 'overview'" :class="['w-full text-left px-4 py-2.5 rounded-lg font-medium transition', activeSection === 'overview' ? 'bg-green-600 text-white' : 'text-gray-300 hover:bg-gray-800']">
            📊 Overview
          </button>
          <button @click="activeSection = 'trips'" :class="['w-full text-left px-4 py-2.5 rounded-lg font-medium transition', activeSection === 'trips' ? 'bg-green-600 text-white' : 'text-gray-300 hover:bg-gray-800']">
            ✈️ My Trips
          </button>
          <button @click="activeSection = 'favorites'" :class="['w-full text-left px-4 py-2.5 rounded-lg font-medium transition', activeSection === 'favorites' ? 'bg-green-600 text-white' : 'text-gray-300 hover:bg-gray-800']">
            ⭐ Favorites
          </button>
          <button @click="activeSection = 'account'" :class="['w-full text-left px-4 py-2.5 rounded-lg font-medium transition', activeSection === 'account' ? 'bg-green-600 text-white' : 'text-gray-300 hover:bg-gray-800']">
            👤 Account
          </button>

          <div class="my-4 border-t border-gray-800"></div>

          <div class="mb-4">
            <p class="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Quick Links</p>
          </div>
          <router-link to="/" :class="['block px-4 py-2.5 rounded-lg font-medium text-gray-300 hover:bg-gray-800 transition']">
            🏠 Home
          </router-link>
          <router-link to="/contact" :class="['block px-4 py-2.5 rounded-lg font-medium text-gray-300 hover:bg-gray-800 transition']">
            💬 Support
          </router-link>
          <router-link to="/photos" :class="['block px-4 py-2.5 rounded-lg font-medium text-gray-300 hover:bg-gray-800 transition']">
            🖼️ Gallery
          </router-link>
        </nav>

        <!-- Logout Button -->
        <div class="px-4 py-6 border-t border-gray-800">
          <button
            @click="handleLogout"
            class="w-full rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>

    <!-- Overlay -->
    <div v-if="sidebarOpen" @click="sidebarOpen = false" class="fixed inset-0 bg-black/30 z-40 md:hidden"></div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Top Bar -->
      <div class="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div class="flex items-center justify-between">
          <button @click="sidebarOpen = !sidebarOpen" class="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            ☰
          </button>
          <h2 class="text-lg font-semibold text-gray-900">{{ pageTitle }}</h2>
          <div class="text-sm text-gray-500">{{ userEmail }}</div>
        </div>
      </div>

      <!-- Page Content -->
      <div class="flex-1 overflow-auto">
        <div class="max-w-6xl mx-auto px-6 py-8">
          <!-- Overview Section -->
          <div v-if="activeSection === 'overview'" class="space-y-6">
            <div class="grid gap-4 sm:grid-cols-3">
              <div class="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Bookings</p>
                <p class="mt-3 text-2xl font-bold text-gray-900">12</p>
              </div>
              <div class="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Upcoming Trips</p>
                <p class="mt-3 text-2xl font-bold text-gray-900">3</p>
              </div>
              <div class="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Destinations Visited</p>
                <p class="mt-3 text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>

            <div class="grid gap-6 md:grid-cols-2">
              <div class="rounded-lg bg-white shadow-sm border border-gray-200 overflow-hidden">
                <div class="border-b border-gray-100 px-6 py-4">
                  <h3 class="text-lg font-semibold text-gray-900">Recent Trips</h3>
                </div>
                <div class="px-6 py-4">
                  <div class="space-y-3">
                    <div class="flex items-center justify-between text-sm">
                      <span class="text-gray-700">Northern Safari</span>
                      <span class="text-gray-400">June 15</span>
                    </div>
                    <div class="flex items-center justify-between text-sm">
                      <span class="text-gray-700">Kigali City Tour</span>
                      <span class="text-gray-400">June 22</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="rounded-lg bg-white shadow-sm border border-gray-200 overflow-hidden">
                <div class="border-b border-gray-100 px-6 py-4">
                  <h3 class="text-lg font-semibold text-gray-900">Top Favorites</h3>
                </div>
                <div class="px-6 py-4">
                  <div class="space-y-3">
                    <p class="text-sm text-gray-700">Volcanoes National Park</p>
                    <p class="text-sm text-gray-700">Lake Kivu Sunset Tour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Trips Section -->
          <div v-if="activeSection === 'trips'" class="rounded-lg bg-white shadow-sm border border-gray-200 overflow-hidden">
            <div class="border-b border-gray-100 px-6 py-4">
              <h3 class="text-lg font-semibold text-gray-900">My Trips</h3>
            </div>
            <div class="px-6 py-4">
              <div class="space-y-4">
                <div class="pb-4 border-b border-gray-100">
                  <div class="flex items-center justify-between mb-2">
                    <span class="font-medium text-gray-900">Northern Safari</span>
                    <span class="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">Confirmed</span>
                  </div>
                  <p class="text-sm text-gray-500">June 15, 2026 • 5 days</p>
                </div>
                <div class="pb-4 border-b border-gray-100">
                  <div class="flex items-center justify-between mb-2">
                    <span class="font-medium text-gray-900">Kigali City Tour</span>
                    <span class="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">Confirmed</span>
                  </div>
                  <p class="text-sm text-gray-500">June 22, 2026 • 2 days</p>
                </div>
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <span class="font-medium text-gray-900">Volcanoes Trek</span>
                    <span class="inline-flex items-center rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-700">Pending</span>
                  </div>
                  <p class="text-sm text-gray-500">July 5, 2026 • 3 days</p>
                </div>
              </div>
              <button class="mt-6 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition">
                Book New Trip
              </button>
            </div>
          </div>

          <!-- Favorites Section -->
          <div v-if="activeSection === 'favorites'" class="rounded-lg bg-white shadow-sm border border-gray-200 overflow-hidden">
            <div class="border-b border-gray-100 px-6 py-4">
              <h3 class="text-lg font-semibold text-gray-900">My Favorites</h3>
            </div>
            <div class="px-6 py-4">
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-lg border border-gray-200 p-4 hover:shadow-md transition">
                  <p class="font-medium text-gray-900">Volcanoes National Park</p>
                  <p class="mt-1 text-sm text-gray-500">North West Rwanda</p>
                </div>
                <div class="rounded-lg border border-gray-200 p-4 hover:shadow-md transition">
                  <p class="font-medium text-gray-900">Lake Kivu Sunset Tour</p>
                  <p class="mt-1 text-sm text-gray-500">West Rwanda</p>
                </div>
                <div class="rounded-lg border border-gray-200 p-4 hover:shadow-md transition">
                  <p class="font-medium text-gray-900">Nyungwe Forest Trail</p>
                  <p class="mt-1 text-sm text-gray-500">South West Rwanda</p>
                </div>
                <div class="rounded-lg border border-gray-200 p-4 hover:shadow-md transition">
                  <p class="font-medium text-gray-900">Kigali Genocide Memorial</p>
                  <p class="mt-1 text-sm text-gray-500">Central Rwanda</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Account Section -->
          <div v-if="activeSection === 'account'" class="rounded-lg bg-white shadow-sm border border-gray-200 overflow-hidden">
            <div class="border-b border-gray-100 px-6 py-4">
              <h3 class="text-lg font-semibold text-gray-900">Account Settings</h3>
            </div>
            <div class="px-6 py-6">
              <div class="space-y-6">
                <div>
                  <label class="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
                  <input type="email" :value="userEmail" disabled class="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-gray-700" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-900 mb-2">Account Status</label>
                  <div class="inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">Active</div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-900 mb-2">Member Since</label>
                  <p class="text-gray-600">June 2026</p>
                </div>
                <div class="pt-4 border-t border-gray-200">
                  <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth.js'

const router = useRouter()
const auth = useAuth()
const userEmail = computed(() => auth.user.value?.email || 'Guest')

const sidebarOpen = ref(false)
const activeSection = ref('overview')

const pageTitle = computed(() => {
  const titles = {
    overview: 'Overview',
    trips: 'My Trips',
    favorites: 'Favorites',
    account: 'Account Settings'
  }
  return titles[activeSection.value] || 'Dashboard'
})

function handleLogout() {
  auth.logout()
  router.push({ name: 'Home' })
}
</script>



