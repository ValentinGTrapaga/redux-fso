import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    content: 'reducer defines how redux store works',
    important: true,
    id: 1
  },
  {
    content: 'state of store can contain any data',
    important: false,
    id: 2
  }
]

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote(state, action) {
      const newNote = {
        content: action.payload,
        important: false,
        id: generateId()
      }
      return [...state, newNote]
    },
    toggleImportanceOf(state, action) {
      const id = action.payload
      console.log(JSON.parse(JSON.stringify(state)))

      return state.map((note) => {
        if (note.id === id) {
          return { ...note, important: !note.important }
        }
        return note
      })
    }
  }
})

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const { createNote, toggleImportanceOf } = noteSlice.actions
export default noteSlice.reducer
