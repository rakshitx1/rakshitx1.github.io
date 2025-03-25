import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Mail, Linkedin, Code2, BookOpen, Terminal, Bot, Brain, Cpu, ExternalLink } from 'lucide-react';
import ProjectDetails from './components/ProjectDetails';

function App() {
	const projects = [
		{
			id: "ember",
			title: "Ember",
			description: "A versatile game engine with 2D and 3D capabilities, featuring an optimized OpenGL pipeline, robust telemetry system, and Entity Component System (ECS) architecture.",
			tech: ["C++", "OpenGL", "CMake", "ECS"],
			link: "https://github.com/embercraft/Ember",
			image: "/images/ember.png",
			detailImage: "/images/ember_banner.png",
			fullDescription: `
      Ember is a versatile game engine I'm actively developing, designed for both 2D and 3D game development. Key features include:

      • Efficient 2D rendering with an OpenGL-based pipeline
      • Robust telemetry system for performance monitoring and optimization
      • Batch rendering and texture atlas support for improved performance
      • Intuitive user interface (UI) for seamless development
      • Flexible Entity Component System (ECS) using the EnTT library
      
      Future plans include 3D rendering, a node-based visual scripting system, and Vulkan API support. This project showcases my expertise in graphics programming, optimization techniques, and software architecture design.
    `
		},
		{
			id: "isro-robotics",
			title: "ISRO Robotics Challenge",
			description: "Led development of key Rover components, implementing ROS, Gazebo, and Machine Learning algorithms including Visual SLAM. Achieved All India Rank 19 among participating teams.",
			tech: ["ROS", "Gazebo", "Docker", "Kubernetes", "SLAM"],
			link: "",
			image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
			fullDescription: `
        The ISRO Robotics Challenge project represents a significant achievement in robotics and autonomous systems. Key accomplishments include:

        • Led a team of three software engineers in developing critical Rover components
        • Implemented advanced navigation using Visual SLAM
        • Utilized Docker and Kubernetes for efficient development
        • Achieved All India Rank 19 in the competition
        • Successfully integrated ROS and Gazebo for simulation and testing
        
        This project demonstrates leadership, technical expertise, and practical application of robotics concepts.
      `
		}
	];

	const MainContent = () => (
		<>
			{/* Hero Section */}
			<div
				className="relative h-screen flex items-center justify-center bg-cover bg-center"
				style={{
					backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80")'
				}}
			>
				<div className="text-center text-white z-10">
					<h1 className="text-7xl font-bold mb-4">Rakshit Singhal</h1>
					<p className="text-2xl mb-8">Software Engineer | Robotics Enthusiast | Electrical Engineer</p>
					<div className="flex justify-center space-x-6">
						<a href="https://github.com/rakshitx1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
							<Github className="w-10 h-10" />
						</a>
						<a href="https://linkedin.com/in/rakshit1134" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
							<Linkedin className="w-10 h-10" />
						</a>
						<a href="mailto:rakshitx1@gmail.com" className="hover:text-blue-600 transition-colors">
							<Mail className="w-10 h-10" />
						</a>
					</div>
				</div>
			</div>

			{/* About Section */}
			<section id="about-me" className="py-20 px-4 max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<img
							src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
							alt="Robotics"
							className="rounded-lg shadow-xl"
						/>
					</div>
					<div>
						<p className="text-lg text-gray-700 leading-relaxed">
							I'm a pre-final year B.Tech student at IIT Jodhpur, specializing in Electrical Engineering with a strong focus on robotics and software development. As the Software Lead at the Robotics Club, I've led projects ranging from physics simulations to robotic systems, achieving notable success including All India Rank 19 in the ISRO Robotics Challenge.
						</p>
						<p className="text-lg text-gray-700 leading-relaxed mt-4">
							My technical expertise spans C++, Python, and Rust, with significant experience in ROS, Gazebo, and machine learning frameworks. I'm passionate about open-source development and creating impactful solutions in robotics and simulation.
						</p>
						<div className="mt-8 flex space-x-4">
							<a href="/resume.pdf" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
								Download CV
							</a>
							<a href="#contact" className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
								Contact Me
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id="skills" className="py-20 px-4 bg-gray-100">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<Code2 className="w-12 h-12 text-blue-600 mb-4" />
							<h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
							<ul className="space-y-2 text-gray-700">
								<li>C/C++</li>
								<li>Python</li>
								<li>Rust</li>
								<li>Shell</li>
								<li>Verilog</li>
							</ul>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<Bot className="w-12 h-12 text-blue-600 mb-4" />
							<h3 className="text-xl font-semibold mb-4">Robotics & Simulation</h3>
							<ul className="space-y-2 text-gray-700">
								<li>ROS</li>
								<li>Gazebo</li>
								<li>PyBullet</li>
								<li>MuJoCo</li>
								<li>OpenGL</li>
								<li>NVIDIA Issac</li>
							</ul>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<Brain className="w-12 h-12 text-blue-600 mb-4" />
							<h3 className="text-xl font-semibold mb-4">AI & Tools</h3>
							<ul className="space-y-2 text-gray-700">
								<li>TensorFlow</li>
								<li>PyTorch</li>
								<li>Docker & Kubernetes</li>
								<li>AWS</li>
								<li>CI/CD</li>
							</ul>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<Cpu className="w-12 h-12 text-blue-600 mb-4" />
							<h3 className="text-xl font-semibold mb-4">AI & Tools</h3>
							<ul className="space-y-2 text-gray-700">
								<li>TensorFlow</li>
								<li>PyTorch</li>
								<li>Docker & Kubernetes</li>
								<li>AWS</li>
								<li>CI/CD</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
					<div className="space-y-16">
						{projects.map((project, index) => (
							<div key={index} className="grid md:grid-cols-2 gap-8 items-center">
								<div className="space-y-4">
									<h3 className="text-2xl font-semibold">{project.title}</h3>
									<p className="text-gray-700">{project.description}</p>
									<div className="flex flex-wrap gap-2">
										{project.tech.map((tech, techIndex) => (
											<span
												key={techIndex}
												className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
											>
												{tech}
											</span>
										))}
									</div>
									<div className="flex gap-4 mt-6">
										<Link
											to={`/projects/${project.id}`}
											className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
										>
											Read More
										</Link>
										{project.link && (
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-lg border-2 border-blue-600 text-blue-600 overflow-hidden"
											>
												<span className="relative z-10 group-hover:text-white transition-colors duration-300">Source Code</span>
												<ExternalLink className="w-5 h-5 relative z-10 group-hover:text-white transition-colors duration-300" />
												<div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
											</a>
										)}
									</div>
								</div>
								<div>
									<div>
										<Link to={`/projects/${project.id}`}>
											<img
												src={project.image}
												alt={project.title}
												className="w-full object-contain cursor-pointer"
											/>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 px-4 bg-gray-100">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
					<div className="md:flex md:justify-between items-center gap-12">

						{/* Left Side - Quick Contact Links */}
						<div className="md:w-1/2 text-center md:text-left">
							<p className="text-lg text-gray-700 mb-8">
								I'm always open to discussing new projects, opportunities or potential collaborations. Feel free to reach out!
							</p>
							<div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
								<a
									href="mailto:rakshitx1@gmail.com"
									className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
								>
									<Mail className="w-5 h-5" />
									Email Me
								</a>
								<a
									href="https://linkedin.com/in/rakshit1134"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
								>
									<Linkedin className="w-5 h-5" />
									Connect on LinkedIn
								</a>
							</div>
						</div>

						{/* Right Side - Contact Form */}
						<div className="md:w-1/2 mt-12 md:mt-0 bg-white p-6 rounded-lg shadow-lg">
							<form
								action="https://formspree.io/f/mldjljqp"
								method="POST"
								className="space-y-4"
							>
								<div>
									<label className="block text-gray-700 font-medium">Your Email:</label>
									<input
										type="email"
										name="email"
										className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
									/>
								</div>
								<div>
									<label className="block text-gray-700 font-medium">Your Message:</label>
									<textarea
										name="message"
										rows={4}
										className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
									></textarea>
								</div>
								<button
									type="submit"
									className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
								>
									Send Message
								</button>
							</form>
						</div>

					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-4">
				<div className="max-w-6xl mx-auto px-4 text-center">
					<p>© {new Date().getFullYear()} Rakshit Singhal. All rights reserved.</p>
				</div>
			</footer>
		</>
	);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainContent />} />
				<Route path="/projects/:projectId" element={<ProjectDetails projects={projects} />} />
			</Routes>
		</Router>
	);
}

export default App;
