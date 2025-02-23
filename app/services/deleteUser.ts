import IUser from "../@types/IUser";
import { apiURL } from "../settings";

export default async function deleteUser(id: number) {
    try {
        const response = await fetch(
            `${apiURL}/users/${id}`,
            {
                method: "DELETE",
            }
        );

        const localUsers = localStorage.getItem("users");

        if (localUsers) {
            const usersArray: IUser[] = JSON.parse(localUsers);

            const newUsers = usersArray.filter((user) => user.id !== id);

            localStorage.setItem("users", JSON.stringify(newUsers));
        }

        return {
            success: true,
            message: "Successfully deleted user",
        };
    } catch (err) {
        return {
            err,
            message: "An error occurred while trying to delete user",
        };
    }
}
