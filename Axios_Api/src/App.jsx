import { useState } from "react";
// import axios from "axios";
import axiosInstance from "./Axios";
import "./App.css";

function App() {
  const [customers, setCustomers] = useState([]);
  const [formDetails, setFormDetails] = useState({
    id: null,
    name: "",
    age: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // GET request
  const fetchApi = async () => {
    const response = await axiosInstance.get("/customber");
    setCustomers(response.data);
  };

  // Handle input changes
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Edit existing data (prefill form)
  const editData = (customer) => {
    setFormDetails(customer);
    setIsEditing(true);
  };

  // POST request (add new)
  const postData = async () => {
    if (formDetails.name === "" || formDetails.age === "") {
      alert("Please enter all details");
      return;
    }
    const response = await axiosInstance.post("/customber", formDetails);
    console.log("Added:", response.data);

    setFormDetails({ id: null, name: "", age: "" });
    setIsEditing(false);
    fetchApi();
  };

  // PUT request (update existing)
  // PUT request (update existing)
  const saveData = async () => {
    if (!formDetails.id) return;

    const response = await axiosInstance.put(`/customber/${formDetails.id}`, {
      name: formDetails.name,
      age: formDetails.age,
    });

    console.log("Updated:", response.data);

    setFormDetails({ id: null, name: "", age: "" });
    setIsEditing(false);
    fetchApi();
  };

  // DELETE request
  const deleteData = async (id) => {
    await axiosInstance.delete(`/customber/${id}`);
    fetchApi();
  };

  return (
    <>
      <h1>This is API</h1>

      <button
        onClick={fetchApi}
        className="bg-blue-400 text-white p-4 border-2 border-black"
      >
        Get Data
      </button>

      <div className="mt-6 flex flex-col gap-4 max-w-[22rem]">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formDetails.name}
          onChange={onChange}
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="text"
          name="age"
          placeholder="Enter Your Age"
          value={formDetails.age}
          onChange={onChange}
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
        />

        {isEditing ? (
          <button
            onClick={saveData}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md shadow-md transition"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={postData}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md shadow-md transition"
          >
            Add Customer
          </button>
        )}
      </div>

      {customers.map((customer) => (
        <div
          key={customer.id}
          className="bg-white max-w-[22rem] w-full rounded-xl shadow-md p-6 mb-6 border border-gray-200"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {customer.name}
          </h2>
          <p className="text-gray-600">Age: {customer.age}</p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => editData(customer)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md shadow-sm transition"
            >
              Edit
            </button>
            <button
              onClick={() => deleteData(customer.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-sm transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
