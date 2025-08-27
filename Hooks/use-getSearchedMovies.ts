"use client"
import http from "@/services/https"
import { useQuery } from "@tanstack/react-query"

export const useGetSearchedMovies = (queryParams:string) =>{
    const {data, isLoading, isError} = useQuery({
        queryKey: ["searched Movies", queryParams],
        queryFn: ()=> http.httpGetSearchedMovies(queryParams)
    })

    return {data, isLoading, isError}
}