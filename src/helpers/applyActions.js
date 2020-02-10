import { switchIndex } from "./switchIndex";

export function applyActions(posts, actions, stopIndex) {
  let result = [...posts];
  for (let index = 0; index < actions.length; index++) {
    if (index > stopIndex && stopIndex !== -1) {
      break;
    }
    const action = actions[index];
    result = switchIndex(result, action.from, action.to);
  }

  return result;
}

