"use client"
import Link from 'next/link';

// useRouter
import { useRouter } from 'next/navigation'
 

export default function index() {
  const router = useRouter()
  setTimeout(()=>{
    router.push('/home', { scroll: false })
  },1000)
  return (
    <div className=''>
      <div className="h-screen bg-no-repeat bg-cover bg-fixed grid justify-center items-center text-6xl CommingSoon" style={{ backgroundImage: `linear-gradient(to bottom, rgba(63,84,105,0), rgba(63,84,105,0.4)), url('https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, backgroundSize: 'cover' }}>
        <div className=' text-center flex flex-col items-center text-white'>
          <div className=' flex flex-1 justify-center'>
            <img src='./Assets/lOGO-02.webp' height={'400'} width={'400'} alt='hello' className='justify-center w-[45%] md:w-[35%]' loading='eager' />
          </div>
          <h1 className='hidden'>STOFFSPOT</h1>
          <h2 className='hidden'>Women,stoffspot soon comming,CLOTHINGS, FASHION,RECYCLE,FEMINISM,MENSWEAR,MEN, KIDS,KIDS WEAR,earning,login,basket,open</h2>
        </div>
      </div> 
      </div>

  )
}
