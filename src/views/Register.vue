<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white px-4 py-10">
    <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
      <h1 class="text-3xl font-bold text-green-800 mb-4">Create Account</h1>
      <p class="text-sm text-gray-600 mb-8">
        Join Tembera U Rwanda and plan your next adventure!
      </p>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label class="block text-sm font-semibold mb-2" for="fullname">Full Name</label>
          <input
            id="fullname"
            v-model="fullname"
            type="text"
            placeholder="Your full name"
            class="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

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
            placeholder="Create a password"
            class="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2" for="confirm">Confirm Password</label>
          <input
            id="confirm"
            v-model="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            class="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div v-if="error" class="text-red-600 text-sm">{{ error }}</div>

        <button
          type="submit"
          class="w-full rounded-2xl bg-green-600 text-white py-3 font-semibold hover:bg-green-700 transition"
        >
          Create Account
        </button>
      </form>

      <p class="mt-6 text-sm text-center text-gray-600">
        Already have an account?
        <router-link to="/login" class="text-green-600 font-semibold hover:text-green-700">
          Login here
        </router-link>
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
const fullname = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')

function handleSubmit() {
  error.value = ''

  if (!fullname.value.trim() || !email.value.trim() || !password.value.trim() || !confirmPassword.value.trim()) {
    error.value = 'Please fill in all fields.'
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match.'
    return
  }

  if (password.value.length < 6) {
    error.value = 'Password must be at least 6 characters.'
    return
  }

  if (!auth.login(email.value.trim(), password.value.trim())) {
    error.value = 'Registration failed. Please try again.'
    return
  }

  router.push({ name: 'Dashboard' })
}
</script>
