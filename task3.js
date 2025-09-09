// Task 3: addUser(first_name, last_name, email)
export const addUser = async (firstName, lastName, email) => {
    try {
        const url = `${globalThis.getServerURL()}/users`;
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        if (!response.ok) {
            throw new Error(`Error adding the user: ${response.status}`);
        }

        const addedUser = await response.json();
        console.log("User added successfully:", addedUser);
    } catch (error) {
        console.error("Could not add the user:", error);
    }
};
