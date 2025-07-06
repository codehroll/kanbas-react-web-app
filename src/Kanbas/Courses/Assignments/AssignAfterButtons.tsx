import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignAfterButtons() {
  return (
    <div className="float-end">
      <span className="wd-rounded-corners-all-around">40% of Total</span>
      <BsPlus className="fs-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
