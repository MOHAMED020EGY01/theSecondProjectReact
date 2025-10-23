import { useState, type FormEvent } from 'react';
import './App.css'
import ProductCard from './components/ProductCard'
import { colors, Products } from "./components/data"
import Button from './components/ui/Button';
import Modal from './components/ui/Modal';
import { FormProducts } from './components/components/FormProducts';
import Input from './components/ui/Input';
import type { IProduct } from './components/interface/products';
import { productValidation } from './validation';
import Msg from './components/Error/Msg';
import CircleColor from './components/ui/CircleColor';
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
  const [teamColor, setTeamColor] = useState<string[]>([]);
  const [errors, setErrors] = useState(
    {
      title: "",
      description: "",
      imageUrl: "",
      price: "",
    }
  );  
  const [ProductAll, setProducts] = useState<IProduct[]>(Products);
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

    const error = productValidation(product);

    const hasErrorMsg = Object.values(error).some(err => err === "") && Object.values(error).every(err => err === "");

    if (!hasErrorMsg) {
      setErrors(error);
      return;
    }
    setProducts(CF => [...CF, { ...product, id: CF.length + 1,colors:teamColor }]);
    productCards();
    console.log("close Modal Form");
    closeModalForm();
  }



  

  //**-----------Render---------------**\\

  //Function to render product cards\\
  /**
   * 
   * @returns 
   */
  const productCards = () => {
    console.log("Product Cards:");
    console.log(ProductAll);
    return ProductAll.map(ProductAll => (
      <ProductCard key={ProductAll.id} product={ProductAll}  />
    ));
  };

  /**
   * 
   * @returns 
   */
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

  /**
   * 
   * @returns 
   */
const renderProductColors = () => {
  return colors.map(color => (
    <div className='inline-flex mx-1 flex-wrap' key={color}>
      <CircleColor colorCircle={color} onClick={() => {
        if (teamColor.includes(color)) {
          setTeamColor(teamColor.filter(c => c !== color));
        } else {
          setTeamColor([...teamColor, color]);
        }
      }} />
    </div>
  ));
}

/**
 * 
 * @returns 
 */
const renderColorsSelected = () => {
  return teamColor.map(color => (
    <span title={`click to remove ${color}`} key={color} className='inline-block text-white p-1 rounded-md m-1 cursor-pointer' style={{ backgroundColor: color }} onClick={() => {
        setTeamColor(teamColor.filter(c => c !== color));
      }} >{color}</span>
  ));
}

/**
 * 
 */
  return (
    <>
      {/* Modal */}
      <Modal isOpen={isOpenModal} close={closeModalForm} title="Modal Title" description="Modal Description">
        <form action="#" method="POST" onSubmit={submitHandler}>

          {renderProductCards()}
          {renderProductColors()}
          <h3 className='mt-4 mb-2 font-bold'>Selected Colors:</h3>
          {renderColorsSelected()}
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
