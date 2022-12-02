import Link from 'next/link';
import { Router } from 'next/router';
import React from 'react';
import DashboarLayout from '../../components/Dashboard/DashboarLayout';
import LineData from '../../components/Dashboard/LineData';
import PieData from '../../components/Dashboard/PieData';

const DahboardPages = () => {
  return (
    <DashboarLayout title="Dashboard">
      <PieData />
    </DashboarLayout>
  );
};

export default DahboardPages;
