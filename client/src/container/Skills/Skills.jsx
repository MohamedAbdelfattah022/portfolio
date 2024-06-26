/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([
    {
      year: '2024',
      works: [
        {
          name: 'Placeholder Work 1',
          company: 'Placeholder Company 1',
          desc: 'Placeholder Description 1',
        },
        {
          name: 'Placeholder Work 2',
          company: 'Placeholder Company 2',
          desc: 'Placeholder Description 2',
        },
      ],
    },
  ]);
  const [skills, setSkills] = useState([
    {
      name: 'Placeholder Skill 1',
      icon: images.git,
    },
    {
      name: 'Placeholder Skill 2',
      icon: images.cpp,
    },
    {
      name: 'Placeholder Skill 3',
      icon: images.cpp,
    },
    {
      name: 'Placeholder Skill 4',
      icon: images.cpp,
    },
    {
      name: 'Placeholder Skill 5',
      icon: images.cpp,
    },
    {
      name: 'Placeholder Skill 6',
      icon: images.cpp,
    },
    {
      name: 'Placeholder Skill 7',
      icon: images.cpp,
    },
  ]);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
