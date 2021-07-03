<template>
  <div class="modal fade" tabindex="-1" role="dialog" :id="modal_id">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body p-4">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWrapper",
  props: ["modal_id"],
};
</script>
