import { shallowMount } from "@vue/test-utils";
import App from "@/App";

describe("App.vue", () => {
  it("renders a vue instance", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
