import "./styles.css";

function Sidebar() {
  let data = "Tentang Saya";
  return (
    <div>
      <h1 className="sidebar-wrapper ">Daftar Kontak Saya</h1>
      <p>{data}</p>
    </div>
  );
}

export default Sidebar;
