export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.payload]
    case 'TOGGLE_IMPORTANCE':
      const { id } = action.payload
      return state.map((note) => {
        if (note.id === id) {
          return { ...note, important: !note.important }
        }
        return note
      })
    default:
      return state
  }
}
