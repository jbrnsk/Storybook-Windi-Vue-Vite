<script lang="ts">
import { defineComponent } from 'vue';
import { bool, oneOf, string } from 'vue-types';

export default defineComponent({
  name: 'UiButton',
  props: {
    active: bool(),
    color: oneOf(['black', 'brand-violet', 'brand-midnight', 'carolina-blue']),
    loadingText: string(),
    variant: oneOf(['primary', 'secondary', 'tertiary', 'tab']).def('primary'),
  },
});
</script>

<template>
  <button
    class="
      font-inter-bold
      px-2
      py-2
      cursor-pointer
      my-2
      text-sm
      bg-transparent
      border-solid border-2
      text-carolina-blue
      border-carolina-blue
    "
  >
    <slot></slot>
  </button>
</template>
