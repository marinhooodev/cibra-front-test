import { apiURL } from "../settings"

export default async function getUsers() {
    try {
        const response = await fetch(`${apiURL}/users`)

        const data = await response.json()

        localStorage.setItem("users", JSON.stringify(data))

        return {
            success: true,
            users: data,
            message: "Successfully fetched users",
        }
        
    } catch (err) {
        return {
            err, 
            message: "An error occurred while trying to get users"
        }
    }
}