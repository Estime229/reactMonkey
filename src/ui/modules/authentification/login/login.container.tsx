import { LoginFormFielsType, RegisterFormFielsType } from "@/types/forms";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginView } from "./login.view";

export const LoginContainer = () => {
    const [isLoading, setIsLoading]= useState<boolean>(false)

    const {
        handleSubmit,
        formState: {errors},
        register,
        setError,
        reset,
    } = useForm <LoginFormFielsType>();

    const onSubmit: SubmitHandler<LoginFormFielsType> = async (FormData)  => {
        setIsLoading(true);
    console.log('formData', FormData)
    
    }
    



    return( <>
        <LoginView
        form={{
            errors,
            register,
            handleSubmit,
            onSubmit,
            isLoading,
        }}
        
        />
    </>);
};