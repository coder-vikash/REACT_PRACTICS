import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fechUsers } from "../store/features/users/userSlice";

export const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fechUsers());
  }, []);

  return <div>Users</div>;
};
