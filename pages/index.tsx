import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10" >
      <div className='bg-white p-6 rounded-2xl shadow-xl'>
        <span className="font-semibold text-3xl">Select Item</span>
        <div className='flex justify-between my-2'>
            <span className='text-gray-500'>Grey Chair</span>
            <span className='font-semibold'>$19</span>
        </div>
        <div className='flex justify-between '>
            <span className='text-gray-500'>Grey Chair</span>
            <span className='font-semibold'>$19</span>
        </div>
        <div className='flex justify-between mt-2 pt-2 border-t-2 border-dashed '>
          <span>Total</span>
          <span className='font-semibold'>$10</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto" >CheckOut</div>
      </div>

      <div className='bg-white overflow-hidden rounded-2xl shadow-xl '>
        <div className="bg-blue-500 p-6 pb-16">
          <span className='text-white text-2xl'>profile</span>
        </div>
        <div className="rounded-3xl p-6 relative -top-5 bg-white" >
          <div className='flex relative -top-16 items-end justify-between'>
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Orders</span>
              <span className=' font-semibold'>340</span>
            </div>
            <div className='h-24 w-24 bg-red-500 rounded-full' />
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>spent</span>
              <span className=' font-semibold'>$2310</span>
            </div>
          </div>
          <div className='relative  flex flex-col items-center -mt-10 -mb-5'>
            <span className='text-lg  font-semibold'>Tony Molloy</span>
            <span className='text-sm text-gray-500'>미국</span>
           </div>
        </div>
      </div>

      <div className='bg-white p-6 rounded-2xl shadow-xl'>
        <div>
          <span>👈🏻</span>
          <div>
            <span>⭐4.9</span>
            <span>💖</span>
          </div>
        </div>
        <div />
        <div>
          <span>Swoon Lounge</span>
          <span>Chair</span>
          <div>
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </div>
          <div>
            <button>-</button>
            <button>1</button>
            <button>+</button>
          </div>
          <div>
            <span>$450</span>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
      <div className='bg-white p-6 rounded-2xl shadow-xl'>
      </div>
    </div>
  )
}

export default Home;
