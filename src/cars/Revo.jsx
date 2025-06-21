
import React from "react";

const Revo = ({
  avatar_url,
  login,
  html_url,
  type,
  id,
  node_id,
  url,
  repos_url,
  gists_url,
  followers_url,
  following_url,
  starred_url,
  subscriptions_url,
  organizations_url,
  events_url,
  received_events_url,
  user_view_type,
  onClose, 
}) => {
  return (
    <div className="w-full min-h-screen fixed top-0 z-50 bg-black/70 flex justify-center items-center overflow-auto p-4">
      <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold text-red-600 hover:scale-110"
        >
          ✖
        </button>

        <img
          src={avatar_url}
          alt={login}
          className="rounded-full mx-auto w-[200px] h-[200px] border-4 border-purple-950 shadow-2xl object-cover transition-transform duration-300 hover:scale-105"
        />

        <h1 className="mt-4 text-3xl font-bold text-purple-950">{login}</h1>
        <p className="text-gray-600 text-lg">{type}</p>

        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-blue-600 hover:underline text-lg"
        >
          View GitHub Profile
        </a>

        <div className="mt-6 text-left text-sm space-y-2 text-gray-800">
          <p>
            <span className="font-semibold text-purple-800">ID:</span> {id}
          </p>
          <p>
            <span className="font-semibold text-purple-800">Node ID:</span>{" "}
            {node_id}
          </p>
          <p>
            <span className="font-semibold text-purple-800">User Type:</span>{" "}
            {user_view_type}
          </p>
          <p>
            <span className="font-semibold text-purple-800">API URL:</span>{" "}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {url}
            </a>
          </p>
          <p>
            <span className="font-semibold text-purple-800">Followers:</span>{" "}
            <a
              href={followers_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Followers
            </a>
          </p>
          <p>
            <span className="font-semibold text-purple-800">Following:</span>{" "}
            <a
              href={following_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Following
            </a>
          </p>
          <p>
            <span className="font-semibold text-purple-800">Repos:</span>{" "}
            <a
              href={repos_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Repositories
            </a>
          </p>
          <p>
            <span className="font-semibold text-purple-800">Gists:</span>{" "}
            <a
              href={gists_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Gists
            </a>
          </p>
          <p>
            <span className="font-semibold text-purple-800">Starred:</span>{" "}
            <a
              href={starred_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Starred Repos
            </a>
          </p>
          <p>
            <span className="font-semibold text-purple-800">
              Subscriptions:
            </span>{" "}
            <a
              href={subscriptions_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Subscriptions
            </a>
          </p>
          <p>
            <span className="font-semibold text-purple-800">
              Organizations:
            </span>{" "}
            <a
              href={organizations_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Organizations
            </a>
          </p>
          <p>
            <span className="font-semibold text-purple-800">Events:</span>{" "}
            <a
              href={events_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Events
            </a>
          </p>
          <p>
            <span className="font-semibold text-purple-800">
              Received Events:
            </span>{" "}
            <a
              href={received_events_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Received Events
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Revo;
