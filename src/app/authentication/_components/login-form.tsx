"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";

const registerSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Formato de e-mail inválido" })
    .min(3, {
      message: "E-mail é obrigatório precisa ter 6 ou mais caracteres",
    }),
  password: z.string().trim().min(6, {
    message: "Senha é obrigatório precisa ter 6 ou mais caracteres",
  }),
});
const LoginForm = () => {
     const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
        email: "",
        password: "",
        },
    });
    function onSubmit(value: z.infer<typeof registerSchema>) {
        console.log(value);
    }
    return(
        <Card>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>
                    Olá, seja bem vindo.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <FormField control={form.control} name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input placeholder="E-mail" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}></FormField>

                    <FormField control={form.control} name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Senha</FormLabel>
                        <FormControl>
                          <Input placeholder="***************" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}></FormField>
                </CardContent>
                <CardFooter>
                  <Button type="submit">Entrar</Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
    )
}

export default LoginForm;