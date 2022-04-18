import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Announcment from './components/Announcment';
import Slider from './components/Slider';


const data={
  urunler:[
    {
      id:1,
      name:"tesbih",
      price:3500,
      link:"https://www.instagram.com/esatag85/"
    },
    {
      id:2,
      name:"tesbih-2",
      price:3500,
      link:"https://www.instagram.com/esatag85/"
    },
    {
      id:3,
      name:"tesbih-3",
      price:3500,
      link:"https://www.instagram.com/esatag85/"
    },{
      id:4,
      name:"tesbih-4",
      price:3500,
      link:"https://www.instagram.com/esatag85/"
    },{
      id:5,
      name:"tesbih-5",
      price:3500,
      link:"https://www.instagram.com/esatag85/"
    },{
      id:6,
      name:"tesbih-6",
      price:3500,
      link:"https://www.instagram.com/esatag85/"
    }
  ]
}




function App() {
  return (
    <div className="App">
      <Announcment />
      <Navbar/>
      <Slider/>
      <Cards data={data.urunler}/>


      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
