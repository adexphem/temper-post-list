import { shallowMount } from "@vue/test-utils";
import PostList from "@/components/Posts/List";
import { mockStore } from "../../mockStore";

describe("Posts/List.vue", () => {
  let store

  beforeEach(() => {
    store = mockStore.state.posts
  })

  const wrapper = shallowMount(PostList, { store: mockStore });

  console.log('-->- ', mockStore.state.posts)

  it("renders a Posts section with text 'Sortable Post List'", () => {

    expect(wrapper.text().trim().includes("Sortable Post List"))
      .toBe(true) 
  });


});
