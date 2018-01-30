// @flow
import {renderApp} from './App';
import eventHandlers from './eventHandlers';
import initialState from './initialState';

let state = initialState;

global.emitEvent = (eventName: string, eventData?: mixed) => {
  let eventHandler = eventHandlers[eventName];
  if (eventHandler) {
    state = eventHandler(state, eventData);
    render();
  }
};

function render() {
  let html = renderApp(state);
  if (document.body) {
    document.body.innerHTML = html;
  }
}

export default render;
