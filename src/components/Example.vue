<template>
  <div>
    <h1>Form Validation</h1>
    <b-card class="mt-3">
      <my-form @submit.prevent="onSubmit">
        <my-form-group name="email" label="Email">
          <template slot-scope="scope">
            <b-form-input
              type="email"
              :name="scope.$name"
              :state="scope.$state"
              v-model="form.email"
              v-validate="{ required: true, email: true }"
            />
          </template>
        </my-form-group>

        <my-form-group name="verbose">
          <b-form-checkbox v-model="verbose">Verbose</b-form-checkbox>
        </my-form-group>

        <my-form-group name="name" label="Name" v-if="verbose">
          <template slot-scope="scope">
            <b-form-input
              type="text"
              :name="scope.$name"
              :state="scope.$state"
              v-model="form.name"
              v-validate="{ required: true }"
            />
          </template>
        </my-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </my-form>
    </b-card>

    <b-card class="mt-3">
      <pre>isValid: {{ isValid }}</pre>
      <pre>{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  inject: ["$validator"],
  data() {
    return {
      form: {
        email: "",
        name: ""
      },
      isValid: null,
      verbose: true
    };
  },
  methods: {
    async onSubmit() {
      const valid = await this.$validator.validate();
      this.isValid = valid;
    }
  }
};
</script>
