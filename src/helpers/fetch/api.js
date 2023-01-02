export default function fetchmgb({
    url,
    method = 'GET',
    host = process.env.REACT_APP_MGB
}) {
    return fetch(`${host}${url}`, {
        method,
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(async (response) => {
        const jsonResponse = await response.json();
        if (response.ok) return jsonResponse;

        throw new Error(JSON.stringify(jsonResponse));
    });
}