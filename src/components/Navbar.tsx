import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

export function NavbAr() {
  const [nav, setNav] = useState(false)
  const { t, i18n } = useTranslation()

  function handleNavbarClick() {
    setNav(!nav)
  }

  function changeLanguage(language: string) {
    i18n.changeLanguage(language)
  }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h1 className="text-4xl font-bold border-y-4 border-pink-600">TO</h1>
      </div>

      {/*  Menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            {t('navigation.home')}
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            {t('navigation.about')}
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            {t('navigation.skills')}
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            {t('navigation.work')}
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            {t('navigation.contact')}
          </Link>
        </li>
        <li
          className={`flex items-center gap-1 ${i18n.language === 'pt-BR' ? 'underline' : ''}`}
          onClick={() => changeLanguage('pt-BR')}>
          <img
            src="https://flagcdn.com/32x24/br.png"
            srcSet="https://flagcdn.com/64x48/br.png 2x,
    https://flagcdn.com/96x72/br.png 3x"
            width="32"
            height="24"
            alt="Brasil"
          />
          <span>Português</span>
        </li>
        <li
          className={`flex items-center gap-1 ${i18n.language === 'en' ? 'underline' : ''}`}
          onClick={() => changeLanguage('en')}>
          <img
            src="https://flagcdn.com/32x24/us.png"
            srcSet="https://flagcdn.com/64x48/us.png 2x,
    https://flagcdn.com/96x72/us.png 3x"
            width="32"
            height="24"
            alt="United States"
          />
          <span>English</span>
        </li>
      </ul>

      {/*  Hamburger */}
      <div className="md:hidden z-10" onClick={handleNavbarClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*  Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }>
        <li className="py-6 text-4xl">
          <Link onClick={handleNavbarClick} to="home" smooth={true} duration={500}>
            {t('navigation.home')}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleNavbarClick} to="about" smooth={true} duration={500}>
            {t('navigation.about')}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleNavbarClick} to="skills" smooth={true} duration={500}>
            {t('navigation.skills')}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleNavbarClick} to="work" smooth={true} duration={500}>
            {t('navigation.work')}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleNavbarClick} to="contact" smooth={true} duration={500}>
            {t('navigation.contact')}
          </Link>
        </li>
        <li
          className={`py-6 text-4xl flex items-center gap-1 ${
            i18n.language === 'pt-BR' ? 'underline' : ''
          }`}
          onClick={() => changeLanguage('pt-BR')}>
          <img
            src="https://flagcdn.com/32x24/br.png"
            srcSet="https://flagcdn.com/64x48/br.png 2x,
    https://flagcdn.com/96x72/br.png 3x"
            width="32"
            height="24"
            alt="Brasil"
          />
          <span>Português</span>
        </li>
        <li
          className={`py-6 text-4xl flex items-center gap-1 ${
            i18n.language === 'en' ? 'underline' : ''
          }`}
          onClick={() => changeLanguage('en')}>
          <img
            src="https://flagcdn.com/32x24/us.png"
            srcSet="https://flagcdn.com/64x48/us.png 2x,
    https://flagcdn.com/96x72/us.png 3x"
            width="32"
            height="24"
            alt="United States"
          />
          <span>English</span>
        </li>
      </ul>

      {/*  Socials icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/thiago-oliveira-k-on/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Thiago-kon">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-400">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:thiagooliveira.k.on@gmail.com">
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
