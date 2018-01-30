// @flow
import type {State} from './types/State';

type UpdateFunction = (State) => State;
type EventHandlerObject = {[eventName: string]: UpdateFunction};

let eventHandlers: EventHandlerObject = {
  increaseCount: (oldState) => {
    return {...oldState, count: oldState.count + 1};
  },
  decreaseCount: (oldState) => {
    return {...oldState, count: oldState.count - 1};
  },
};

export default eventHandlers;
