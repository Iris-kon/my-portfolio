import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

interface WorkModalProps {
  title: string
  text: string
  images: {
    name: string
    url: string
  }[]
  gitURL?: string
  liveURL?: string
  closeModal: () => void
}

export function WorkModal({ title, text, images, gitURL, liveURL, closeModal }: WorkModalProps) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 h-full w-full flex justify-center items-center">
      <div className="overflow-auto w-3/4 max-h-[700px] max-w-[600px] rounded bg-[#0a192f] text-gray-300">
        <div className="p-4 flex justify-between items-center">
          <p className="text-2xl font-bold">{title}</p>
          <button onClick={closeModal}>
            <FaTimes className="m-l-4" />
          </button>
        </div>
        <div className="overflow-auto">
          <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className="mySwiper h-[350px]">
            {images.map((img) => (
              <SwiperSlide key={img.url}>
                <img
                  className="w-full h-[350px] object-cover"
                  src={img.url}
                  alt={`${img.name} image`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="m-4 ">
          <p>{text}</p>
        </div>
        <div className="m-4 flex gap-4 items-center justify-end">
          {gitURL ? (
            <a
              className="font-bold border-b-2 border-pink-600 hover:text-pink-600 duration-300"
              href={gitURL}>
              Code
            </a>
          ) : null}
          {liveURL ? (
            <a
              className="font-bold border-b-2 border-pink-600 hover:text-pink-600 duration-300"
              href={liveURL}>
              Live
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}
