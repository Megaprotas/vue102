<template>
  <div>
      <div :class="someClass" class="square"></div>
      <button @click="startEffect">Start Effect</button>
      <button @click="stopEffect">Stop Effect</button>

      <div :class="['blue', 'border2', anotherClass]" class="square"></div>

      <div :class="[{blue: isVisible}, userClass]" class="square"></div>
      <input type="text" v-model='userClass' placeholder='enter class'>

      <div :class='[userClass, {green: isVisible}]' class="square"></div>
      <input type="text" v-model='isVisible' placeholder="Visible?">
      <input type="text" v-model='userClass' placeholder="enter class">

      <div :class="['progress-bar']" :style='[progressBar]'></div>
      <button @click='startProgress'>Start</button>

      <p :class='[num1 >= 20 ? blue : green]'>{{ num1 }}</p>
      <button @click='addTen()'>Add ten</button>

      <p>{{ num2 }}</p>
      <button @click='addSome()'>Another func</button>

  </div>
</template>

<script>
export default {
  name: 'Component4',
  data() {
    return { 
      someClass: {
          border: false,
          shadow: false,
          blue: false
      },
      anotherClass: {
          shadow: true,
      },
      isVisible: true,
      notVisible: false,
      userClass: '',
      progressBar: {
        width: '0px',
        backgroundColor: 'green'
      },
      num1: 0,
      num2: 5,
      value1: 10,
      value2: 99,
      blue: 'blue',
      green: 'green'
    }
  },
  methods: {
    startEffect() {
      var vm = this
      setInterval(function() {
        vm.someClass.border = !vm.someClass.border}, 500);
    },
    stopEffect() {
      this.someClass.blue = this.isVisible;
      this.startEffect()
    },
    startProgress() {
      var vm = this;
      var progress = 0;
      setInterval(function() {
          progress += 25;
          vm.progressBar.width = progress + 'px';
          }, 500)
    },
    addTen() {
      this.num1 += this.value1
    },
    initialFunc(min) {
      this.num2 += (this.value2 + min)
    },
    addSome() {
      this.initialFunc(90);
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.square {
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 20px;
}
.blue {
    background-color: blue;
}

.green {
    background-color: green;
}

.border2 {
  border: 3px solid black;
}

.border {
    border: 2px solid black !important;
}

.shadow {
    box-shadow: 5px 10px 8px #888888;
}

.progress-bar {
    height: 50px;
    width: 100px;
    background-color: grey;
}
</style>