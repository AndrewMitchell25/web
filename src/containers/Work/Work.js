import React, { useState } from 'react'
import "./Work.scss"
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from "../../wrappper"
import { images } from '../../constants'

const works = [
  { title: 'Project: Horizon', description: "", projectLink: 'https://sol-solutions.herokuapp.com/', codeLink: 'https://github.com/AndrewMitchell25/project-horizon', imgUrl: images.projecthorizon, tags: ['Web App', 'Finished', 'Python', 'Pinned']},
  { title: 'Capture the Flag', description: "", projectLink: process.env.PUBLIC_URL + '/projects/CTFWebGL/index.html', codeLink: 'https://github.com/AndrewMitchell25/Capture-the-Flag', imgUrl: images.ctf, tags: ['Unity/C#','Mobile App', 'Finished', 'Pinned']},
  { title: 'Sudoku Solver', description: "A sudoku solver program developed using a recursive backtracking  algorithm.", projectLink: 'https://github.com/AndrewMitchell25/SudokuSolver', codeLink: 'https://github.com/AndrewMitchell25/SudokuSolver', imgUrl: images.sudoku, tags: ['Python', 'Finished', 'Pinned']}
]

const otherWorks = [
  { title: 'Tyler the Twitter Bot', description: "", projectLink: 'https://twitter.com/TylerIsABot2', codeLink: 'https://github.com/AndrewMitchell25/Tyler', imgUrl: images.twitter, tags: ['JavaScript', 'Finished']},
  { title: 'Chess AI', description: "", projectLink: process.env.PUBLIC_URL + '/Chess/', codeLink: 'https://github.com/AndrewMitchell25/Chess', imgUrl: images.chess, tags: ['In Progress','React']},
  { title: 'Self-Driving Car', description: "", projectLink: process.env.PUBLIC_URL + '/Self-Driving-Car/', codeLink: 'https://github.com/AndrewMitchell25/Self-Driving-Car', imgUrl: images.cars, tags: ['In Progress','JavaScript']}
]

const Work = () => {

  const [activeFilter, setActiveFilter] = useState('Pinned');
  const [animateCard, setAnimateCard] = useState({y:0, opacity: 1});
  const [filterWork, setFilterWork] = useState(works)

  const handleWorkFilter = (item)=> {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity:0}]);

    setTimeout(() => {
      setAnimateCard([{y:0, opacity:1}]);

      if(item === 'Pinned') {
        setFilterWork(works);
      } else if(item === "All") {
        setFilterWork(works.concat(otherWorks));
      } else {
        setFilterWork(works.concat(otherWorks).filter((work) => work.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <>
      <h2 className='head-text'>My Project <span>Portfolio</span></h2>

      <div className='app__work-filter'>
        {['Pinned', 'Web App', 'Mobile App', 'Python', 'Unity/C#', 'React', 'Finished', 'In Progress', 'All'].map((item, index) => (
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

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg')