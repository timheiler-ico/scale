<template>
  <scale-modal
    :custom-class="customClass"
    :heading="heading"
    :size="size"
    :variant="size"
    :opened="opened"
    :duration="duration"
    :close-button-label="closeButtonLabel"
    :align-actions="alignActions"
    :styles="styles"
    @scaleClose="handler"
  >
    <slot name="close"></slot>
    <slot></slot>
    <slot name="actions"></slot>
  </scale-modal>
</template>

<script>
import { action } from "@storybook/addon-actions";

const scaleCloseAction = action('scaleClose');

export default {
  props: {
    customClass: String,
    heading: { type: String, default: 'Today is your lucky day' },
    size: String,
    variant: String,
    opened: Boolean,
    duration: { type: Number, default: 200 },
    closeButtonLabel: String,
    alignActions: { type: String, default: 'right' },
    styles: { type: String },
  },
  methods: {
    handler($event) {
      scaleCloseAction($event);
      this.$emit('close')
    }
  }
};
</script>
