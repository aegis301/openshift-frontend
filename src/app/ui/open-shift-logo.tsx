import { CalendarIcon } from '@heroicons/react/24/outline';
import { inter } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${inter.className} flex flex-row items-center leading-none text-white`}
    >
      <CalendarIcon className="h-12 w-12" />
      <p className="text-[40px]">OS</p>
    </div>
  );
}