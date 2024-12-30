
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
export default function Home(){
  return(
  <>
  <div className="min-h-screen bg-black">
  {/* Header Section */}
  <header className="fixed top-0 w-full flex justify-between items-center p-2 bg-black shadow-md z-20 border-b-2 border-orange-600  shadow-orange-800 border-opacity-10 py-4"> 
    <div className="logo text-4xl font-bold ml-4">
      <h1 className="mt-4">Beena<span className="text-orange-600"> Anum</span></h1>
    </div>
    <nav className=" md:flex absolute top-full left-0 w-full md:w-auto m-1 p-3 md:space-x-6 md:items-center md:relative ">
      <ul className="flex gap-5 text-lg font-bold ">
        <li><a href="/" className="hover:text-orange-600 hover:underline">Home</a></li>
        <li><a href="#about" className="hover:text-orange-600 hover:underline">About</a></li>
        <li><a href="#projects" className="hover:text-orange-600 hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:text-orange-600 hover:underline">Contact</a></li>
      </ul>
    </nav>  
   
    <div className="mr-12"> 
     <a href="#contact">
      <button className="btn bg-orange-600 text-black w-32 h-10 rounded-full text-lg font-bold transition-transform transform duration-200
     hover:bg-orange-400 hover:scale-105">Contact Me</button></a>
    </div>
  </header>

  {/* -- Home Section -- */}
  <section className="pt-20 text-center py-10 px-5">
    <div className="mx-auto w-52 h-52 rounded-full mt-12 shadow-lg border-4 border-orange-600 shadow-orange-700 border-opacity-5 flex justify-center items-center">
      <img src="Profile-Picture.webp" alt="Profile" className="w-52 h-52 rounded-full" />
    </div>
    <h1 className="mt-5 text-4xl font-bold">Welcome To My Portfolio</h1>
    <h1 className="mt-5 text-4xl font-bold filter drop-shadow">
      I'm Beena <span className="text-orange-600">Anum</span> 
    </h1>
    <h2 className="text-2xl font-semibold text-tomato filter drop-shadow mt-2 text-orange-600">Frontend Developer</h2>
    <p className="text-base mt-5 leading-7 max-w-xl mx-auto">
      A dedicated and passionate web developer with a focus on creating modern, responsive, and user-friendly websites.
    </p>

    <div className="mt-5 space-x-4">
      <a href="#contact"><button className="btn bg-orange-600 text-black font-bold py-2 px-5 rounded-full hover:bg-orange-400 hover:scale-105">Contact Me</button></a>

      <a href="#resume"><button className="btn bg-orange-600 text-black font-bold py-2 px-5 rounded-full hover:scale-105 hover:bg-orange-400">My Resume</button></a>
    </div>

    {/* -- Social Media Links -- */}
    <div className="flex justify-center items-center space-x-5 mt-5">
      <a href="https://facebook.com" className="bg-orange-600 w-10 h-10 rounded-full flex justify-center  shadow-orange-700 items-center hover:scale-110 transition duration-200"><FaFacebook /></a>
      <a href="mailto:beenaanum@gmail.com" className="bg-orange-600 w-10 h-10 rounded-full flex justify-center items-center hover:scale-110 transition duration-200"><SiGmail /></a>
      <a href="https://linkedin.com" className="bg-orange-600 w-10 h-10 rounded-full flex justify-center items-center hover:scale-110 transition duration-200"><FaLinkedin /></a>
      <a href="https://github.com" className="bg-orange-600 w-10 h-10 rounded-full flex justify-center items-center hover:scale-110 transition duration-200"><FaGithub /></a>
    </div>
  </section>

   {/* About Section */}
   <section id="about" className="text-center py-20 px-5">
   <h1 className="text-orange-600 text-4xl font-bold mb-10">About Me</h1>
   <p className="text-base mt-5 leading-7 max-w-xl mx-auto">
   I am a web developer with a strong focus on creating dynamic, responsive, and user-friendly web applications.I specialize in front-end technologies such as HTML, CSS, JavaScript, TypeScript, and have a strong interest in UX/UI design. I'm always eager to learn new technologies and improve my skills to stay up-to-date with industry trends.</p>
  </section>

  {/* -- Projects Section --*/}
  <section id="projects" className="text-center py-20 px-5">
    <h1 className="text-orange-600 text-4xl font-bold mb-10">My Projects</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-16">

      <div className="bg-black w-full p-6 mx-2 rounded-lg shadow-orange-700 border-opacity-5 shadow-md border border-orange-600 space-y-4 transition-transform transform hover:scale-105">
        <h2 className="text-xl font-bold mb-2 text-orange-600">Static Resume </h2>
        <a href="https://static-resume-olive.vercel.app/" target="_blank">
          <img src="download(1).png" alt="Static Resume" className="rounded-lg w-full h-auto" />
        </a>
        <h2 className="text-xl font-bold mb-2 text-orange-600"> Milestone 1 </h2>
      </div>
    
     <div className="bg-black w-full p-6 mx-2 rounded-lg shadow-orange-700 border-opacity-5 shadow-md border border-orange-600 space-y-4 transition-transform transform hover:scale-105">
        <h2 className="text-xl font-bold mb-2 text-orange-600">Dynamic Resume</h2>
        <a href="https://static-resume-olive.vercel.app/" target="_blank">
          <img src="download(2).png" alt="Dynamic Resume" className="rounded-lg w-full h-auto" />
        </a>
        <h2 className="text-xl font-bold mb-2 text-orange-600"> Milestone 2 </h2>
      </div>
  <div className="bg-black w-full p-6 mx-2 rounded-lg shadow-orange-700 border-opacity-5 shadow-md border border-orange-600 space-y-4 transition-transform transform hover:scale-105">
        <h2 className="text-xl font-bold mb-2 text-orange-600">Editable Resume</h2>
        <a href="https://static-resume-olive.vercel.app/" target="_blank">
          <img src="download(3).png" alt="Editable Resume" className="rounded-lg w-full h-auto" />
        </a>
        <h2 className="text-xl font-bold mb-2 text-orange-600"> Milestone 3 </h2>
      </div>
  <div className="bg-black w-full p-6 mx-2 rounded-lg shadow-orange-700 border-opacity-5 shadow-md border border-orange-600 space-y-4 transition-transform transform hover:scale-105">
        <h2 className="text-xl font-bold mb-2 text-orange-600">Shareable Resume</h2>
        <a href="https://static-resume-olive.vercel.app/" target="_blank">
          <img src="download(4).png" alt="Shareable Resume" className="rounded-lg w-full h-auto" />
        </a>
        <h2 className="text-xl font-bold mb-2 text-orange-600"> Milestone 4</h2>
      </div>
      <div className="bg-black w-full p-6 mx-2 rounded-lg shadow-orange-700 border-opacity-5 shadow-md border border-orange-600 space-y-4 transition-transform transform hover:scale-105">
        <h2 className="text-xl font-bold mb-2 text-orange-600">Dynamic-Country-App</h2>
        <a href="https://static-resume-olive.vercel.app/" target="_blank">
          <img src="dynamic-country-app.png" alt="Dynamic-Country-App" className="rounded-lg w-full h-auto" />
        </a>
        <h2 className="text-xl font-bold mb-2 text-orange-600"> Milestone 5 </h2>
      </div>
      <div className="bg-black w-full p-6 mx-2 rounded-lg shadow-orange-700 border-opacity-5 shadow-md border border-orange-600 space-y-4 transition-transform transform hover:scale-105">
        <h2 className="text-xl font-bold mb-2 text-orange-600">Dynamic-Country-Routes</h2>
        <a href="https://static-resume-olive.vercel.app/" target="_blank">
          <img src="dynamic-country-route.png" alt="Dynamic-Country-Routes" className="rounded-lg w-full h-auto" />
        </a>
        <h2 className="text-xl font-bold mb-2 text-orange-600"> Milestone 6 </h2>
      </div>
      <div className="bg-black w-full p-6 mx-2 rounded-lg shadow-orange-700 border-opacity-5 shadow-md border border-orange-600 space-y-4 transition-transform transform hover:scale-105">
        <h2 className="text-xl font-bold mb-2 text-orange-600">My Portfolio</h2>
        <a href="https://static-resume-olive.vercel.app/" target="_blank">
          <img src="portfolio.png" alt="My Portfolio" className="rounded-lg w-full h-auto" />
        </a>
        <h2 className="text-xl font-bold mb-2 text-orange-600"> Milestone 7 </h2>
      </div>
      <div className="bg-black w-full p-6 mx-2 rounded-lg shadow-orange-700 border-opacity-5 shadow-md border border-orange-600 space-y-4 transition-transform transform hover:scale-105">
        <h2 className="text-xl font-bold mb-2 text-orange-600">Simple Nested-routing-app</h2>
        <a href="https://static-resume-olive.vercel.app/" target="_blank">
          <img src="nested-routing.png" alt="Simple Nested-routing-app" className="rounded-lg w-full h-auto" />
        </a>
        <h2 className="text-xl font-bold mb-2 text-orange-600"> Milestone 8 </h2>
      </div>
      {/* -- Add more projects in similar structure -- */}
    </div>
  </section>

  {/* -- Contact Section -- */}
  <section id="contact" className="text-center py-20 px-5">
    <h1 className="text-orange-600 text-4xl font-bold mb-10">Contact Me</h1>
    <form className="max-w-md mx-auto space-y-4 bg-black p-6 rounded-lg  border border-orange-600">

    <h2 className="text-orange-600 text-4xl font-bold mb-10">Contact</h2>
      <input type="text" placeholder="Your Name" required className="w-full p-2 border border-gray-400 rounded-lg" />
      <input type="email" placeholder="Your Email" required className="w-full p-2 border border-gray-400 rounded-lg" />
      <textarea placeholder="Your Message" required className="w-full p-2 border border-gray-400 rounded-lg"></textarea>
      <button type="submit" className="w-full py-2 bg-orange-600 rounded-lg hover:bg-orange-400">Send Message</button>
    </form>
  </section>

  {/* -- Footer Section -- */}
  <footer className="w-full text-center py-4 bg-black mt-auto">
    <div className="flex justify-center space-x-5">
      <a href="https://facebook.com" className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition duration-200"><FaFacebook /></a>
      <a href="mailto:beenaanum@gmail.com" className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition duration-200"><SiGmail /></a>
      <a href="https://linkedin.com" className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition duration-200"><FaLinkedin /></a>
      <a href="https://github.com" className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition duration-200"><FaGithub /></a>
    </div>
    <p className="font-bold">© 2024 B.A All Right Reseved</p>
  </footer>
</div>
</>
  );
}