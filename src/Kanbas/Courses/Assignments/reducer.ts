import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
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
    // editModule: (state, { payload: moduleId }) => {
    //   state.modules = state.modules.map((m: any) =>
    //     m._id === moduleId ? { ...m, editing: true } : m
    //   ) as any;
    // },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
