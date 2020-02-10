import { shallowMount } from "@vue/test-utils";
import App from "@/App";

describe("App.vue", () => {
  it("renders parent element with id #App", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.exists('#app')).toBe(true);
  });
});
