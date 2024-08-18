import Link from "next/link";

export interface NoRecomendationsProps {
  isUserLogged: boolean;
}

const NoRecomendations = ({ isUserLogged }: NoRecomendationsProps) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-center">
        There is no recomendations
      </h3>
      {isUserLogged ? (
        <p>
          To get job recomendations please update your&nbsp;
          <Link
            className="underline text-blue-500 hover:text-blue-600 active:text-blue-800 visited:text-purple-600 transition ease-in-out delay-100"
            href="/profile"
          >
            profile
          </Link>
        </p>
      ) : (
        <p>
          To get job recomendations please&nbsp;
          <Link
            className="underline text-blue-500 hover:text-blue-600 active:text-blue-800 visited:text-purple-600 transition ease-in-out delay-100"
            href="/login"
          >
            login or create account
          </Link>
        </p>
      )}
    </div>
  );
};

export default NoRecomendations;
