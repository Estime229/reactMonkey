import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";
import { LinkType, LinkTypes } from "@/lib/link-type";
import Link from "next/link";

interface Props {
    size?: "small" | "meduim" | "large";
    variant?: "accent" | "secondary" | "outline" | "disabled" | "ico"| "success";
    icon?: IconProps;
    iconTheme?: "accent" | "secondary" | "gray";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    baseUrl?: string,
    linkType?: LinkType,
    action?: Function,
    type?: "button"| "submit";
    fullwith?: boolean;

}
export const Button =
 ({ size = "meduim", variant = "accent", icon, iconTheme = "accent", iconPosition = "right", disabled,
  isLoading, children, baseUrl, linkType = "internal", type="button", 
  fullwith = false, action = () => { }, }: Props) => {
    let variantStyles: string = "", sizeStyles: string = "", icoSize: number = 0;

    switch (variant) {
        case "accent":
            variantStyles = "bg-primary hover:bg-primary-400 text-white rounded"
            break;

        case "secondary":
            variantStyles =
                "bg-primary-200 hover:bg-primary-300/50 text-primary rounded"
            break;

        case "outline":
            variantStyles =
                "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-500 rounded"
            break;
            case "success":
           
            variantStyles = "bg-secondary hover:bg-secondary-400 text-white rounded"
            break;

        case "disabled":
            variantStyles =
                "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed"
            break;

        case "ico":

            if (iconTheme == "accent") {
                variantStyles = "bg-primary hover:bg-primary-400 text-white rounded-full";
            }
            if (iconTheme == "secondary") {
                variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
            }
            if (iconTheme == "gray") {
                variantStyles = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
            }

            break;

    }

    switch (size) {
        case "small": //Default
            sizeStyles = `text-caption3 font-meduim  ${variant === "ico" ? "flex items-center justify-center w-[40px] h-[40px]" : "  px-[14px] py-[12px]"
                }`;
            icoSize = 18;
            break;

        case "meduim": //Default
            sizeStyles = ` text-caption2 font-meduim ${variant === "ico" ? "flex items-center justify-center w-[50px] h-[50px]" : "px-[18px] py-[15px]"}`;
            icoSize = 20;
            break;

        case "large": //Default
            sizeStyles = `text-caption1 font-meduim ${variant === "ico" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-[22px] py-[18px]"}`;
            icoSize = 24;
            break;

    }


    const buttonContent = (
        <>
            {isLoading && (

                <div className="absolute  inset-0 flex items-center justify-center">
                    {
                        variant === "accent" || variant === "ico" ? (<Spinner variant="white" size="small" />) : (<Spinner size="small" />)
                    }
                </div>
            )}
            <div className={clsx(isLoading && "invisible")}>

                {icon && variant == "ico" ? (<icon.icon size={icoSize} />) : (

                    <div className={clsx(icon && "flex items-center gap-1")} >
                        {icon && iconPosition === "left" && (
                            <icon.icon size={icoSize} />
                        )}
                        {children}
                        {icon && iconPosition === "right" && (
                            <icon.icon size={icoSize} />
                        )}

                    </div>
                )}
            </div>

        </>
    );

const handleClick = () => {
    if (action){
        action()
    }
}



    const buttonElement = (

        <button type={type} className={clsx(variantStyles, sizeStyles, icoSize, isLoading && "cursor-wait",fullwith && "w-full", "relative animate")} onClick={handleClick} disabled={disabled || isLoading ? true : false}>
            {buttonContent}
        </button>
    );

    if (baseUrl) {
        if (linkType === LinkTypes.EXTERNAL) {
            return (
                <a href={baseUrl} target="_blank">{buttonElement}</a>
            )

        } else {
            return <Link href={baseUrl} >{buttonElement}</Link>
        }

    }

    return buttonElement

};











