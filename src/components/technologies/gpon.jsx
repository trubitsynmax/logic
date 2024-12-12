import DataTable from '@/components/dataTable';
import Table from "@/components/table";
import UxLi from "@/components/UxLi";

export function GPON(){
	return (
		<>
		<p className='mb-4 text-xl' data-spollers>
      	<span>GPON (PON)</span> - пассивная оптическая сеть.<br/> Используется GOF кабель (оптоволокно):
      </p>
      <Table>
         <DataTable name='GOF' incoming='1000' outgoing='1000'/>
      </Table>
      <p>Обязательным оборудовнием является:</p>
      <ul className='ml-6 mb-4'>
         <UxLi>ONT без WI-FI. Используется для случаев, когда устройство одно и у клиента есть свой роутер;</UxLi>
         <UxLi>ONT с WI-FI. Используется для случаев, когда устройств много и у клиента нет своего роутера.</UxLi>
      </ul>
      <ul className='mb-14'>
         <UxLi>Не используются иные оборудования в виде коммутаторов</UxLi>
         <UxLi>Устанавливается и в частном секторе, и в многоквартирных домах;</UxLi>
          <UxLi>В частном секторе подключение платное;</UxLi>
          <UxLi>Тут нт пиковой нагрузки.</UxLi>
      </ul>
		</>
	);
}