import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import "./styles.css";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useSelector } from "react-redux";

export default function Kanbas() {
  // current user enrolled coureses
  const [courses, setCourses] = useState<any[]>([]);
  // all the courses in database
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const [enrolling, setEnrolling] = useState<boolean>(false);

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  // const findCoursesForUser = async () => {
  //   try {
  //     const courses = await userClient.findCoursesForUser(currentUser._id);
  //     setCourses(courses);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const fetchCourses = async () => {
  //   try {
  //     const allCourses = await courseClient.fetchAllCourses();
  //     const enrolledCourses = await userClient.findCoursesForUser(
  //       currentUser._id
  //     );
  //     const courses = allCourses.map((course: any) => {
  //       if (enrolledCourses.find((c: any) => c._id === course._id)) {
  //         return { ...course, enrolled: true };
  //       } else {
  //         return course;
  //       }
  //     });
  //     setCourses(courses);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   if (enrolling) {
  //     fetchCourses();
  //   } else {
  //     findCoursesForUser();
  //   }
  // }, [currentUser, enrolling]);

  // const updateEnrollment = async (courseId: string, enrolled: boolean) => {
  //   if (enrolled) {
  //     await userClient.enrollIntoCourse(currentUser._id, courseId);
  //   } else {
  //     await userClient.unenrollFromCourse(currentUser._id, courseId);
  //   }
  //   setCourses(
  //     courses.map((course) => {
  //       if (course._id === courseId) {
  //         return { ...course, enrolled: enrolled };
  //       } else {
  //         return course;
  //       }
  //     })
  //   );
  // };

  // fetch current user enrolled coureses
  const fetchCourses = async () => {
    let courses = [];
    try {
      // courses = await userClient.findMyCourses();
      courses = await userClient.findCoursesForUser(currentUser._id);
      // console.log("Courses fetched:", courses);
    } catch (error) {
      console.error(error);
    }

    setCourses(courses);
    // Call enrollmentsReducer to set current user's enrollment.
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  // fetch all the courses in database
  const fetchAllCourses = async () => {
    let allCourses = [];
    try {
      allCourses = await courseClient.fetchAllCourses();
    } catch (error) {
      console.error(error);
    }
    setAllCourses(allCourses);
  };
  useEffect(() => {
    fetchAllCourses();
  }, [currentUser]);

  const enrollCurrentCourse = async (userId: string, courseId: string) => {
    // await userClient.addEnrollment(userId, courseId);
    await userClient.enrollIntoCourse(userId, courseId);
    fetchCourses();
  };

  const unenrollCurrentCourse = async (userId: string, courseId: string) => {
    // await userClient.deleteEnrollment(userId, courseId);
    await userClient.unenrollFromCourse(userId, courseId);
    fetchCourses();
  };

  const addNewCourse = async () => {
    // const newCourse = await userClient.createCourse(course);
    const newCourse = await courseClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    allCourses={allCourses}
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    enrollCurrentCourse={enrollCurrentCourse}
                    unenrollCurrentCourse={unenrollCurrentCourse}
                    // enrolling={enrolling}
                    // setEnrolling={setEnrolling}
                    // updateEnrollment={updateEnrollment}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
