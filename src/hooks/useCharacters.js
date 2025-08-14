import { getCharacterList } from "../services/characterService";
import { deepCopy } from "../utils/deepCopy";

let originalCharacters = [];
let workingCharacters = [];

export async function initCharacters(page = 1) {
  const data = await getCharacterList(page);
  originalCharacters = deepCopy(data);
  workingCharacters = deepCopy(data);

  return workingCharacters;
}

export function getWorkingCharacters() {
  return workingCharacters;
}

export function resetCharacters() {
  workingCharacters = deepCopy(originalCharacters);
}

export function deleteCharacter(idx) {
  workingCharacters.splice(idx, 1);
}

export async function appendCharacters(page) {
  const data = await getCharacterList(page);
  workingCharacters = [...workingCharacters, ...data];

  // return new data.
  return data;
}
