import  {CarProps} from '@/types';
import axios from 'axios';

const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=audi';

const options = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    params: { model: 'audi' },
    headers: {
        'X-RapidAPI-Key': '3a7a6e6e90mshb7f5d9a7d4c5f7cp1b0b5djsn3b6a7a7a7a7a',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};

// Función principal
async function fetchData() {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Llamada a la función principal
fetchData();

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '3a7a6e6e90mshb7f5d9a7d4c5f7cp1b0b5djsn3b6a7a7a7a7a',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };

    try {
        const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=audi', {
            headers: headers,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0);
}
 
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');
    const { make, model, year } = car;
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('make', make);
    url.searchParams.append('zommType', 'fullscreen');
    url.searchParams.append('angle', `${angle}`);
    
    return url.href;
}
