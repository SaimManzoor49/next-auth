import type { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options:NextAuthOptions={
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_ID!,
            clientSecret:process.env.GITHUB_SECRET!
        }),
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                username:{
                    label:"Username",
                    type:'text',
                    placeholder:"your-username",
                },
                password:{
                    label:'password',
                    type:"password",
                    placeholder:"your-password"
                }
            },
            async authorize(credentials){
                // This is where you need to retrive user data
                // verify with credentials
                const user = {id:"06",name:"Saim",password:"manahibatoonga"}

                if(credentials?.username===user.name && credentials?.password===user.password){
                    return user
                }else{
                    return null
                }
            }
        })
    ],

}