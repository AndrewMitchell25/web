import React, { useState } from 'react'
import "./Work.scss"
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { AppWrap } from "../../wrappper"
import { images } from '../../constants'

const works = [
  { title: 'Capture the Flag', description: "I am a good web developer", projectLink: '', codeLink: '', imgUrl: images.ctf, tags: ['UI/UX']},
  { title: 'Project: Horizon', description: "I am a good web developer", projectLink: '', codeLink: '', imgUrl: images.ctf, tags: ['Web App']},
  { title: 'Sudoku Solver+', description: "I am a good web developer", projectLink: '', codeLink: '', imgUrl: images.ctf, tags: ['Mobile App']}
]

const Work = () => {

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y:0, opacity: 1});
  const [filterWork, setFilterWork] = useState(works)

  const handleWorkFilter = (item)=> {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity:0}]);

    setTimeout(() => {
      setAnimateCard([{y:0, opacity:1}]);

      if(item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <>
      <h2 className='head-text'>My Creative <span>Portfolio</span></h2>

      <div className='app__work-filter'>
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={()=>handleWorkFilter(item)}
            className={`app__work-filter-item app_flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{duration:0.5, delayChildren:0.5}}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={work.imgUrl} alt={work.title}/>

              <motion.div
                whileHover={{opacity: [0,1]}}
                transition={{duration:0.25, ease:'easeInOut', staggerChildren: 0.5}}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel='noreferrer'>
                  <motion.div
                    whileInView={{scale: [0,1]}}
                    whileHover={{scale: [1,0.9]}}
                    transition={{duration:0.25}}
                    className="app__flex"
                  > 
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel='noreferrer'>
                  <motion.div
                    whileInView={{scale: [0,1]}}
                    whileHover={{scale: [1,0.9]}}
                    transition={{duration:0.25}}
                    className="app__flex"
                  > 
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{marginTop: 10}}>{work.description}</p>

              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(Work, 'work')