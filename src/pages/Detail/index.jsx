import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import getData from "../../redux/actions";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import InfoCard from "./InfoCard";

const Detail = () => {
  const { data, error, isLoading } = useSelector((store) => store);

  const dispatch = useDispatch();
  const [params] = useSearchParams();

  const code = params.get("code");
  const query = params.get("q");

  useEffect(() => {
    dispatch(getData({ code, query }));
  }, [code, query, dispatch]);

  const covidArr = Object.entries(data?.covid || {});

  return (
    <div className="min-h-screen bg-zinc-800 text-white flex flex-col items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        {/* Üst İçerik */}
        <div className="flex gap-5 lg:gap-10 justify-between items-center mb-8">
          <Link
            className="bg-gray-700 py-2 px-4 rounded-lg hover:bg-gray-800 transition"
            to="/"
          >
            Geri
          </Link>

          <div className="flex items-center space-x-4">
            {isLoading ? (
              <Loader type="header" />
            ) : (
              !error && (
                <>
                  <img
                    className="w-20 lg:w-32 rounded-md"
                    src={data.country.flags.png}
                    alt={data.country.flags.alt}
                  />
                  <h1 className="text-gray-900 text-xl lg:text-3xl font-bold">
                    {data.country.altSpellings[1]}
                  </h1>
                </>
              )
            )}
          </div>
        </div>

        {/* Alt İçerik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error
              message={error}
              retry={() => {
                dispatch(getData({ code }));
              }}
            />
          ) : (
            <>
              {covidArr.map(([key, value]) => (
                <InfoCard item={[key, value]} key={key} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
