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
              'https://file.naijauto.com/2018/04/12/gf7sN3IA/funny-car-09-489e.jpg'
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
