import MobileNavbar from '@/components/MobileNavbar';
import TopInfo from '@/components/TopInfo';
import React from 'react';
import { useSession } from '@supabase/auth-helpers-react';
import CarList from './car-list';
import Link from 'next/link';

function CarSearch() {
  const session = useSession();
  return (
    <div className="flex flex-col justify-between">
      {session && <TopInfo />}
      <Link href="car-search/car-list">Cateories</Link>

      <MobileNavbar />
    </div>
  );
}

export default CarSearch;
