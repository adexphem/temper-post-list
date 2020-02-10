import { shallowMount } from "@vue/test-utils";
import ActionListItem from "@/components/Actions/ListItem";

describe("Action/ListItem.vue", () => {
  it("renders a vue instance", () => {
    const propsData = { clickHandler: jest.fn() };
    const wrapper = shallowMount(ActionListItem, { propsData });
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
