import React, { useState, useEffect } from "react";

const WelcomeMessage = ({ token }) => {
  const [user, setUserName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        console.log("userData:", userData);
        setUserName(userData.name);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-blue-500 text-white p-4">
      Hello, {user}! Welcome to our site.
    </div>
  );
};

export default WelcomeMessage;
