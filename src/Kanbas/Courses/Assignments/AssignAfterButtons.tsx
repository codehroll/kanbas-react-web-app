import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignAfterButtons() {
  return (
    <div className="float-end d-flex">
      <p className="wd-rounded-corners-all-around">40% of Total</p>
      <BsPlus className="fs-1" />
      <IoEllipsisVertical className="fs-2" />
    </div>
  );
}
