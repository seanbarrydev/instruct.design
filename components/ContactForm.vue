<template>
  <form class="w-full mt-16 md:mt-0 md:w-2/5" action="/contact/success" method="POST">
    <div
      class="text-gray-900 relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7"
    >
    <input id="contact-form" type="hidden" name="form-name" value="contact-form" />
      <label class="text-sm uppercase" for="name">Name</label>
      <div class="block mb-4 border border-gray-200 rounded-lg">
        <input
          type="text"
          name="name"
          id="name"
          class="block w-full px-4 py-3 border-2 border-transparent rounded-lg bg-gray-100 focus:bg-white focus:border-cranberry focus:outline-none"
          placeholder="Full name"
          required
        />
      </div>
      <label class="text-sm uppercase" for="email">Email</label>
      <div class="block mb-4 border border-gray-200 rounded-lg">
        <input
          type="text"
          name="email"
          id="email"
          class="block w-full px-4 py-3 border-2 border-transparent rounded-lg  bg-gray-100 focus:bg-white focus:border-cranberry focus:outline-none"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          placeholder="Contact email"
          required
        />
      </div>
      <label class="text-sm uppercase" for="message">Message</label>
      <div class="block mb-4 border border-gray-200 rounded-lg">
        <textarea
          type="text"
          name="message"
          id="message"
          class="h-52 block w-full px-4 py-3 border-2 border-transparent rounded-lg  bg-gray-100 focus:bg-white focus:border-cranberry focus:outline-none"
          placeholder="What can I help you build?"
          required
        ></textarea>
      </div>
      <div class="block mt-8">
        <button
          type="submit"
          class="text-xl font-bold w-full px-3 py-4 text-white bg-cranberry-600 hover:bg-cranberry-700 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<style>
</style>