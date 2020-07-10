<template>
  <div class='square'>
    <slot></slot>
  </div>
</template>

<style scoped>
  .square {
      width: 100px;
      height: 100px;
      background-color: lime;
      margin: 20px;
      opacity: 0.7;
  }
</style>