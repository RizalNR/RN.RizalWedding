import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <h3 className="home_title">UNDANGAN PERNIKAHAN</h3>
      <img
        src="https://images.pexels.com/photos/1777843/pexels-photo-1777843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
        className="main_home_image"
      />
      <h1 className="home_title_2">
        Rizal Nur Ramadhan <br /> & <br /> Ayudyah Ainun Nabillah
      </h1>
      <h3 className="home_title_3">Surabaya,15 Oktober 2022</h3>

      <NavLink to={"/invitation"} className={`btn-undangan`}>
        Buka Undangan
      </NavLink>
    </main>
  );
};

export default Home;
