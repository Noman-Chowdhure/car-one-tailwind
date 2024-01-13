import React from 'react'

const From = () => {
  return (
    <div>
        <form className=' bg-gray-50 p-4'>
            <h1 className=' text-4xl font-semibold capitalize text-orange-400 m-2'>make your trip</h1>
            <p>rent cat to move form local sosts in 300- countics</p>

            <label htmlFor="location" className=' font-bold'>where you from</label> <br />
            <input className=' w-full p-4 mt-4' type="text" name='location' placeholder=' 🍁 your present address..' /> <br />
            <label htmlFor="location" className=' font-bold'>where you go</label> <br />
            <input className=' w-full p-4 mt-4' type="text" name='location' placeholder=' 🍁 your present address..' /> <br />
            <label htmlFor="date" className=' font-bold'>date</label> <br />
            <input className=' w-full p-4 mt-4' type="date" name='date' placeholder='your present address..' /> <br />

            <label htmlFor="time" className=' font-bold'>time</label> <br />
            <input className=' w-full p-4 mt-4' type="time" name='time'/> <br />

            <input type="submit" className=' flex bg-orange-300 p-4 text-white font-bold'  />
        </form>
    </div>
  )
}

export default From
