import { reactive, computed } from 'vue'

const state = reactive({
  user: JSON.parse(window.localStorage.getItem('sos-user')) || null,
})

function saveUser(user) {
  state.user = user
  if (user) {
    window.localStorage.setItem('sos-user', JSON.stringify(user))
  } else {
    window.localStorage.removeItem('sos-user')
  }
}

export function useAuth() {
  const isAuthenticated = computed(() => state.user !== null)
  const user = computed(() => state.user)

  function login(email, password) {
    if (!email || !password) {
      return false
    }
    saveUser({ email })
    return true
  }

  function logout() {
    saveUser(null)
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
  }
}
