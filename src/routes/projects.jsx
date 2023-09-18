import ProjectCard from "../components/projectCard"
import KiraWebsite from "./../assets/img/kira-website.png"
import PortofolioWeb1 from "./../assets/img/web-portofolio-1.png"
import MovieDB from "./../assets/img/movie-db.png"
import MRTOPUP from "./../assets/img/MRTOPUP.png"

import SkillCard from "../components/skillCard";
import HTMLImage from "./../assets/logo/html.png";
import CSSImage from "./../assets/logo/css.png";
import JSImage from "./../assets/logo/js.png";
import NodeJSImage from "./../assets/logo/nodejs.png";
import NextJSImage from "./../assets/logo/nextjs.png";
import ExpressImage from "./../assets/logo/expressjs.png";
import ReactImage from "./../assets/logo/reactjs.png";
import PrismaImage from "./../assets/logo/prisma.png";
import TailwindImage from "./../assets/logo/tailwind.png";
import BootstrapImage from "./../assets/logo/bootstrap.png";
import PostgresqlImage from "./../assets/logo/postgresql.png";
import MysqlImage from "./../assets/logo/mysql.png";
import MongoDBlImage from "./../assets/logo/mongodb.png";
import TypescriptImage from "./../assets/logo/typescript.png";

export default function Projects() {
  return (
    <div className="bg-[#513c2c] flex flex-col items-center pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-7 mt-32">
        <ProjectCard
        image={KiraWebsite}
        title="Kira Website"
        desc="This website is inspired by the Death Note anime, where people can write down a villain's name that can be seen by the public."
        class="row-start-1 row-end-4"
        techStack={
          <>
            <img src={TypescriptImage} className="mr-3" />
            <img src={PrismaImage} className="mr-3" />
            <img src={PostgresqlImage} className="mr-3" />
            <img src={TailwindImage} className="mr-3 h-4" />
          </>
          }
          url="https://kira-website.vercel.app/"
          repo="https://github.com/aziz13naufal/kira-website" />

        <ProjectCard 
        image={MRTOPUP}
        title="MR TOP UP"
        desc="Create a top up website interface, according to client request"
        techStack={
          <>
            <img src={CSSImage} className="mr-3" />
            <img src={BootstrapImage} className="mr-3" />
          </>
          } 
          url="https://mr-top-up.vercel.app/"
          repo="none" />
        
        <ProjectCard
        image={PortofolioWeb1}
        title="Portofolio Website v1"
        desc="My first portfolio website"
        techStack={
          <>
            <img src={TailwindImage} className="mr-3 h-4" />
          </>
          }
        url="https://portofolio-web-v1.vercel.app/"
        repo="https://github.com/aziz13naufal/portofolio-web-v1" />

        <ProjectCard
        image={MovieDB}
        title="Movie Database"
        desc="Using the Fetch API to retrieve data from the OMDB API"
        techStack={
          <>
            <img src={JSImage} className="mr-3" />
            <img src={BootstrapImage} className="mr-3" />
          </>
          } 
        url="https://vercel.com/aziz13naufal/wpu-movie-db"
        repo="https://github.com/aziz13naufal/WPU-movie-db"
        linkColor="black" 
        />

      </div>
    </div>
  )
}
