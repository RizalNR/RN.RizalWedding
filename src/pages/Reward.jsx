import React from 'react'
import '../tailwind.css'
import { useState } from 'react';

const Reward = () => {
    const [btn, setBtn] = useState(true);

    function handleBtn() {
      setBtn(prev => !prev)
    }
  
    function copyNoRek (e){
      const copy = document.getElementById('noRek').innerText;
      navigator.clipboard.writeText(copy).then(()=> {
        alert('No Rekening Berhasil di Copy')
      }, (err)=> {
        console.log(err)
      })
  
    }
  return (
    <div className='w-screen flex flex-col items-center resepsi_3'>
    <div class="container_top3"><h1>Amplop Digital</h1></div>
    <p className='text-center mt-10'>
      Doa Restu Anda merupakan <br />
      karunia yang sangat berarti bagi kami. <br />
      <br />
      Dan jika memberi adalah ungkapan tanda kasih <br />
      Anda, Anda dapat memberi kado secara cashless.
    </p>

    <button className='mt-10 py-1 px-5 text-white rounded-full bg-custom-orange mb-10 font-crimson' onClick={handleBtn} >Kirim Hadiah</button>

    <div className={`font-bold mb-10 mt-5 grid gap-8 'costum-image ${btn ? "hidden opacity-0 transform -translate-y-10" : "block opacity-100 transform translate-y-0"} transition-all duration-1000 ease-in-out` }>
      {/* ATM 1 */}
      <div className='w-[296px] bg-img h-[154px] bg-slate-200 rounded-md relative'>
        {/* Content card pertama */}
        <img src="/Logo_BRI.png" alt="BRI" className='w-15 h-5 absolute right-3 top-3 ' />
        <div className='mt-8 ml-2'>
          <img src="/chip-atm-1.png" alt="chip1" className='w-8 h-8 absolute left-5 mt-5' />
          <h1 id='noRek' className='text-[12px] text-black py-0 px-2 absolute bottom-10'>
          068401023641504
          </h1>
        <h1 className='py-0 px-2 font-light text-black absolute bottom-5 font-dancing'>
        Ayudyah Ainun Nabillah
        </h1>
        </div>
        <button onClick={copyNoRek} className={`py-1 px-5 text-white rounded-full bg-blue-400 absolute bottom-5 right-3 font-crimson`}>Copy</button>
      </div>

      {/* ATM 2 */}

      <div className='w-[296px] bg-img h-[154px] bg-slate-200 rounded-md relative'>
        {/* Content card pertama */}
        <img src="/Logo_BCA.png" alt="BCA" className='w-15 h-5 absolute right-3 top-3 ' />
        <div className='mt-8 ml-2'>
          <img src="/chip-atm-1.png" alt="chip1" className='w-8 h-8 absolute left-5 mt-5' />
          <h1 id='noRek' className='text-[12px] text-black py-0 px-2 absolute bottom-10'>
          6975444752
          </h1>
        <h1 className='py-0 px-2 font-light text-black absolute bottom-5 font-dancing'>
        Ayudyah Ainun Nabillah
        </h1>
        </div>
        <button onClick={copyNoRek} className={`py-1 px-5 text-white rounded-full bg-blue-400 absolute bottom-5 right-3 font-crimson`}>Copy</button>
      </div>
      

      <div className='w-[296px] bg-img h-[200px] bg-slate-200 rounded-md text-center'>
        {/* Content card ketiga */}
        <div className='mt-2'>
        <h1 className='text-[22px] '>🎁🎁🎁</h1>
        <h1 className='text-[15px] mt-2 mb-2 font-crimson'>
          KIRIM HADIAH
        </h1>
          <h2 className='text-[13px] font-crimson'>Nama Penerima : Ayudyah Ainun Nabillah </h2>
          <h2 className='text-[13px] font-crimson'>No.HP : 0895340145387 </h2>
          <h2 className='text-[13px] font-crimson'>Alamat : Jl. Kendeng No.36 RT 08/RW 14, Sidanegara, Cilacap, Jawa Tengah</h2>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Reward
