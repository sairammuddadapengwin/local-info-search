import AsyncStorage from "@react-native-async-storage/async-storage"

export const setToken = async (token: any) => {
    try {
        await AsyncStorage.setItem('token', token)
    } catch (e) { }
}

export const getToken = async () => {
    try {
        return await AsyncStorage.getItem('token')
    } catch (e) { }
}

export const removeToken = async () => {
    try {
        return await AsyncStorage.removeItem('token')
    } catch (e) { }
}

export const executeResponse = async (url: string, body: any) => {

    const headers: any = {
        'Content-Type': body instanceof FormData ? 'multipart/form-data' : 'application/json'
    }

    const token = await getToken()
    if (token && token != '') {
        headers['Authorization'] = `Bearer ${token}`
    }

    try {
        const response = await fetch(``, {
            method: 'POST',
            headers: headers,
            body: body instanceof FormData ? body : JSON.stringify(body)
        })
        const data = await response.json()
        return data
    } catch (e) {
        console.log(e)
    }
    return { code: 2 }
}

export const executeGetResponse = async (url: string, body: any) => {

    const headers: any = {
    }

    const token = await getToken()
    if (token && token != '') {
        headers['Authorization'] = `Bearer ${token}`
    }

    try {
        const response = await fetch(``, {
            method: 'GET',
            headers: headers,
        })
        const data = await response.json()
        return data
    } catch (e) {
        console.log(e)
    }
    return { code: 2 }
}

