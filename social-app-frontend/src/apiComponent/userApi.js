import axios from "axios";

export const getUserById = async (id) => {
    return  await axios.get(`/user/${id}`)
}

