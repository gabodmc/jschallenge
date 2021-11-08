import React, { useState, useEffect } from "react";
import MovementsList from "../Movements/MovementsList";

const Search = () => {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    datos();
  }, []);

  const datos = async () => {
    await fetch("http://localhost:3001/api/movements/")
      .then((response) => response.json())
      .then((result) => {
        setMovements(result.transactions);
      })
      .catch((error) => console.log(error));
  };

  const filteredPersons = movements.filter((movements) => {
    return movements.concept.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return <MovementsList movements={filteredPersons} />;
    } else {
      return (
        <p
          className="block text-md font-small text-gray-700"
          style={{ textAlign: "center" }}
        >
          Usa palabras como por ejemplo "Alimentos" o "Transporte"
        </p>
      );
    }
  }

  return (
    <>
      <br />
      <h3
        className="block text-lg font-medium text-gray-700"
        style={{ textAlign: "center" }}
      >
        Buscar transacción por concepto
      </h3>
      <br />
      <div className="flex items-center justify-center">
        <div className="relative text-black focus-within:text-black">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            className="py-2 text-sm text-black  rounded-md pl-10 focus:outline-none focus:bg-white focus:text-black"
            placeholder="Comida"
            onChange={handleChange}
          />
        </div>
      </div>

      <br />
      {searchList()}
    </>
  );
};

export default Search;
