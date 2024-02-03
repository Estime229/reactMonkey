import { Navigation } from "@/ui/components/navigation/navigations";
import { Seo } from "@/ui/components/seo/seo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from '@/ui/components/container/container';
import { RiUser6Fill } from "react-icons/ri";
import { Layout } from "@/ui/components/layout/layout";


export default function DesignSystem(){
    return(
    <>
     <Seo title="Design system" description="Descrption.." />
    
     <Layout>
 <Container className="py-10 space-y-10">
        
      <div className='flex  items-center gap-4 p-10'>
        <Spinner size='small' />
        <Spinner />
        <Spinner size='large' />
      </div>
      {/* Avatar */}

      <div className='space-y-2'>
        <Typography variant='caption2' weight='meduim'>
          Avatar
        </Typography>
        <div className='flex items-center gap-2 p-5 border border-gray-400 rounded'>
          <Avatar size='small' src="/assets/images/avatar5.png" alt='dani' />
          <Avatar src="/assets/images/avatar5.png" alt='dani' />
          <Avatar size='large' src="/assets/images/avatar5.png" alt='dani' />

        </div>


      </div>

      {/* Logo */}
      <div className='space-y-2'>
        <Typography variant='caption2' weight='meduim'>
          Logo
        </Typography>
        <div className='flex items-center gap-2 p-5 border border-gray-400 rounded'>
          <Logo size='very-small' />
          <Logo size='small' />
          <Logo />
          <Logo size='large' />
        </div>
      </div>
      {/* icon */}
      <div className='space-y-2'>
        <Typography variant='caption2' weight='meduim'>
          Icon
        </Typography>
        <div className='flex items-center gap-2 p-5 border border-gray-400 rounded'>

          <Button
            isLoading
            size="small" >Accent </Button>

          <Button size="meduim" icon={{ icon: RiUser6Fill }} iconPosition='left'> Accent </Button>
          <Button size="large" icon={{ icon: RiUser6Fill }} iconPosition='right'> Accent </Button>


          <Button isLoading size="small" variant="secondary">Accent </Button>
          <Button isLoading size="small" variant="accent"> Accent </Button>
          <Button isLoading size="small" variant="outline">Accent</Button>
          <Button isLoading size="small" variant="disabled" disabled> Accent</Button>
          <Button isLoading size="small" variant="ico" icon={{ icon: RiUser6Fill }} />

        </div>
      </div>

      {/* spinner */}
      <div className='space-y-2'>
        <Typography variant='caption2' weight='meduim'>
          Spinner
        </Typography>
        <div className='flex items-center gap-2 p-5 border border-gray-400 rounded'>
          <Button size="meduim" variant="secondary">Accent</Button>
          <Button isLoading size='meduim' variant="accent">Accent</Button>
          <Button isLoading size='meduim' variant="outline">Accent</Button>
          <Button isLoading size='meduim' variant="disabled" disabled> Accent</Button>
          <Button size="meduim" variant="ico" icon={{ icon: RiUser6Fill }} />

        </div>
      </div>

      {/* bouton */}
      <div className='space-y-2'>
        <Typography variant='caption2' weight='meduim'>
          Bouton
        </Typography>
        <div className='flex items-center gap-2 p-5 border border-gray-400 rounded'>
          <Button size="large" variant="secondary"> Accent
          </Button>
          <Button size="large" variant="accent">
            Accent
          </Button>
          <Button size="large" variant="outline">
            Accent
          </Button>
          <Button size="large" variant="disabled" disabled>
            Accent
          </Button>
          <Button size="large" variant="ico" iconTheme='gray' icon={{ icon: RiUser6Fill }} />

          <Button size="large" variant="ico" icon={{ icon: RiUser6Fill }} />

        </div>
      </div>
    </Container>

      </Layout>
    
   
    </>
    );
}