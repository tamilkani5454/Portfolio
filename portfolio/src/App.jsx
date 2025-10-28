import React from 'react'
import { useState } from 'react';
import './App.css'
import profile from "./assets/WhatsApp Image 2025-10-27 at 12.26.24_57f36359.jpg"
import { projects, service, about, skils } from './assets/files.js';
import { FaCode, FaCloudUploadAlt, FaServer, FaPaintBrush, FaLinkedin, FaBars, FaTimes, FaGithub, FaEnvelope, FaInstagram, FaFilePdf, FaMapMarkerAlt } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const icons = {
    FaCode: <FaCode className="text-blue-700 text-3xl" />,
    RiApiLine: <RiCodeSSlashLine className="text-blue-700 text-3xl" />,
    FaCloudUploadAlt: <FaCloudUploadAlt className="text-blue-700 text-3xl" />,
    FaPaintBrush: <FaPaintBrush className="text-blue-700 text-3xl" />,
    FaServer: <FaServer className="text-blue-700 text-3xl" />,
};


const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [message, setMessage] = useState(false);
    const skills = skils
    const aboutMe = about
    const Projects = projects
    const services = service

    const sendmail = async () => {
        if (!name || !email || !message) {
            toast.error('Please fill all the fields!');
            return;
        }
        try {
            const data = await fetch("https://portfolio-backend-two-gilt.vercel.app/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name, email: email, message: message })
            })
            const res = await data.json();
            if (res.success) {
                toast.success('Message sent successfully!');

            } else {
                toast.error('Failed to send message. Please try again later.');

            }
        }
        finally { }


    }


    return (
        <div className='text-sm sm:text-base   '>
            <div className='z-1000 sticky top-0'>
                <div className='flex justify-between  bg-[#040b20] text-center h-13 items-center px-3 md:px-9 ' >
                    <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold  text-blue-500">Thamizhkani</h1>
                    <div className='text-center md:hidden'>
                        <button className={`${menuOpen ? 'hidden' : 'visible'} text-xl text-white `} onClick={() => setMenuOpen(true)}><FaBars /></button>
                        <button className={`${menuOpen ? 'visible' : 'hidden'} text-xl text-white `} onClick={() => setMenuOpen(false)}><FaTimes /></button>
                    </div>
                    <div className='hidden md:flex gap-10 capitalize font-bold text-white p-4'>
                        <a href="#about">about</a>
                        <a href="#skills">skills</a>
                        <a href="#projects">projects</a>
                        <a href="#service">service</a>
                        <a href="#contact">contact</a>
                    </div>
                </div>
            </div>
            <div className={`${menuOpen ? 'translate-y-0 visible' : '-translate-y-[1100px] invisible'} capitalize font-bold text-white fixed flex flex-col  gap-5  items-center py-3 duration-700 bg-[#040b20] w-full  md:hidden `}>
                <a onClick={() => setMenuOpen(false)} href="#about">about</a>
                <a onClick={() => setMenuOpen(false)} href="#skills">skills</a>
                <a onClick={() => setMenuOpen(false)} href="#projects">projects</a>
                <a onClick={() => setMenuOpen(false)} href="#service">service</a>
                <a onClick={() => setMenuOpen(false)} href="#contact">contact</a>
            </div>

            {/* --------------------------------------------ABOUT SESSION----------------------------------------- */}
            <section id='about'>
                <div className='flex flex-col py-4 bg-[#02091a] md:min-h-screen md:pt-19 md:justify-between'  >
                    <div className='flex flex-col items-center justify-center gap-2.5 text-cente md:flex-row md:justify-evenly'>
                        <img src={profile} alt="profile image" className='mt-10 rounded-full w-[170px] h-[170px] sm:w-[180px] sm:h-[180px] lg:w-[230px] lg:h-[230px] md:mt-0 ' />
                        <div className='flex flex-col items-center justify-center gap-2.5 text-center'>
                            <span className='flex gap-2'><h1 className='font-bold text-white text-xl flex'>Hi,I'm</h1><h1 className='font-bold text-blue-500 text-xl flex '>Thamizhkani</h1></span>
                            <h1 className='font-bold text-xl flex px-2 text-blue-500 '> MERN Stack & DevOps Engineer</h1>
                            <a href="../public/thamizhkani_resume.pdf" download="Thamizhkani_Resume.pdf" className='flex bg-[#1E293B] text-white hover:shadow-[0_0_10px_rgba(59,130,246,0.6)] active:shadow-[0_0_10px_rgba(59,130,246,0.6)] p-2 rounded-2xl font-medium  text-center'>Download CV</a>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-3.5 items-center justify-center py-3 shadow-md px-5 md:items-stretch md:justify-evenly md:py-10 md:px-20 ' >
                        {aboutMe.map((info, index) => {
                            return (
                                <div key={index} className='bg-[#1E293B] px-4 py-2 rounded-xl text-sm sm:text-base transition transform hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(59,130,246,0.6)] md:w-70 md:h-50 items-centre justify-center' >
                                    <p className='text-[#9aa8bd]'>{info.about}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>

            {/* ---------------------------------------------SKILLS SESSION ---------------------------------------------*/}
            <section id='skills'>
                <div className='flex flex-col items-center bg-slate-900 md:min-h-screen' >
                    <span className='flex gap-2.5 mt-17'><h1 className='text-3xl font-semibold text-white text-center mb-6'>Techincal</h1><h1 className='text-3xl font-semibold text-blue-500 text-center mb-6'> Skills</h1></span>
                    <div className='grid grid-cols-1 gap-3 md:grid-cols-2' >
                        {skills.map((skill, index) => {
                            return (
                                <div className=" text-white px-6 py-5 rounded-xl max-w-md mx-auto" key={index}>
                                    <h2 className="text-2xl font-semibold text-blue-500 text-center mb-4">{skill.head}</h2>

                                    <div className="flex flex-wrap justify-center gap-3">
                                        <span className="bg-[#1E293B] px-4 py-2 rounded-full text-sm sm:text-base transition transform hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]">
                                            {skill.skill1}
                                        </span>
                                        <span className="bg-[#1E293B] px-4 py-2 rounded-full text-sm sm:text-base transition transform hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]">
                                            {skill.skill2}
                                        </span>
                                        <span className="bg-[#1E293B] px-4 py-2 rounded-full text-sm sm:text-base transition transform hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]">
                                            {skill.skill3}
                                        </span>
                                        <span className="bg-[#1E293B] px-4 py-2 rounded-full text-sm sm:text-base transition transform hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]">
                                            {skill.skill4}
                                        </span>
                                        <span className="bg-[#1E293B] px-4 py-2 rounded-full text-sm sm:text-base transition transform hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]">
                                            {skill.skill5}
                                        </span>
                                        {skill.skill6 ? <span className="bg-[#1E293B] px-4 py-2 rounded-full text-sm sm:text-base transition transform hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]">
                                            {skill.skill6}
                                        </span> : ''}

                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>


            {/*  ---------------------------------------------PROJECTS SESSION  ---------------------------------------------*/}
            <section id='projects'>
                <div className="bg-[#02091a] text-white py-14 px-5 sm:px-10">
                    <div className="text-center mb-10">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3"><span className="text-white">Latest </span><span className="text-blue-500">Projects</span></h1>
                        <p className="text-gray-400 text-sm sm:text-base">A showcase of my recent work in web development</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {Projects.map((project, index) => (
                            <div key={index} className="bg-[#0a1224] p-5 rounded-2xl shadow-md hover:scale-[1.02] transition-transform duration-300 w-full sm:w-80">
                                <img src={project.image} alt={project.head} className="w-full h-48 object-cover rounded-xl mb-4" />
                                <div>
                                    <h1 className="text-xl font-semibold mb-2">{project.head}</h1>
                                    <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {[project.tools1, project.tools2, project.tools3, project.tools4, project.tools5].filter(Boolean).map((tool, i) => (
                                            <span key={i} className="text-xs bg-[#1e293b] text-gray-300 px-3 py-1 rounded-full">{tool}</span>
                                        ))}
                                    </div>
                                    {project.links && (
                                        <a
                                            href={project.links}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block text-sm bg-[#1e40af] hover:bg-[#2563eb] text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* <div className='bg-[#02091a]'>
                    <div>
                        <h1>Latest Projects</h1>
                        <p>A showcase of my recent work in web deveopment</p>
                    </div>
                    <div>
                        {Projects.map((project, index) => {
                            return (
                                <div key={index}>
                                    <img src={project.image} alt="" className='w-60' />
                                    <div>
                                        <h1>{project.head}</h1>
                                        <p>{project.description}</p>
                                        <div>
                                            <p>{project.tools1}</p>
                                            <p>{project.tools2}</p>
                                            <p>{project.tools3}</p>
                                            <p>{project.tools4}</p>
                                            <p>{project.tools5}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            )
                        })}
                    </div>
                </div> */}

            </section>

            {/*  ---------------------------------------------SERVICES SESSION  ---------------------------------------------*/}
            <section id='service'>
                <div className=" bg-slate-900 flex flex-col items-center justify-center px-7 pt-12 gap-3 ">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3"><span className="text-white">My </span><span className="text-blue-500"> Services</span></h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center pb-6'>
                        {services.map((item, index) => (
                            <div key={index} className="bg-[#02091a] p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300">
                                <div className="flex flex-col text-center items-center gap-3 mb-3">
                                    {icons[item.icon]}
                                    <h3 className="text-white text-xl font-semibold">{item.head}</h3>
                                </div>
                                <p className="text-[#94a3b8]">{item.content}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/*  ---------------------------------------------CONTACT SESSION  ---------------------------------------------*/}
            <section id="contact" className="from-gray-900 to-gray-800 bg-[#02091a] text-white py-18 px-5 sm:px-10 lg:px-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-blue-500">Contact Me</h2>
                    {/* --------------------------- Contact Info -------------------------------------------- */}
                    <div className="text-center mb-8 space-y-3">
                        <p className="text-lg text-gray-300">Feel free to reach out for collaborations or freelance work!</p>
                        <p className="text-gray-400 flex justify-center items-center gap-2"><FaMapMarkerAlt className="text-blue-700" /> Based in India 🇮🇳</p>
                        <a href="mailto:thamizhkani5454@gmail.com" className=" flex justify-center items-center gap-2 text-lg text-gray-400 hover:text-blue-700  transition-all"><span className='text-blue-700'><FaEnvelope /></span>thamizhkani5454@gmail.com</a>
                        {/* ------------------------------- Social Links ----------------------------- */}
                        <div className="flex justify-center gap-6 mt-5">
                            <a href="mailto:thamizhkani5454@gmail.com" className="text-gray-400 hover:text-blue-700 text-2xl transition-all"><FaEnvelope /></a>
                            <a href="https://www.linkedin.com/in/thamizhkani-p-438648306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 text-2xl transition-all"><FaLinkedin /></a>
                            <a href="https://github.com/tamilkani5454" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 text-2xl transition-all"><FaGithub /></a>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 text-2xl transition-all"><FaFilePdf /></a>
                            <a href="https://www.instagram.com/thamizh_kani_?igsh=dGkxYTZ4eXY0ZmZo " target="_blank" className="text-gray-400 hover:text-blue-700 text-2xl transition-all"><FaInstagram /></a>
                        </div>
                    </div>
                    {/* --- Contact Form --- */}
                    <form action="#" className="bg-gray-800 rounded-2xl p-6 sm:p-10 shadow-lg space-y-5">
                        <div className="flex flex-col sm:flex-row gap-5">
                            <input type="text" placeholder="Name" className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-600" onChange={(e) => setName(e.target.value)} />
                            <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-600" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <textarea placeholder="Message" rows="5" className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-600" onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-all" onClick={sendmail}>Send Message</button>
                    </form>
                </div>
            </section>

            {/*  ---------------------------------------------FOOTER SESSION  ---------------------------------------------*/}
            <footer className="bg-gray-900 text-gray-400 text-center py-3">
                © {new Date().getFullYear()} ThamizhKani | All Rights Reserved
            </footer>
            <ToastContainer />
        </div>
    )
}
export default App

