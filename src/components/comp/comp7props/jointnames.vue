<template>
     <div>
           <label>Name</label>
            <input type="text" :value='name' @input="nameChanged(true, $event)">
            <label>Surname</label>
            <input type="text" :value='surname' @input="nameChanged(false, $event)">
      </div> 
</template>

<script>
export default {
      props: ['value'],
      methods: {
            nameChanged(isFirst, event) {
                  var name = '';
                  if (isFirst) {
                        name = event.target.value + ' ' + this.surname;
                  } else {
                        name = this.name + ' ' + event.target.value;
                  }
                  this.value = name
                  this.$emit('input', this.value);
            }
      },
      computed: {
            name() {
                  return this.value.split(' ')[0];
            },
             surname() {
                  return this.value.split(' ')[1];
            },
      }
}
</script>