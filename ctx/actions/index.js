import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, ADD_FOLDER } from "./types";

export function addNote(note) {
  return {
    type: ADD_NOTE,
    payload: note,
  };
}

export function updateNote(note) {
  return {
    type: UPDATE_NOTE,
    payload: note,
  };
}

export function deleteNote(note) {
  return {
    type: DELETE_NOTE,
    payload: note,
  };
}

export function addFolder(folder) {
  return {
    type: ADD_FOLDER,
    payload: folder,
  };
}
