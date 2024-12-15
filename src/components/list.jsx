"use client"
import { useRouter } from 'next/navigation';
import { Link } from 'react-router-dom';
import clsx from 'clsx';


let navigation = [
	{id: 5, title: '1', path: '/technologies'},
	{id: 1, title: '2', path: '/faq'},
	{id: 2, title: '3', path: '/rules'},
	{id: 3, title: '4', path: '/communication'},
	{id: 4, title: '5', path: '/objections'},
]

export default function List(){
	const { pathname } = useRouter();
	console.log(pathname)
	return(
		<>
			<nav className='flex-[1_1_20%]'>
				{navigation.map((item, index) => (
					<Link key={index} to={item.path} className={clsx('block mb-2')}>{item.title}</Link>
				))}
			</nav>
		</>
	)
}