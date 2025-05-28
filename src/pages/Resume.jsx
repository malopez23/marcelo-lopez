import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, GraduationCap, Briefcase, Download } from "lucide-react";

export default function Resume() {
  const experiences = [
    {
      title: "Desenvolvedor Front-end Júnior",
      company: "TechStart Solutions",
      period: "Jan 2024 - Presente",
      location: "São Paulo, SP",
      description: "Desenvolvimento de interfaces responsivas usando React e TypeScript. Colaboração em projetos ágeis e implementação de melhorias de UX.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Git"]
    },
    {
      title: "Estagiário Desenvolvimento Web",
      company: "Digital Agency",
      period: "Jul 2023 - Dez 2023",
      location: "São Paulo, SP", 
      description: "Criação de landing pages e manutenção de websites. Aprendizado de boas práticas de desenvolvimento e trabalho em equipe.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
    }
  ];

  const education = [
    {
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      institution: "FIAP",
      period: "2022 - 2024",
      status: "Em andamento",
      description: "Foco em desenvolvimento web, banco de dados e metodologias ágeis."
    },
    {
      degree: "Curso Técnico em Informática",
      institution: "ETEC",
      period: "2020 - 2021",
      status: "Concluído",
      description: "Base sólida em programação, lógica e fundamentos da computação."
    }
  ];

  const certifications = [
    {
      name: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2023",
      credential: "UC-123456789"
    },
    {
      name: "JavaScript ES6+",
      issuer: "Rocketseat",
      date: "2023",
      credential: "RS-987654321"
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2022",
      credential: "FCC-456789123"
    }
  ];

  return (
    <div className="px-6 py-12 lg:px-12 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <div className="text-center sm:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 mt-8">
                Meu <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">Currículo</span>
              </h1>
              <p className="text-gray-400 text-lg">
                Experiência profissional, formação acadêmica e certificações
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-lg shadow transition-colors mt-4 sm:mt-0"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gray-900/50 rounded-2xl shadow-lg border border-purple-500/20 mb-8">
              <div className="px-8 pt-8 pb-4">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl text-white flex items-center"
                >
                  <Briefcase className="w-6 h-6 mr-3 text-purple-400" />
                  Experiência Profissional
                </motion.h2>
              </div>
              <div className="space-y-6 px-8 pb-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="border-l-2 border-purple-500/30 pl-6 pb-6 last:pb-0"
                  >
                    <div className="relative">
                      <div className="absolute -left-8 w-4 h-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full" />
                      
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-purple-400 font-medium mb-2">{exp.company}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="inline-block border border-purple-500/30 text-purple-300 px-2 py-0.5 rounded text-xs font-semibold bg-black/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-gray-900/50 rounded-2xl shadow-lg border border-purple-500/20">
                <div className="px-8 pt-8 pb-4">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl text-white flex items-center"
                  >
                    <Award className="w-6 h-6 mr-3 text-orange-400" />
                    Certificações
                  </motion.h2>
                </div>
                <div className="space-y-4 px-8 pb-8">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="p-4 bg-black/30 rounded-lg border border-gray-700/50"
                    >
                      <h4 className="font-bold text-white mb-1">{cert.name}</h4>
                      <p className="text-orange-400 text-sm mb-1">{cert.issuer}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">{cert.date}</span>
                        <span className="text-xs text-gray-500">{cert.credential}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-gray-900/50 rounded-2xl shadow-lg border border-purple-500/20">
              <div className="px-8 pt-8 pb-4">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl text-white flex items-center"
                >
                  <GraduationCap className="w-6 h-6 mr-3 text-orange-400" />
                  Formação Acadêmica
                </motion.h2>
              </div>
              <div className="space-y-6 px-8 pb-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="border-l-2 border-orange-500/30 pl-6 pb-6 last:pb-0"
                  >
                    <div className="relative">
                      <div className="absolute -left-8 w-4 h-4 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full" />
                      
                      <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-orange-400 font-medium mb-2">{edu.institution}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </span>
                        <span
                          className={`inline-block border px-2 py-0.5 rounded text-xs font-semibold
                            ${edu.status === 'Concluído'
                              ? 'border-green-500/30 text-green-300 bg-black/30'
                              : 'border-orange-500/30 text-orange-300 bg-black/30'}
                          `}
                        >
                          {edu.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
