'use client';
import DataTable from '@/components/dataTable';
import Table from "@/components/table";
import UxLi from "@/components/UxLi";
import clsx from 'clsx';
import { useState } from 'react';

export function FTTB(){
  const [active, setActvie] = useState(null);
  const handleClick = () => {
    setActvie(!active);
  }
  return (
		<>
		  <p className='mb-4 pb-4 text-xl border-b-2 border-black cursor-pointer' onClick={handleClick}>
         <span>FTTB (FTTX)</span> - волокно, которое доходит до границ здания.<br/> Используется кабель UTP-4/UTP-8:
      </p>
      <div className={clsx(active == false ? 'h-0 overflow-hidden' : 'overflow-visible')}>
       <Table>
         <DataTable name='UTP-4' incoming='100' outgoing='100'/>
         <DataTable name='UTP-8' incoming='1000' outgoing='1000'/>
       </Table>
       <ul className='ml-4 mb-14'>
         <UxLi>Подключается только в многоквартирных домах;</UxLi>
         <UxLi>От коммутатора идет соединение к дому;</UxLi>
         <UxLi>Если устройство одно, то можно напрямую подключить кабель к нему, если несколько, то нужен роутер;</UxLi>
         <UxLi>В пиковую нагрузку средняя скорость интернета может сократиться.</UxLi>
       </ul>
      </div>
		</>
	)
}