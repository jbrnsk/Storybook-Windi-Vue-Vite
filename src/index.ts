import { App } from 'vue';
import UiButton from './components/UiButton';

import './styles/main.css';

const components = {
  UiButton,
};

function install(Vue: App) {
  // tslint:disable-next-line: forin
  for (const component in components) {
    // @ts-expect-error
    Vue.component(components[component].name, components[component]);
  }
}

export default { install };

export { default as UiButton } from './components/UiButton';
