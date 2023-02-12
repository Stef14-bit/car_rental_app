import CarCard from '@/components/CarCard';
import React from 'react';
import data from '@/data';

const CarList = () => {
  return (
    <div>
      {data.map((el, index) => (
        <div key={index}>
          <CarCard
            category={el.category}
            carImage={
              'https://seeklogo.com/images/L/line-art-car-logo-99DBB62CB3-seeklogo.com.png'
            }
            make={el.make}
            model={el.model}
            rate={el.rate}
            transmission={el.transmisson}
            doors={el.doors}
            horsepower={el.horsepower}
            price={el.price}
          />
        </div>
      ))}
    </div>
  );
};

export default CarList;
