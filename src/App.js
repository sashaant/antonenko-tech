import React from 'react';
import ReactGA from 'react-ga';

import Card from './componets/Card';
import Footer from './componets/Footer';
import Foto from './componets/Foto';
import RunningLine from './componets/RunningLine';
// import apiData from './api/apiService';
// import Donate from './componets/Donate';


const TRACKING_ID = "G-F8CE2RP8XW";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  // const [idButtonText, setidButtonText] = useState("");
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   setidButtonText("Get data");
  // }, [idButtonText]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   getProducts();
  // };

  // const getProducts = async () => {
  //   setidButtonText("Getting data ....");
  //   try {
  //     await apiData.getProductsFromApi().then((data) => {
  //       setProducts(data);
  //       setidButtonText("Got data!");
  //     });
  //   } catch (err) {
  //     setidButtonText("Oh, problem!");
  //     console.log(err);
  //   }
  // };
  return (
    <div>
      <RunningLine/>
      <Foto/>
      <Card/>
      {/* <apiService/>
      <h2>Get Fakestore API data</h2>
        <form onSubmit={handleSubmit}>
          <button className={"btn btn-blue"} type="submit">
            {idButtonText}
          </button>
        </form>

        <span id="bpdata">
          {products.map(function (product, id) {
            return <li key={id}>{product.title}</li>;
          })}
        </span> */}
      <Footer/>
    </div>
  );
}

export default App;

