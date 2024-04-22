import { SocialMedia , Language } from '../index'

const Header = () => {
  return (
    <header>
        <div className="">
            <div className="container flex justify-between px-28 py-3">
                <SocialMedia />

                <p className='text-mainBlack text-xs font-medium'>
                    Free deliveries worlwide! For more info click 
                    <a href="" className='underline ml-1 text-black'>
                      Here
                    </a>
                </p>

                <Language />
            </div>
        </div>
        <div>

        </div>
    </header>
  )
}

export default Header