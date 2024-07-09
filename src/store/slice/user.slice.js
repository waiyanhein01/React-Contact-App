import { createSlice } from "@reduxjs/toolkit"

const initialValue = {
    name : '',
    email : '',
    phone : '',
    address: ''
}

export const userSlice = createSlice({
    name: "user",
    initialValue,
    reducers: {
        name: (state) => {
            state.name = name 
        },
        email: (state) => {
            state.email = email 
        },
        phone: (state) => {
            state.phone = phone 
        },
        address: (state) => {
            state.address = address 
        },
    }
})

export const {name,email,phone,address} = userSlice.actions
export default userSlice.reducer;