import { configure } from '@kadira/storybook';
import 'todomvc-app-css/index.css'
import './additional.css';

function loadStories() {
  require('../components/stories/');
}

configure(loadStories, module);
