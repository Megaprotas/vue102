<template>
  <div>
      <!-- Filters -->
      <p>{{ someText | reverse }}</p>
      <p>{{ anotherText | calculateSomething }}</p>
      <!-- Mixins -->
      <p>{{ reverseMixin }}</p>
      <p>{{ calculateLength }}</p>
  </div>
</template>

<script>
import { lengthCalcMixin } from '../../mixin.js'

export default {
  name: 'Component9',
  mixins: [lengthCalcMixin],
  data () {
      return {
            someText: 'Some Text To Be Reversed',
            anotherText: 'Another Text length calculator'
      }
  },
  filters: {
      reverse(value) {
            return value.split('').reverse().join('');
      }
  },
  computed: {
    reverseMixin() {
      return this.someText.split('').reverse().join('');
    },
  }
}
</script>