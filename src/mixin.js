export const lengthCalcMixin = {
      computed: {
            calculateLength() {
                  return this.anotherText + ' (' + this.anotherText.length + ')'
            }
      }
}