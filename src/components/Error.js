import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="text-center font-extrabold text-lg">
      <h1>Oops! {err.error.message}</h1>
      <h1>Something Went Wrong</h1>
    </div>
  );
};
export default Error;
