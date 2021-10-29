import { Spinner, Stack } from "react-bootstrap";

export default function MovementsList({ movements }) {
  const ManageDate = (date) => {
    let dateObj = new Date(date);
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    let newdate = day + "/" + month + "/" + year;
    return newdate;
  };

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
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.concept}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {transaction.revenue === 1 ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-black-800">
                              Ingreso
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black-800">
                              Egreso
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {ManageDate(transaction.date)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ${transaction.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href={`/edit/${transaction.id}`}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  ))
                ) : (
                  <Stack gap={2} className="col-md-5 mx-auto">
                    <br />
                    <Spinner animation="border" variant="primary">
                      <span className="visually-hidden">Loading...</span>
                      <br />
                    </Spinner>
                    <br />
                  </Stack>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
