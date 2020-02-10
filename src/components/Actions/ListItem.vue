<template>
  <li class="action-list-item">
    <span class="action-list-item__action">{{ description }}</span>
    <button class="action-list-item__button" @click="clickHandler">
      Time Travel
    </button>
  </li>
</template>

<script>
export default {
  props: {
    description: String,
    index: Number,
    clickHandler: Function
  }
};
</script>

<style lang="scss" scoped>
.action-list-item {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__button {
    background-color: $green;
    padding: 1rem 2rem;
    font: inherit;
    font-size: 1.4rem;
    border-radius: 0.4rem;
    border: 0;
  }
}

.action-list-item + .action-list-item {
  border-top: 1px solid $gray-e1e;
}

</style>
