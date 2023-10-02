import React from "react";
import '../globals.css'
import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google";
export const metadata ={
    title: 'ThreadHub',
    description: 'Next.js 13 Application'
}

const inter = Inter({subsets: ["latin"]}) //applies this font across all files

export default function RootLayout({children}:{children: React.ReactNode}){
    return (
    <ClerkProvider>
    <html lang="en">
        <body className={`${inter.className} bg-dark-1`}> 
        <div className="w-full flex justify-center items-center min-h-screen">{children} </div></body>
    </html>

   </ClerkProvider>)
}


   

