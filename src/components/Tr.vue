<template>
      <!-- <fragment v-if="thisSymbol"> -->
      <tr :id="thisSymbol.symbol">
            <th>{{ thisSymbol.symbol }}</th>
            <th>
                  {{ thisSymbol.price }}
            </th>
            <th>
                  <slot> </slot>
            </th>
      </tr>
      <!-- <tr v-if="true">
                  0
            </tr> -->
      <!-- </fragment> -->
</template>

<script>
// import { Fragment } from "vue-fragment";
export default {
      name: "Tr",
      data() {
            return {
                  thisTR: null,
                  x: 256,
            };
      },
      // components: {
      //       Fragment,
      // },
      props: {
            thisSymbol: Object,
      },
      methods: {
            changeColor(changes) {
                  this.thisTR.className = changes ? "green" : "red";
                  setTimeout(() => {
                        this.thisTR.removeAttribute("class");
                  }, 1000);
            },
      },
      watch: {
            thisSymbol(before, now) {
                  if (now.price > before.price) {
                        this.changeColor(true);
                  } else if (before.price > now.price) {
                        this.changeColor(false);
                  }
            },
      },
      mounted() {
            this.thisTR = document.getElementById(this.thisSymbol.symbol);
      },
};
</script>
