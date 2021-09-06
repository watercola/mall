<template>
  <div class="paramsinfo" v-if="Object.keys(paramsInfo).length !== 0">
    <table class="info-size" v-for="(table_item,index) in paramsInfo.sizes">
      <tr v-for="(tr_item,indey) in table_item">
        <td v-for="(td_item,indez) in tr_item">{{td_item}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramsInfo.infos">
        <td class="info_type">{{info.key}}</td>
        <td style="color: #eb4868">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramsInfo.image.lenght !== 0">
      <img :src="paramsInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
  .paramsinfo {
    padding: 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-size, .info-param{
    width: 100%;
    border-collapse: collapse;
  }
  .paramsinfo table tr {
    height: 42px;
  }
  .paramsinfo table tr td {
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }
  .info_type {
    width: 95px;
  }
  .info-img img {
    width: 100%;
  }
</style>
