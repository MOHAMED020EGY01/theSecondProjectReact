import { useState } from 'react';
import './App.css'
import ProductCard from './components/ProductCard'
import { Products } from "./components/data"
import Button from './components/ui/Button';
import Modal from './components/ui/Modal';
function App() {

  //**-----------setState---------------**\\
  const [isOpen, setIsOpen] = useState(false)


  //**-----------Render---------------**\\

  //Function to render product cards\\
  const productCards = () => {
    return Products.map(product => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  //**-----------Handeler---------------**\\
  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }
  return (
    <>



      {/* Modal */}
      <Modal isOpen={isOpen} close={close} title="Modal Title" description="Modal Description">
        <div className='flex gap-3 my-2'>
          <Button className='bg-blue-500'> Add </Button>
          <Button className='bg-slate-400' onClick={close}> Cancel </Button>
        </div>
      </Modal>
      <div className='p-3'>
        {/* Modal Button */}
        <div className='w-60 ml-auto p-5'>
          <Button className='bg-blue-500' onClick={open}>
            Open Modal
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
