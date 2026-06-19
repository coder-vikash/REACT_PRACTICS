import "./App.css";
import { Navbar } from "./component/navbar/Navbar";
import { Footer } from "./component/footer/Footer";
import { Employee } from "./component/employees/Employee";
import { EmployeePopup } from "./store/features/popup/employees/EmployeePopup";
import { DeletePopup } from "./deletePopup/DeletePopup";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getEmployees } from "./store/features/popup/employees/employeeSlice/EmployeeeThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <EmployeePopup />
      <DeletePopup />
      <Navbar />
      <div className="flex-1 py-10">
        <Employee />{" "}
      </div>
      <Footer />
    </div>
  );
}

export default App;
