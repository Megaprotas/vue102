<template>
  <div>
    <button @click='navToComp2'>To Comp2</button>
    <hr>
    <p>Player name: {{ name }}</p>
    <input type="text" v-model="name"/>
    <p>Rating: {{ strengthIndex }}</p>
    <p>Rating/series: {{ someFunction() }}</p>
    <p>Random number: {{ randomizer() }}</p>
    <button type=submit @click="alertFunc()">Do not press</button>
    <p>Enter batting avg of this session:
      <input type="text" v-model='battingValue' @keydown='battingValue = $event.taget.value'>
    </p>
    <p>Displayed value of batting avg: {{ battingValue }} </p>
    <p>Enter bases taken of this session:
      <input type="text" @keydown.enter='basesTaken = $event.taget.value'>
    </p>
    <p>Displayed value of bases taken: {{ basesTaken }} </p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Component1',
  data () {
    return {
      name: 'John Doe',
      strengthIndex: 30,
      injuryLevel: 5,
      developmentIndex: 7,
      battingValue: 8,
      basesTaken: '',
    }
  },
  methods: {
    someFunction() {
      return this.strengthIndex * this.injuryLevel;
    },
    randomizer() {
      return Math.random() * this.developmentIndex;
    },
    alertFunc() {
      return alert('Told you not to press')
    },
    navToComp2() {
      this.$router.push({path: '/component2'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
