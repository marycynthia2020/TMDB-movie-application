"use client"
import http from "@/services/https"
import { useQuery } from "@tanstack/react-query"

export const useGetPopularMovies  = () =>{
    const {data, isLoading, isError} = useQuery({
        queryKey: ["popular movies"],
        queryFn: ()=>http.httpGetPopularMovies()
    })

    return {data, isLoading, isError} 
}