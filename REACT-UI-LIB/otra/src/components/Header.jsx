import logoYenny from '../assets/images/yenny-el-ateneo.jpg';

const Header = () => {
  return (
    <header
      className="flex items-center justify-center flex-wrap bg-cover bg-center text-white p-5"
      style={{ backgroundImage: "url(/src/assets/images/R.jpg)" }}
    >
      <span className="text-[40px] md:text-[80px] font-[Impact] text-center block">
        LIBRERÍA YENNY
      </span>
      <img
        src={logoYenny}
        alt="Librería Yenny"
        className="mt-1 ml-2 h-[50px] md:h-[70px]"
      />
    </header>
  );
};

export default Header;