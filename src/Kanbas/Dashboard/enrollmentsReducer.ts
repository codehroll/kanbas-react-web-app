import { createSlice } from "@reduxjs/toolkit";
// import { enrollments } from "../Database";

const initialState = {
  enrollments: [],
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
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },

    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment: any = {
        _id: new Date().getTime().toString(),
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
export const { setEnrollments, addEnrollment, unEnrollment, setEnrollment } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
