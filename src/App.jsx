import { useState } from 'react'

import './App.css'

const initProducts = [
  { name: "Sản phẩm 1", category: "Điện tử", price: 1200, year: 2019 },
  { name: "Sản phẩm 2", category: "Thời trang", price: 300, year: 2021 },
  { name: "Sản phẩm 3", category: "Đồ gia dụng", price: 150, year: 2020 },
  { name: "Sản phẩm 4", category: "Thực phẩm", price: 50, year: 2022 },
  { name: "Sản phẩm 5", category: "Điện tử", price: 800, year: 2018 },
  { name: "Sản phẩm 6", category: "Thể thao", price: 250, year: 2020 },
  { name: "Sản phẩm 7", category: "Giáo dục", price: 100, year: 2019 },
  { name: "Sản phẩm 8", category: "Văn phòng phẩm", price: 20, year: 2021 },
  { name: "Sản phẩm 9", category: "Thời trang", price: 500, year: 2019 },
  { name: "Sản phẩm 10", category: "Sức khỏe", price: 600, year: 2022 },
  { name: "Sản phẩm 11", category: "Du lịch", price: 700, year: 2018 },
  { name: "Sản phẩm 12", category: "Công nghệ", price: 1100, year: 2020 },
  { name: "Sản phẩm 13", category: "Thời trang", price: 400, year: 2022 },
  { name: "Sản phẩm 14", category: "Điện tử", price: 850, year: 2021 },
  { name: "Sản phẩm 15", category: "Nội thất", price: 250, year: 2019 },
  { name: "Sản phẩm 16", category: "Thể thao", price: 550, year: 2018 },
  { name: "Sản phẩm 17", category: "Đồ chơi", price: 60, year: 2020 },
  { name: "Sản phẩm 18", category: "Sức khỏe", price: 320, year: 2021 },
  { name: "Sản phẩm 19", category: "Giáo dục", price: 180, year: 2019 },
  { name: "Sản phẩm 20", category: "Văn phòng phẩm", price: 90, year: 2022 },
];


export const AllProductName = () => {
  const [productsName, setproductsName] = useState(initProducts.map(product => product.name));

  return (<>
    <ul className='flex gap-4'>
      {productsName.map(productName => <li key={productName}>{productName}</li>)}
    </ul>
  </>)
}


function App() {
  const [products, changeProducts] = useState(initProducts);


  return (
    <>
      <AllProductName />
      <div className='flex'>
        <button onClick={() => {
            changeProducts(products.sort((productA, productB) =>
            { 
              return productA.price > productB.price ? 1 : -1;
            }));
        }}>sort by price</button>

        <button 
          onClick={() => changeProducts(products.reverse())}
        >
          Reverse order
        </button>
      </div>

      <div>
        <table>
          <thead>
            <tr className='border'>
              <th className='border'>
                Name
              </th>
              <th>
                Price
              </th>
            </tr>
          </thead>
          <tbody className='border'>
          {
            products.map((product, id) => (<tr key={id} className='border' ><td className='border'>{product.name}</td><td>{product.price}</td></tr>))
          }
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App
