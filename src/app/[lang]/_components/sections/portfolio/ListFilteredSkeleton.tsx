import React from 'react'

export const ListFilteredSkeleton = () => {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {
        Array.from({length: 6}).map((_, index)=>(
            <li key={index}>
                <article className='dark:bg-slate-950 bg-slate-100 w-full rounded-lg animate-pulse overflow-hidden'>
                    <figure className='aspect-video dark:bg-slate-900 bg-slate-200'/>
                    <div className='p-4 flex flex-col gap-1'>
                        <div className='h-4 m-1 w-16 dark:bg-slate-900 bg-slate-200 rounded-sm'/>
                        <div className='h-3 m-1 w-14 dark:bg-slate-900 bg-slate-200 rounded-sm'/>
                    </div>
                </article>
            </li>
        ))
        }
    </ul>
  )
}
