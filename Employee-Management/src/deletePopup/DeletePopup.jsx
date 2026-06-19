import { useDispatch, useSelector } from "react-redux";
import { closeDeletePopup } from "../store/features/popup/popup/PopupSlice";
import { DeleteEmployee } from "../store/features/popup/employees/employeeSlice/EmployeeeThunk";

export const DeletePopup = () => {
  const dispatch = useDispatch();

  const employeeId = useSelector((state) => state.popup.deletePopup);

  if (!employeeId) return null;

  const DeleteBtnConform = async () => {
    try {
      await dispatch(DeleteEmployee(employeeId)).unwrap();
      dispatch(closeDeletePopup());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={() => dispatch(closeDeletePopup())}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/80 z-20"
    >
      <div
        className="card w-96 bg-base-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="card-body">
          <h2 className="card-title">Delete Employee</h2>

          <p>Are you sure you want to delete this employee?</p>

          <div className="card-actions justify-end">
            <button
              onClick={() => dispatch(closeDeletePopup())}
              className="btn btn-outline"
            >
              Cancel
            </button>

            <button onClick={DeleteBtnConform} className="btn btn-error">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
