<template>
    <div>
        <Xheader status="detail" />
        <XdetailCard />
        <Xtab />
    </div>
</template>
<script>
import Xheader from "../components/Xheader.vue";
import XdetailCard from "../components/XdetailCard.vue";
import Xtab from "../components/Xtab.vue";
export default {
  components: {
    Xheader,
    XdetailCard,
    Xtab
  }
};
</script>

