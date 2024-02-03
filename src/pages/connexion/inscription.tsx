import { Container } from '@/ui/components/container/container';
import { Layout } from '@/ui/components/layout/layout';

import { Seo } from '@/ui/components/seo/seo'
import { RegisterContainer } from '@/ui/modules/authentification/register/register.container';




export default function Register() {
  return (

    <>
      <Seo title="inscription sur coders monkeys" description="Page d'inscription" />

      <Layout >
      <RegisterContainer/>
      </Layout>
    </>

  );
}
