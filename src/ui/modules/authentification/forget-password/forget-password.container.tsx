import { ForgetPasswordFormFielsType, LoginFormFielsType } from "@/types/forms";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ForgetPasswordView } from "./forget-password.view";

export const ForgetPasswordContainer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<ForgetPasswordFormFielsType>();

    const onSubmit: SubmitHandler<ForgetPasswordFormFielsType> = async (FormData) => {
        setIsLoading(true);
        console.log('formData', FormData)

    }



    return  <ForgetPasswordView 
        form={{
            errors,
            register,
            handleSubmit,
            onSubmit,
            isLoading,
        }}
        
        />
    
};