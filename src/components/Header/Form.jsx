import { CiSearch } from "react-icons/ci";

const Form = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border border-gray-300 rounded-lg shadow-sm overflow-hidden"
    >
      <input
        placeholder="Ülke ara"
        className="bg-white p-2 md:px-5 outline-none flex-grow text-gray-700"
        type="text"
        style={{ borderRadius: "4px 0 0 4px" }}
      />

      <button
        className="bg-green-500 p-2 text-xl text-white flex justify-center items-center hover:bg-green-600 transition-all duration-300"
        style={{ borderRadius: "0 4px 4px 0" }}
      >
        <CiSearch />
      </button>
    </form>
  );
};

export default Form;
