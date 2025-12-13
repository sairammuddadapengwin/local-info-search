import AsyncStorage from "@react-native-async-storage/async-storage"

const BASE_URL = ''

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
        const response = await fetch(`${BASE_URL}/${url}`, {
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

export const executeGetResponse = async (url: string) => {

    const headers: any = {
    }

    const token = await getToken()
    if (token && token != '') {
        headers['Authorization'] = `Bearer ${token}`
    }

    try {
        const response = await fetch(`${BASE_URL}/${url}`, {
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


export const login = async (mobile: any) => {
    return executeResponse('', { mobile })
}

export const otpVerify = async (mobile: any, otp: any) => {
    return executeResponse('', { mobile, otp })
}

export const createSignup = async (body: any) => {
    return executeResponse('', body)
}

export const passwordVerify = async (username: any, password: any) => {
    return executeResponse('', { username, password })
}

export const forgotPassword = async (username: any, email: any, mobile: any) => {
    return executeResponse('', { username, email, mobile })
}

export const forgotPasswordVerify = async (password: any) => {
    return executeResponse('', { password })
}

export const updateProfile = async (body: any) => {
    const data = new FormData()
    for (const [key, value] of Object.entries<any>(body)) {
        if (key == 'profile_pic') {
            if (value && value.uri) {
                data.append('profile_pic', {
                    uri: value.uri,
                    type: value.type,
                    name: value.fileName
                })
            }
        } else {
            data.append(key, value)
        }
    }
    return executeResponse('', data)
}