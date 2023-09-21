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
  instructorsCards: [
    {
      img: "/img/instructor-mikehart.jpg",
      name: "Mike Hart",
      socials: ["F", "X", "I"],
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/img/instructor-johnsmith.jpg",
      name: "John Smith",
      socials: ["F", "X", "I"],
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/img/instructor-angelahart.jpg",
      name: "Angela Hart",
      socials: ["F", "X", "I"],
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ],
});
