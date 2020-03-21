import React from 'react';
import './FoodItems.css'
import { Tabs, Tab, Nav } from 'react-bootstrap';

const FoodItems = () => {
    return (
        <div>

            <Tab.Container defaultActiveKey="lunch">
 
            <Nav className="d-flex justify-content-center tabs-menu">
                <Nav.Item>
                    <Nav.Link className="breakfast" eventKey="breakfast">Breakfast</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  eventKey="lunch">Lunch</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  eventKey="dinner">Dinner</Nav.Link>
                </Nav.Item>
                
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="breakfast">
                    <h1>Breakfast</h1>
                </Tab.Pane>
                <Tab.Pane eventKey="lunch">
                    <h1>Lunch</h1>
                </Tab.Pane>
                <Tab.Pane eventKey="dinner">
                    <h1>Dinner</h1>
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
        </div>
    );
};

export default FoodItems;