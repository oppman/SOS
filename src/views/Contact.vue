<template>
  <div>

    <!-- Hero -->

    <section class="relative h-[70vh]">

      <img
        src="/src/assets/images/servicebg.jpg"
        class="w-full h-full object-cover"
        alt="Contact Us"
      />

      <div class="absolute inset-0 bg-black/60"></div>

      <div
        class="absolute inset-0 flex items-center justify-center text-center px-6"
      >

        <div>

          <span
            class="uppercase tracking-[8px] text-yellow-400 font-bold"
          >
            Contact Us
          </span>

          <h1
            class="text-6xl md:text-8xl font-black text-white mt-4"
          >
            Plan Your Rwanda Journey
          </h1>

          <p
            class="text-xl text-gray-200 mt-8 max-w-3xl mx-auto"
          >
            Get in touch with our travel experts and start
            creating unforgettable memories.
          </p>

        </div>

      </div>

    </section>

    <!-- Contact Cards -->

    <section class="py-24 bg-white">

      <div class="max-w-7xl mx-auto px-6">

        <div class="grid md:grid-cols-3 gap-8">

          <div
            class="bg-green-700 text-white rounded-3xl p-10 shadow-xl"
          >

            <h3 class="text-3xl font-bold">
              Address
            </h3>

            <p class="mt-6 leading-8">
              Kigali City<br>
              Rwanda
            </p>

          </div>

          <div
            class="bg-yellow-500 text-black rounded-3xl p-10 shadow-xl"
          >

            <h3 class="text-3xl font-bold">
              Phone
            </h3>

            <p class="mt-6 leading-8">
              +250 788 123 456
            </p>

          </div>

          <div
            class="bg-black text-white rounded-3xl p-10 shadow-xl"
          >

            <h3 class="text-3xl font-bold">
              Email
            </h3>

            <p class="mt-6 leading-8">
              info@temberaurwanda.com
            </p>

          </div>

        </div>

      </div>

    </section>

    <!-- Contact Form -->

    <section class="bg-gray-100 py-24">

      <div class="max-w-6xl mx-auto px-6">

        <div class="grid lg:grid-cols-2 gap-16">

          <div>

            <h2
              class="text-5xl font-black"
            >
              Send Us A Message
            </h2>

            <p
              class="mt-8 text-lg text-gray-600 leading-9"
            >
              Interested in gorilla trekking, safaris,
              cultural experiences or customized tours?
              Fill out the form and our team will contact you.
            </p>

          </div>

          <form
            class="bg-white p-10 rounded-3xl shadow-xl"
          >

            <div class="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                class="w-full border p-4 rounded-xl"
              />

              <input
                type="email"
                placeholder="Email Address"
                class="w-full border p-4 rounded-xl"
              />

              <input
                type="text"
                placeholder="Phone Number"
                class="w-full border p-4 rounded-xl"
              />

              <select
                class="w-full border p-4 rounded-xl"
              >
                <option>Select Tour Type</option>
                <option>Gorilla Trekking</option>
                <option>Safari Tour</option>
                <option>Lake Kivu Tour</option>
                <option>Cultural Experience</option>
              </select>

              <textarea
                rows="5"
                placeholder="Your Message"
                class="w-full border p-4 rounded-xl"
              ></textarea>

              <button
                type="submit"
                class="w-full bg-green-700 text-white py-4 rounded-xl font-bold hover:bg-green-800 transition"
              >
                Send Message
              </button>

            </div>

          </form>

        </div>

      </div>

    </section>

    <!-- Map -->

    <section class="py-24 bg-white">

      <div class="max-w-7xl mx-auto px-6">

        <h2
          class="text-5xl font-black text-center mb-12"
        >
          Find Us
        </h2>

        <div
          class="rounded-3xl overflow-hidden shadow-2xl"
        >

          <iframe
            class="w-full h-[500px]"
            src="https://maps.google.com/maps?q=Kigali&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowfullscreen
          ></iframe>

        </div>

      </div>

    </section>

    <!-- FAQ -->

    <section class="bg-black py-24">

      <div class="max-w-5xl mx-auto px-6">

        <h2
          class="text-5xl font-black text-white text-center mb-16"
        >
          Frequently Asked Questions
        </h2>

        <div class="space-y-8">

          <div class="bg-gray-900 p-8 rounded-2xl">

            <h3 class="text-white text-2xl font-bold">
              When is the best time to visit Rwanda?
            </h3>

            <p class="text-gray-400 mt-4">
              Rwanda can be visited year-round, with dry seasons
              being especially popular for trekking and safaris.
            </p>

          </div>

          <div class="bg-gray-900 p-8 rounded-2xl">

            <h3 class="text-white text-2xl font-bold">
              Do I need a guide?
            </h3>

            <p class="text-gray-400 mt-4">
              Most national park experiences are guided to ensure
              safety and provide valuable local knowledge.
            </p>

          </div>

        </div>

      </div>

    </section>

    <!-- CTA -->

    <section
      class="bg-gradient-to-r from-green-700 to-green-500 py-24 text-center text-white"
    >

      <h2
        class="text-5xl font-black"
      >
        Your Adventure Starts Here
      </h2>

      <p
        class="mt-6 text-xl"
      >
        Contact us today and begin exploring Rwanda.
      </p>

    </section>

  </div>
</template>

<script setup>
</script>