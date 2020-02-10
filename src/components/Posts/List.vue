<template>
  <section class="post-list">
    <h2 class="post-list__title">Sortable Post List</h2>
    <ul class="post-list__list">
      <transition-group name="slide">
        <post-list-item
          v-for="(post, index) in posts"
          :key="post.id"
          :title="`Post ${post.id}`"
          :isFirstItem="index === 0"
          :isLastItem="index === posts.length - 1"
          :moveUp="moveAction.bind(null, UP, index)"
          :moveDown="moveAction.bind(null, DOWN, index)"
        ></post-list-item>
      </transition-group>
    </ul>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostListItem from "./ListItem.vue";
import { UP, DOWN } from "@/constants/postMoveDirection";

export default {
  components: {
    PostListItem
  },
  methods: {
    moveAction(direction, index) {
      const from = index;
      let to;

      if (direction === UP) {
        to = index - 1;
      }

      if (direction === DOWN) {
        to = index + 1;
      }

      this.addAction({
        from,
        to,
        description: `Moved Post ${this.posts[index].id} from index ${from} to index ${to}`
      });
    },
    ...mapActions(["fetchPosts", "addAction"])
  },
  computed: {
    UP: () => UP,
    DOWN: () => DOWN,
    ...mapGetters(["posts"])
  },
  mounted() {
    this.fetchPosts();
  }
};
</script>

<style lang="scss" scoped>
.post-list {
  &__title {
    color: white;
  }

  &__list {
    padding: 0;
    list-style: none;
    margin: 0;
  }
}

.slide-move {
  transition: transform 200ms;
}
</style>
