"use client"

import http from "@/services/https"
import { useQuery } from "@tanstack/react-query"

export const useGetMovieDetails = (movieId:string) =>{
    const {data, isLoading, isError} = useQuery({
        queryKey: ["movie details"],
        queryFn: ()=>http.httpGetMovieById(movieId)
    })
    return {data, isLoading, isError} 
}