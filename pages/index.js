import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import sanjida from "../public/sanjida.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  // State variables for the form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio by Sanjida</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbySanji</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1g6f23_ajXVDR07EQiMUloJsadeoqidrs/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Sanjida Akter
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Web & MERN Stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am enthusiastic about learning new technologies and find joy in
              web development, where I can creatively solve problems and deliver
              innovative solutions. Join me down below and let's get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="mailto:sanjidakter2304@gmail.com">
                <AiFillMail />
              </a>

              <a href="https://www.linkedin.com/in/sanjida-akter-594520217/">
                <AiFillLinkedin />
              </a>

              <a href="https://github.com/Sanjidakter">
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={sanjida} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              During my academic years in Computer Science and Engineering
              (CSE), I have undertaken numerous projects as part of my web
              courses, honing my skills and knowledge in the field.
              Additionally, I have pursued several personal projects that have
              allowed me to explore and apply my expertise in web development.
              These
              <span className="text-teal-500"> knowledge </span>
              and <span className="text-teal-500">keen interest </span>
              have equipped me with practical hands-on experience and a deep
              understanding of creating dynamic and engaging digital solutions.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap justify-center">
            <div className="basis-1/3 flex-2 ">
              <a
                href="https://toy-store-learn.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-2">
              <a
                href="https://chef-recipe-book-ffb0b.web.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                  alt="Description of the image"
                />
              </a>
            </div>

            <div className="basis-1/3 flex-2">
              <a
                href="https://sanjidakter.github.io/GIOIA/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web3}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-2">
              <a
                href="https://peppy-granita-c99b8c.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web4}
                />
              </a>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Technical Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I have been passionately working on honing my technical skills
              since my first year of undergraduate studies. In addition to my
              academic courses, I have dedicated countless hours to learning and
              mastering various programming languages, frameworks, tools, and
              software. I am always eager to expand my knowledge and explore new
              technologies.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Frameworks/Libraries
              </h3>
              <p className="py-2">
                Creating elegant websites using different framework & libraries.
              </p>
              <h4 className="py-4 text-teal-600">Framework/Libraries I Use</h4>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">React Js</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Coding Languages I'm familiar with
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Languages</h4>
              <p className="text-gray-800 py-1">C++</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">PHP</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Tools & IDE</h3>
              <p className="py-2">
                Currently using this tools and in quest of exploring more
              </p>
              <h4 className="py-4 text-teal-600"> Tools I Use</h4>
              <p className="text-gray-800 py-1">VS code</p>
              <p className="text-gray-800 py-1">Git</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Vercel</p>
            </div>
          </div>
        </section>
        <section>
          <div className="mt-10">
            <h3 className="text-3xl py-1 dark:text-white">Contact Me</h3>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-gray-800 dark:text-gray-200"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-gray-800 dark:text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block mb-2 text-gray-800 dark:text-gray-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
