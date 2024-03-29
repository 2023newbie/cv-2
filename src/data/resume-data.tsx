import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, HackerrankIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vũ Ngọc Đức",
  initials: "BJ",
  location: "Cụm 1, Vĩnh Quỳnh, Thanh Trì, Hà Nội",
  locationLink: "https://www.google.com/maps/@20.9396192,105.8369638,18.75z?entry=ttu",
  about:
    "Lập trình viên Frontend - ReactJS",
  summary:
    "Là một lập trình viên định hướng theo Frontend, mình mong muốn tạo nên các giao diện hoàn chỉnh, đáp ứng nhu cầu thẩm mỹ cũng như trải nghiệm người dùng.",
  avatarUrl: "https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/422959168_336372986053086_2561621154019638612_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=sE6HI8MM3-wAX-wJvdB&_nc_ht=scontent.fhan18-1.fna&oh=00_AfCTjprrQL_q4zG3yJOsV-GpGTX8NEaNS37CRd3Pi5ahKA&oe=65E2C977",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "ducwebdev@gmail.com",
    tel: "+84334281675",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/2023newbie",
        icon: GitHubIcon,
      },
      // {
      //   name: "Hackerrank",
      //   url: "https://www.hackerrank.com/profile/ducwebdev",
      //   icon: HackerrankIcon,
      // },
    ],
  },
  education: [
    {
      school: "Funix - Trung tâm đào tạo lập trình",
      degree: "Chứng chỉ lập trình viên Javascript Fullstack",
      start: "3/2023",
      end: "10/2023",
    },
    {
      school: "Cao đẳng Kinh tế Công nghiệp Hà Nội",
      degree: "Quản trị kinh doanh",
      start: "9/2019",
      end: "7/2022",
    },
  ],
  skills: [
    "CSS/Tailwind",
    "JavaScript",
    "TypeScript",
    "ReactJS",
  ],
  projects: [
    {
      title: "Fitness",
      techStack: [
        "Side Project",
        "TypeScript - ReactJS",
        "Tailwind",
        "Responsive",
        "Animation"
      ],
      description: "Một trang landing page giới thiệu về phòng Gym.",
      link: {
        href: "https://fitness-p78w.onrender.com/",
      },
    },
    {
      title: "ProShop",
      techStack: [
        "Following Code", 
        "ReactJS", 
        "React-router",
        "Redux/toolkit"
      ],
      description: "Một trang web mua sắm đồ công nghệ.",
      link: {
        href: "https://proshop-x6f6.onrender.com/",
      }
    },
    {
      title: "BoutiqueShop",
      techStack: ["Side Project", "ReactJS", "React-router", "Redux", "pure CSS"],
      description:
        "Một trang web thương mại điện tử, mua sắm đồ Apple.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://ecommerce-hnh0.onrender.com",
      },
    },
    {
      title: "Booking",
      techStack: ["Side Project", "ReactJS", "React-router", "pure CSS"],
      description:
        "Một trang web tìm kiếm khách sạn và đặt phòng.",
      logo: JarockiMeLogo,
      link: {
        href: "https://booking-fq7o.onrender.com/",
      },
    },
    {
      title: "Tailwind Landing Pages",
      techStack: ["Side Project", "TailwindCSS"],
      description:
        "Tổng hợp các landing page bằng Tailwind.",
      logo: JarockiMeLogo,
      link: {
        href: "https://2023newbie.github.io/landing-page-tailwind/",
      },
    },
  ],
} as const;
