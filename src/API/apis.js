const BASE_API = "https://dev-api.qwikxr.com";


export const loginAPI = async (data) => {
    return await fetch(`${BASE_API}/api/v1/auth/get-token/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(response => {
        return response.json()
    }).then(json => {
        return json
    }).catch(e => {
        console.log(e);
        return 'error'
    });
}

export async function registerAPI(data) {
    try {
        return await fetch(`${BASE_API}/api/v1/register/`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then(response => {
            return response.json()
        }).then(json => {
            return json
        });
    } catch (error) {
        console.log(error)
        return error
    }

}

export async function activateAPI(data) {
    try {
        return await fetch(`${BASE_API}/api/v1/activate/`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then(response => {
            return response.json()
        }).then(json => {
            return json
        });

    } catch (error) {
        console.log(error)
        return error
    }
}

