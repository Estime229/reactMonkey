import { Logo } from "@/ui/design-system/logo/logo"
import { Container } from "../container/container"
import { Typography } from "@/ui/design-system/typography/typography"
import { Button } from "@/ui/design-system/button/button"
import Link from "next/link"
import { ActiveLink } from "./active-link"

interface Props {

}

export const Navigation = ({ }) => {
    return (
     
        <div className="border-b-2 border-gray-400">
            <Container className="flex items-center justify-between gap-7 py-1.5">
             <Link href="/">
                <div className="flex items-center gap-2.5">
                    <Logo size="small" />
                    <div className="flex flex-col">
                        <div className="text-gray font-extrabold text-[24px]">Coders Monkeys</div>
                        <Typography variant="caption4" theme="gray" component="span">
                            Trouvez de linspiration et recois des feedbacks
                        </Typography>
                    </div>
                 
                </div>
                </Link>
                <div className="flex items-center gap-7">
                    <Typography variant="caption3" component="div" className="flex items-center gap-7">
                        <ActiveLink  href="/design-system">Design system </ActiveLink>
                        <Link  href="/projets">Projets </Link>
                        <Link  href="/formation">Formation </Link>
                        <Link  href="/contacts">Contacts </Link>
                    </Typography>

                

                    <div className="flex items-center gap-2">
                        <Button size="small"  baseUrl="/connexion">Connexion</Button>
                        <Button size="small" variant="secondary" baseUrl="/connexion/inscription">Rejoindre</Button>

                    </div>
                </div>
            </Container>
        </div>
    )
}
