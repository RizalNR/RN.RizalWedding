import React from 'react'
// import '../tailwind.css'
import { useState } from 'react';

const Reward = () => {
    const [btn, setBtn] = useState(true);

    function handleBtn() {
      setBtn(prev => !prev)
    }
  
    function copyNoRek (e){
      const copy = document.getElementById('noRek').innerText;
      navigator.clipboard.writeText(copy).then(()=> {
        alert('no rek berhasil dicopy')
      }, (err)=> {
        console.log(err)
      })
  
    }
  return (
    <div className='w-screen flex flex-col items-center resepsi_3'>
    <div class="container_top3"><h1>Amplop</h1></div>
    <p className='text-center mt-10'>
      Doa Restu Anda merupakan <br />
      karunia yang sangat berarti bagi kami. <br />
      <br />
      Dan jika memberi adalah ungkapan tanda kasih <br />
      Anda, Anda dapat memberi kado secara cashless.
    </p>

    <button className='mt-10 py-1 px-5 text-white rounded-md bg-blue-500 mb-10' onClick={handleBtn} >Kirim Hadiah</button>

    <div className={` font-bold mb-10 mt-5 grid gap-8 'costum-image ${btn ? "hidden opacity-0 transform -translate-y-10" : "block opacity-100 transform translate-y-0"} transition-all duration-1000 ease-in-out` }>
      <div className='w-[296px] bg-img h-[154px] bg-slate-200 rounded-md relative'>
        {/* Content card pertama */}
        <img src="public/BCA_logo_Bank_Central_Asia-1.png" alt="" className='w-20 h-7 absolute right-3 top-3 ' />
        <div className='mt-8 ml-2'>
          <img src="public/chip-atm-1.png" alt="" className='w-8 h-8' />
          <p id='noRek' className='text-[15px] word-spacing-height'>
          1831783261
        </p>
        <h1>
        Afni Fauzi
        </h1>
        </div>
        <button onClick={copyNoRek} className={`py-1 px-5 text-white rounded-md bg-blue-500 absolute bottom-5 right-3`}>Copy</button>
      </div>

      <div className='w-[296px] bg-img h-[154px] bg-slate-200 rounded-md text-center'>
        {/* Content card kedua */}
        <div className='mt-2'>
        <h1 className='text-[20px] ' >🎁</h1>
        <h1 className='text-[13px] mt-2 mb-2'>
          kIRIM hADIAH
        </h1>
          <h2 className='text-[12px]'>Nama Penerima : Afni Fauzi </h2>
          <h2 className='text-[13px]'>No. HP : 083816286859 (wa)</h2>
          <h2 className='text-[13px]'>Alamat : Kp.Babakan Bandung RT 1 RW 10 Ds.  <br />
          Hegarmanah Kec. Karangtengah Kab. Cianjur</h2>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Reward
