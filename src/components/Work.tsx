import React, { useEffect, useState } from 'react'

import { WorkModal } from './WorkModal'

import { api } from '../services/strapi'
import { useTranslation } from 'react-i18next'

interface IWorks {
  attributes: {
    id: number
    images: {
      data: {
        id: number
        attributes: {
          name: string
          url: string
        }
      }[]
    }
    title: string
    description: string
    liveUrl?: string
    gitUrl?: string
  }
}

export function Work() {
  const { t, i18n } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dataIndex, setDataIndex] = useState(0)
  const [works, setWorks] = useState<IWorks[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('/api/works', {
        params: {
          populate: `*`,
          locale: i18n.language
        }
      })
      console.log(result.data.data)
      setWorks(result.data.data)
    }

    fetchData()
  }, [i18n.language])

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
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">{t('work.title')} </p>
          <p className="py-6">{t('work.subtitle')} </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {!!works &&
            works.map((work, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `url(http://localhost:1337${work.attributes.images.data[0].attributes.url})`
                }}
                className="shadow-lg shadow-[#040c16] group container text-center rounded-md flex justify-center items-center mx-auto content-div">
                {/* Hover Effects */}

                <div className="opacity-0 group-hover:opacity-100">
                  <p className="text-2xl font-bold  text-white tracking-wider">
                    {work.attributes.title}
                  </p>
                  <div className="pt-8 text-center">
                    <button
                      onClick={() => openModal(index)}
                      className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      {t('buttons.seeMore')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {isModalOpen && !!works ? (
        <WorkModal
          images={works[dataIndex].attributes.images.data.map((img) => {
            return {
              url: `http://localhost:1337${img.attributes.url}`,
              name: img.attributes.name
            }
          })}
          title={works[dataIndex].attributes.title}
          closeModal={closeModal}
          gitURL={works[dataIndex].attributes.gitUrl}
          liveURL={works[dataIndex].attributes.liveUrl}
          text={works[dataIndex].attributes.description}
        />
      ) : null}
    </div>
  )
}
