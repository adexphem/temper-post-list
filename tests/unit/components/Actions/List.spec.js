import { shallowMount } from "@vue/test-utils";
import ActionList from "@/components/Actions/List";
import { mockStore } from "../../mockStore";

describe("Actions/List.vue", () => {

  const wrapper = shallowMount(ActionList, { store: mockStore });

  it("renders a Posts section with text 'List of Actions Commited'", () => {

    expect(wrapper.text().trim().includes("List of Actions Commited"))
      .toBe(true) 
  });


});
