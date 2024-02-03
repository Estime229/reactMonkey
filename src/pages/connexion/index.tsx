import { Container } from '@/ui/components/container/container';
import { Layout } from '@/ui/components/layout/layout';

import { Seo } from '@/ui/components/seo/seo'
import { LoginContainer } from '@/ui/modules/authentification/login/login.container';




export default function Connexion() {
  return (

    <>
      <Seo title="Connexion sur coders monkeys" description="Page de connexion" />

      <Layout >
      <LoginContainer/>
      </Layout>
    </>

  );
}
