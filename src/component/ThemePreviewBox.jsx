
import StatsBox from "./StatsBox";
import AppButton from "../dashboardbtn/Btn";

const ThemePreviewBox = ({ image }) => {
  return (
    <StatsBox>
      <div className="flex flex-col h-full">

        {/* Image */}
        <div className="relative h-90 overflow-hidden hover-scroll">
          <AppButton
            label="Stylique"
            size="sm"
            className="absolute top-0 right-0 z-10"
          />

          <img src={image} alt="theme preview" className="w-full h-fit" />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6"> 
          <AppButton label="Customize" variant="outline" size="lg" />
          <AppButton label="Manage Themes" size="lg"  />
        </div>
            
      </div>
    </StatsBox>
  );
};

export default ThemePreviewBox;
