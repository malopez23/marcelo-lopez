import { motion } from 'framer-motion';
import { Code, Paintbrush, Rocket, ArrowRight } from 'lucide-react';

const services = [
	{
		title: 'Desenvolvimento Front-end',
		description: 'Criação de interfaces modernas e responsivas com React, Vue e JavaScript.',
		icon: Code,
		iconBg: 'from-purple-500 to-violet-400',
	},
	{
		title: 'Design UI/UX',
		description: 'Experiências de usuário intuitivas com foco em usabilidade e acessibilidade.',
		icon: Paintbrush,
		iconBg: 'from-orange-400 to-orange-600',
	},
	{
		title: 'Performance',
		description: 'Otimização de aplicações para máxima velocidade e eficiência.',
		icon: Rocket,
		iconBg: 'from-purple-400 to-orange-400',
	},
];

const Home = () => (
	<div className="space-y-16">
		{/* Hero Section */}
		<section className="text-center h-screen bg-gradient-to-r from-purple-600/10 via-transparent to-orange-600/10 justify-center items-center flex flex-col">
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
				className="w-36 h-36 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-orange-400 flex items-center justify-center mb-6 shadow-lg"
			>
				<img
					src="/assets/Perfil-01.png" // coloque sua imagem em public/assets/
					alt="Foto de Marcelo Lopez"
					className="w-32 h-32 rounded-full object-cover"
				/>
			</motion.div>
			<motion.h1
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}
				className="text-4xl md:text-5xl p-2 font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent"
			>
				Marcelo Lopez
			</motion.h1>
			<motion.p
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto"
			>
				Desenvolvedor Front-end apaixonado por criar experiências digitais incríveis e interfaces que conectam pessoas
				à tecnologia.
			</motion.p>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.6 }}
				className="mt-6 flex gap-4 justify-center font-bold"
			>
				<a
					href="/projects"
					className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition-colors flex items-center gap-2"
				>
					Ver Projetos
					<ArrowRight size={18} />
				</a>
				<a
					href="/resume"
					className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
				>
					Download CV
				</a>
			</motion.div>
		</section>

		{/* Seção "O que eu faço" */}
		<section className="py-5 px-12 mt-12">
			<h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center">
				O que eu faço
			</h2>
			<p className="text-gray-400 text-lg max-w-2xl mx-auto text-center mb-12">
				Especializado em desenvolvimento front-end moderno com foco em qualidade e inovação
			</p>
			<div className="grid md:grid-cols-3 gap-8">
				{services.map((service, index) => (
					<motion.div
						key={service.title}
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						whileHover={{ y: -8, scale: 1.02 }}
						className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 h-full hover:border-purple-500/40 transition-all duration-300"
					>
						<div className={`mb-6 w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.iconBg}`}>
							<service.icon size={32} className="text-white" />
						</div>
						<h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
						<p className="text-gray-300">{service.description}</p>
					</motion.div>
				))}
			</div>
		</section>

		{/* CTA Final */}
		<section className="flex justify-center items-center py-24">
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6 }}
				className="max-w-6xl bg-gradient-to-r from-[#2a153a] to-[#3a1c1c] rounded-2xl p-16 shadow-lg text-center border border-purple-500/20"
			>
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
					Vamos trabalhar juntos?
				</h2>
				<p className="text-gray-200 text-lg mb-8">
					Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato e vamos criar algo incrível!
				</p>
				<a
					href="/profile"
					className="inline-block px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-orange-500 to-purple-500 hover:from-purple-500 hover:to-orange-500 transition-colors shadow-md"
				>
					Entre em Contato
				</a>
			</motion.div>
		</section>
	</div>
);

export default Home;