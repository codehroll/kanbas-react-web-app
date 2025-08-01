import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";
const initialState = {
  assignments: [],
  assignment: {
    _id: "",
    title: "new assignment",
    description: "new assignment description",
    points: 0,
    course: "",
    due_date: Math.trunc(Date.now() / 1000),
    available_date: Math.trunc(Date.now() / 1000),
  },
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: assignment._id,
        title: assignment.title,
        course: assignment.course,
        description: assignment.description,
        points: assignment.points,
        due_date: assignment.due_date,
        available_date: assignment.available_date,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },

    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },

    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },

    cancelAssignmentUpdate: (state, action) => {
      state.assignment = initialState.assignment;
    },
  },
});
export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  cancelAssignmentUpdate,
  setAssignments,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
