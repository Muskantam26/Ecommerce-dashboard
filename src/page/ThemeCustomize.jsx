import { Container } from '../component/Container';


const Btn = ({
  label,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}) => {
  const base = "font-semibold rounded-lg transition-all duration-200 text-sm";
  const variants = {
    primary: "bg-[#0CAF60] text-white hover:opacity-90",
    outline: "border border-[#0CAF60] text-[#0CAF60] hover:bg-[#0CAF60] hover:text-white",
  };
  const sizes = {
    sm: "px-3 py-1.5",
    md: "px-4 py-2",
    lg: "px-2 py-2.5",
  };    

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {label}
    </button>
  );
};


const ThemeCard = ({ title, imageUrl, onCustomize, onMakeActive }) => {
  return (
    <div className=" overflow-hidden ">

      <div className="hover-scroll h-64 bg-(--bg-card)">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover object-top"
          style={{
            minHeight: '100%',
          }}
        />
      </div>

      {/* Card Footer */}
      <div className="p-4 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold app-text">{title}</h3>
        <div className="flex gap-2">
          <Btn
            label="Customize"
            variant="primary"
            size="md"
            onClick={onCustomize}
          />
          <Btn
            label="Make Active"
            variant="outline"
            size="md"
            onClick={onMakeActive}
          />
        </div>
      </div>
    </div>
  );
};

// Main Theme Customize Page
const ThemeCustomize = () => {
  const themes = [
    {
      id: 1,
      title: "Stylique",
      imageUrl: "https://ecom-demo.workdo.io/themes/stylique/theme_img/img_1.png"
    },
    {
      id: 2,
      title: "Greentic",
      imageUrl: "https://ecom-demo.workdo.io/themes/greentic/theme_img/img_1.png"
    },
    {
      id: 3,
      title: "Techzonix",
      imageUrl: "https://ecom-demo.workdo.io/themes/techzonix/theme_img/img_1.png"
    }
    
  ];

  const handleCustomize = (themeTitle) => {
    console.log(`Customizing ${themeTitle}`);
  };

  const handleMakeActive = (themeTitle) => {
    console.log(`Making ${themeTitle} active`);
  };

  return (
    <div className="bg-(--card-bg) min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8  ">
            
          <p className="text-xl font-semibold app-text mb-2">Theme</p>
              <button className='text-(--bs-teal) text-sm mt-1"'>Home</button>
         
        </div>
       
             
      

        {/* Theme Cards Grid */}
       <Container>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2    ">
    {themes.map((theme) => (
      <ThemeCard
     
        key={theme.id}
        title={theme.title}
        imageUrl={theme.imageUrl}
        onCustomize={() => handleCustomize(theme.title)}
        onMakeActive={() => handleMakeActive(theme.title)}
      />
    ))}
  </div>
</Container>
        
      </div>

      
    </div>
  );
};

export default ThemeCustomize;