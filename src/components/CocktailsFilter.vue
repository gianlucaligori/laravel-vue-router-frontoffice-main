<script>
export default {
  data() {
    return {
      categoryId: null,
    };
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  watch: {
    categories() {
      this.categoryId = this.categories.length ? this.categories[0].id : null;
    },
  },
};
</script>

<template>
  <form>
    <label for="categories">
      <h2>Filtra i cocktail per categoria:</h2>
    </label>
    <select
      class="form-select"
      id="categories"
      @change="$emit('changeCategory', categoryId)"
      v-model="categoryId"
    >
      <option
        v-for="category in categories"
        :key="category.strCategory"
        :value="category.strCategory"
      >
        {{ category.strCategory }}
      </option>
    </select>
  </form>
</template>

<style></style>
