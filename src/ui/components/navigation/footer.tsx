import { Container } from '@/ui/components/container/container';
import { Typography } from '@/ui/design-system/typography/typography';
import Image from 'next/image';
import { footerApplicationLinks, footerLinks } from './app-links';
import { footerUserLinks } from './app-links';
import { v4 as uuidv4 } from 'uuid';
import { ActiveLink } from './active-link';
import { AppLinks, FooterLinks } from '@/types/app-links';
import { LinkTypes } from '@/lib/link-type';
import { SocialNetworksButtons } from './social-networks-buttons';


export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const FooterNavigationList = footerLinks.map((columLinks) =>
    (
        <FooterLink key={uuidv4()} data={columLinks}   />

    ));
    return (

        <div className="bg-gray ">
            <Container className='flex justify-between pt-16'>
                <div className='flex flex-col items-center gap-1'>
                    <Typography variant='caption1' theme='white'
                        weight='meduim'>
                        Formations gratuites
                    </Typography>
                    <Typography variant='caption3' theme='gray'
                    >
                        Abonne-toi à la chaine !
                    </Typography>
                    <a href="https://youtube.com/@remotemonkey" target="_blank">
                        <Image
                            src="/assets/svg/YTB.svg"
                            width={229}
                            height={216}
                            alt='RemoteMonkey'
                        />
                    </a>
                </div>
                <div className='flex gap-7'>
                     {FooterNavigationList}     
                </div>
            </Container>

            <Container className='pt-9 pb-11 space-y-11'>
                <hr className='text-gray-800' />
                <div className='flex items-center justify-between'>
                    <Typography variant='caption4' theme='gray'>
                        {`coprigth @ ${currentYear}  |  Propulsed  by `} {""}
                        <a href="https:/gliti-estime.fr" target='_blank' className='underline'> Estime Gliti</a>
                        {`- Remonte monkey SASU`}
                    </Typography>
           
                    <div className="">
                    <SocialNetworksButtons theme='gray' />
                </div>
                </div>
            </Container>

        </div>
    ); 
};

interface footerLinkProps{

data: FooterLinks;

}

const FooterLink = ({data}: footerLinkProps) => {

    const linksList = data.links. map((link) =>
    (
        <div key={uuidv4()}>
            {link.type === LinkTypes.INTERNAL && (
                <ActiveLink  href={link.baseUrl}>{link.label}</ActiveLink>

            )}

            {link.type === LinkTypes.EXTERNAL && (
                <a href={link.baseUrl} target="_blank">{link.label}</a>
            )

            }
        </div>
    ));


    return (
        <div className='min-w-[190px]'>
            <Typography
                theme='white'
                variant='caption2'
                weight='meduim'
                className='pb-5'>
                {data.label}
            </Typography  >

            <Typography
                theme='gray'
                variant='caption3'
                className='space-y-4'>
                {linksList}
            </Typography>
        </div>
    )
}    