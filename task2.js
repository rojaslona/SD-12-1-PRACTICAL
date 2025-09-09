// Task 2: listUsers()
import { getServerURL } from "./task1.js";

export const listUsers = async () => {
    try {
        const url = `${getServerURL()}/users`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Request error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Could not get the user list:", error);
    }
};
