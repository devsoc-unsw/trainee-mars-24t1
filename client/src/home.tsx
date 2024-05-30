import './App.css'
import Logo from './assets/marsWhite.png'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

const homePage = () => {

  return (
      <main className='bg-white flex flex-col h-screen'>
        <div className='fixed w-full h-auto top-0 flex items-center justify-between p-10'>
          <div className='flex items-center gap-8'>
            <img src={Logo} alt="Logo" className='h-32 w-auto' />
            <p className='poetsen-one-regular text-5xl text-[#FE6A01]'>MARS</p>
          </div>
  
          <div className='flex items-center gap-8'>
            <p>Hellen</p>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
  
        <div className='flex w-full h-full pt-40'>
          <div className='w-1/3 h-full p-10 overflow-y-auto'>
            <ScrollArea className="h-full rounded-md border p-4">
              Jokester began sneaking into the castle in the middle of the night and leaving
              jokes all over the place: under the king's pillow, in his soup, even in the
              royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
              then, one day, the people of the kingdom discovered that the jokes left by
              Jokester were so funny that they couldn't help but laugh. And once they
              started laughing, they couldn't stop.
              Jokester began sneaking into the castle in the middle of the night and leaving
              jokes all over the place: under the king's pillow, in his soup, even in the
              royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
              then, one day, the people of the kingdom discovered that the jokes left by
              Jokester were so funny that they couldn't help but laugh. And once they
              started laughing, they couldn't stop.
              Jokester began sneaking into the castle in the middle of the night and leaving
              jokes all over the place: under the king's pillow, in his soup, even in the
              royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
              then, one day, the people of the kingdom discovered that the jokes left by
              Jokester were so funny that they couldn't help but laugh. And once they
              started laughing, they couldn't stop.
            </ScrollArea>
          </div>
  
          <div className='w-2/3 h-full p-10'>
            <div className='h-full border rounded-md p-4'>
              {/* Add your content for the right container here */}
              Right container content goes here.
            </div>
          </div>
        </div>
      </main>
  );
}

export default homePage