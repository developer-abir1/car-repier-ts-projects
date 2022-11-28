import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Header from '../components/Home/Header';
import Layouts from '../components/layouts/Layouts';

export default function Home() {
  return (
    <Layouts>
      <Header />
    </Layouts>
  );
}
