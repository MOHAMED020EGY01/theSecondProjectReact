import { useState } from 'react';
import './App.css'
import ProductCard from './components/ProductCard'
import { Products } from "./components/data"
import Button from './components/ui/Button';
import Modal from './components/ui/Modal';
import { FormProducts } from './components/components/FormProducts';
import Input from './components/ui/Input';
import type { IProduct } from './components/interface/products';
function App() {

  //**-----------setState---------------**\\
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageUrl: "",
    price: 0,
    id: 0,
    colors: [],
    category: {
      name: "",
      imageUrl: ""
    }
  })

  //**-----------Handeler---------------**\\


  const openModalForm = () => {setIsOpenModal(true)}
  const closeModalForm = () => {setIsOpenModal(false)}

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({
      ...product, 
      [name]: value
    })
  }

  //**-----------Render---------------**\\

  //Function to render product cards\\
  const productCards = () => {
    return Products.map(product => (
      <ProductCard key={product.id} product={product} />
    ));
  };
  const renderProductCards = () => {
    return (
      FormProducts.map((field) => (
        <div key={field.id} className="mb-4">
          <label htmlFor={field.id} className="block text-gray-700 font-bold mb-2">
            {field.label}
          </label>
          <Input rest={field} value={product[field.name]} onChange={onChangeHandler} />
        </div>
      )
      )
    )
  }



  return (
    <>
      {/* Modal */}
      <Modal isOpen={isOpenModal} close={closeModalForm} title="Modal Title" description="Modal Description">
        <form action="" method="POST">

          {renderProductCards()}
          <div className='flex gap-3 my-2'>
            <Button className='bg-blue-500' type='submit'> Add </Button>
            <Button className='bg-slate-400' onClick={closeModalForm}> Cancel </Button>
          </div>
        </form>
      </Modal>


      <div className="p-5">
        <div className='w-60 ml-auto p-5'>
          <Button className='bg-blue-500' onClick={openModalForm}>
            Open Modal  Form
          </Button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productCards()}
        </div>
      </div>
    </>
  )
}
//** sm => md => lg => xl **//

export default App
