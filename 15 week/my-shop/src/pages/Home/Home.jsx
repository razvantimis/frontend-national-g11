import React from 'react';
import './Home.css';
import Product from '../../components/Product'
// https://fakestoreapi.com/

// const product1 = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// }
// const productList = [product1, product1, product1, product1, product1];

async function getProductList() {
  const response = await fetch('https://fakestoreapi.com/products');
  return response.json();
}


const ProductListEmpty = () => (<h1>Lista de produse este goala</h1>)
const ProductListLoading = () => (<h1>Lista de produse se incarca.....</h1>)

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      isLoading: false,
    }
  }

  componentDidMount() {
    // isLoading = true
    this.setState({ isLoading: true })
    getProductList()
      .then((products) => {
        console.log(products);
        this.setState({
          productList: products,
          isLoading: false
        })
        // isLoading = false
      })
      .catch((error) => {
        // isLoading = false
        this.setState({ isLoading: false })
      })

  }

  renderProductList() {
    const { productList, isLoading } = this.state;
    const isEmpty = productList.length === 0;

    if (isLoading) {
      return (<ProductListLoading />);
    }
    if (isEmpty) {
      return (<ProductListEmpty />)
    }

    return productList.map(productItem => {
      return (<Product
        title={productItem.title}
        price={productItem.price}
        image={productItem.image}
        onAddToCart={() => {
          console.log("add product", productItem)
        }} />)
    })

  }

  render() {
    return (
      <div className="home">
        {this.renderProductList()}
      </div>
    )
  }
}

export default Home;