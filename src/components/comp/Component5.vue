<template>
  <div>
    <button @click="isTrue = !isTrue">Press me</button>
    <p v-if='isTrue'>It's me</p>
    <p v-else>Now me</p>
    <ul>
      <li v-for='(arr, index) in newArr' :key='index'>{{ index }} {{ arr.initials }} {{ arr.extra }}</li>
    </ul>
    <ul>
      <li v-for='(arr, index) in newArr' :key='index'>{{ index }} {{ arr.initials }} {{ arr.extra }}</li>
    </ul>
    <ul>
      <li v-for='(value, name, index) in randomObj' :key='name'>{{ index}}. {{ name }}: {{ value }}</li>
    </ul>
    <ul>
      <li v-for='value in testData' :key='value'>
        <template v-if='Array.isArray(value)'>
          <div v-for='element in value' :key='element'> {{ element }}</div>
        </template>
        <template v-else>{{ value }}</template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Component5',
  data () {
    return {
      isTrue: true,
      newArr: [{index: 1, initials: 'AB', extra: 'aaa'},
               {index: 2, initials: 'CD', extra: 'bbb'},
               {index: 3, initials: 'EF', extra: 'ccc'},
               {index: 4, initials: 'GH', extra: 'ddd'},
      ],
      randomObj: {title: 'AB', author: 'DC', index: 1},
      testData: {
        name: 'AAA',
        data: [1, 2, 3, 4]
      }
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>