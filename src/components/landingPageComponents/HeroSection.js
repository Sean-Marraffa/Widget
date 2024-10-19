import MaxWidthWrapper from '../MaxWidthWrapper'
import { ArrowRight, Check, Star } from lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils'
function HeroSection() {
    return (
        <section className='bg-slate-50'>
            <MaxWidthWrapper className="pt-10 !px-2 lg:!px-10 lg:grid lg:grid-cols-2 lg:gap x-0 lg:pt-24 lg:pb-20">
                <div className="col-span-1 px-2 lg:px-0">
                    <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                        <h1 className="relative t-shelter text-balance font-bold">The Smartest Way to Manage Your Tasks</h1>
                        <p className="t-description text-gray-600">Widget is a powerful, intuitive task management tool that helps you stay organized, track progress, and achieve more with less effort.</p>
                        <ul className="list-description">
                            <li class="li-description">Boost productivity with intelligent task tracking.</li>
                            <li class="li-description">Collaborate seamlessly with teams and clients.</li>
                            <li class="li-description">Automated reminders ensure you never miss a deadline.</li>
                            <li class="li-description">Simple, user-friendly interface designed for efficiency.</li>
                        </ul>
                        <div class="graphic">A sleek dashboard showcasing tasks and progress.</div>
                </div>
         </MaxWidthWrapper>
        </section>
)
}

export default HeroSection
