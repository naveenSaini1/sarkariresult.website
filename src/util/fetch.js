const fetchApi = async (url, method = 'GET', body = null, formdata = null) => {
    const headers = new Headers();
   
    if (body) {
        headers.append("Content-Type", "application/json");
    }

    const requestOptions = {
        headers,
        method,
        body: body ? JSON.stringify(body) : formdata,
        redirect: 'follow',
        cache: 'no-store',
    };

    try {
        const response = await fetch(url, requestOptions,);
        if (!response.ok) {
           
        }
        const result = await response.json();
        
        
        return result;

    } catch (error) {
        console.error('API call error:', error);
        
    }
};

export default fetchApi;
