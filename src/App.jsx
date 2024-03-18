import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fsd from "./pages/Fsd";
import Ds from "./pages/Ds";
import Cs from "./pages/Cs";
import Career from "./pages/Career";

const datas = [
  {
    id: 1,
    img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs-768x432.png",
    title: "How to Render an Array of Objects in React? [in 3 easy steps]",
    author: "Tarun Singh",
    date: "22 Nov, 2023",
    time: "7",
    views: 99999,
    category: "fsd",
  },
  {
    id: 2,
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html-1200x801.jpg",
    title: "Best Full-Stack Development Project Ideas in 2024 ",
    author: "Isha Sharma",
    date: "13 Dec, 2023",
    time: "4",
    views: 53999,
    category: "fsd",
  },
  {
    id: 3,
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-768x402.webp",
    title: "How Long Would It Take to Be a Full Stack Developer?",
    author: "Meghana",
    date: "Oct 20, 2023",
    time: "3",
    views: 99999,
    category: "fsd",
  },
  {
    id: 4,
    img: "https://www.guvi.in/blog/wp-content/uploads/2021/09/Full-Stack-Developer-course-syllabus.png",
    title:
      "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 [UPDATED]",
    author: "Tarun Singh",
    date: "Dec 14, 2023",
    time: "6",
    views: 4398,
    category: "fsd",
  },
  {
    id: 5,
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-768x402.webp",
    title: "12 Real-World Data Science Examples: Power Of Data Science",
    author: "Lukesh S",
    date: "Oct 21, 2023",
    time: "7",
    views: 2939,
    category: "ds",
  },
  {
    id: 6,
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-768x512.jpg",
    title: "How to become a Data Scientist after Mechanical Engineering?",
    author: "prokash",
    date: "Oct 03, 2023",
    time: "3",
    views: 1422,
    category: "ds",
  },
  {
    id: 7,
    img: "https://www.guvi.in/blog/wp-content/uploads/2022/06/Your-paragraph-text-1200x600.png",
    title: "Data Science vs Data Analytics | Best Career Choice in 2024",
    author: "Lahari",
    date: "Mar 16, 2024",
    time: "3",
    views: 1270,
    category: "ds",
  },
  {
    id: 8,
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science-1200x628.png",
    title: "How Long Would It Take to Learn Data Science?",
    author: "Meghana",
    date: "22 Nov, 2023",
    time: "4",
    views: 1136,
    category: "ds",
  },
  {
    id: 9,
    img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1200x675.png",
    title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    author: "Tushar Vinocha",
    date: "Oct 04, 2023",
    time: "5",
    views: 1237,
    category: "cs",
  },
  {
    id: 10,
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity-768x480.webp",
    title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
    author: "Jaishree Tomar",
    date: "Dec 04, 2023",
    time: "3",
    views: 1138,
    category: "cs",
  },
  {
    id: 11,
    img: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1200x675.png",
    title: "8 Different Types of Cybersecurity and Threats Involved",
    author: "Tarun Singh",
    date: "Sep 08, 2023",
    time: "4",
    views: 586,
    category: "cs",
  },
  {
    id: 12,
    img: "https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact-1200x375.jpg",
    title: "Top 7 Cyber Security Attacks in Real Life",
    author: "Admin",
    date: "Oct 05, 2023",
    time: "5",
    views: 399,
    category: "cs",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home datas={datas} />} />
        <Route path="fsd" element={<Fsd datas={datas} />} />
        <Route path="ds" element={<Ds datas={datas} />} />
        <Route path="cs" element={<Cs datas={datas} />} />
        <Route path="careers" element={<Career datas={datas} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
