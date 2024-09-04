import { FaVirusCovid } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";
import { TbVaccine } from "react-icons/tb";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    navigate(`detail?q=${text}`);
  };

  return (
    <header className="flex bg-green-700 text-white p-5 md:px-20 justify-between items-center shadow-lg">
      <Link to="/" className="flex items-center gap-3">
        <FaVirusCovid className="text-white text-2xl" />
        <h1 className="text-xl font-semibold tracking-wide">COVID Takip</h1>
      </Link>

      <Form handleSubmit={handleSubmit} />

      <div className="flex items-center gap-5 max-md:hidden">
        <div className="text-right">
          <p className="text-sm font-semibold">Bugün Aşı Olanlar</p>
          <p className="text-gray-100">(47,777)</p>
        </div>
        <TbVaccine className="text-2xl text-white" />
      </div>
    </header>
  );
};

export default Header;
