<template>
  <li class="post-list-item">
    <span class="post-list-item__title">{{ title }}</span>
    <div class="post-list-item__buttons">
      <button
        class="post-list-item__button post-list-item__button--up"
        @click="moveUp"
        v-if="!isFirstItem"
      >
        <span class="sr-hidden">move up</span>
      </button>
      <button
        class="post-list-item__button post-list-item__button--down"
        @click="moveDown"
        v-if="!isLastItem"
      >
        <span class="sr-hidden">move down</span>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    isFirstItem: Boolean,
    isLastItem: Boolean,
    title: String,
    moveUp: Function,
    moveDown: Function
  }
};
</script>

<style lang="scss" scoped>
.post-list-item {
  @include box-shadow-1;
  height: 9rem;
  background: white;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post-list-item + .post-list-item {
  margin-top: 2.4rem;
}

.post-list-item__title {
  font-size: 1.8rem;
  margin-left: 2rem;
}

.post-list-item__buttons {
  align-self: flex-start;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 0 0 6rem;
}

.post-list-item__button {
  flex-grow: 1;
  background: none;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: currentColor;

  &::after {
    content: "";
    display: block;
    width: 0.7rem;
    height: 0.7rem;
    border-style: solid;
    border-width: 2px;
    border-color: currentColor currentColor transparent transparent;
    opacity: 0.6;
  }

  &.post-list-item__button--up::after {
    transform: rotate(-45deg);
  }

  &.post-list-item__button--down::after {
    transform: rotate(135deg);
  }
}
</style>
