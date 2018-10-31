<template>
    <div>
        <Xheader status="home" />
        <div style="margin-top: 84px">
            <Xlist />
            <Xlist />
            <Xlist />
            <Xlist />
            <Xlist />
        </div>
    </div>
</template>
<script>
import Xheader from "../components/Xheader.vue";
import Xlist from "../components/Xlist.vue";
export default {
  components: {
    Xheader,
    Xlist
  }
};
</script>

