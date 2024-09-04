const InfoCard = ({ item }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-700 hover:shadow-xl transition">
      <p className="text-sm font-semibold mb-2 capitalize text-gray-600">
        {item[0].split("_").join(" ")}
      </p>
      <h2 className="text-xl font-bold text-gray-800">{item[1]}</h2>
    </div>
  );
};

export default InfoCard;
