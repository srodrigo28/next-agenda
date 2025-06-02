"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const registerSchema = z.object({
  name: z.string().trim().min(3, {
    message: "Nome é obrigatório precisa ter 3 ou mais caracteres",
  }),
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
const Original = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  function onSubmit(value: z.infer<typeof registerSchema>) {
    console.log(value);
  }
  return (
    <div className="h-screen flex w-screen justify-center">
      <Tabs defaultValue="login" className="mt-32">
        <TabsList>
          <TabsTrigger value="login" className="w-44 cursor-pointer">
            Login
          </TabsTrigger>
          <TabsTrigger value="register" className="w-44 cursor-pointer">
            Criar conta
          </TabsTrigger>
        </TabsList>

        <TabsContent value="login">
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
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input placeholder="E-mail" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>
                </CardContent>
                <CardFooter>
                  <Button type="submit">Entrar</Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </TabsContent>

        <TabsContent value="register">
          <Card>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <CardHeader>
                  <CardTitle>Criando uma conta</CardTitle>
                  <CardDescription>
                    Vamos criar uma conta.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input placeholder="digite seu email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Senha</FormLabel>
                        <FormControl>
                          <Input placeholder="***********" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>
                </CardContent>
                <CardFooter>
                  <Button type="submit">Save changes</Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Original;
