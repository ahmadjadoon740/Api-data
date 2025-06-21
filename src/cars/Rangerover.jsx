import React, { useEffect, useState } from "react";
import Single from "./Single";
import Revo from "./Revo";
import { Vortex } from "react-loader-spinner";

const Rangerover = () => {
  const api = "https://api.github.com/users?since=0";
  
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {selectedUser && (
        <Revo {...selectedUser} onClose={() => setSelectedUser(null)} />
      )}

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Vortex
            visible={true}
            height={700}
            width={700}
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={[
              "red",
              "green",
              "blue",
              "yellow",
              "orange",
              "purple",
              "cyan",
              "magenta",
              "lime",
              "teal",
              "indigo",
              "pink",
              "brown",
              "black",
              "white",
              "gold",
              "silver",
              "navy",
              "maroon",
              "turquoise",
            ]}
          />
        </div>
      ) : (
        <>
          <h1 className="text-center text-5xl font-bold mb-10 text-purple-800">
            Hello World
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className="cursor-pointer"
              >
                <Single {...user} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Rangerover;
