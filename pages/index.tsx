import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto React - Trabalho em Grupo</title>
        <meta name="description" content="Objetivo é desmembrar este arquivo em vários componentes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo ao projeto em grupo!
        </h1>

        <p className={styles.description}>
          Agora analisem o arquivo index.tsx na pasta pages
        </p>

        <div className={styles.grid}>
          <Card
            title={'Erro encontrado'}
            content={'Não existe mais um erro neste componente. Veja que este bloco aparece igual aos outros.'}/>

          <Card
            link={'https://nextjs.org/learn'}
            title={'Crie um repositório'}
            content={'Após concluir o trabalho suba o código no github do grupo'}/>

          <Card
            link={'https://github.com/vercel/next.js/tree/canary/examples'}
            title={'Evite componentes demais'}
            content={'Crie somente componentes essenciais.'}/>

          <Card
            link={'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'}
            title={'Trabalho em grupo'}
            content={'Ajude para que todos do grupo participe, envolva-se.'}/>
        </div>
      </main>

      <Footer/>

    </div>
  )
}

export default Home;
