import DataTable from '@/components/dataTable';
import Table from "@/components/table";
import UxLi from "@/components/UxLi";

export function ADSL(){
	return(
		<>
		<p className='text-xl mb-4' data-spollers>
         <span>ADSL</span> - ассиметричная цифровая абоненсткая линия.<br/> Подключение происходит по ТРП (телефонно распределительный провод):
      </p>
      <Table>
         <DataTable name='ADS' incoming='20' outgoing='1'></DataTable>
      </Table>
      <ul className='mb-14'>
         <UxLi>Для подключения нужны ADSL модем без WI-FI или ADLS роутер с WI-FI;</UxLi>
         <UxLi>Подключается как к частному сектору, так и в многоквартирные дома.</UxLi>
      </ul>
      <p className='text-xl mb-4' data-spollers>
         <span>DOCSIS</span> - передача данных по сетям кабельного телевидения.<br/> Передача данных происходит по коаксиальному (телевизионному) кабелю.
      </p>
      <Table>
         <DataTable name='RG-6' incoming='200' outgoing='20'/>
      </Table>
      <ul className='mb-14'>
         <UxLi>Обязательное оборудование - кабельный модем без WI-FI</UxLi>
         <UxLi>Подключается только в многоквартирных домах.</UxLi>
      </ul>
		</>
	);
}