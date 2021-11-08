import { Link } from "react-router-dom";

const MovementsRow = ({ transaction }) => {
  const ManageDate = (date) => {
    let dateObj = new Date(date);
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    let newdate = day + "/" + month + "/" + year;
    return newdate;
  };

  return (
    <tbody
      key={transaction.concept}
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
          {/* <a
            href={`/edit/${transaction.id}`}
            className="text-indigo-600 hover:text-indigo-900"
          >
            Edit
          </a> */}
          <Link to={`/edit/${transaction.id}`}>
                      <button
                        type="button"

                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Editar
                      </button>
                      </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default MovementsRow;
