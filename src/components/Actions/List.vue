<template>
  <section class="action-list">
    <h2 class="action-list__title">List of Actions Commited</h2>
    <div class="action-list__list-wrapper">
      <div class="no-actions" v-if="actions.length === 0">
        No actions yet.
      </div>
      <ul class="action-list__list" v-if="actions.length > 0">
        <action-list-item
          v-for="(action, index) in actions"
          :description="action.description"
          :key="index"
          :clickHandler="() => setLastActionIndex(index)"
        ></action-list-item>
      </ul>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ActionListItem from "./ListItem";

export default {
  components: {
    ActionListItem
  },
  computed: mapGetters(["actions"]),
  methods: {
    ...mapActions(["setLastActionIndex"])
  }
};
</script>

<style lang="scss" scoped>
.action-list {
  background: $white;
  border-radius: 0.4rem;
  border-radius: 0.4rem;
  @include box-shadow;

  &__title {
    margin: 0;
    font-size: 1.8rem;
    padding: 2rem 2.5rem;
  }

  &__list-wrapper {
    padding: 2rem;
    background: $gray-f2f;
  }

  &__list {
    @include box-shadow;
    margin: 0;
    padding: 0rem;
    list-style: none;
    background: $white;
  }
}

.no-actions {
  padding: 1.9rem;
  display: flex;
  align-items: center;
  background: $white;
  opacity: 0.7;
  @include box-shadow;
}

</style>
