import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter, Star } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Wish List",
    description:
      "WishList é um aplicativo web moderno e interativo para organizar, filtrar e gerenciar todos os produtos desejados em um só lugar — não importa a loja!",
    image_url: "./../../public/assets/WishList.png",
    featured: true,
    status: "completed",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    demo_url: "https://wishlist-henna.vercel.app/",
    github_url: "https://github.com/malopez23/wishlist",
  },

  {
    id: 2,
    title: "ZenWallet",
    description:
      "ZenWallet é um app web simples para controle financeiro pessoal, com gráficos interativos, resumos mensais e acompanhamento de receitas e despesas por categoria.",
    image_url: "./../../public/assets/ZenWallet.png",
    featured: true,
    status: "completed",
    technologies: ["React", "Tailwind CSS", "Vite", "Chart.js"],
    demo_url: "https://zenwallet.vercel.app/",
    github_url: "https://github.com/malopez23/zenwallet",
  },
  {
    id: 3,
    title: "Sky Scope",
    description:
      "Sky Scope é um app de previsão do tempo com tema escuro, feito em React e Tailwind. Exibe dados simulados em tempo real, previsão para 5 dias, busca por cidades e animação de carregamento.",
    image_url: "./../../public/assets/SkyScope.png",
    featured: true,
    status: "completed",
    technologies: ["React", "Tailwind CSS", "Vite"],
    demo_url: "https://sky-scope-five.vercel.app/",
    github_url: "https://github.com/malopez23/sky-scope",
  },
  {
    id: 4,
    title: "Regency Agenda",
    description:
      "Uma aplicação web moderna para gerenciamento de agendamentos de um salão de beleza, com múltiplos profissionais, desenvolvida em React + Vite.",
    image_url: "./../../public/assets/RegencyAgenda.png",
    featured: false,
    status: "in_progress",
    technologies: ["React", "Tailwind CSS", "Vite", "React Hook Form", "date-fns"],
    demo_url: "https://regency-agenda.vercel.app/",
    github_url: "https://github.com/malopez23/regency-agenda",
  },
];

export default function Projects() {
  const [projects] = useState(PROJECTS);
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading] = useState(false);

  const filterProjects = useCallback(() => {
    let filtered = projects;

    switch (activeFilter) {
      case "featured":
        filtered = projects.filter((p) => p.featured);
        break;
      case "completed":
        filtered = projects.filter((p) => p.status === "completed");
        break;
      case "in_progress":
        filtered = projects.filter((p) => p.status === "in_progress");
        break;
      default:
        filtered = projects;
    }

    setFilteredProjects(filtered);
  }, [projects, activeFilter]);

  useEffect(() => {
    filterProjects();
  }, [projects, activeFilter, filterProjects]);

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "in_progress":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "planning":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Concluído";
      case "in_progress":
        return "Em Andamento";
      case "planning":
        return "Planejamento";
      default:
        return status;
    }
  };

  if (isLoading) {
    return (
      <div
        className="px-6 py-12 lg:px-12 flex items-center justify-center text-white"
        style={{ minHeight: "calc(100vh - var(--header-height, 0px))" }}
      >
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Carregando projetos...</p>
        </div>
      </div>
    );
  }

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
            Meus{" "}
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              Projetos
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma seleção dos projetos que desenvolvi, desde aplicações web até
            experimentos criativos
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12 gap-2 overflow-x-auto"
        >
          {[
            { value: "all", label: "Todos" },
            { value: "featured", label: "Destaques" },
            { value: "completed", label: "Concluídos" },
            { value: "in_progress", label: "Em Andamento" },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 max-sm:px-2 py-2 max-sm:py-2 max-sm:text-sm rounded-lg font-semibold transition-colors cursor-pointer
        ${
          activeFilter === filter.value
            ? "bg-purple-600 text-white"
            : "bg-gray-900/50 text-purple-300 border border-purple-500/20 hover:bg-purple-700/40"
        }
      `}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
                <Filter className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl text-white mb-2">
                Nenhum projeto encontrado
              </h3>
              <p className="text-gray-400">
                Tente ajustar os filtros ou aguarde novos projetos!
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="bg-gray-900/50 rounded-2xl shadow-lg border border-purple-500/20 overflow-hidden h-full flex flex-col justify-between">
                    {/* Project Image */}
                    {project.image_url && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image_url}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

                        {project.featured && (
                          <div className="absolute top-4 right-4">
                            <span className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
                              <Star className="w-3 h-3 mr-1" />
                              Destaque
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Conteúdo do card */}
                    <div className="flex flex-col flex-1 px-6 pt-6 pb-2">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xl text-white font-bold group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </span>
                        <span
                          className={`ml-2 px-2 py-0.5 rounded text-xs font-semibold border ${getStatusColor(
                            project.status
                          )}`}
                        >
                          {getStatusText(project.status)}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      {/* Espaço para empurrar os botões para baixo */}
                      <div className="flex-1" />
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies
                          ?.slice(0, 4)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="inline-block border border-purple-500/30 text-purple-300 px-2 py-0.5 rounded text-xs font-semibold bg-black/30"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies?.length > 4 && (
                          <span className="inline-block border border-gray-500/30 text-gray-400 px-2 py-0.5 rounded text-xs font-semibold bg-black/30">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        {project.demo_url && (
                          <a
                            href={project.demo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        )}
                        {project.github_url && (
                          <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 font-semibold px-4 py-2 rounded-lg transition-colors"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Código
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
