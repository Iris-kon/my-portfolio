import React from 'react'
import { useTranslation } from 'react-i18next'

export function Contact() {
  const { t } = useTranslation()
  return (
    <div id="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form
        action="https://getform.io/f/329944e7-3745-4051-8802-cbe1bc3c2294"
        method="POST"
        className="flex flex-col max-w-[1000px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            {t('contact.title')}
          </p>
          <p className="py-4 text-gray-300">
            {t('contact.subtitle')} - thiagooliveira.k.on@gmail.com
          </p>
        </div>

        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-600"
          type="text"
          placeholder="Name"
          name="name"
        />

        <input
          className="my-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-600"
          type="email"
          placeholder="Email"
          name="email"
        />

        <textarea
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-600"
          placeholder="Message"
          rows={10}
          name="message"
        />

        <button
          className="rounded text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
          type="submit">
          {t('buttons.contact')}
        </button>
      </form>
    </div>
  )
}
