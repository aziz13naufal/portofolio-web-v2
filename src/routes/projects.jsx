import ProjectCard from "../components/projectCard"
import KiraWebsite from "./../assets/img/kira-website.png"
import PortofolioWeb1 from "./../assets/img/web-portofolio-1.png"
import MovieDB from "./../assets/img/movie-db.png"
import MRTOPUP from "./../assets/img/MRTOPUP.png"

export default function Projects() {
  return (
    <div className="bg-[#513c2c] flex flex-col items-center pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-7 mt-32">
        <ProjectCard
        image={KiraWebsite}
        title="Kira Website"
        desc="This website is inspired by the Death Note anime, where people can write down a villain's name that can be seen by the public."
        class="row-start-1 row-end-4" />

        <ProjectCard 
        image={MRTOPUP}
        title="MR TOP UP"
        desc="Create a top up website interface, according to client request" />
        
        <ProjectCard
        image={PortofolioWeb1}
        title="Portofolio Website v1"
        desc="My first portfolio website" />

        <ProjectCard
        image={MovieDB}
        title="Movie Database"
        desc="Using the Fetch API to retrieve data from the OMDB API" />

      </div>
    </div>
  )
}
