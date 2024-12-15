import List from '@/components/list';
import Technologies from '@/components/technologies';

export default function Home() {
  return (
    <div className='flex'>
      <List/>
      <div className='flex-[1_1_80%]'>
        <Technologies/>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
