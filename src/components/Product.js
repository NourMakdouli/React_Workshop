import { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class Product extends Component {
    prod; 
    constructor(props){
        super(props)
        console.log(props) 
        this.prod=props.produit
        


    }


    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("../assets/images/"+this.prod.img)} />
            <Card.Body>
                <Card.Title>{this.prod.name}</Card.Title>
                <Card.Text>
                    {this.prod.description}
                </Card.Text>
                <Card.Text>
                    {this.prod.price} DT
                </Card.Text>
            </Card.Body>
            </Card>
        );
    }
}