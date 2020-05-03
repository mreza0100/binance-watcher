<template>
      <table class="table" v-if="filtredData">
            <thead>
                  <tr>
                        <th><strong>symbol</strong></th>
                        <th><strong>price</strong></th>
                        <th><strong>number</strong></th>
                  </tr>
            </thead>
            <tbody>
                  <Tr v-for="i in filtredData" :key="i.symbol" :thisSymbol="i">
                        <template>
                              {{ filtredData.indexOf(i) }}
                        </template>
                  </Tr>
            </tbody>
      </table>
</template>

<script>
import Tr from "./components/Tr";
export default {
      name: "App",
      components: {
            Tr,
      },
      methods: {
            sum(x, y) {
                  console.log(x + y);
            },
            async getData() {
                  await this.$http
                        .get("https://api.binance.com/api/v1/ticker/allPrices")
                        .then((res) => {
                              const x = [];
                              for (const allS of res.data) {
                                    for (const myS of this.symbols) {
                                          if (allS.symbol === myS) {
                                                x.push(allS);
                                                break;
                                          }
                                    }
                              }
                              this.filtredData = x;
                              // this.filtredData = res.data;
                        })
                        .catch((error) => {
                              console.log(error);
                        })
                        .finally(() => {
                              if (this.isLimitedFetchTime) {
                                    setTimeout(this.getData, this.fetchTime);
                              } else {
                                    this.getData();
                              }
                        });
            },
      },
      created() {
            this.getData();
      },
      data() {
            return {
                  symbols: [
                        "LTCBTC",
                        "NEOBTC",
                        "QTUMETH",
                        "EOSETH",
                        "SNTETH",
                        "BNTETH",
                        "BCCBTC",
                        "GASBTC",
                        "BNBETH",
                        "BTCUSDT",
                        "ETHUSDT",
                        "HSRBTC",
                        "OAXETH",
                        "DNTETH",
                        "MCOETH",
                        "ICNETH",
                        "MCOBTC",
                        "WTCBTC",
                        "WTCETH",
                        "LRCBTC",
                        "LRCETH",
                        "QTUMBTC",
                        "YOYOBTC",
                        "OMGBTC",
                        "OMGETH",
                        "ZRXBTC",
                        "ZRXETH",
                        "STRATBTC",
                        "STRATETH",
                        "SNGLSBTC",
                        "SNGLSETH",
                        "BQXBTC",
                        "BQXETH",
                        "KNCBTC",
                        "KNCETH",
                        "FUNBTC",
                        "FUNETH",
                        "SNMBTC",
                        "SNMETH",
                        "NEOETH",
                        "IOTABTC",
                        "IOTAETH",
                        "LINKBTC",
                        "LINKETH",
                        "XVGBTC",
                        "XVGETH",
                        "SALTBTC",
                        "SALTETH",
                        "MDABTC",
                        "MDAETH",
                        "MTLBTC",
                        "MTLETH",
                        "SUBBTC",
                        "SUBETH",
                        "EOSBTC",
                        "SNTBTC",
                        "ETCETH",
                        "ETCBTC",
                        "MTHBTC",
                        "MTHETH",
                        "ENGBTC",
                        "ENGETH",
                        "DNTBTC",
                        "ZECBTC",
                        "ZECETH",
                        "BNTBTC",
                        "ASTBTC",
                        "ASTETH",
                        "DASHBTC",
                        "DASHETH",
                        "OAXBTC",
                        "ICNBTC",
                        "BTGBTC",
                        "BTGETH",
                        "EVXBTC",
                        "EVXETH",
                        "REQBTC",
                        "REQETH",
                        "VIBBTC",
                        "VIBETH",
                  ],
                  filtredData: [],
                  isLimitedFetchTime: true,
                  fetchTime: 5000,
            };
      },
};
</script>

<style>
#app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
}
</style>
