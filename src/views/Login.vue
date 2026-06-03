<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white px-4 py-10">
    <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
      <h1 class="text-3xl font-bold text-green-800 mb-4">Member Login</h1>
      <p class="text-sm text-gray-600 mb-8">
        Sign in to access your dashboard and plan your next Rwanda adventure.
      </p>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label class="block text-sm font-semibold mb-2" for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="you@example.com"
            class="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2" for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter your password"
            class="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div v-if="error" class="text-red-600 text-sm">{{ error }}</div>

        <button
          type="submit"
          class="w-full rounded-2xl bg-green-600 text-white py-3 font-semibold hover:bg-green-700 transition"
        >
          Login
        </button>
      </form>

      <p class="mt-6 text-sm text-center text-gray-600">
        Don't have an account?
        <router-link to="/register" class="text-green-600 font-semibold hover:text-green-700">
          click to register?
        </router-link>
      </p>

      <p class="mt-6 text-sm text-gray-500">
        Use any email and password to login. This demo page does not verify credentials.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth.js'

const router = useRouter()
const auth = useAuth()
const email = ref('')
const password = ref('')
const error = ref('')

function handleSubmit() {
  error.value = ''
  if (!auth.login(email.value.trim(), password.value.trim())) {
    error.value = 'Please enter both email and password.'
    return
  }
  router.push({ name: 'Dashboard' })
}
</script>
