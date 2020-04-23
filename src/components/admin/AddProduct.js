import React from 'react';
import {connect} from 'react-redux';

import {addProduct} from '../../store/actions/productActions';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            paintType: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addProduct(this.state);
    }
    render() {
        return (
            <>
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text darken-3">Add Product</h5>
                        <div className="input-field">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" onChange={this.handleChange}></input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="paintType">Type</label>
                            <input type="text" id="paintType" onChange={this.handleChange}></input>
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Add Paint</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }

}

const mapDispatchToProps = (disptach) => {
    return {
        addProduct : (product) => { disptach(addProduct(product)) } 
    }
}

export default connect(null,mapDispatchToProps)(AddProduct);