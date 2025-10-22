import { useState, type FormEvent } from 'react';
import './App.css'
import ProductCard from './components/ProductCard'
import { Products } from "./components/data"
import Button from './components/ui/Button';
import Modal from './components/ui/Modal';
import { FormProducts } from './components/components/FormProducts';
import Input from './components/ui/Input';
import type { IProduct } from './components/interface/products';
import { productValidation } from './validation';
import Msg from './components/Error/Msg';
function App() {

  const defaultProduct = {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    id: 0,
    colors: [],
    category: {
      name: "",
      imageUrl: ""
    }
  }
  //**-----------setState---------------**\\
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [product, setProduct] = useState<IProduct>(defaultProduct)

  const [errors, setErrors] = useState(
    {
      title: "",
      description: "",
      imageUrl: "",
      price: "",
    }
  );
  //**-----------Handeler---------------**\\

  const openModalForm = () => { setIsOpenModal(true) }

  const closeModalForm = () => {
    setIsOpenModal(false)
    setProduct(defaultProduct)
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value

    });
    setErrors({
      ...errors,
      [name]: ""
    });
  }


  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    console.log(productValidation(product));
    const error = productValidation(product);

    const hasErrorMsg = Object.values(error).some(err => err === "") && Object.values(error).every(err => err === "");

    console.log(hasErrorMsg);
    if (!hasErrorMsg) {
      console.log("Form has errors. Please fix them before submitting.");
      setErrors(error);
      return;
    }
    console.log("Send in Api");

    console.log("Submitted Product:", product);
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
          <Input id={field.id} name={field.name} type={field.type} value={product[field.name]} onChange={onChangeHandler} />
          <Msg msg={errors[field.name]} />
        </div>
      )
      )
    )
  }




  return (
    <>
      {/* Modal */}
      <Modal isOpen={isOpenModal} close={closeModalForm} title="Modal Title" description="Modal Description">
        <form action="#" method="POST" onSubmit={submitHandler}>

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
