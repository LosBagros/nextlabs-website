"use client";
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/schemas"
import {
    Form,
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
    FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CardWrapper } from "./card-wrapper"
import { Button } from "@/components/ui/button";
export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    
    return (
        <CardWrapper 
            headerLabel="Welcome Back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(() => {})}
                className="space-y-6">
                    <div className="space-y-4">
                        <FormField 
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input  {...field} placeholder="marcus@6firemza3roky.cz" type="email" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                             <FormField 
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input  {...field} placeholder="******" type="password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                    </div>
                    <Button typeof="submit" className="w-full">
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}