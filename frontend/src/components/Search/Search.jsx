import React, { useState } from "react";
import MovementsList from "../Movements/MovementsList";

const Search = ({ movements }) => {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

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
      //   return filteredPersons.map((transaction) => (
      //     <SearchMovementContainer movements={transaction} />
      //   ));
    }
  }

  return (
    <>
      <h3
        className="block text-lg font-medium text-gray-700"
        style={{ textAlign: "center" }}
      >
        Buscar transacción por concepto
      </h3>
      <br />
      <div class="flex relative mx-auto w-1/4 max-w-md">
        <input
          class="border-2 border-primary bg-red transition h-12 px-5 pr-16 rounded-md focus:outline-none w-full text-black text-lg "
          type="search"
          name="search"
          placeholder="Ej: Comida"
          onChange={handleChange}
        />
        <button
          type="submit"
          onChange={handleChange}
          class="absolute right-2 top-3 mr-4"
        ></button>
      </div>
      <br />
      {searchList()}
    </>
  );
};

export default Search;
