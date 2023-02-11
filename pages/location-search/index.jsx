import MobileNavbar from '@/components/MobileNavbar';
import React from 'react';
import { useSession } from '@supabase/auth-helpers-react';
import TopInfo from '@/components/TopInfo';
import TopLocation from '@/components/TopLocation';
import data from '@/data';

function Location() {
  const session = useSession();
  return (
    <div className="flex flex-col justify-between">
      {session && <TopInfo />}
      <h1>Find and rent cool cars in your town </h1>
      <input type="search" placeholder="search" />
      <h3>Top Location</h3>
      {data.map((e) => (
        <div>
          {' '}
          <TopLocation cityName={e.carName} cars={e.doors} />
          <TopLocation cityName={e.carName} cars={e.doors} />{' '}
        </div>
      ))}

      <MobileNavbar />
    </div>
  );
}

export default Location;
