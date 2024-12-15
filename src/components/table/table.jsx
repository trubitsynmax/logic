export default function Table({children}){
	return (
		<div className='border max-w-[700px] mb-4'>
			<div className='flex'>
				<div className='flex-[1_1_25%] border m-[3px] p-1 leading-none'>Технология подключения</div>
				<div className='flex-[1_1_25%] border m-[3px] p-1 leading-none'>Входящая скорость</div>
				<div className='flex-[1_1_25%] border m-[3px] p-1 leading-none'>Исходящая скорость</div>
			</div>
			{children}
		</div>
	);
}