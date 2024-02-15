import React from 'react';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';

export default function Home() {
  return (
    <>
      <Head>
        <title>Loja Next</title>
        <meta name="description" content="Página inicial da Loja Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main>
        <h1>Página Inicial</h1>
      </main>
    </>
  );
}
