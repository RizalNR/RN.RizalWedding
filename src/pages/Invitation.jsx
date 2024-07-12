import db from "../firebase";
import { doc, setDoc } from "firebase/firestore";

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

    // Mengembalikan hasil dari operasi penyimpana
    return store;
  }

  return (
    <main className="container">
      <h3 className="title">PERNIKAHAN</h3>
      <h1 className="title_2">Rizal & Nabillah</h1>
      <h3 className="title">Surabaya, 15 Oktober 2022</h3>
      <img
        src="https://images.pexels.com/photos/2917382/pexels-photo-2917382.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
        className="main_image"
      />

      <div className="detail_name">
        <h1>Rizal Nur Ramadhan, S.Kom</h1>
        <p>
          Putra Pertama Dari: <br /> Bpk NurJaya & Almh. Ibu Lilik Rustiana
        </p>
      </div>

      <div className="detail_name">
        <h1>Ayudyah Ainun Nabillah, S.H</h1>
        <p>
          Putri Kedua Dari: <br /> Bpk Slamet Riyanto & Ibu Arni Maya Nur
          Priyatin
        </p>
      </div>

      <section className="resepsi" id="akad">
        <h1>Akad Nikah</h1>
        <p>Rumah Mempelai Wanita, 12 Juni 2022</p>
        <address>
          Alamat: Jl. Kendeng No.36 Rt08 Rw14, Sidanegara, Kota Cilacap, Jawa
          Tengah 53223
        </address>
      </section>

      <section className="resepsi" id="resepsi">
        <h1>Resepsi Pernikahan</h1>
        <p>Gedung Empire Palace, 15 Oktober 2022</p>
        <address>
          Alamat: Jl. Blauran No.57-75, Genteng, Kec. Genteng, Kota SBY, Jawa
          Timur 60262
        </address>

        <details>
          <summary className="summary">Lihat Lokasi / map</summary>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8540371304366!2d112.73193981477483!3d-7.257447894761334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f95cad28de13%3A0x482eba9cc3377a0e!2sGrand%20Empire%20Palace%20Hotel!5e0!3m2!1sid!2sid!4v1647093189706!5m2!1sid!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            id="map"
            className="map"
          ></iframe>
        </details>
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
