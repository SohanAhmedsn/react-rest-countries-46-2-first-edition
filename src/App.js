import './App.css';
import Countries from './components/Countries/Countries';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}


export default App;


































// function Countries() {
  // const [countries, setCountries] = useState([]);
  // useEffect(()=>{
  //   fetch("https://restcountries.com/v2/all")
  //   .then(res => res.json())
  //   .then(data => setCountries(data))
  // },[])
  // return (
    // <div>
      {/* <h1>Travelling to World Tour</h1>
      <h2>Total country: {countries.length}</h2>
      <ul>
        {
          countries.map(country => <Country
          name={country.name}
          capital={country.capital} 
          ></Country>)
        }
      </ul> */}
    // </div>
  // )
// }

// function Country(props) {
//   console.log(props)
//   return (
//     <div className="country">
//      <h>Name: {props.name}</h>
//      <p>Capital: {props.capital}</p>

//     </div>
//   )
// }

