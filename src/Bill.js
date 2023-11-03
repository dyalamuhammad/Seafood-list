import React, {useState} from "react";
import { ArrowRight, ListUl, PersonCircle } from 'react-bootstrap-icons';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const Bill = ({selectedItems }) => {
  const total = selectedItems.reduce((acc, item) => acc + item.price, 0);
  const [change, setChange] = useState(0);
  const handlePrint = () => {
    window.print(); // Ini akan memicu fungsi pencetakan browser
  };
  const handleSave = () => {
    // Menampilkan pesan pop-up "Saved"
    window.alert("Bill saved!");
  };
  const handleCharge = () => {
    // Menampilkan dialog untuk memasukkan uang pembeli
    const customerPayment = parseFloat(window.prompt("Enter the customer's payment:"));
    if (!isNaN(customerPayment)) {
      // Menghitung kembalian
      const remainingChange = customerPayment - total;
      if (remainingChange >= 0) {
        setChange(remainingChange);
        window.alert(`Total Charge: Rp.${total}\nCustomer Payment: Rp.${customerPayment}\nChange: Rp.${remainingChange}`);
      } else {
        window.alert("Customer payment is less than the total charge.");
      }
    } else {
      window.alert("Please enter a valid number for customer payment.");
    }
  };
  return (
    <Card style={{ width: "25em", height: "25em"}} className="mt-5 sticky-top">
      <Card.Body>
        <div className="row">

      <PersonCircle color="royalBlue" size={42} className="col-2"/>
        <h2 className="col-8">New Customer</h2>
      <ListUl color="royalBlue" size={42} className="col-2"/>
        </div>
        <div className="row">

        <DropdownButton
          as={ButtonGroup}
          title="Dine In"
          id="bg-nested-dropdown"
          size="xl"
        >
          

          <Dropdown.Item eventKey="1">Dine In</Dropdown.Item>
          <Dropdown.Item eventKey="2">Take Away</Dropdown.Item>
          
        </DropdownButton>
        </div>
        <div className="row justify-content-between">
          <p className="col-1">1</p>
          <p className="col-2">Table</p>
        </div>
        {selectedItems.map((item, index) => (
        <div className="row justify-content-between" key={index}>
          <p className="col-1">{item.name}</p>
          <p className="col-2">Rp.{item.price}</p>
        </div>
        ))}
      
        <div className="row justify-content-between">
          <p className="col-2">Total</p>
          <p className="col-2">Rp.{total}</p>
        </div>
      </Card.Body>
      <Card.Body>
      <div className="row justify-content-evenly">
          <Button className="col-6" onClick={handleSave}>Save Bill</Button>
          <Button className="col-6" onClick={handlePrint}>Print Bill</Button>
      </div>
      <div className="row justify-content-center mt-1">
          <Button className="bg-primary" onClick={handleCharge}>Charge</Button>

      </div>

      </Card.Body>

    </Card>
  );
};

export default Bill;
