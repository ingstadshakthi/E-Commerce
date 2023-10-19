import React, { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApi';
import Loader from '../components/Loader';
import Message from '../components/Message';


const HomeScreen = () => {

    const { data: products, isLoading, error } = useGetProductsQuery();
    return (
        <Fragment>
            <h1>Latest Products</h1>
            {isLoading ? (<Loader />) :
                error ? <Message varient='danger'>{error?.data?.message || error?.error}</Message>
                    :
                    (<Row>
                        {products.map((product) => (
                            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                    )}
        </Fragment>
    )
}

export default HomeScreen