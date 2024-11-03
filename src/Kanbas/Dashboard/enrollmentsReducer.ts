import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
// import { v4 as uuidv4 } from "uuid"; // Use uuid for unique IDs

const initialState = {
  enrollments: enrollments,
  enrollment: {
    _id: "",
    user: "",
    course: "",
  },
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment: any = {
        _id: new Date().getTime().toString(),
        // _id: uuidv4(), // Generate unique ID for each enrollment
        user: enrollment.user,
        course: enrollment.course,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unEnrollment: (state, { payload: enrollmentId }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => e._id !== enrollmentId
      );
    },
    setEnrollment: (state, action) => {
      state.enrollment = action.payload;
    },
  },
});
export const { addEnrollment, unEnrollment, setEnrollment } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
