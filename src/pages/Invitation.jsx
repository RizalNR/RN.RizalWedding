import db from "../firebase";
import { doc, setDoc, getDocs, collection, orderBy, query } from "firebase/firestore";
import CountdownTimer from "./Countdown";
import { GrMapLocation } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
import dayjs from "dayjs";
import Reward from "./Reward";
import Swipper from "../components/Galery";




function Invitation() {
 
  
  const [allComent, setAllComent] = useState([])
  function handleComment(event) {
    //stop form untuk refresh page
    event.preventDefault();

    const currentDate = dayjs()

 

    //tangkap value dari input elemen
    const nama = event.target.nama.value;
    const ucapan = event.target.ucapan.value;
    const kehadiran = event.target.kehadiran.value;
    const time =  currentDate.format('YYYY-MM-DD HH:mm:ss');

    //tampilkan ke console
    console.info({
      nama,
      ucapan,
      kehadiran,
      time
    });

    //confirmasi ke user
    // const conf = window.confirm(`
    //     nama      : ${nama}
    //     ucapan    : ${ucapan}
    //     kehadiran : ${kehadiran}  
    //     `);

    // if (!conf) return;

    // store data ke firebase
    storeInvitation({
      nama,
      ucapan,
      kehadiran,
      time

      // eslint-disable-next-line no-unused-vars
    }).then((res) =>{
      console.info("data berhasil di masukan");
      event.target.reset()
      window.location.reload(); 
    
    }) 
    
    
  }

  // Mendeklarasikan fungsi asinkron bernama storeBiodata yang menerima parameter data
  async function storeInvitation(data) {
    // Membuat referensi ke dokumen di dalam koleksi "biodata" dengan ID berdasarkan email dari data
    const docRef = doc(db, "/coment/" + data.nama);

    // Menyimpan data ke dokumen yang direferensikan, menunggu operasi ini selesai sebelum melanjutkan
    const store = await setDoc(docRef, data);

    // Mengembalikan hasil dari operasi penyimpanan
    return store;
  }

  //pengaturan Waktu & Tanggal
  const targetDate = new Date('2024-09-14T09:00:00');



  // audio pause play

  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  //COMENT
  async function getAllData(){
    let result =[]
    const collRef = collection(db, "coment");
    const urutan = query(collRef, orderBy("time", "desc"));
    const allData = await getDocs(urutan)

    allData.forEach((e)=>{
      result.push(e.data())
    })
    return result
  }

  useEffect(()=>{
    getAllData()
    .then((res)=>{
      setAllComent(prev=> prev=res)
    })
  }, [])
  
  useEffect(()=>{
    console.log(allComent)
  }, [allComent])
  
  //GALERY
  

  return (
    <main className="container_custom overflow-x-hidden">
     
     {/* Section 1 */}
     <section className="resepsi_top" id="top">
      <div className="container_top">
      <h3 className="title">THE WEDDING OF</h3>
      <h1 className="title_2">Billah & Rizal</h1>
      <h3 className="title_3">Sabtu, 14 September 2024</h3>
      </div>
      <img className="img_top" src="/wayang.png" alt="" />
      <CountdownTimer targetDate={targetDate}/> 
      <a className="calendar" href="https://calendar.app.google/9iPDAkKjVe5nqUEh9">
      <button className="btn-calendar">Add To Google Calendar</button>
      </a>
      
     </section>
    
    {/* Section 2 */}
    <section className="resepsi_2" id="top2">
    <div className="container_top2">
      
      <div className="detail_name1">
        <h1>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
        <h2>Assalamualaikum Warahmatullahi Wabarakatuh </h2>
        <p>
        Tanpa mengurangi rasa hormat <br />
        kami mengundang Bapak/Ibu/Saudara/i <br />
        untuk menghadiri acara pernikahan kami <br />
        </p>
      </div>  
      
      <img
        src="/billa.jpg" 
        alt="fotobilla"
        className="main_image"
      />

      <div className="detail_name">
      <h1>Ayudyah Ainun Nabillah, S.H</h1>
        <p>
          Putri Kedua Dari: <br /> Pelda (Purn) Slamet Riyanto & Ibu Arni Maya Nur
          Priyatin
        </p>
        
      </div>

      <div className="detail_dan">
        <h1>&</h1>
      </div>

      <img
        src="/rama.jpg"
        alt="fotorama"
        className="main_image"
      />

      <div className="detail_name">
      <h1>Rizal Nur Ramadhan, S.Kom</h1>
        <p>
          Putra Pertama Dari: <br /> Mayor Laut (E) Nurjaya & (Almh) Ibu Lilik Rustiana
        </p>
      </div>
    </div>
    </section>

    {/* Section 3 AKAD NIKAH */}
   <section className="resepsi_3" id="top3">
      <div className="container_top3">
        <h1>Akad Nikah</h1>
        <h1>&</h1>
        <h1>Resepsi</h1>
        <p>Sabtu,</p>
        <h2>14</h2>
        <p>September 2024 <br/> 09:00 WIB - Selesai</p>
      
      <div className="maps_icons">
        <GrMapLocation/>
      </div>

        <address>
          Kediaman Mempelai Wanita <br/>
          Jl. Kendeng No.36 RT 08/RW 14, Sidanegara, Cilacap, Jawa
          Tengah 
        </address>

        <details>
          <summary className="summary_3">Lihat Lokasi / Maps</summary>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3953.788528570198!2d109.02019100000001!3d-7.705827999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDInMjEuMCJTIDEwOcKwMDEnMTIuNyJF!5e0!3m2!1sen!2sid!4v1721301180866!5m2!1sen!2sid" 
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            id="map"
            className="map"
          ></iframe>
        </details>
        
        </div>
      </section>   

    {/* Section 4 RESEPSI PERNIKAHAN
    <section className="resepsi_4" id="top3">
      <div className="container_top4">
        <h1>Resepsi Pernikahan</h1>
        <p>Sabtu,</p>
        <h2>14</h2>
        <p>September 2024 <br/> 10:00 WIB - Selesai</p>

      <div className="maps_icons">
        <GrMapLocation/>
      </div>

        <address>
          Kediaman Mempelai Pria <br/>
          Perum Jalagriya Blok H VI/1 <br/> RT 028/RW 008, Sugihwaras, Candi, Sidoarjo, Jawa Timur
        </address>

        <details>
          <summary className="summary_3">Lihat Lokasi / Maps</summary>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3955.834698291524!2d112.69957!3d-7.483498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjknMDAuNiJTIDExMsKwNDEnNTguNSJF!5e0!3m2!1sen!2sid!4v1721301597991!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            id="map"
            className="map"
          ></iframe>
        </details>
        </div>
      </section> */}


{/* GALERY */}

<section className="resepsi_3" id="top3">
      <div className="container_top3">
        <h1>Gallery</h1>
      </div>

      <Swipper />

      {/* <div className="galery" >
        <img src="public/bg1.jpeg" alt="" />
      </div>
      <div className="galery" >
        <img src="public/bg1.jpeg" alt="" />
      </div>
      <div className="galery" >
        <img src="public/bg1.jpeg" alt="" />
      </div> */}
       
        
      </section>   




{/* HADIAH */}
      <Reward/>

    
{/* COMENTs */}
      <section className="komentar" id="komentar">
        <h1>Kirimkan Ucapan & DOA</h1>
      </section>

      <main className="container_comments main">
        <form className="comment_form" onSubmit={handleComment}>
          <div className="form_group">
            <input
              type="text"
              id="nama"
              name="nama"
              placeholder="Nama"
              required
            />
          </div>

          <div className="form_group">
            <textarea
              id="ucapan"
              name="ucapan"
              placeholder="Ucapan & Doa"
              required
            ></textarea>
          </div>

          <select id="kehadiran" className="confirm" name="kehadiran">
            <option className="font-crimson" value="konfirmasi kehadiran">
              Konfirmasi Kehadiran
            </option>
            <option className="font-crimson" value="Hadir">Hadir</option>
            <option className="font-crimson" value="Akan Hadir">Akan Hadir</option>
            <option className="font-crimson" value="Tidak Hadir">Tidak Hadir</option>
          </select>

          <div className="btn_group">
            <button className="btn_submit" type="submit">
              Submit
            </button>
          </div>
        </form>

        <div className="container_top5">

            <h1 className="title" htmlFor="text">
              Tampilan Pesan
            </h1>
            
              <div className="root scrollbar">
                {
                  allComent.map((e, index)=>(
                    <div className="card" key={index}>
                      <div className="card-header">
                          <h2>{e.nama}</h2>
                      </div>
                  
                      <div className="card-body">
                          <p className="message">{e.ucapan}</p>
                          <p className="attendance">Kehadiran: {e.kehadiran}</p>
                      </div>
                  
                      <div className="card-footer">
                          <p className="timestamp" id="time">Dikirim pada: {e.time}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
        </div>  
    </main>
      

      <div id="audio_container" className="audio-box">
        <audio ref={audioRef} id="song" hidden controls loop autoPlay>
          <source src="https://res.cloudinary.com/rizalnr/video/upload/v1647408382/musik/Akad_eahoms.mp3" />
        </audio>
      </div>
      <button className="btn_play_pause" onClick={togglePlayPause}>{isPlaying ?  <FaCirclePause /> : <FaPlayCircle /> }</button>
    </main>
  );
}

export default Invitation;
