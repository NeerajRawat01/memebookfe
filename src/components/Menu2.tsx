import Dropdown2 from './Dropdown2'

const Menu2 = () => {
    return (
        <div className='flex gap-2 justify-between w-full items-center '>
            <h1 className='font-semibold text-2xl'>MemeBook</h1>
            <div className='relative'>
                    <Dropdown2 />
            </div>
        </div>
    )
}

export default Menu2
