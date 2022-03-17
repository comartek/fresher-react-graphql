import React, { useEffect } from 'react';
import useGetRestaurant from './hooks/useGetRestaurant';

export default function HomePage() {
  const { data, onGetRestaurant } = useGetRestaurant();

  useEffect(() => {
    onGetRestaurant({ _id: '' });
    // eslint-disable-next-line
  }, []);

  console.log('data', data);

  return <div>Home Page</div>;
}
