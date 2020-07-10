<template>
  <div>
        <!-- Directives -->
      <button v-customOn:click='clicked'>Click</button>
      <div 
            style='width: 100px; height: 100px; background-color: lightgreen'
            v-customOn:mouseover='mouseEnter'>
      </div>
  </div>
</template>

<script>


export default {
  name: 'Component8',
  directives: {
      customOn: {
            bind(el, binding) {
                  const type = binding.arg
                  const fn = binding.value
                  el.addEventListener(type, fn);
            }
      }
  },
  methods: {
      clicked() {
            alert('clicked')
      },
      mouseEnter() {
            console.log('mouse entered');
      },
      mouseLeave() {
            console.log('mouse left');
      }
  }
}
</script>