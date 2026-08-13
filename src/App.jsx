import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ControlledCarousel from "./components/Caro";
import Books from "./components/Books";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const Products = [
    {
      id: 1,
      productName: "Apple iPhone 17 Pro",
      productPrice: 1200,
      productDiscripption: "robot discription",
      productImage:
        "https://tse3.mm.bing.net/th/id/OIP.0Vdm4tSHkoiKGCHp4LOGaQHaJK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 2,
      productName: "Apple iPhone 17 Pro, 256GB Cosmic Orange • Priser",
      productPrice: 1300,
      productDiscripption: "pool discription",
      productImage:
        "https://static.alaneesqatar.qa/2022/09/Apple-iPhone-14-Pro-6GB-256GB-Silver-2.png?tr=w-303,q-100",
    },
    {
      id: 3,
      productName: "Apple iPhone 17 Pro, 256GB",
      productPrice: 1500,
      productDiscripption: "slide discription",
      productImage:
        "https://tse4.mm.bing.net/th/id/OIP.C_2sYgBPnBnPj4EK701hGwHaPG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 1,
      productName: "Apple iPhone 17 Pro",
      productPrice: 1200,
      productDiscripption: "robot discription",
      productImage:
        "https://media.ldlc.com/r1600/ld/products/00/06/27/53/LD0006275305_0006275340.jpg",
    },
    {
      id: 2,
      productName: "Apple iPhone 17 Pro, 256GB Cosmic Orange • Priser",
      productPrice: 1300,
      productDiscripption: "pool discription",
      productImage:
        "https://tse3.mm.bing.net/th/id/OIP.0Vdm4tSHkoiKGCHp4LOGaQHaJK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 3,
      productName: "Apple iPhone 17 Pro, 256GB",
      productPrice: 1500,
      productDiscripption: "slide discription",
      productImage:
        "https://tse3.mm.bing.net/th/id/OIP.0Vdm4tSHkoiKGCHp4LOGaQHaJK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 1,
      productName: "Apple iPhone 17 Pro",
      productPrice: 1200,
      productDiscripption: "robot discription",
      productImage:
        "https://tse3.mm.bing.net/th/id/OIP.0Vdm4tSHkoiKGCHp4LOGaQHaJK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 2,
      productName: "Apple iPhone 17 Pro, 256GB Cosmic Orange • Priser",
      productPrice: 1300,
      productDiscripption: "pool discription",
      productImage:
        "https://tse3.mm.bing.net/th/id/OIP.0Vdm4tSHkoiKGCHp4LOGaQHaJK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 3,
      productName: "Apple iPhone 17 Pro, 256GB",
      productPrice: 1500,
      productDiscripption: "slide discription",
      productImage:
        "https://tse3.mm.bing.net/th/id/OIP.0Vdm4tSHkoiKGCHp4LOGaQHaJK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];
  const booksData = [
    {
      id: 11,
      booksName: "Apple iPhone 17 Pro",
      booksPrice: 1200,
      booksDiscripption: "robot discription",
      booksImage:
        "https://blog-cdn.reedsy.com/directories/gallery/241/large_36dc2bfa3ecfa29a41812207f76df7a8.jpg",
    },
    {
      id: 12,
      booksName: "Apple iPhone 17 Pro",
      booksPrice: 1200,
      booksDiscripption: "robot discription",
      booksImage:
        "https://4.bp.blogspot.com/-Sz9Cuxsa59o/WMkqnf2VUII/AAAAAAAAXbw/WIW_TU-bhccJVj-pW47n1F4ZVwiIOOAgwCLcB/s1600/thisishowitalwaysis.jpg",
    },
    {
      id: 13,
      booksName: "Apple iPhone 17 Pro",
      booksPrice: 1200,
      booksDiscripption: "robot discription",
      booksImage:
        "https://m.media-amazon.com/images/I/31IZ0cd2NyL._SY445_SX342_.jpg",
    },
    {
      id: 11,
      booksName: "Apple iPhone 17 Pro",
      booksPrice: 1200,
      booksDiscripption: "robot discription",
      booksImage:
        "https://th.bing.com/th/id/R.11d4a7bf48a44902e8d930fdd7c7fb46?rik=v1DsufOzkp9NGA&riu=http%3a%2f%2fwww.goodwivesandwarriors.co.uk%2fwp-content%2fuploads%2f2017%2f01%2f09_everything_front_highres.jpg&ehk=wez6VYO3A%2fVin3gZn9F2ybfG8xqgHudZ52tt2HuY1AQ%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 12,
      booksName: "Apple iPhone 17 Pro",
      booksPrice: 1200,
      booksDiscripption: "robot discription",
      booksImage: "https://m.media-amazon.com/images/I/61SLuFPIK4S.jpg",
    },
    {
      id: 13,
      booksName: "Apple iPhone 17 Pro",
      booksPrice: 1200,
      booksDiscripption: "robot discription",
      booksImage:
        "https://nationalbookswap.com/pbs/xl/49/0349/9781645950349.jpg",
    },

    {
      id: 11,
      booksName: "Apple iPhone 17 Pro",
      booksPrice: 1200,
      booksDiscripption: "robot discription",
      booksImage:
        "https://cdn.ibj.com/wp-content/uploads/2023/09/IQUITEVERYTHINGCOVER.jpeg",
    },
    {
      id: 12,
      booksName: "Apple iPhone 17 Pro",
      booksPrice: 1200,
      booksDiscripption: "robot discription",
      booksImage:
        "https://4.bp.blogspot.com/-Sz9Cuxsa59o/WMkqnf2VUII/AAAAAAAAXbw/WIW_TU-bhccJVj-pW47n1F4ZVwiIOOAgwCLcB/s1600/thisishowitalwaysis.jpg",
    },
    {
      id: 13,
      booksName: "Apple iPhone 17 Pro",
      booksPrice: 1200,
      booksDiscripption: "robot discription",
      booksImage:
        "https://m.media-amazon.com/images/I/31IZ0cd2NyL._SY445_SX342_.jpg",
    },
    {
      id: 11,
      booksName: "Apple iPhone 17 Pro",
      booksPrice: 1200,
      booksDiscripption: "robot discription",
      booksImage:
        "https://blog-cdn.reedsy.com/directories/gallery/241/large_36dc2bfa3ecfa29a41812207f76df7a8.jpg",
    },
    {
      id: 12,
      booksName: "Apple iPhone 17 Pro",
      booksPrice: 1200,
      booksDiscripption: "robot discription",
      booksImage:
        "https://4.bp.blogspot.com/-Sz9Cuxsa59o/WMkqnf2VUII/AAAAAAAAXbw/WIW_TU-bhccJVj-pW47n1F4ZVwiIOOAgwCLcB/s1600/thisishowitalwaysis.jpg",
    },
    {
      id: 13,
      booksName: "Apple iPhone 17 Pro",
      booksPrice: 1200,
      booksDiscripption: "robot discription",
      booksImage:
        "https://m.media-amazon.com/images/I/31IZ0cd2NyL._SY445_SX342_.jpg",
    },
  ];
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Books" element={<Books booksData={booksData} />} />
        <Route
          path="/products"
          element={<ControlledCarousel products={Products} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
