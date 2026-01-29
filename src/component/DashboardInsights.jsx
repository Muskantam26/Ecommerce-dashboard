
 import ThemePreviewBox from "../component/ThemePreviewBox";
import StatsListBox from "../component/StatsListBox";

const DashboardInsights = () => {
  const topCategories = [
    { image: "https://ecom-demo.workdo.io/uploads/2/54_1749192230_Men.png", title: "Hats", amount: "418.9" },
    { image: "https://ecom-demo.workdo.io/uploads/2/76_1749204207_Dresses-1.png", title: "Dresses", amount: "183.7" },
    { image: "https://ecom-demo.workdo.io/uploads/2/95_1749203987_Hat.png", title: "Scarf", amount: "42.0" },
    { image: "https://ecom-demo.workdo.io/uploads/2/87_1749204252_Dresses.png", title: "Jackets", amount: "3.7" },
  ];

  const topBrands = [
    { image: "https://ecom-demo.workdo.io/uploads/2/87_1749014050_partner-logo2.png", title: "NIKE", amount: "1,590.8" },
    { image: "https://ecom-demo.workdo.io/uploads/2/75_1749013918_partner-logo4.png", title: "GILDAN", amount: "465.7" },
    { image: "https://ecom-demo.workdo.io/uploads/2/11_1749014078_partner-logo1.png", title: "BURBERRY", amount: "356.2" },
    { image: "https://ecom-demo.workdo.io/uploads/2/60_1749014019_partner-logo3.png", title: "P&B", amount: "183.7" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <ThemePreviewBox
        image="https://ecom-demo.workdo.io/themes/stylique/theme_img/img_1.png"
      />

      <StatsListBox title="Top Category" items={topCategories} />
      <StatsListBox title="Top Brand" items={topBrands} />

    </div>
  );
};

export default DashboardInsights;
