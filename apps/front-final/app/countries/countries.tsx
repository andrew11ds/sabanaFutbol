import styles from './countries.module.css';
import Link from 'next/link';
import imagenDefault from '../../public/Images/fondoSabanaFutbol.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { useCountries } from '../useCountries';

/* eslint-disable-next-line */
export interface CountriesProps {}

export function Countries(props: CountriesProps) {
  const [countries] = useCountries();
  const filteredCountries = countries?.filter((element) => {
    return element.country_code;
  });
  const logo = '/Images/logoFutbol.png';

  return (
    <div>
      <header>
        <div className="row e justify-content-center align-items-center ">
          <div className="col-auto p-3 block-center">
            <div className="text-center image-size">
              <Link href="/index">
                <div className={styles.img__content}>
                  <img
                    src={logo}
                    className="img-responsive"
                    width="128"
                    height="128"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <h1>Welcome to Countries!</h1>
        <h2>
          {' '}
          Total data: {filteredCountries ? filteredCountries.length : 0}{' '}
          countries
        </h2>
      </header>

      <nav>
        <ul className={styles.container__list}>
          {filteredCountries && filteredCountries.length > 0 ? (
            filteredCountries.map(
              ({ country_id, name, country_code, continent }) => (
                <li key={country_id}>
                  <div className="container mb-4">
                    <div className="card">
                      <img
                        src={`https://flagcdn.com/w2560/${country_code}.png`}
                        alt=""
                      />
                      <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">Continent: {continent}</p>
                        <div className="d-grid gap-2 mb-4 " key={country_id}>
                          <Link
                            href={{
                              pathname: '/teams',
                              query: {
                                country_id,
                              },
                            }}
                          >
                            <button
                              type="button"
                              className="btn btn-primary btn-lg btn-block"
                            >
                              Teams
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
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
