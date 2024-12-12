import DataTable from '@/components/dataTable';
import Table from "@/components/table";
import UxLi from "@/components/UxLi";

export function CKTV(){
	return(
		<>
		<p className='text-xl mb-4' data-spollers>
			<span>ЦКТВ</span> - цифровое кабельное телевидение.
		</p>
		<Table>
			<DataTable name='RG-6 / HDMI' incoming='-' outgoing='-'/>
		</Table>
		<ul className='mb-14'>
			<UxLi>Нужно дополнительное оборудование в виде цифровой приставки или CAM-модуля;</UxLi>
			<UxLi>CAM-модуль устанавливается сбоку плазменного телевизора, если у него там есть специальный разъем;</UxLi>
			<UxLi>В приставку можно вставить как тюльпаны, так и HMDI.</UxLi>
		</ul>
		</>
	);
}