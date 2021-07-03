<template>
  <div class="block-container h-100">
    Test 404
  </div>
</template>
<script>
/* eslint-disable */
import SubjectBlock from '@/components/homepage/SubjectBlock.vue';
import PageTitleBlock from '@/components/common/PageTitleBlock.vue';
import LayoutRow from '@/components/layout-containers/LayoutRow.vue';
import LayoutColumn from '@/components/layout-containers/LayoutColumn.vue';

export default {
  name: 'Contact Me',
  components: {
    SubjectBlock,
    PageTitleBlock,
    LayoutRow,
    LayoutColumn,
  },
};
</script>

<style lang="scss" scoped>
  .block-container {
    //  display: flex;
    // flex-wrap: wrap;
    // justify-content: space-between;
    // height: 100vh;
    // padding: 1em;
  }

  .block-container-row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48%;
  }

  .block-container-row-center {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 2em;
    height: 4%;

    span {
      font-size: .5em;
    }
  }

</style>
