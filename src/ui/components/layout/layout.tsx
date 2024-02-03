import { BreadCrummbs } from "../breadcrumbs/breadcrumbs";
import { Footer } from "../navigation/footer"
import { Navigation } from "../navigation/navigations"

interface Props {
    children: React.ReactNode
    isDisplayBreadcrumbs?: boolean;
}

export const Layout = ({children, isDisplayBreadcrumbs = true }: Props) => {
    return(
        <>
        <Navigation/>
        {isDisplayBreadcrumbs && <BreadCrummbs/>}
        {children}
        <Footer/>
        </>
    )
} 