import { useCallback, useState } from "react"
import { FetchParams } from "../interfaces/fetch"

export const useFetch = () => {
    const [loader, setLoader] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const request = useCallback(async (params: FetchParams) => {
        setLoader(true)
        try {
            let { url, method, body, headers = {} } = params
            headers['Content-type'] = "application/json"
            const response = await fetch(url, {
                method: method || 'GET',
                body: body ? JSON.stringify(body) : null,
                headers: {
                    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
                    'X-RapidAPI-Key': '0f9b31dba5msh9e672dab5e5f1edp13690cjsne9297a8eb191',
                    ...headers
                }
            })
            const data = await response.json()
            if (!response.ok) throw new Error(data?.message || 'useFetch error')
            setLoader(false)
            setError(null)
            return data
        } catch (error: any) {
            setLoader(false)
            setError(error?.message || 'Произошла ошибка')
        }
    }, [])

    return { loader, error, request }
}