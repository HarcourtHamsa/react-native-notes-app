import {
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  ADD_FOLDER,
} from "../actions/types";

// reducers create state
const initialState = {
  notes: [],
  folders: [
    // {
    //   name: "Open Source",
    //   files: [
    //     {
    //       data: {
    //         body: "I love you baby",
    //         creationTime: "09/24/21",
    //         heading: "Hey",
    //       },
    //       id: "0.e8a44899110c9e8",
    //     },
    //   ],
    // },
  ],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      state.notes = Object.assign([], state.notes).concat(action.payload);
      console.log(state.notes);
      return state;

    case UPDATE_NOTE:
      // locate specific note
      let isFound = state.notes.find((note) => note.id === action.payload.id);
      let index = state.notes.indexOf(isFound);

      // update values
      isFound.data.body = action.payload.data.body;
      isFound.data.heading = action.payload.data.heading;

      // remove old value
      state.notes.pop(index);

      // add new value
      state.notes = Object.assign([], state.notes).concat(isFound);
      return state;

    case DELETE_NOTE:
      // locate specific note
      let v = state.notes.find((note) => note.id === action.payload.id);
      let i = state.notes.indexOf(v);

      // remove old value
      state.notes.pop(i);

      return state;

    case ADD_FOLDER:
      state.folders = Object.assign([], state.folders).concat(action.payload);
      console.log("new foldr :", state.folders);
      return state;

    default:
      return state;
  }
}
