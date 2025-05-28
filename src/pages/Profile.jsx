import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

const skills = {
  frontend: [
    { name: "React", level: 5 },
    { name: "JavaScript", level: 5 },
    { name: "TypeScript", level: 4 },
    { name: "HTML5", level: 5 },
    { name: "CSS3", level: 5 },
    { name: "Tailwind CSS", level: 4 },
  ],
  backend: [
    { name: "Node.js", level: 3 },
    { name: "Java", level: 4 },
    { name: "Python", level: 3 },
  ],
  tools: [{ name: "Git", level: 4 }],
  design: [{ name: "Figma", level: 3 }],
  soft_skills: [
    { name: "Comunicação", level: 5 },
    { name: "Trabalho em equipe", level: 5 },
    { name: "Proatividade", level: 4 },
    { name: "Resiliência", level: 4 },
    { name: "Organização", level: 4 },
    { name: "Aprendizado rápido", level: 5 },
  ],
};

export default function Profile() {
  const personalInfo = {
    name: "Marcelo Lopez",
    title: "Desenvolvedor Front-end Júnior",
    location: "São Paulo, SP",
    email: "malopez.rodriguez23@gmail.com",
    phone: "+55 (11) 99999-9999",
    age: "25 anos",
    bio: "Desenvolvedor front-end apaixonado por tecnologia e inovação. Especializado em React, JavaScript e criação de interfaces modernas. Sempre em busca de novos desafios e oportunidades para crescer profissionalmente.",
  };

  const skillCategories = {
    frontend: "Frontend",
    backend: "Backend",
    tools: "Ferramentas",
    design: "Design",
    soft_skills: "Soft Skills",
  };

  return (
    <div className="px-6 py-12 lg:px-12 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 mt-8">
            Sobre{" "}
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              Mim
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conheça mais sobre minha trajetória, habilidades e paixão por
            desenvolvimento
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Personal Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 overflow-hidden rounded-2xl shadow-lg">
              <div className="text-center pb-4 pt-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <img
                      src="/assets/Perfil-01.png" // coloque sua imagem em public/assets/
                      alt="Foto de Marcelo Lopez"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-2xl text-white mb-2 font-bold">
                  {personalInfo.name}
                </div>
                <p className="text-purple-400 font-medium">
                  {personalInfo.title}
                </p>
              </div>

              <div className="space-y-6 px-8 pb-8">
                <p className="text-gray-300 leading-relaxed">
                  {personalInfo.bio}
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: personalInfo.email },
                    {
                      icon: MapPin,
                      label: "Localização",
                      value: personalInfo.location,
                    },
                    { icon: Calendar, label: "Idade", value: personalInfo.age },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="text-gray-400 text-sm">{item.label}</p>
                        <p className="text-white">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center space-x-4 pt-4">
                  {[
                    { icon: Github, href: "https://github.com/malopez23", color: "hover:text-purple-400" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/marcelolopez23/", color: "hover:text-blue-400" },
                    {
                      icon: ExternalLink,
                      href: "#",
                      color: "hover:text-orange-400",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`text-gray-400 transition-colors duration-200 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 h-full rounded-2xl shadow-lg">
              <div className="px-8 pt-8">
                <div className="text-2xl text-white font-bold">
                  Habilidades Técnicas
                </div>
                <p className="text-gray-400">
                  Tecnologias e ferramentas que domino
                </p>
              </div>

              <div className="space-y-8 px-8 pb-8">
                {Object.entries(skills).map(([categoryKey, categorySkills]) => (
                  <div key={categoryKey}>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full mr-3" />
                      {skillCategories[categoryKey] || categoryKey}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {categorySkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-gray-700/50"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                              <span className="text-xs font-bold text-white">
                                {skill.name.charAt(0)}
                              </span>
                            </div>
                            <span className="text-white font-medium">
                              {skill.name}
                            </span>
                          </div>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((dot) => (
                              <div
                                key={dot}
                                className={`w-2 h-2 rounded-full ${
                                  dot <= skill.level
                                    ? "bg-gradient-to-r from-purple-500 to-orange-500"
                                    : "bg-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
