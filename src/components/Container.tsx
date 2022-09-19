import React from 'react'

const Container = () => {
	return (
		<div className='bg-[rgba(0,0,0,0.5)]  px-10 py-8 w-full max-w-5xl rounded-3xl drop-shadow-sm flex flex-col gap-4 text-white'>
			<div className='flex justify-between '>
				<p className='font-bold '>
					Timer: <span> 00:30</span>
				</p>
				<p className='font-bold'>
					Score: <span> 50</span>
				</p>
			</div>
			<div className='flex flex-col w-full justify-center items-center'>
				<p className=''>Bingo says letter</p>
				<h1 className='text-7xl'>P</h1>
			</div>
			<div className='flex flex-col lg:flex-row items-center justify-evenly gap-4'>
				<input
					type='text'
					placeholder='Country'
					className='outline-none bg-transparent border-b-2 border-purple-600 w-full placeholder:text-rose-700'
				/>
				<input
					type='text'
					placeholder='Name'
					className='outline-none bg-transparent border-b-2 border-purple-600 w-full'
				/>
				<input
					type='text'
					placeholder='Animal'
					className='outline-none bg-transparent border-b-2 border-purple-600 w-full'
				/>
			</div>
			<button className='bg-gradient-to-br from-purple-600 to-pink-600 inline-block w-max px-6 py-3 rounded-2xl text-white mx-auto'>
				Bingo!
			</button>
		</div>
	)
}

export default Container
