import React, { useState } from 'react'

import { WorkModal } from './WorkModal'

import IgNewsImg from '../assets/projects/ignews.png'
import MendesImg from '../assets/projects/mendes-contabilidade.png'

const works = [
  {
    image: MendesImg,
    title: 'NextJs LandingPage',
    liveURL: 'https://mendes-contabilidade.com/',
    text: 'Web app created with NextJs for a accountant business, using googleMapsApi to get the map and the reviews for the place, contact by mail send with nodemailer.'
  },
  {
    image: IgNewsImg,
    title: 'NextJs news portal with subscriptions',
    gitURL: 'https://github.com/Thiago-kon/ignews',
    liveURL: 'https://ignews-fawn-kappa.vercel.app/',
    text: 'Web app created with NextJs for news with subscription service, using stripe integration to do the subscriptions and faunaDb to handle the data of the user with their subscription, authentication made with NextAuth using github'
  }
]

export function Work() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dataIndex, setDataIndex] = useState(0)

  function openModal(index: number) {
    setIsModalOpen(true)
    setDataIndex(index)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <div id="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Work</p>
          <p className="py-6">&#47;&#47; Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {works.map((work, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${work.image})` }}
              className="shadow-lg shadow-[#040c16] group container text-center rounded-md flex justify-center items-center mx-auto content-div">
              {/* Hover Effects */}

              <div className="opacity-0 group-hover:opacity-100">
                <p className="text-2xl font-bold  text-white tracking-wider">{work.title}</p>
                <div className="pt-8 text-center">
                  <button
                    onClick={() => openModal(index)}
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    See More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen ? (
        <WorkModal
          image={works[dataIndex].image}
          title={works[dataIndex].title}
          closeModal={closeModal}
          gitURL={works[dataIndex].gitURL}
          liveURL={works[dataIndex].liveURL}
          text={works[dataIndex].text}
        />
      ) : null}
    </div>
  )
}
