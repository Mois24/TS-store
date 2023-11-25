import Product from "./components/Product";
import { Loader } from "./components/Loader";
import { Error } from "./components/Error";
import { Modal } from "./components/Modal";
import { CreateProduct } from "./components/CreateProduct";
import { useProducts } from "./hooks/products";


function App() {
  const {loading, error, products} = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error}/>}
      {products.map(product => <Product product={product} key={product.id}/>)}

      <Modal title='Create new product'>
        <CreateProduct/>
      </Modal>
    </div>
  )
}

export default App;
