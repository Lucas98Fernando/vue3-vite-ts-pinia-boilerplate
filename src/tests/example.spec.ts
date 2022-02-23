import { mount } from "@vue/test-utils";
import Hello from "../components/Hello.vue";

describe("Hello", () => {
  it("check if prop msg match", () => {
    const msg = "I'm a example component with composition API";
    const wrapper = mount(Hello, { props: { msg } });
    expect(wrapper.text()).toMatch(msg);
  });
});
