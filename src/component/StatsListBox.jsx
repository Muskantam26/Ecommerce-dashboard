// components/StatsListBox.jsx
import StatsBox from "../component/StatsBox";
import AppButton from "../dashboardbtn/Btn";

const filters = ["All", "Today", "Week", "Month", "Year"];

const StatsListBox = ({ title, items }) => {
  return (
    <StatsBox>

      {/* Header */}
      <div className="flex items-center justify-between mb-4 ">
        <h2 className="text-lg font-semibold text-(--text-main)">
          {title}
        </h2>
        <span className="text-sm text-(--text-muted)">
          By Sales
        </span>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {filters.map((filter) => (
          <AppButton
            key={filter}
            label={filter}
            variant="outline"
            size="sm"
            className="
              border border-(--bg-border-color)
              text-(text-black)
              hover:bg-(--primary)
              hover:text-(--text-invert)
              transition
            "
          />
        ))}
      </div>

      {/* Items */}
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="
              flex items-center gap-4 pb-4
              border-b border-dashed
              border-(--bg-border-color-input)
              last:border-b-0
            "
          >
            {/* Image */}
            <div
              className="
                h-16 w-16 rounded-lg flex items-center justify-center
                border-2 border-(--primary)
                bg-(--bg-hover)
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-fit object-contain"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-(--text-muted)">
                {item.title}
              </p>
              <p className="font-semibold text-(--text-main)">
                $ {item.amount}
              </p>
            </div>
          </div>
        ))}
      </div>

    </StatsBox>
  );
};

export default StatsListBox;
