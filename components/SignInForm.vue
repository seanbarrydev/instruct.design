<template>
  <div
    class="w-full items-center py-16 bg-gray-100 dark:bg-gray-700 dark:text-white min-h-screen"
  >
    <div class="max-w-5xl mx-auto">
      <div class="w-full mx-auto mt-16 md:mt-0 md:w-2/5">
        <div
          class="text-gray-900 relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7"
        >
          <form>
            <label class="text-sm uppercase" for="email">Username</label>
            <div class="block mb-4 border border-gray-200 rounded-lg">
              <input
                v-model="login.username"
                type="email"
                name="email"
                class="block w-full px-4 py-3 border-2 border-transparent rounded-lg bg-gray-100 focus:bg-white focus:border-cranberry focus:outline-none"
                placeholder="Password"
                required
              />
            </div>
              <label class="text-sm uppercase" for="password">Password</label>
            <div class="block mb-4 border border-gray-200 rounded-lg">
              <input
              v-model="login.password"
                type="password"
                name="password"
                class="block w-full px-4 py-3 border-2 border-transparent rounded-lg bg-gray-100 focus:bg-white focus:border-cranberry focus:outline-none"
                placeholder="Password"
                required
              />
            </div>
            <div class="block mt-8">
              <button
              type="submit"
                class="w-full px-3 py-4 text-white bg-cranberry-600 hover:bg-cranberry-700 rounded-lg"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>