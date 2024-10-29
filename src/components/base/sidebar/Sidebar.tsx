import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SquarePen } from 'lucide-react';
import { CalendarCheck } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { WandSparkles } from 'lucide-react';

const Sidebar: FC = () => {
	return (
		<>
			<aside
				id='logo-sidebar'
				className='w-20 lg:w-56 fixed top-0 left-0 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
				aria-label='Sidebar'
			>
				<div className='h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800'>
					<ul className='space-y-4'>
						<li>
							<Link
								to='#'
								className='flex items-center font-semibold lg:p-2 text-primary rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
							>
								<SquarePen className='w-8 h-8 lg:w-5 lg:h-5  mr-1' />
								<span className='flex-1 ms-2 whitespace-nowrap capitalize hidden lg:inline'>
									create post
								</span>
							</Link>
						</li>
						<li>
							<Link
								to='#'
								className='flex items-center font-semibold lg:p-2 text-primary rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
							>
								<Lightbulb className='w-8 h-8 lg:w-5 lg:h-5  lg:mr-1' />
								<span className='flex-1 ms-2 whitespace-nowrap capitalize hidden lg:inline'>
									post ideas
								</span>
							</Link>
						</li>
						<li>
							<Link
								to='#'
								className='flex items-center font-semibold lg:p-2 text-primary rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
							>
								<WandSparkles className='w-8 h-8 lg:w-5 lg:h-5   mr-1' />
								<span className='flex-1 ms-2 whitespace-nowrap capitalize hidden lg:inline'>
									generate carousal
								</span>
							</Link>
						</li>
						<li>
							<Link
								to='#'
								className='flex items-center font-semibold lg:p-2 text-primary rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
							>
								<CalendarCheck className='w-8 h-8 lg:w-5 lg:h-5   mr-1' />
								<span className='flex-1 ms-2 whitespace-nowrap capitalize hidden lg:inline'>
									schedule post
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
