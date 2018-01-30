// @flow
import type {State} from './types/State';

function renderApp(state: State) {
  return `
    <p>Hello ${state.count}</p>
    <button onClick="emitEvent('increaseCount')">Increase</button>
    <button onClick="emitEvent('decreaseCount')">Decrease</button>
  `;
}

export default renderApp;
