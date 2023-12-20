"use client";

import { useEffect, useState } from 'react';
import { Hero, CustomFilter, SearchBar, CarCard, ShowMore } from '@/components';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fetchCars } from '@/Utils';
import { CarProps } from '@/types';
import { fuels, yearsOfProduction } from '@/constants';
import { useFormState } from 'react-dom';


export default function Home({ }) {
 const [ allCars, setAllCars ] = useState([]);
 const [ loading, setLoading ] = useState(false);

 const  [ manufacturer, setManufacturer ] = useState("");
 const  [ model, setModel ] = useState("");

 const [ fuel, setFuel ] = useState("");
 const [ year, setYear ] = useState(202);

 const [ limit, setLimit ] = useState(10);
const getCars = async () => {
  setLoading(true);
  try {
    const result = await fetchCars({
      manufacturer: manufacturer || "",
      year: year || 2022,
      fuel: fuel || "",
      limit: limit || 10,
      model: model || "",
    });
    setAllCars(result);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}
 useEffect(() => {
   getCars();
 }, [fuel, year, limit, manufacturer, model])

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catalogo</h1>
          <p>Explora nuestros autos que te podrían gustar</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Fuel" options={fuels} />
            <CustomFilter title="Year" options={yearsOfProduction} />
            {/* Asegúrate de que estás utilizando el array correcto en lugar de {yearsOfProduction} */}
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car: any) => (
                <CarCard car={car} key={car.id} />
              ))}
              <div>
                <ShowMore 
                  pageNumber={(searchParams.limit || 10) / 10}
                  isNext={(searchParams.limit || 10) >
                  allCars.length}
                />
              </div>
            </div>
          </section>
        ) : (
          <div>
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              <p>{allCars?.message}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
