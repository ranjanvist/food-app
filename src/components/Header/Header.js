const Header = () => {
  return (
    <header className="p-[16px]">
      <div className="mx-auto w-[80%]">
        <div className="flex items-center">
          <figure>
            <img src="/logo.png" className="w-[100px]" />
          </figure>
          <div className="ml-auto">
            <ul className="flex items-center gap-[16px]">
              <li className="uppercase font-medium">About Us</li>
              <li className="uppercase font-medium">Our Services</li>
              <li className="uppercase font-medium">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
