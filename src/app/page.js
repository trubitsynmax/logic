import { ADSL, CKTV, DOCSIS, FTTB, GPON, IPTV, KTV } from "@/components/technologies";


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
          <FTTB/>
          <GPON/>
          <ADSL/>
          <DOCSIS/>
          <KTV/>
          <CKTV/>
          <IPTV/>
  
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
