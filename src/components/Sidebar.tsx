import React from 'react'
import { RxCrossCircled } from 'react-icons/rx'

type MenuProps = {
    onCrossClicked: () => void;
    close: ()=>void;
}

const Sidebar = ({ onCrossClicked,close }: MenuProps) => {
    return (
        <aside className='left-0 top-0 fixed text-gray-700 bg-slate-50 w-4/5 h-screen shadow-xl'>
            <div className='flex flex-col'>
                <div className='flex justify-between px-5 text-white items-center bg-blue-500 h-16'>
                    <a href="#">Login & Signup</a> <RxCrossCircled onClick={onCrossClicked} className='text-2xl font-semibold cursor-pointer' />
                </div>
                <div className='flex flex-col gap-2 py-3'>
                    <a href="#" className='py-1 hover:bg-blue-500 hover:text-white' onClick={close}>
                        <span className='px-5'>Sample</span>
                    </a>
                    <a href="#" className='py-1 hover:bg-blue-500 hover:text-white' onClick={close}>
                        <span className='px-5'>Sample</span>
                    </a>
                    <a href="#" className='py-1 hover:bg-blue-500 hover:text-white' onClick={close}>
                        <span className='px-5'>Sample</span>
                    </a>
                    <a href="#" className='py-1 hover:bg-blue-500 hover:text-white' onClick={close}>
                        <span className='px-5'>Sample</span>
                    </a>
                    <a href="#" className='py-1 hover:bg-blue-500 hover:text-white' onClick={close}>
                        <span className='px-5'>Sample</span>
                    </a>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar