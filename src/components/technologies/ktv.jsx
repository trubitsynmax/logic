import DataTable from '@/components/dataTable';
import Table from "@/components/table";
import UxLi from "@/components/UxLi";

export function KTV(){
	return(
		<>
		<p className='text-xl mb-4'>
			<span>КТВ</span> - кабельное телевидение. 
		</p>
		<Table>
			<DataTable name='RG-6' incoming='-' outgoing='-'/>
		</Table>
		<ul className='mb-14'>
			<UxLi>Используется только в многоквартиных домах</UxLi>
			<UxLi>Если устройств несколько, то может использоваться сплиттер, он разделяет 1 кабель от которого идет подключение и пускает от себя ещё 2 RG-6 провода</UxLi>
		</ul>
		</>
	);
}