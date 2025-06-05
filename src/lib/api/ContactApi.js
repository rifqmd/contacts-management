export const contactCreate = async (token, {firstName, lastName, email, phone}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email,
            phone
        }),
    });
}