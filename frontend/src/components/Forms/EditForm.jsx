import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import { EditSchema } from "./TransactionSchema";
import Swal from "sweetalert2";

const EditForm = () => {
  const { id } = useParams();
  const history = useHistory();
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
    }).then((response) => response.json());
  };

  let handleDeleteButton = (event) => {
    event.preventDefault();
    deleteMovement();
    Swal.fire({
      title: "Estas seguro de eliminar la transacción?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "green",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Transacción eliminada", "");
        history.push("/");
      }
    });
  };

  return (
    <>
      {movements
        // eslint-disable-next-line eqeqeq
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
              fetch(`http://localhost:3001/api/movements/${id}`, {
                method: "PUT",
                body: JSON.stringify({
                  concept:
                    values.concept === "" ? movements.concept : values.concept,
                  amount:
                    values.amount === "" ? movements.amount : values.amount,
                  revenue:
                    values.revenue === "" ? movements.revenue : values.revenue,
                  date: values.date === "" ? movements.date : values.date,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              })
                .then((response) => response.json())
                .then((json) => console.log(json));
              setSubmitting(false);
              Swal.fire({
                title: "Transacción modificada",
                icon: "success",
                confirmButtonColor: "green",
                confirmButtonText: "Volver al listado",
              }).then((result) => {
                if (result.isConfirmed) {
                  history.push("/");
                }
              });
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
                        <h3
                          className="block text-lg font-medium text-gray-700"
                          style={{ textAlign: "center" }}
                        >
                          Editar movimiento
                        </h3>
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
                              <p className="text-red-500">
                                {errors.concept &&
                                  touched.concept &&
                                  errors.concept}
                              </p>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="amount"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Monto
                              </label>
                              <input
                                type="text"
                                name="amount"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.amount}
                              />
                              <p className="text-red-500">
                                {errors.amount &&
                                  touched.amount &&
                                  errors.amount}
                              </p>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="oldDate"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Fecha actual
                              </label>
                              <p>{ManageDate(values.oldDate)}</p>
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
                            <button
                              type="button"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
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
