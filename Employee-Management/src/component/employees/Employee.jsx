import Layout from "../layouts/Layout";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  openDeletePopup,
  openEmployeePopup,
} from "../../store/features/popup/popup/PopupSlice";
import { UpdateEmployee } from "../../store/features/popup/employees/employeeSlice/EmployeeeThunk";

export const Employee = () => {
  const employees = useSelector((state) => state.employee?.employees || []);

  return (
    <Layout>
      <ul className="list bg-base-100 rounded-box ">
        {employees.length === 0 && <p>No Employeee Details</p>}
        {employees?.map((details) => (
          <EmployeCard key={details.id} details={details} />
        ))}
      </ul>
    </Layout>
  );
};

const EmployeCard = ({ details }) => {
  const dispatch = useDispatch();

  // const handleHilights = (details) => {
  //   dispatch(
  //     UpdateEmployee({
  //       id: details.id,
  //       details: {
  //         ...details,
  //         hilights: details.hilights,
  //       },
  //     }),
  //   );
  // };

  return (
    <li className="list-row">
      <div>
        <img
          className="size-10 rounded-box"
          src={details.ProfileUrl}
          alt={details.name}
        />
      </div>

      <div>
        <div>{details.name}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {details.email}
        </div>
      </div>

      <p className="list-col-wrap text-xs">{details.bio}</p>

      <button
        onClick={() => dispatch(openEmployeePopup(details))}
        className="btn btn-square btn-ghost text-xl"
      >
        <MdEdit />
      </button>

      <button
        onClick={() => dispatch(openDeletePopup(details.id))}
        className="btn btn-square btn-ghost text-xl"
      >
        <MdDelete />
      </button>

      <button className="btn btn-square btn-ghost">
        <svg
          className="size-[1.2em]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill={details.hilights ? "red" : "none"}
            stroke="currentColor"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </g>
        </svg>
      </button>
    </li>
  );
};
