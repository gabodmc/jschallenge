import React from "react";
import { Formik } from "formik";
import { Link, useParams, useHistory } from "react-router-dom";
import { EditSchema } from "./TransactionSchema";

const EditForm = ({ movements }) => {
  const { id } = useParams();
  const history = useHistory();

  const ManageDate = (date) => {
    let dateObj = new Date(date);
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newdate = day + "/" + month + "/" + year;
    return newdate;
  };

  const deleteMovement = async () => {
    await fetch(`http://localhost:3001/api/movements/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
  };

  let handleDeleteButton = (event) => {
    event.preventDefault()
    deleteMovement()
    alert("Transacción eliminada")
    history.push('/')
  };

  return (
    <>
      <h1>Transaction Form</h1>
      {movements
        .filter((movements) => movements.id == id)
        .map((movements, index) => (
          <Formik
            key={index}
            initialValues={{
              concept: movements.concept,
              amount: movements.amount,
              revenue: movements.revenue,
              oldDate: movements.date,
              date: "",
            }}
            validationSchema={EditSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                fetch(`http://localhost:3001/api/movements/${id}`, {
                  method: "PUT",
                  body: JSON.stringify({
                    concept:
                      values.concept === ""
                        ? movements.concept
                        : values.concept,
                    amount:
                      values.amount === "" ? movements.amount : values.amount,
                    revenue:
                      values.revenue === ""
                        ? movements.revenue
                        : values.revenue,
                    date: values.date === "" ? movements.date : values.date,
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                })
                  .then((response) => response.json())
                  .then((json) => console.log(json));
                setSubmitting(false);
                alert("Transacción Editada");
              }, 1000);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={handleSubmit}>
                      <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="concept"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Concepto
                              </label>
                              <input
                                type="text"
                                name="concept"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.concept}
                              />
                              {errors.concept &&
                                touched.concept &&
                                errors.concept}
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="amount"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Monto
                              </label>
                              <input
                                type="number"
                                name="amount"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.amount}
                              />
                              {errors.amount && touched.amount && errors.amount}
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="oldDate"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Fecha actual
                              </label>
                              <p>{ManageDate(values.oldDate)}</p>
                              {errors.amount && touched.amount && errors.amount}
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                              <label
                                htmlFor="date"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Nueva fecha
                              </label>
                              <input
                                type="date"
                                name="date"
                                id="date"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.date}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            {isSubmitting ? "Modificando" : "Modificar"}
                          </button>
                          <button
                            onClick={handleDeleteButton}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            Borrar
                          </button>
                          <Link to="/">
                            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                              Volver
                            </button>
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </Formik>
        ))}
    </>
  );
};

export default EditForm;
