<template>
  <b-form
    v-bind="$attrs"
    v-on="$listeners"
    novalidate
  >
    <slot/>
  </b-form>
</template>

<script>
export default {};
</script>
