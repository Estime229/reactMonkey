import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiPlayCircleLine } from "react-icons/ri";



export const CurrentCourseCtaView = () => {
    return (
        <div className="bg-gray-300">
            <Container className="py-24 text-center">
                <Typography variant="h2" component="h2" className="mb-2.5" >
                    Formation React.js gratuite
                </Typography>

                <Typography variant="lead" component="h3" className="mb-5" >
                    Apprends a coder l'app des siges codeurs
                </Typography>

                <Typography variant="caption3" component="p" theme="gray" className="mb-16" >
                    si tu veux un cv plus sexy que ton ex, suis cette formation
                </Typography>

                <a href="/" target="_blank">
                    <div className="relative bg-gray-400 rounded h-[626px]">
                        <div className="relative flex flex col items-center justify-center gap-2 z-10 h-full bg-gray rounded opacity-o hover:opacity-95 animate">
                            <RiPlayCircleLine size={52} />
                            <Typography
                                variant="caption2"
                                theme="white"
                                className="upercase"
                                weight="meduim">
                                Lire la formation
                            </Typography>
                        </div>
                        <Image fill src="assets/images/Hero.png" alt="" className="object-cover object-center rounded" />

                    </div>


                </a>
            </Container>

        </div>
    )
};  