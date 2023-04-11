import React, { useState } from 'react';
import './Boxes.css';

const Boxes = () => {
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({});
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="boxes-container">

      <div className="box box1">
        <h2 className='middle'>Form</h2>
        <form onSubmit={handleSubmit}>
          <label className='middle'>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleChange} />
          </label>
          <label className='middle'>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleChange} />
          </label>
          <button type="submit" className='btn'>Submit</button>
        </form>
      </div>

      <div className="box box2">
        <h2>Display Input Values</h2>
        <p>Name: {formData.name || '-'}</p>
        <p>Email: {formData.email || '-'}</p>
      </div>

      <div className="box box3">
        <h2>Submitted Data</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Boxes;
