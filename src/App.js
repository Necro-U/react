import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Announcment from './components/Announcment';
import Slider from './components/Slider';


const data={
  urunler:[
    {
      id:1,
      name:"urun",
      price:3500,
      link:"https://getir.com/?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf1Wc_pzmENlRkOeAPKjSj7n80k6j4idqIYS1KfKmVjVb3Oa58sM9WBoCvVoQAvD_BwE"
    },
    {
      id:2,
      name:"urun-2",
      price:3500,
      link:"https://getir.com/?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf1Wc_pzmENlRkOeAPKjSj7n80k6j4idqIYS1KfKmVjVb3Oa58sM9WBoCvVoQAvD_BwE"
    },
    {
      id:3,
      name:"urun-3",
      price:3500,
      link:"https://getir.com/?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf1Wc_pzmENlRkOeAPKjSj7n80k6j4idqIYS1KfKmVjVb3Oa58sM9WBoCvVoQAvD_BwE"
    },{
      id:4,
      name:"urun-4",
      price:3500,
      link:"https://getir.com/?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf1Wc_pzmENlRkOeAPKjSj7n80k6j4idqIYS1KfKmVjVb3Oa58sM9WBoCvVoQAvD_BwE"
    },{
      id:5,
      name:"urun-5",
      price:3500,
      link:"https://getir.com/?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf1Wc_pzmENlRkOeAPKjSj7n80k6j4idqIYS1KfKmVjVb3Oa58sM9WBoCvVoQAvD_BwE"
    },{
      id:6,
      name:"urun-6",
      price:3500,
      link:"https://getir.com/?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf1Wc_pzmENlRkOeAPKjSj7n80k6j4idqIYS1KfKmVjVb3Oa58sM9WBoCvVoQAvD_BwE"
    }
  ]
}




function App() {
  return (
    <div  className="App">
      <Announcment />
      <Navbar/>
      {/* <Slider/> */}
      <Cards data={data.urunler}/>


      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
