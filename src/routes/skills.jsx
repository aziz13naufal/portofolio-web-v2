import { useState } from "react"
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

export default function Skills() {
    const [active, setActive] = useState("language");

    const handler = (item) => {
        setActive(item)
    }

    return (
        <div className="w-full h-screen flex flex-col items-center px-6">
            <div className="mx-auto mt-32 overflow-x-auto w-full text-center sm:w-fit">
                <ul className="flex font-semibold">
                    <li 
                    onClick={() => setActive("language")}
                    className={"px-5 mx-3 rounded-sm cursor-pointer " + (active === "language" ? "text-[#513c2c] bg-[#f1eae4]" : "")}
                    >Language</li>
                    <li 
                    onClick={() => setActive("framework")}
                    className={"px-5 mx-3 rounded-sm cursor-pointer " + (active === "framework" ? "text-[#513c2c] bg-[#f1eae4]" : "")}
                    >Framework</li>
                    <li 
                    onClick={() => setActive("library")}
                    className={"px-5 mx-3 rounded-sm cursor-pointer " + (active === "library" ? "text-[#513c2c] bg-[#f1eae4]" : "")}
                    >Library</li>
                    <li 
                    onClick={() => setActive("dbms")}
                    className={"px-5 mx-3 rounded-sm cursor-pointer " + (active === "dbms" ? "text-[#513c2c] bg-[#f1eae4]" : "")}
                    >DBMS</li>
                </ul>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                {active === "language" ? (
                    <>
                        <SkillCard image={HTMLImage} name="HTML" />
                        <SkillCard image={CSSImage} name="CSS" />
                        <SkillCard image={JSImage} name="JavaScript" />
                        <SkillCard image={NodeJSImage} name="Node.js" />
                    </>
                ) : active === "framework" ? (
                    <>
                        <SkillCard image={NextJSImage} name="Next.js" />
                        <SkillCard image={ExpressImage} name="Express" />
                    </>
                ) : active === "library" ? (
                    <>
                        <SkillCard image={ReactImage} name="React" />
                        <SkillCard image={PrismaImage} name="Prisma" width="70px" />
                        <SkillCard image={TailwindImage} name="Tailwind CSS" />
                        <SkillCard image={BootstrapImage} name="Bootstrap" width="85px" />
                    </>
                ) : active === "dbms" ? (
                    <>
                        <SkillCard image={PostgresqlImage} name="PostgreSQL" width="70px" />
                        <SkillCard image={MysqlImage} name="MySQL" />
                        <SkillCard image={MongoDBlImage} name="MongoDB" width="40px" />
                    </>
                ) : (
                    <>
                    </>
                )}
            </div>
        </div>
    )
}