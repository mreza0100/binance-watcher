import { mount } from "@vue/test-utils";
import App from "@/App.vue";

const wrapper = mount(App);

// You can access the actual Vue instance via `wrapper.vm`
const vm = wrapper.vm;

// To inspect the wrapper deeper just log it to the console
// and your adventure with the Vue Test Utils begins
console.log(wrapper, vm);
