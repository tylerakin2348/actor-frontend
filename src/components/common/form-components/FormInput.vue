<template>
  <input
    id="inputId"
    class="classes"
    autofocus
    autocomplete="off"
    placeholder="placeholder"
    v-model="vModel"
  />
</template>

<script>
export default {
  name: "FormInput",
  props: ["vModel", "placeholder", "autocomplete", "inputId", "classes"],

  data() {
    return {
      // msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.subject_block {
  position: relative;
  overflow: hidden;
  background-color: lightgray;
  display: flex;
  height: 100%;
  width: calc(50% - 3vw);
  text-decoration: none;
  box-shadow: 0 0 4px 2px #c1bcbc inset;
  transition: box-shadow 0.15s ease-in-out;
  &:focus,
  &:hover {
    box-shadow: 0 0 1px 1px #c1bcbc inset;
    transition: box-shadow 0.15s ease-in-out;
  }

  @media screen and (min-width: 900px) {
    width: calc(50% - 3em);
  }
}

.subject_block:after {
  background-color: rgba(199, 93, 93, 1);
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  z-index: 0;
  position: absolute;
  left: 0;
  top: 0;
}

.subject_block img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.35s ease-in-out;
}

.subject_block:focus,
.subject_block:hover {
  img {
    transform: translate(-50%, -50%);
    transition: transform 0.35s ease-in-out;
  }

  &:after {
    background-color: rgba(199, 93, 93, 0.8);
  }
}
.subject-block-text {
  color: white;
  font-weight: 700;
  font-size: 1.2em;
  padding: 2em;
  z-index: 1;
}

.top-left {
  align-items: flex-end;
  justify-content: flex-end;
  text-align: right;
  border-bottom-right-radius: 3em;
}

.top-right {
  align-items: flex-end;
  justify-content: flex-start;
  text-align: left;
  border-bottom-left-radius: 3em;
}

.bottom-left {
  align-items: flex-start;
  justify-content: flex-end;
  text-align: right;
  border-top-right-radius: 3em;
}

.bottom-right {
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  border-top-left-radius: 3em;
}
</style>
