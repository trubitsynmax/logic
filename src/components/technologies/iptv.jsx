'use client'
import DataTable from '@/components/dataTable';
import Table from "@/components/table";
import UxLi from "@/components/UxLi";
import { useState } from 'react';
import clsx from 'clsx';


export function IPTV(){
	const [active, setActive] = useState(null);
	const handleToggle = () => {
		setActive(!active);
	}
	return(
		<>
		<p className='text-xl mb-4' onClick={handleToggle}>
			<span>IPTV</span> - телевидение по протоколу Интернет.
		</p>
		<div className={clsx(active == false ? 'duration-[5s] ease-out max-h-0 overflow-hidden' : ' duration-[5s] ease-outmax-h-full overflow-visible')}>
		<Table>
			<DataTable name='RG-6 / HDMI' incoming='-' outgoing='-'></DataTable>
		</Table>
		<ul className='mb-4'>
			<UxLi>Можно обойтись и без приставки, если телевизор плазменный, от популярной фирмы, от 2017 года и с технологией SMART TV;</UxLi>
			<UxLi>Подключить можно в частном секторе и в многоквартином доме;</UxLi>
			<UxLi>Услуги ТВ и Интернета должны быть от одного провайдера;</UxLi>
			<UxLi>Если функции SMART TV на телевизоре нет, то можно купить специальную IP-приставку, она работает на андроиде и имеет выход в интернет.</UxLi>
		</ul>
			<p className='mb-4'>Столько приставок можно устанавливать в разных технологиях:</p>
			<p className='mb-3'><span>FTTB</span> - до 3 приставок</p>
			<p className='mb-3'><span>GPON</span> - до 3 приставок</p>
			<p className='mb-3'><span>ADSL</span> - 1 приставка</p>
			<p><span>DOCSIS</span> - не поддерживает</p>
		</div>
		</>
	);
}

