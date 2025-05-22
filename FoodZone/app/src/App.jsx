import { useEffect, useState } from 'react';
import './index.css'
import SearchResult from './Components/SearchResult';

const App = () => {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filtereddata, setFilteredData] = useState(null);
  const [selectedbtn, setSelectedBtn] = useState("all")

  useEffect(() => {
    const BASE_URL = "ejson.json"
    const fetchFoodData = async () => {

      setLoading(true)

      try {
        const reponse = await fetch(BASE_URL)
        const jsondata = await reponse.json();
        setData(jsondata);
        setFilteredData(jsondata);
        setLoading(false)
      }
      catch (error) {
        setError("Unable to fetch data")
      }

    }
    fetchFoodData();
  }, [])

  const SearchFood = (e) => {
    const searchValue = e.target.value;

    console.log(searchValue);

    if (searchValue === "")
      setFilteredData(null);

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter)

  }

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data)
      setSelectedBtn("all")
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter)
    setSelectedBtn(type)
  }





  if (error) return <div>{error}</div>
  if (loading) return <div>Loading...</div>


  return (
    <div className="mainContainer">

      <div className="TopContainer">

        <div className='nav'>
          <div className="logo">
            <img src="./images/FoodyZone.svg" alt="" />
          </div>

          <div className="search">
            <input onChange={SearchFood} placeholder="Search Food..." />
          </div>
        </div>

        <div className='menu'>
          <button onClick={() => filterFood("all")} id='all'>All</button>
          <button onClick={() => filterFood("breakfast")} id='breakfast'>Breakfast</button>
          <button onClick={() => filterFood("lunch")} id='lunch'>Lunch</button>
          <button onClick={() => filterFood("dinner")} id='dinner'>Dinner</button>
        </div>
      </div>

      <SearchResult data={filtereddata} />

    </div>
  );
};

export default App;
