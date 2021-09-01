<template>
  <aside class="block-container-row large-breakup-border col-12 col-md-5 p-0">
    <slot></slot>
  </aside>
</template>
<script>
/* eslint-disable */
export default {
  name: "BorderedLeftTitleColumn"
};
</script>

<style lang="scss" scoped>
.large-breakup-border {
  padding: 0;
}

.large-breakup-border:after {
  background-color: rgba(200, 139, 139, 1);
  content: "";
  display: inline-block;
  height: 0.75em;
  width: 100%;

  @media screen and (min-width: 769px) {
    height: 85%;
    width: 1.5em;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}

.block-container-row {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}

@media screen and (min-width: 769px) {
  .block-container-row {
    align-items: center;
  }
}
</style>
