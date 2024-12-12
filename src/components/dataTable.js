import clsx from "clsx";

export default function Table({name, incoming, outgoing}){
	return (
			<div className='flex'>
				<div className='flex-[1_1_25%] border m-[3px] p-2'>{name}</div>
				<div className='flex-[1_1_25%] border m-[3px] p-2'>{incoming} мбит/c</div>
				<div className='flex-[1_1_25%] border m-[3px] p-2'>{outgoing} мбит/с</div>
			</div>
	);
}