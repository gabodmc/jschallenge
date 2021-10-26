import React from "react";
import LastMovementsRow from "./LastMovementRow";
import Loading from "../../assets/loading.gif";

const LastMovements = ({ movements }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Concepto
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tipo
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Fecha
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Monto
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>

                {movements.length ? (
                  movements.map((transaction, index) => (
                    <tbody
                      key={index}
                      className="bg-white divide-y divide-gray-200"
                    >
                      <LastMovementsRow transaction={transaction} />
                    </tbody>
                  ))
                ) : (
                  <img
                    alt="loading"
                    src={Loading}
                    width="60"
                    height="30"
                    className="d-inline-block align-center"
                  />
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastMovements;
