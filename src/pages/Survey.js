import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/20/solid";

const Survey = ({ token }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    const fetchUser = async () => {
      const url = "http://localhost:3000/api/v1/users";
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error);
        }

        const userData = await response.json();
        setUser(userData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    console.log("data:", data);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-purple-500 pl-7">
      <div>
        <h1 className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
          You're almost done!
          <br />
          Few more steps to go!
        </h1>
      </div>
      <div className="flex max-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Please fill out the following information
            </h2>
          </div>
          <div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
              action="#"
              method="POST"
            >
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="first-name" className="pt-4">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    name="first_name"
                    type="text"
                    value={user.first_name}
                    readOnly
                    className="relative block w-full pl-3 rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="pt-4">
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    name="last_name"
                    type="text"
                    value={user.last_name}
                    readOnly
                    className="relative block w-full pl-3 rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <label htmlFor="due-date" className="pt-4">
                    Due Date
                  </label>
                  <input
                    id="due-date"
                    name="due_date"
                    type="text"
                    value={user.due_date}
                    readOnly
                    className="relative block w-full pl-3 rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Due Date"
                  />
                </div>
                <div>
                  <label htmlFor="phone-number" className="pt-4">
                    Phone Number
                  </label>
                  <input
                    id="phone-number"
                    name="phone_number"
                    type="text"
                    value={user.phone_number}
                    readOnly
                    className="relative block w-full pl-3 rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div>
                <Link to="/login">
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    Sign up
                  </button>
                </Link>
              </div>
            </form>
          </div>

          <Link to="/login">
            <p className="text-center text-sm text-gray-600">
              Already registered, Login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Survey;
