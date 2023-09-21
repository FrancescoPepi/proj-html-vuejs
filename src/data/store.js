import { reactive } from "vue";

export const store = reactive({
  phoneNumber: "1-800-555-555",
  logo: "/img/avada-drivers-logo-1x.png",
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
      socials: [
        "fa-brands fa-facebook-f",
        "fa-brands fa-twitter",
        "fa-brands fa-instagram",
      ],
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      active: false,
    },
    {
      img: "/img/instructor-johnsmith.jpg",
      name: "John Smith",
      socials: [
        "fa-brands fa-facebook-f",
        "fa-brands fa-twitter",
        "fa-brands fa-instagram",
      ],
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      active: true,
    },
    {
      img: "/img/instructor-angelahart.jpg",
      name: "Angela Hart",
      socials: [
        "fa-brands fa-facebook-f",
        "fa-brands fa-twitter",
        "fa-brands fa-instagram",
      ],
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      active: false,
    },
  ],
  testimonials: [
    {
      img: "/img/testimonial-sophia.png",
      text: "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! highly recommended.",
      name: "Sophia Jones",
      active: true,
    },
    {
      img: "/img/testimonial-kelly.png",
      text: "Everything is perfect, fast and reliable, the price is right and above all everything is done online obviously without a medical examination which takes place on site. I recommend it to everyone who needs to renew their driving licence.",
      name: "Kelly Smith",
      active: false,
    },
    {
      img: "/img/testimonial-kate.png",
      text: "I'm very satisfied. The license renewal service was quick, the staff very efficient, kind and helpful. I really recommend this agency!",
      name: "Kate Hart",
      active: false,
    },
    {
      img: "/img/testimonial-harold.png",
      text: "I describe my experience with three words: professionalism, punctuality and courtesy. The next renewal will definitely be with you!",
      name: "Harold Hart",
      active: false,
    },
    {
      img: "/img/testimonial-grant.png",
      text: "Everything well organised, punctual and with the online service you don't waste time. The cost is excellent",
      name: "Grant Hart",
      active: false,
    },
  ],
  latestNews: [
    {
      img: "/img/blog-choosecar-700x441.jpg",
      title: "What Car to Start With?",
      data: "February 7th, 2019",
      comment: "0 Comments",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/img/blogpost-10and2-700x441.jpg",
      title: "Avada Driving School Expanding",
      data: "February 7th, 2019",
      comment: "0 Comments",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ],
  footer: [
    {
      title: "contact details",
      links: [
        {
          icon: "fa-solid fa-house",
          text: "12345 North Main Street New York, NY 555555",
        },
        {
          icon: "fa-solid fa-phone",
          text: "1-800-555-555",
        },
        {
          icon: "fa-regular fa-envelope",
          text: "info@your-domain.com",
        },
        {
          icon: "fa-solid fa-link",
          text: "Theme-Fusion.com",
        },
      ],
    },
    {
      title: "courses",
      links: [
        {
          icon: "fa-regular fa-circle-right",
          text: "Pass Plus",
        },
        {
          icon: "fa-regular fa-circle-right",
          text: "Intensive Course",
        },
        {
          icon: "fa-regular fa-circle-right",
          text: "Automatic",
        },
        {
          icon: "fa-regular fa-circle-right",
          text: "Instructor Traning",
        },
      ],
    },
  ],
});
