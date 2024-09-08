const SocialButton = ({ platform, color, icon }) => (
    <a
      href="#"
      className={` z-1000 relative flex items-center w-50 px-4 py-1 rounded-l-full ${color} hover:right-0 transition-all duration-500 ease-out -right-[198px]  group`}
    >
      <div className="flex items-center">
        {icon}
        <p className="ml-2 text-white font-lato text-xl">{platform}</p>
      </div>
    </a>
  );
  
  export default SocialButton;
  