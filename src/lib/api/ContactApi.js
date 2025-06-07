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

export const contactList = async (token, {name, phone, email, page}) => {
    // fetch(`${import.meta.env.VITE_API_PATH}/contacts?${params.toString()}`
    const url = new URL(`${import.meta.env.VITE_API_PATH}/contacts`);

    if (name) url.searchParams.set('name', name);
    if (phone) url.searchParams.set('phone', phone);
    if (email) url.searchParams.set('email', email);
    if (page) url.searchParams.set('page', page);

    return await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        }
    })
}

export const contactDelete = async (token, id) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        }
    })
}