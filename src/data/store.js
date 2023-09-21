import { reactive } from "vue";

export const store = reactive({
  phoneNumber: "1-800-555-555",
  courses: [
    {
      img: "/img/courses-passplus.jpg",
      name: "Pass Plus",
      button: "Learn more",
    },
    {
      img: "/img/course-intensive.jpg",
      name: "Intensive Course",
      button: "Learn more",
    },
    {
      img: "/img/courses-instructor.jpg",
      name: "Instructor",
      button: "Learn more",
    },
  ],
  coursesInfo: [
    {
      rate: "95%",
      name: "pass rate",
    },
    {
      rate: "100%",
      name: "referral rate",
    },
    {
      rate: "0%",
      name: "accident rate",
    },
  ],
});
