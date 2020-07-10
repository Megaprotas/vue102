<template>
  <div class="square">
    <slot></slot>
  </div>
</template>

<style scoped>
  .square {
      width: 100px;
      height: 100px;
      background-color: skyblue;
      margin: 20px;
      opacity: 0.7;
  }
</style>