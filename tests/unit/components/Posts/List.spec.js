import { mount } from "@vue/test-utils";
import PostList from "@/components/Posts/List";
import { mockStore } from "../../mockStore";

describe("Posts/List.vue", () => {
  const wrapper = mount(PostList, { store: mockStore });

  it("renders a Posts section with text 'Sortable Post List'", () => {
    expect(wrapper.text().trim().includes("Sortable Post List"))
      .toBe(true) 
  });

  it("renders a Posts with 5 Lits Items", () => {
    expect(wrapper.findAll('li').length)
      .toEqual(5)
  });

});
