import { App } from 'vue';
import UiButton from './UiButton.vue';

UiButton.install = (Vue: App) => {
  Vue.component(UiButton.name, UiButton);
};

export default UiButton;
