import React from 'react';
import './TabMenu.css'
import { Tabs, Tab, Nav } from 'react-bootstrap';
import FoodItems from '../FoodItems/FoodItems';

const TabMenu = () => {
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
                <FoodItems></FoodItems>
            </Tab.Pane>
            <Tab.Pane eventKey="lunch">
                <FoodItems></FoodItems>
            </Tab.Pane>
            <Tab.Pane eventKey="dinner">
                <FoodItems></FoodItems>
            </Tab.Pane>
        </Tab.Content>
    </Tab.Container>
    </div>

    );
};

export default TabMenu;