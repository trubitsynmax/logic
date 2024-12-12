export default function ULi({children}){
	return <li className='relative before:absolute before:top-2/4 before:-left-4 before:w-1 before:h-1 before:rounded-[50%] before:bg-black'>{children}</li>
}