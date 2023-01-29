import React from 'react'
import { DiHtml5, DiCss3, DiReact, DiNodejsSmall, DiPostgresql } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'

export function Skills() {
  return (
    <div id="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline">Skills</p>
          <p className="py-6">&#47;&#47; These are the technologies I&rsquo;ve worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-center items-center">
            <DiHtml5 size={120} color="#e34c26" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-center items-center">
            <DiCss3 size={120} color="#264de4" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-center items-center">
            <SiTypescript className="my-4" size={90} color="#3178c6" />
            <p className="my-4">TypeScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-center items-center">
            <DiReact size={120} color="#61DBFB" />
            <p className="my-4">React</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-center items-center">
            <DiNodejsSmall size={120} color=" #68a063" />
            <p className="my-4">Node</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-center items-center">
            <DiPostgresql size={120} color="#0064a5" />
            <p className="my-4">Postgres</p>
          </div>
        </div>
      </div>
    </div>
  )
}
