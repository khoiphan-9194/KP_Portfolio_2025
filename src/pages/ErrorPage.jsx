import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  // const goBack = () => window.history.back();
  const goBack = () => window.location.href = '/';

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
   
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}
