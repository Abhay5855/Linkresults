import { Link, useRouteError } from 'react-router-dom';
import notfound from '../assets/images/notfound.svg';
import { RouteError } from '../types';

export default function ErrorPage(): JSX.Element {
	const error = useRouteError() as RouteError;

	return (
		<div className='pt-16' id='error-page'>
			{error?.statusText === 'Not Found' && (
				<>
					<section className='flex flex-col mx-auto max-w-2xl text-center gap-6'>
						<img
							src={notfound}
							alt='a image showing 404 in letters for displaying error'
							width='400'
							height='300'
							loading='lazy'
						/>
						<h1 className='text-3xl	 mb-4 font-extrabold capitalize'>
							Uh oh. That page doesn't exist.
						</h1>

						<span className='text-center text-gray-500 text-lg  2xl:text-2xl'>
							Head to our{' '}
							<Link className='text-primary' to='/'>
								Home page
							</Link>{' '}
							that does exist, or try double-checking the URL.
						</span>
					</section>
				</>
			)}
		</div>
	);
}
