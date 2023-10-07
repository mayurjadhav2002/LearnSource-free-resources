"use client"
import Link from 'next/link';
import { FiFacebook,FiInstagram,FiLinkedin} from 'react-icons/fi';
import {RiTwitterXLine} from 'react-icons/ri';
// useRouter
import { useRouter } from 'next/navigation'
 

export default function index() {
  const router = useRouter()
  setTimeout(()=>{
    router.push('/home', { scroll: false })

  },2000)
  return (
    <div className=''>
      <div className="h-screen bg-no-repeat bg-cover bg-fixed grid justify-center items-center text-6xl CommingSoon" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 128, 128, 0), rgba(0, 128, 128, 0.411)), url('https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, backgroundSize: 'cover' }}>
        <div className=' text-center flex flex-col items-center text-white'>
          <div className=' flex flex-1 justify-center'>
            <img src='./Assets/lOGO-02.webp' height={'400'} width={'400'} alt='hello' className='justify-center w-[45%] md:w-[35%]' loading='eager' />
          </div>
          <h1 className='hidden'>STOFFSPOT</h1>
          <h2 className='hidden'>Women,stoffspot soon comming,CLOTHINGS, FASHION,RECYCLE,FEMINISM,MENSWEAR,MEN, KIDS,KIDS WEAR,earning,login,basket,open</h2>
          {/* <div className="flex mt-5">
            <a href="https://twitter.com/StoffSpot" className="twitter text-2xl mx-3" aria-label="Twitter"><RiTwitterXLine alt="Twitter" /></a>
            <p className="facebook text-2xl mx-3" aria-label="facebook"><FiFacebook alt="facebook" /></p>
            <a href="https://www.instagram.com/stoff_spot/?igshid=MWZjMTM2ODFkZg==" aria-label="instagram" className="instagram text-2xl mx-3"><FiInstagram alt="instagram" /></a>
            <a href="https://www.linkedin.com/company/stoffspot-private-limited/" aria-label="linkedin" className="linkedin text-2xl mx-3"><FiLinkedin alt="linkedin" /></a>
          </div> */}
        </div>
      </div> 
      </div>

  )
}
