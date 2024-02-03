import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export const HeroTopView = () => {
    return (

        <Container className="relative pt-40 pb-52 overflow-hidden">
            <div className="w-full max-w-2xl space-y-5">
                <Typography variant="h1" component="h1" className="mx-w-lg">
                    Rejoins les singes codeurs !
                </Typography>
""
                <Typography variant="body-lg" component="p" theme="gray" className="mx-w-xl">
                    Ici, on se prend pas la tete, mais on code comme des betes!
                    Rejoins notre tribu de singes codeurs , partage tes projets
                    les plus fous et fais toi de nouveaux amis développur.
                </Typography>
                <div className="space-x-5 pt-2.5">
                    <Button baseUrl="">Commencer</Button>
                    <Button baseUrl="" variant="secondary">En savoir plus{""}</Button>

                </div>

            </div>
            <Image
                src="/assets/svg/rocket.svg"
                alt="Evolution dev frontend"
                width={811}
                height={596}
                className="absolute top-0 right-0 z-0"
            />

        </Container>
    )
}