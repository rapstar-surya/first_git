import React, { useState } from 'react';
import './BillingForm.css'

const BillingForm = () => {
    
    const [items, setItems] = useState([{ product: '', quantity: 0 }]);
    
    const handleAddItem = () => {
        setItems([...items, { product: '', quantity: 0 }]);
    };

    return (
        <div>
            <h1>Billing Form</h1>
            <label id="customerName">Customer Name:</label><br/>
                <input
                    type="text"
                    id="customerName"
                    placeholder='Customer Name'
                />
                <br />
                <hr /> <hr/>
            <form>
                <table>
                    <thead>
                        <tr>
                            <th>Select Product</th>
                            <th>Select Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index} >
                                <td >
                                    <select>
                                        <option value="product1">Sugar</option>
                                        <option value="product2">Oats</option>
                                        <option value="product3">Coffee</option>
                                        <option value="product4">Snacks</option>
                                    </select>
                                   
                                </td>
                                <td >
                                    <input
                                        type="number"
                                        placeholder='Quantity'
                                    />
                                    
                                </td>
                                <td>

                                {/* below code is checking if the current item is the last item in the array, and if it's true, then it will display button to add more items.                              */}
                                    {index === items.length - 1 && (
                                        <button type="button" onClick={handleAddItem}>
                                            Add More Item
                                        </button>
                                    )}
                                    
                                </td>
                            </tr>
                            
                        ))}
                    </tbody>
                </table>
                <hr /> 
                <button type="button">
                    Create Bill
                </button>
            </form>
            
        </div>
    );
};

export default BillingForm;
