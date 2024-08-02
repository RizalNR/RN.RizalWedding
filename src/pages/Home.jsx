import { NavLink, useSearchParams } from "react-router-dom";

const Home = () => {
  
  const [query] = useSearchParams()
  let nama = query.get("kepada")
  return (
    <main className="home">
      <h1 className="home_title_1">The Wedding Of</h1>
      <img
        src="/prew1.jpg"
        alt=""
        className="main_home_image"
      />
      <h1 className="home_title_2">
      Billah & Rizal 
      </h1>

      <h3 className="home_title_3">Sabtu, 21 September 2024</h3>
      <h1 className="home_title_4">Kepada Yth. Bapak/Ibu/Saudara/i</h1>
      <h1 className="ivt_name">{nama}</h1>

      <NavLink to={"/invitation"} className={`btn-undangan`} >
        Open Invitation
      </NavLink>
    </main>
  );
};

export default Home;
