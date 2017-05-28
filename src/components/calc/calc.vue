<template>
  <div class="row">
    <!-- <div class="row-wrapper background background-color-3 margin bottom"> -->
    <form action="" @submit.prevent="calculateResult">
      <input class="calc-screen padding small-12 background-color-3" type="text" v-model.number="display">
    </form>
    <div class="row collapse">
      <div class="small-3 column"><button @click="setMemory" class="calc-button large expanded">M+</button></div>
      <div class="small-3 column"><button @click="clearMemory" class="calc-button large expanded">M-</button></div>
      <div class="small-3 column"><button @click="displayMemory" class="calc-button large expanded">MR</button></div>
      <div class="small-3 column"><button @click="clearCalc" class="calc-button large expanded">C</button></div>
    </div>
    <div class="row collapse">
      <div class="small-3 column"><button @click="appendDigit('7')" class="calc-button large expanded">7</button></div>
      <div class="small-3 column"><button @click="appendDigit('8')" class="calc-button large expanded">8</button></div>
      <div class="small-3 column"><button @click="appendDigit('9')" class="calc-button large expanded">9</button></div>
      <div class="small-3 column"><button @click="setOperation('add', $event)" :class="{ current: operation === 'add' }" class="calc-button large expanded">+</button></div>
    </div>
    <div class="row collapse">
      <div class="small-3 column"><button @click="appendDigit('4')" class="calc-button large expanded">4</button></div>
      <div class="small-3 column"><button @click="appendDigit('5')" class="calc-button large expanded">5</button></div>
      <div class="small-3 column"><button @click="appendDigit('6')" class="calc-button large expanded">6</button></div>
      <div class="small-3 column"><button @click="setOperation('sub', $event)" :class="{ current: operation === 'sub' }" class="calc-button large expanded">-</button></div>
    </div>
    <div class="row collapse">
      <div class="small-3 column"><button @click="appendDigit('1')" class="calc-button large expanded">1</button></div>
      <div class="small-3 column"><button @click="appendDigit('2')" class="calc-button large expanded">2</button></div>
      <div class="small-3 column"><button @click="appendDigit('3')" class="calc-button large expanded">3</button></div>
      <div class="small-3 column"><button @click="setOperation('mul', $event)" :class="{ current: operation === 'mul' }" class="calc-button large expanded">x</button></div>
    </div>
    <div class="row collapse">
      <div class="small-3 column"><button @click="appendDigit('0')" class="calc-button large expanded">0</button></div>
      <div class="small-3 column"><button @click="appendDigit('.')" class="calc-button large expanded">.</button></div>
      <div class="small-3 column"><button @click="setOperation('div', $event)" :class="{ current: operation === 'div' }" class="calc-button large expanded">:</button></div>
      <div class="small-3 column"><button @click="setOperation('per', $event)" :class="{ current: operation === 'per' }" class="calc-button large expanded">%</button></div>
      <div class="small-12 column"><button @click="calculateResult" class="calc-button large expanded">=</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calc',
  data () {
    return {
      display: 0,
      operands: [0, 0],
      operation: 'nop',
      memory: 0
    }
  },
  methods: {
    setMemory: function (digit) {
      this.memory = this.display
    },
    clearCalc: function (digit) {
      this.display = 0
      this.operands = [0, 0]
      this.operation = 'nop'
    },
    clearMemory: function (digit) {
      this.memory = 0
    },
    displayMemory: function (digit) {
      this.display = this.memory
    },
    appendDigit: function (digit) {
      var displayString = this.display.toString(10)
      displayString += digit
      if (digit === '.') {
        this.display = displayString
        return this.display
      }
      this.display = parseFloat(displayString, 10)
      return this.display
    },
    setOperation: function (operation, event) {
      this.operation = operation
      this.operands[0] = this.display
      this.display = '0'
      return this.operation
    },
    calculateResult: function () {
      const op = {
        nop: function () {
          return 0
        },
        add: function (a, b) {
          var r = (a + b)
          return r
        },
        sub: function (a, b) {
          var r = (a - b)
          return r
        },
        mul: function (a, b) {
          var r = (a * b)
          return r
        },
        div: function (a, b) {
          var r = b === 0 ? 'error' : (a / b)
          return r
        },
        per: function (a, b) {
          var r = b === 0 ? 'error' : (a * b) / 100
          return r
        }
      }
      this.operands[1] = this.display
      this.display = op[this.operation](this.operands[0], this.operands[1])
      this.operation = 'nop'
      return this.display
    }
  },
  beforeMount () {
  }
}
</script>
<style lang="css" scoped>

  .calc-screen, .calc-screen:focus {
    margin-bottom: 0;
    border: none;
    min-width: 280px;
    font-size: 20px;
    height: auto;
    padding: 30px 20px;
    background-color: #dddddd;
    color: #666666;
  }
  .calc-button {
    padding: 20px;
    background-color: #DDAA00;
    color: rgba(255,255,255,0.65);
    font-size: 20px;
    width: 100%;
    transition: background-color .25s linear;
  }
  .calc-button:hover{
    background-color: #FFCC00;
  }
  .calc-button.current{
    background-color: #BB8800;
  }
  .calc-screen, .calc-screen:focus {
  }
</style>
