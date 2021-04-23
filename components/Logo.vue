<template>
  <div>
    <img src="../assets/mypic.png" alt="" class="logo">
    <MySocialMedia />
  </div>
</template>

<style>
.logo {
  animation: 3s appear;
  margin: auto;
  border-radius: 50%;
  height: 128px;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
