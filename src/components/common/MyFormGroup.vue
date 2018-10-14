<template>
  <b-form-group
    v-bind="$attrs"
    v-on="$listeners"
    :invalidFeedback="invalidFeedback"
    :state="state"
  >
    <slot
      :$name="name"
      :$state="state"
    />
  </b-form-group>
</template>

<script>
export default {
  inject: ["$validator"],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    errors() {
      return this.$validator.errors;
    },
    state() {
      return this.errors.has(this.name) ? false : null;
    },
    invalidFeedback() {
      return this.errors.first(this.name);
    }
  }
};
</script>
