import "./App.css";
import Fruit from "./Components/Fruit";

const data = [
  {
    id: 1,
    img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKz3YlMVrjsQAs6jE9oNcCkFMaE06O0GWJBQ&usqp=CAU",
    title: "Apple",
    uom: "02",
    size: "0.2",
    unit: "$8.99",
    siz: "$17.89",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-_XBtvCv1920MX3PASdCpPRP3ljHMZbvSg&usqp=CAU",
    title: "Apricot",
    uom: "02",
    size: "0.2",
    unit: "$8.99",
    siz: "$17.89",
  },
  {
    id: 3,
    img: "https://bluewebs.gr/wp-content/uploads/2021/09/disease-resistant-banana_opengraph.jpg",
    title: "Banana",
    uom: "02",
    size: "0.2",
    unit: "$8.99",
    siz: "$17.89",
  },
  {
    id: 4,
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Kiwi-fruits-582a07b.jpg?quality=90&resize=661%2C600",
    title: "Kiwi",
    uom: "02",
    size: "0.2",
    unit: "$8.99",
    siz: "$17.89",
  },
  {
    id: 5,
    img: "https://lh3.googleusercontent.com/proxy/EDdNC9e5ESngpeynVkoJT5PKTkSp8x-tb5ioj3U70bDdP0R7pIB-rEzmQF1V610MmTTKxdifzSww64CtIOP1U0IuEZBEy2bs19LqCVwXvKWL7RP23EoOf25XOqHtzdBb7ii6U7aavlRMeRy3gGz7kMjcoEDE",
    title: "Pomogrenate",
    uom: "02",
    size: "0.2",
    unit: "$8.99",
    siz: "$17.89",
  },
  {
    id: 6,
    img: "https://tuscanybuy.com/wp-content/uploads/2020/05/strawberries.jpg",
    title: "Strawbarry",
    uom: "02",
    size: "0.2",
    unit: "$8.99",
    siz: "$17.89",
  },
  {
    id: 7,
    img: "https://chaldn.com/_mpimage/anaros-pineapple-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61358&q=low&v=1",
    title: "Pineapple",
    uom: "02",
    size: "0.2",
    unit: "$8.99",
    siz: "$17.89",
  },
  {
    id: 8,
    img: "https://rukminim1.flixcart.com/image/416/416/k70spzk0/plant-seed/u/y/f/50-hybrid-cucumber-seeds-kheera-seeds-khira-seeds-pack-of-1-50-original-imafpcztwwnmgwth.jpeg?q=70",
    title: "Cucumber",
    uom: "02",
    size: "0.2",
    unit: "$8.99",
    siz: "$17.89",
  },
];

function App() {
  return (
    <div className="container">
      {data.map((value, index) => {
        return (
          <div key={index}>
            <Fruit data={value} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
