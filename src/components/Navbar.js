import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ArrowRight, Menu } from 'lucide-react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

function Navbar() {
    return (
        <nav className="sticky h-20 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-sm transition-all">
            <MaxWidthWrapper>
                <div className='flex h-20 items-center justify-between'>
                    <div className='flex items-center justify-center gap-14'>
                        <Link href='/' className='flex z-40 font-bold text-lg'>
                            <span>Widget</span>
                        </Link>

                        <div className="hidden md:flex items-center justify-center gap-8'>

                           <Link className={ buttonVariants({ size: 'sm' }) } href='/'> Sign in </Link>

                           <ArrowRight className='ml-1.5 transform h4 w-4  transition-transform duration-300 group-hover:gray-10' />
</div>
</nav>
