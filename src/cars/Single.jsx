import React from "react";

const Single = ({ avatar_url, login,}) => {
  return (
    <div className="bg-white hover:bg-purple-800 text-center p-4 m-9 rounded-3xl shadow-2xl border-4 border-blue-800 transition-colors duration-1000 hover:scale-105 hover:shadow-pink-600 transform">
      <img
        src={avatar_url}
        alt={login}
        className="w-[200px] h-[200px] mx-auto rounded-full border-4 border-purple-700 shadow-2xl object-cover transition duration-300 hover:shadow-purple-900"
      />
      <h2 className="mt-4 font-semibold text-gray-900 text-3xl">{login}</h2>
      <button className="mx-auto p-3 m-3 bg-purple-900 text-white text-bold cursor:pointer rounded-2xl">
        View Profile
      </button>
    </div>
  );
};

export default Single;
