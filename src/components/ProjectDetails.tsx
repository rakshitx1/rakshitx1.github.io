import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface Project {
	id: string;
	title: string;
	description: string;
	tech: string[];
	link: string;
	image: string;
	detailImage?: string;
	fullDescription: string;
}

interface ProjectDetailsProps {
	projects: Project[];
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projects }) => {
	const { projectId } = useParams();
	const project = projects.find(p => p.id === projectId);

	useEffect(() => {
		// Scroll to a position that shows the project image nicely in view
		window.scrollTo({
			top: window.innerHeight * 0, // 10% from the top of viewport
			behavior: 'smooth'
		});
	}, []);

	const handleBackClick = () => {
		// Navigate to home and scroll to projects section after a small delay
		setTimeout(() => {
			const projectsSection = document.getElementById('projects');
			projectsSection?.scrollIntoView({ behavior: 'smooth' });
		}, 100);
	};

	if (!project) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
					<Link to="/" className="text-blue-600 hover:text-blue-800">
						Return to Home
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-4xl mx-auto px-4 py-12">
				<Link
					to="/"
					onClick={handleBackClick}
					className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
				>
					<ArrowLeft className="w-5 h-5 mr-2" />
					Back to Projects
				</Link>

				<div className="bg-white rounded-xl shadow-lg overflow-hidden">
					<img
						src={project.detailImage || project.image}
						alt={project.title}
						className="w-full object-contain"
					/>
					{/* <img
						src={project.image}
						alt={project.title}
						className="w-full h-64 object-cover"
					/> */}

					<div className="p-8">
						<h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>

						<div className="flex flex-wrap gap-2 mb-6">
							{project.tech.map((tech, index) => (
								<span
									key={index}
									className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
								>
									{tech}
								</span>
							))}
						</div>

						<div className="prose max-w-none">
							{project.fullDescription.split('\n').map((paragraph, index) => (
								<p key={index} className="text-gray-700 mb-4">
									{paragraph}
								</p>
							))}
						</div>

						{project.link && (
							<div className="mt-8">
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-lg border-2 border-blue-600 text-blue-600 overflow-hidden"
								>
									<span className="relative z-10 group-hover:text-white transition-colors duration-300">View Source Code</span>
									<div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
									<ExternalLink className="w-5 h-5 relative z-10 group-hover:text-white transition-colors duration-300" />
								</a>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
