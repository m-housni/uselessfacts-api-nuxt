<template>
  <div class="container">
    <div>
      <Logo />
      <h2 class="subtitle">
        I didn't say that, it came from <a href="https://uselessfacts.jsph.pl/" class="underline">RandomfactsApi</a> :-) 
      </h2>
      <h2 class="title">
        {{ phrase }}
      </h2>
      <div class="links">
        <button @click="nextFact" :class="btnClass">Next fact <fa :icon="['fas', 'laugh-wink']"/></button>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      phrase: "default random fact",
      btnClass: 'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded',
    }
  },
  methods: {
    nextFact() {
      axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
      .then( response =>  {
        console.log(response)
        this.phrase = response.data.text
      })
    }
  },
  mounted() {
    this.nextFact()
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60PX;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
