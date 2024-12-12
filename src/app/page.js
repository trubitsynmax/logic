import DataTable from '@/components/dataTable';
import UxLi from "@/components/UxLi";
import Table from "@/components/table";

export default function Home() {
  return (
    <div className='flex'>
      <div className='flex-[1_1_20%]'>
        <div className=''>FAQ</div>
        <div className=''>Общие правила</div>
        <div className=''>Скрипт общения</div>
        <div className=''>Возражения</div>
      </div>
      <div className='flex-[1_1_80%]'>
        <div>
          <p className='mb-4 text-xl'>
            <span>FTTB (FTTX)</span> - волокно, которое доходит до границ здания.<br/> Используется кабель UTP-4/UTP-8:
          </p>
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
          <p className='mb-4 text-xl'>
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
          <p className='text-xl mb-4'>
            <span>ADSL</span> - ассиметричная цифровая абоненсткая линия.<br/> Подключение происходит по ТРП (телефонно распределительный провод):
          </p>
            <Table>
              <DataTable name='ADS' incoming='20' outgoing='1'></DataTable>
            </Table>
          <ul className='mb-14'>
            <UxLi>Для подключения нужны ADSL модем без WI-FI или ADLS роутер с WI-FI;</UxLi>
            <UxLi>Подключается как к частному сектору, так и в многоквартирные дома.</UxLi>
          </ul>
          <p className='text-xl mb-4'>
            <span>DOCSIS</span> - передача данных по сетям кабельного телевидения.<br/> Передача данных происходит по коаксиальному (телевизионному) кабелю.
          </p>
          <Table>
            <DataTable name='RG-6' incoming='200' outgoing='20'/>
          </Table>
          <ul className='mb-14'>
            <UxLi>Обязательное оборудование - кабельный модем без WI-FI</UxLi>
            <UxLi>Подключается только в многоквартирных домах.</UxLi>
          </ul>
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
          <p className='text-xl mb-4'>
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
          <p className='text-xl mb-4'>
            <span>IPTV</span> - телевидение по протоколу Интернет.
          </p>
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
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
