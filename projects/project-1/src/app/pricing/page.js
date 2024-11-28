'use client';

import Navbar from '@/components/Navbar';
import React, { Suspense } from 'react';
// const Features = React.lazy(() => import('../../../project-1/src/components/Reuseable/Features'));
const Project2App = React.lazy(() => import('../../../../project-2/src/app/page')); // Dynamically import project-2's root






// Dynamically import the Project2App from project-2
// const Project2App = React.lazy(() => import('project_2/Project2App'));
const HomePage = React.lazy(() => import('../../../../project-2/src/components/Reuseable/HomePage'));
export default function Pricing() {
  return (
    <Suspense fallback={<div>Loading Project 2...</div>}>
       <HomePage /> {/* Render Project2App from project-2 */}
    </Suspense>
  );
}



