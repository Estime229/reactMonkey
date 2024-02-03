import { Container } from '@/ui/components/container/container';
import { Layout } from '@/ui/components/layout/layout';

import { Seo } from '@/ui/components/seo/seo'
import { ForgetPasswordContainer } from '@/ui/modules/authentification/forget-password/forget-password.container';




export default function ForgetPassword() {
  return (

    <>
      <Seo title="inscription sur coders monkeys" description="Page d'inscription" />

      <Layout >
      <ForgetPasswordContainer/>
      </Layout>
    </>

  );
}
