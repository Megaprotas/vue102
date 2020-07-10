<template>
  <div>
      <form v-if='!submited'>
            <jointnames v-model='jointnames'></jointnames>
            <input type="password" v-model='password'>
            <label>Radio</label>
            <input type="radio" value='Yes' v-model='storedData'>Yes
            <input type="radio" value='No' v-model='storedData'>No
            <button type="submit" @click.prevent='submited = true'>Submit</button>
      </form>
            <hr>
      <div v-if='submited'>
            <p>name {{ jointnames }}</p>
            <p>Email {{ email }}</p>
            <p>Password {{ password }}</p>
            <p>Radio {{ storedData }} </p>
      </div>
  </div>
</template>

<script>
import Jointnames from './comp7props/jointnames.vue';

export default {
  name: 'Component7',
  data () { 
      return {
            jointnames: 'aa aaa',
            email: '',
            password: '',
            storedData: true,
            submited: false
      }
  },
  components: {
        jointnames: Jointnames
  }
}
</script>