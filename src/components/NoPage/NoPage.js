import "./NoPage.css"

const NoPage = () => {
  return (
    <div className="container nopage-main" style={{
      height: "80%"
    }}>
      <h1>404</h1>
      <h3>Not Found</h3>
      <p>The page requested could not be found. <a href="/">Home</a></p>
    </div>
  );
  };
  
  export default NoPage;