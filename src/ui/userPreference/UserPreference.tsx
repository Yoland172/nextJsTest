import React, { useEffect, useState } from "react";

interface UserPreferenceProps {
  title: string;
  defaultValue: string | undefined;
  type: "input" | "textarea";
  changeField: (fieldQuery: string) => void;
}

const UserPreference = ({
  title,
  defaultValue,
  type,
  changeField,
}: UserPreferenceProps) => {
  const [query, setQuery] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    if (defaultValue) setQuery(defaultValue);
  }, [defaultValue]);

  const handleSetQuery = () => {
    if (query.length > 0) {
      setIsEditing(false);
      changeField(query);
    } else {
      changeField(query || "");
      setQuery(defaultValue || "");
      setIsEditing(false);
    }
  };

  return (
    <div className="mb-8 h-24 flex justify-between items-center border-b border-gray-200 pb-6">
      <div className="w-full">
        <label className="text-lg text-gray-600 font-medium">{title}:</label>
        {isEditing ? (
          type === "textarea" ? (
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="mt-2 w-full h-24 text-lg text-gray-800 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
            />
          ) : (
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="mt-2 w-full text-lg text-gray-800 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          )
        ) : (
          <p className="mt-2 text-lg text-gray-900">{query}</p>
        )}
      </div>

      <div className="ml-4">
        {isEditing ? (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
            onClick={handleSetQuery}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default UserPreference;
