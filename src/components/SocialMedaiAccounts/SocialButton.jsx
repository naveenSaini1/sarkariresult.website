const SocialButton = ({ platform, color, icon ,link}) => (
    <a
      href={link}
      className={`relative flex items-center w-auto md:w-auto px-4 py-1 rounded-l-full ${color} hover:right-0 transition-all duration-500 ease-out hover:scale-110  group`}
    target="_blank"
    >
      <div className="flex items-center">
        {icon}
        <p className="ml-2 text-white font-lato text-sm md:text-xl">{platform}</p>
      </div>
    </a>
  );
  
  export default SocialButton;
  