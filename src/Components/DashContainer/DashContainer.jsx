import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MedicalHistory from '../MedicalHistory/MedicalHistory'
import Logo from "./../../assets/bg2.jpg"

function DashContainer() {
    const { user, route } = useSelector(state => state.auth)
    return (
        <div>
            <style dangerouslySetInnerHTML={{ __html: "\n\t@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap');\n\n\t* {\n\t\tfont-family: 'Noto Sans JP', sans-serif;\n\t}\n\n\t.bg-app {\n\t\tbackground-image: url('');\n\t}\n" }} />
            <div className="flex flex-row items-center justify-center min-h-screen bg-center bg-no-repeat bg-cover opacity-80 bg-app" style={{ backgroundImage: `url(${Logo})` }}>
                <main className="flex flex-col w-full max-w-5xl m-4 overflow-hidden bg-white shadow-lg lg:flex-row backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl lg:m-6">
                    <div className="flex-1 p-4 lg:p-6">
                        <div className="flex items-center mb-8 text-4xl text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="ml-4 font-bold">Bienvenidx {user.nombre}</div>
                        </div>
                        <div className="grid grid-cols-1 grid-rows-4 gap-4 md:grid-rows-2 md:grid-cols-2">
                            <MedicalHistory/> 
                            <div className="relative flex flex-col p-4 bg-white rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined">
                                <div className="absolute text-white right-2">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="mt-4 mb-2 text-lg font-medium text-white">Front-End</div>
                                <div className="font-normal text-white">Visual page, graphic pages, colors, button positions and
                                    interfaces Required skills are HTML ,CSS , JAVASCRIPT.</div>
                            </div>
                            <div className="relative flex flex-col p-4 bg-white rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined">
                                <div className="absolute text-white right-2">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="mt-4 mb-2 text-lg font-medium text-white">Back-End</div>
                                <div className="font-normal text-white">Writing the actual code for the site, as it controls everything
                                    that happens behind the scenes of the site.</div>
                            </div>
                            <div className="relative flex flex-col p-4 bg-white rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined">
                                <div className="absolute text-white right-2">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                    </svg> </div>
                                <div className="mt-4 mb-2 text-lg font-medium text-white">Full-Stack</div>
                                <div className="font-normal text-white">He works on designing interfaces and writing code in the
                                    background. He has all the skills for both sides.</div>
                            </div>
                            <div className="relative flex flex-col p-4 bg-white rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined">
                                <div className="absolute text-white right-2">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="mt-4 mb-2 text-lg font-medium text-white">UI</div>
                                <div className="font-normal text-white">It is the design of the website interface and all its contents
                                    before starting programming and development.</div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DashContainer
