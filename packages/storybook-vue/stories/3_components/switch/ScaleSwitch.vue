<template>
  <scale-switch
    :label="label"
    :disabled="disabled"
    :input-id="inputId"
    :checked="checked"
    @scaleChange="scaleChange"
    style="--color-on: blue"
  >
  </scale-switch>
</template>

<script>
import { action } from "@storybook/addon-actions";

export default {
  props: {
    disabled: { type: Boolean, default: false },
    inputId: { type: String },
    checked: { type: Boolean, default: false },
    label: String,
  },
  methods: {
    scaleChange($event) {
      action("scaleChange");
      this.$emit("scaleChange", $event);
    },
  },
};
</script>
