// Task 4: delUser(number)
// En task4.js
export const delUser = async (id) => {
    try {
        const url = `${globalThis.getServerURL()}/users/${id}`; 
        
        const response = await fetch(url, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`Error deleting the user: ${response.status}`);
        }
        console.log(`ID user ${id} was deleted successfully.`);
    } catch (error) {
        console.error("Could not delete the user:", error);
    }
};
