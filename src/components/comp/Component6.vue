<template>
  <div>
    <button @click='selectedComponent = "text1"'>Text1</button>
    <button @click='selectedComponent = "text2"'>Text2</button>
    <button @click='selectedComponent = "text3"'>Text3</button>
    <hr>
    <!--
    <text1><p>Some Text</p></text1>
    <text2><p>Some Text</p></text2>
    <text3><p>Some Text</p></text3>
    -->
    <component :is='selectedComponent'>
      <p>Some Text</p>
    </component>
  </div>
</template>

<script>

import Text1 from './comp6props/text1.vue';
import Text2 from './comp6props/text2.vue';
import Text3 from './comp6props/text3.vue';

export default {
  name: 'Component6',
  data () { 
      return {
            selectedComponent: '',
      }
  },
  components: {
        text1: Text1,
        text2: Text2,
        text3: Text3
  }
}
</script>