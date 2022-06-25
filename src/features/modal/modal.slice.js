import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal: false
}

const modal = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleModal: ( state, action ) => {
            state.modal = !state.modal
        }
    }
})

export default modal.reducer

export const { toggleModal } = modal.actions