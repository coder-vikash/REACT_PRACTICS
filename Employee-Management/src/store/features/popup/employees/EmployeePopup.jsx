import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../popup/PopupSlice";
import { useState } from "react";
import { PostEmployee, UpdateEmployee } from "./employeeSlice/EmployeeeThunk";
import { useEffect } from "react";

export const EmployeePopup = () => {
  const [formDetails, setFormDetails] = useState({
    ProfileUrl: "",
    name: "",
    email: "",
    bio: "",
    hilights: false,
  });

  const dispatch = useDispatch();

  const popup = useSelector((state) => state.popup.employeePopup);

  const handleInputChange = async (e) => {
    const { name, value } = e.target;

    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const submitDetails = async () => {
    if (popup.id) {
      await dispatch(
        UpdateEmployee({
          id: popup.id,
          details: formDetails,
        }),
      );
    } else {
      await dispatch(PostEmployee(formDetails));
    }
    dispatch(closeEmployeePopup());
  };
  useEffect(() => {
    if (!popup) {
      setFormDetails({
        ProfileUrl: "",
        name: "",
        email: "",
        bio: "",
        hilights: false,
      });
    } else if (popup.id) {
      setFormDetails({
        id: popup.id,
        ProfileUrl: popup.ProfileUrl || "",
        name: popup.name || "",
        email: popup.email || "",
        bio: popup.bio || "",
        hilights: false,
      });
    }
  }, [popup]);

  if (!popup) return null;

  console.log(formDetails);

  return (
    <div
      onClick={() => dispatch(closeEmployeePopup())}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/80 z-20"
    >
      <fieldset
        onClick={(e) => e.stopPropagation()}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend">Employee Details</legend>

        <label className="label">Profile Url</label>
        <input
          type="text"
          name="ProfileUrl"
          className="input"
          value={formDetails.ProfileUrl}
          onChange={handleInputChange}
          placeholder="Profile Url"
        />

        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          value={formDetails.name}
          onChange={handleInputChange}
          className="input"
          placeholder="Name"
        />

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          value={formDetails.email}
          onChange={handleInputChange}
          className="input"
          placeholder="Email"
        />

        <label className="label">Bio</label>
        <textarea
          name="bio"
          value={formDetails.bio}
          onChange={handleInputChange}
          className="textarea h-24"
          placeholder="Bio"
        ></textarea>

        <button onClick={submitDetails} className="btn btn-neutral mt-4">
          Submit
        </button>
      </fieldset>
    </div>
  );
};
