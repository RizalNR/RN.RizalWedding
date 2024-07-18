import db from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import CountdownTimer from "./Countdown";
import { GrMapLocation } from "react-icons/gr";



function Invitation() {
  function handleComment(event) {
    //stop form untuk refresh page
    event.preventDefault();

    //tangkap value dari input elemen
    const nama = event.target.nama.value;
    const ucapan = event.target.ucapan.value;
    const time = event.target.time.value;

    //tampilkan ke console
    console.info({
      nama,
      ucapan,
      time,
    });

    //confirmasi ke user
    const conf = window.confirm(`
        nama      : ${nama}
        ucapan    : ${ucapan}
        time     : ${time}
        `);

    if (!conf) return;

    // store data ke firebase
    storeBiodata({
      nama,
      ucapan,
      time,

      // eslint-disable-next-line no-unused-vars
    }).then((res) => console.info("data berhasil di masukan"));
  }

  // Mendeklarasikan fungsi asinkron bernama storeBiodata yang menerima parameter data
  async function storeBiodata(data) {
    // Membuat referensi ke dokumen di dalam koleksi "biodata" dengan ID berdasarkan email dari data
    const docRef = doc(db, "/coment/" + data.nama);

    // Menyimpan data ke dokumen yang direferensikan, menunggu operasi ini selesai sebelum melanjutkan
    const store = await setDoc(docRef, data);

    // Mengembalikan hasil dari operasi penyimpanan
    return store;
  }
  //pengaturan Waktu & Tanggal
  const targetDate = new Date('2024-09-21T23:59:59');
  
  

  return (
    <main className="container">
     
     {/* Section 1 */}
     <section className="resepsi_top" id="top">
      <div className="container_top">
      <h3 className="title">THE WEDDING OF</h3>
      <h1 className="title_2">Rizal & Billah</h1>
      <h3 className="title_3">Sabtu, 21 September 2024</h3>
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
        <p>
        Tanpa mengurangi rasa hormat <br />
        kami mengundang Bapak/Ibu/Saudara/i <br />
        untuk menghadiri acara pernikahan kami <br />
        </p>
      </div>  
      
      <img
        src="public/cowo 1.png"
        alt=""
        className="main_image"
      />

      <div className="detail_name">
        <h1>Rizal Nur Ramadhan, S.Kom</h1>
        <p>
          Putra Pertama Dari: <br /> Mayor Laut (E) Nurjaya & (Almh) Ibu Lilik Rustiana
        </p>
      </div>

      <div className="detail_dan">
        <h1>&</h1>
      </div>

      <img
        src="public/cewe1.png"
        alt=""
        className="main_image"
      />

      <div className="detail_name">
        <h1>Ayudyah Ainun Nabillah, S.H</h1>
        <p>
          Putri Kedua Dari: <br /> Pelda (Purn) Slamet Riyanto & Ibu Arni Maya Nur
          Priyatin
        </p>
      </div>
    </div>
    </section>

    {/* Section 3 AKAD NIKAH */}
      <section className="resepsi_3" id="top3">
      <div className="container_top3">
        <h1>Akad Nikah</h1>
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

    {/* Section 4 RESEPSI PERNIKAHAN*/}
    <section className="resepsi_4" id="top3">
      <div className="container_top4">
        <h1>Resepsi Pernikahan</h1>
        <p>Sabtu,</p>
        <h2>21</h2>
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
      </section>


    {/* Section 5 KONFIRMASI KEHADIRAN */}
    <section className="resepsi_4" id="top4">
      <div className="container_top4">
        <h1>Konfirmasi Kehadiran</h1>
        <p>Silahkan konfirmasi kehadiran anda</p>
        <address>Gedung Empire Palace, 15 Oktober 2022</address>

        <details>
          <summary className="summary_3">Isi Form Kehadiran</summary>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfYaCv3A2MYr3GWBmv6T5Yj-bDADBrl-ysmZ-B-0pdF6JirWg/viewform?embedded=true"
            width="100%"
            height="1000"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Memuat…
          </iframe>
        </details>
        </div>
      </section>

      <section className="resepsi" id="konfirmasi">
        <h1>Konfirmasi Kehadiran</h1>
        <p>Silahkan konfirmasi kehadiran anda</p>
        <address>Gedung Empire Palace, 15 Oktober 2022</address>

        <details>
          <summary className="summary">Isi Form Kehadiran</summary>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfYaCv3A2MYr3GWBmv6T5Yj-bDADBrl-ysmZ-B-0pdF6JirWg/viewform?embedded=true"
            width="100%"
            height="1000"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Memuat…
          </iframe>
        </details>
      </section>

      <section className="komentar" id="komentar">
        <h1>Kirimkan Pesan</h1>
        <p>Untuk Kami Berdua</p>
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
            <input
              type="time"
              id="time"
              name="time"
              placeholder="waktu"
              required
            />
          </div>

          <div className="form_group">
            <textarea
              id="ucapan"
              name="ucapan"
              placeholder="Kirim Pesan"
              required
            ></textarea>
          </div>

          <div className="btn_group">
            <button className="btn_submit" type="submit">
              Submit
            </button>
          </div>

          <label className="title" htmlFor="text">
            Tampilan Pesan
          </label>
          <div className="root" id="root"></div>
        </form>
      </main>

      <div id="audio_container" className="audio-box">
        <audio id="song" controls loop autoPlay>
          <source src="https://res.cloudinary.com/rizalnr/video/upload/v1647408382/musik/Akad_eahoms.mp3" />
        </audio>
      </div>
    </main>
  );
}

export default Invitation;
