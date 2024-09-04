import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  ZoomableGroup,
} from "react-simple-maps";

const Main = () => {
  const [geo, setGeo] = useState();
  const geoUrl = "https://ismailarilik.com/react-covid-maps/geo.json";

  console.log(geo);
  return (
    <div className="h-[calc(100vh-74px)] text-white bg-zinc-800 overflow-hidden flex flex-col justify-center items-center wrapper md:pt-10">
      <h1 className="px-6 pb-6 text-lg md:text-2xl">
        Detay Görüntüle:{" "}
        <span className="text-green-400">
          {geo?.properties?.name ? geo.properties.name : "(ülke seçin)"}
        </span>
      </h1>

      <ComposableMap
        height={1400}
        width={2400}
        projectionConfig={{ rotate: [-10, 0, 0], scale: 400 }}
      >
        <ZoomableGroup>
          <Graticule stroke="rgba(128, 128, 128, 0.5)" strokeWidth={1} />
          <Sphere stroke="rgba(128, 128, 128, 0.5)" strokeWidth={1} />

          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Link key={geo.rsmKey} to={`/detail?code=${geo.id}`}>
                  <Geography
                    geography={geo}
                    onMouseEnter={() => setGeo(geo)}
                    onMouseLeave={() => setGeo(null)}
                    style={{
                      default: {
                        fill: "#DDD",
                        outline: "none",
                      },
                      hover: {
                        fill: "rgb(34, 197, 94)",
                        outline: "none",
                      },
                      pressed: {
                        fill: "rgb(22, 163, 74)",
                        outline: "none",
                      },
                    }}
                  />
                </Link>
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default Main;
