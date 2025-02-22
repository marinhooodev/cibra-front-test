export default async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await response.json()

        localStorage.setItem("users", JSON.stringify(data))

        return {
            success: true,
            message: "Successfully fetched users",
        }
        
    } catch (err) {
        return {
            err, 
            message: "An error occurred while trying to get users"
        }
    }
}