<template>
  <div>
        <p>Extra text</p>
        <p>{{ num1 }}</p>
        <button @click='addFive()'>Add 5</button>
        <button @click='addOne()'>Add 1</button>
        <p> {{ status }} </p>
        <hr>
        <input type="text">
        <p>{{ num1 }}</p>
  </div>
</template>

<script>
export default {
  name: 'Component2',
  data () {
    return { 
        num1: 0,
        value1: 5,
        value2: 1,
    } 
  },
  methods: {
    addFive() {
      this.num1 += this.value1;
    },
    addOne() {
      this.num1 += this.value2;
    }
  },
  computed: {
    status() {
      return this.num1 >= 40 ? 'Exact' : 'Nope';
    }
  },
  watch: {
    status: function() {
      var vm = this
      setTimeout(function() {
        vm.num1 = 0;
      }, 3000);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>