import { useState } from 'react';
import './App.css'
import ProductCard from './components/ProductCard'
import { Products } from "./components/data"
import Button from './components/ui/Button';
import Modal from './components/ui/Modal';
import { FormProducts } from './components/components/FormProducts';
function App() {

  //**-----------setState---------------**\\
  const [isOpenModal, setIsOpenModal] = useState(false)


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
          <input
            type={field.type}
            id={field.id}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            className="rounded-lg border-4 border-gray-300 focus:border-blue-500 focus:outline-none p-3 w-full"
            autoFocus={field.focus}
          />
        </div>
      )
      )
    )
  }

  //**-----------Handeler---------------**\\


  const openModalForm = () => {
    setIsOpenModal(true)
  }

  const closeModalForm = () => {
    setIsOpenModal(false)
  }
  return (
    <>
      {/* Modal */}
      <Modal isOpen={isOpenModal} close={closeModalForm} title="Modal Title" description="Modal Description">
          {renderProductCards()}
        <div className='flex gap-3 my-2'>
          <Button className='bg-blue-500'> Add </Button>
          <Button className='bg-slate-400' onClick={closeModalForm}> Cancel </Button>
        </div>
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
