"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignUpForm from "./_components/sign-up-form";
import LoginForm from "./_components/login-form";

const AuthenticationPage = () => {
  return (
    <div className="h-screen flex w-screen justify-center">
      <Tabs defaultValue="login" className="mt-20">
        <TabsList>
          <TabsTrigger value="login" className="w-44 cursor-pointer">
            Login
          </TabsTrigger>
          <TabsTrigger value="register" className="w-44 cursor-pointer">
            Criar conta
          </TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <LoginForm />
        </TabsContent>

        <TabsContent value="register">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthenticationPage;
