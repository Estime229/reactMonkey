import { RegisterFormFielsType } from "@/types/forms";
import { RegisterView } from "./register.view";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase-config";
export const RegisterContainer = () => {

    const [isLoading, setIsLoading]= useState<boolean>(false)

    const {
        handleSubmit,
        formState: {errors},
        register,
        setError,
        reset,
    } = useForm <RegisterFormFielsType>();
    
const handleCreateUserAuthentication = ({email, password, how_did_hear}: RegisterFormFielsType)  =>   {

};

const onSubmit: SubmitHandler<RegisterFormFielsType> = async (FormData)  => {
    setIsLoading(true);
console.log('formData', FormData)

const {password} = FormData;

if(password.length<= 5){
    setError("password", {
    type: "manual",
    message: "Ton mot de passe doit compter au moins 6 caractères"
   } );
   return
}





};


    return( <>
        <RegisterView
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
