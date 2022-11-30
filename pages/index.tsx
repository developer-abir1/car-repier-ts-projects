import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Header from '../components/Home/Header';
import ServiceInfo from '../components/Home/ServiceInfo';
import Services from '../components/Home/Services';
import Layouts from '../components/layouts/Layouts';

export default function Home() {
  return (
    <Layouts>
      <Header />
      <ServiceInfo />
      <Services />
    </Layouts>
  );
}
