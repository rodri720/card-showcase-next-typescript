import Image from 'next/image';
import { Hero, CustomFilter, SearchBar, carCard } from '@/components';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fetchCars } from '@/Utils';

export default function Home({ allCars }) {
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Catalogo
          </h1>
          <p>Explora nuestros autos que te podrían gustar</p>
        </div>

        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title="Fuel" />
            <CustomFilter title="Year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <div key={car.id} className="home__car-wrapper">
                  <carCard car={car} />
                </div>
              ))}
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

// Agrega la lógica para obtener los datos en el servidor (por ejemplo, usando getStaticProps o getServerSideProps)
// y pasa los datos como propiedades a este componente.
// Por ejemplo:
// export async function getStaticProps() {
//   const allCars = await fetchCars();
//   return {
//     props: { allCars },
//   };
// }
