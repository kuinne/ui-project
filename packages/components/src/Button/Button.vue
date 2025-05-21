<template>
  <button
    :class="[
      'ui-button',
      `ui-button--${type}`,
      `ui-button--${size}`,
      { 'is-disabled': disabled },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import type { Props } from "./types";

const props = withDefaults(defineProps<Props>(), {
  type: "default",
  size: "medium",
});
const emit = defineEmits(["click"]);

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit("click", event);
  }
};
</script>

<style scoped>
.ui-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s;
  outline: none;
}

.ui-button--default {
  background-color: #ffffff;
  border-color: #dcdfe6;
  color: #606266;
}

.ui-button--primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #ffffff;
}

.ui-button--success {
  background-color: #67c23a;
  border-color: #67c23a;
  color: #ffffff;
}

.ui-button--warning {
  background-color: #e6a23c;
  border-color: #e6a23c;
  color: #ffffff;
}

.ui-button--danger {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #ffffff;
}

.ui-button--small {
  padding: 8px 15px;
  font-size: 12px;
}

.ui-button--medium {
  padding: 10px 20px;
  font-size: 14px;
}

.ui-button--large {
  padding: 12px 25px;
  font-size: 16px;
}

.ui-button:hover {
  opacity: 0.8;
}

.ui-button.is-disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
