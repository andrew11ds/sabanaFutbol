import './countries.module.css';
import Link from 'next/link';
import imagenDefault from '../../public/Images/fondoSabanaFutbol.jpg';
import logo from '../../public/Images/logo futbol.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { useCountries } from '../useCountries';

/* eslint-disable-next-line */
export interface CountriesProps {}

export function Countries(props: CountriesProps) {
  const [countries] = useCountries();
  
  return (
    <div>
      <div className="row e justify-content-center align-items-center ">
        <div className="col-auto p-3 block-center">
          <div className="text-center image-size">
            <Link href="/index">
              <Image src={logo} className="img-responsive" />
            </Link>
          </div>
        </div>
      </div>

      <h1>Welcome to Countries!</h1>
      <h2> Total data: {countries.length-8} countries</h2>
      <nav>
        <ul>
          {countries && countries.length > 0 ? (
            countries.map(
              ({ country_id, name, country_code, continent }) =>
                country_code && (
                  <div className="container mb-4">
                    <div className="card">
                      <img
                        src={`https://flagcdn.com/w2560/${country_code}.png`}
                        alt="" 
                      />
                      <div className="card-body">
                        <h4 className="card-title">{country_id}-{name}</h4>
                        <p className="card-text">Continent: {continent}</p>
                        <div className="d-grid gap-2 mb-4 " key={country_id}>
                          <Link href={{pathname: "/teams",
                                      query:{
                                        country_id
                                      }}}>
                            <button
                              type="button"
                              className="btn btn-primary btn-lg btn-block">
                              Teams
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )
          ) : (
            <p>no data</p>
          )}
        </ul>
      </nav>
      
    </div>
  );
}

export default Countries;
