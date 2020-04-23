import React from 'react'
import ProductCard from './ProductCard';
import { connect } from 'react-redux';
import { getProduct } from '../store/actions/productActions';

class Products extends React.Component {
    componentDidMount() {
        this.props.getProduct();
    }
    render() {
        //console.log(this.props)
        const {products}  = this.props;
        console.log('inside product', products)
        return (
            <div className="container section product-details">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Products</span>
                    </div>
                </div>
                <div className="action">
                    <ProductCard products={products} />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (disptach) => {
    return {
        getProduct : () => { disptach(getProduct()) } 
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        products: state.product
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);