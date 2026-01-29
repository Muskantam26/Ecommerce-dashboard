import React, { useState, useMemo } from "react";
import { SaveButton } from "../dashboardbtn/StoreBtn";

const CurrencySetting = () => {
  const [currencySettings, setCurrencySettings] = useState({
    decimalFormat: "1.00",
    currency: "USD",
    decimalSeparator: ".",
    thousandSeparator: ",",
    symbolSpace: "with",
    symbolPosition: "pre",
    symbolType: "symbol",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrencySettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (name, value) => {
    setCurrencySettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const preview = useMemo(() => {
    const symbol = currencySettings.symbolType === "symbol" ? "$" : "USD";
    const space = currencySettings.symbolSpace === "with" ? " " : "";
    const amount = `10${currencySettings.thousandSeparator}000${currencySettings.decimalSeparator}${currencySettings.decimalFormat.split(".")[1]}`;

    return currencySettings.symbolPosition === "pre"
      ? `${symbol}${space}${amount}`
      : `${amount}${space}${symbol}`;
  }, [currencySettings]);

 

  return (
    <div>
      <h4 className="text-lg font-normal mb-8 border-l-4 border-(--bg-border) pl-3">
        Currency Settings
      </h4>

      <div className="grid grid-cols-2 gap-10">
        {/* Decimal Format */}
        <div>
          <h4>Decimal Format</h4>
          <select
            name="decimalFormat"
            value={currencySettings.decimalFormat}
            onChange={handleChange}
            className="w-full input text-(--text-muted)"
          >
            <option value="1.0">1.0</option>
            <option value="1.00">1.00</option>
          </select>
        </div>

        {/* Currency */}
        <div>
          <h4>Default Currency</h4>
          <select
            name="currency"
            value={currencySettings.currency}
            onChange={handleChange}
            className="w-full input text-(--text-muted)"
          >
            <option value="USD">$ - USD</option>
            <option value="BBD">$ - BBD</option>
          </select>
        </div>

        {/* Decimal Separator */}
        <div>
          <h4>Decimal Separator</h4>
          <select
            name="decimalSeparator"
            value={currencySettings.decimalSeparator}
            onChange={handleChange}
            className="w-full input text-(--text-muted)"
          >
            <option value=".">Dot</option>
            <option value=",">Comma</option>
          </select>
        </div>

        {/* Thousand Separator */}
        <div>
          <h4>Thousands Separator</h4>
          <select
            name="thousandSeparator"
            value={currencySettings.thousandSeparator}
            onChange={handleChange}
            className="w-full input text-(--text-muted)"
          >
            <option value=",">Comma</option>
            <option value=".">Dot</option>
          </select>
        </div>

        {/* Symbol Space */}
        <div>
          <h4 className="mt-5 font-semibold">Currency Symbol Space</h4>
          <div className="flex justify-between mt-2 font-medium">
            <label>
              <input
                type="radio"
                checked={currencySettings.symbolSpace === "with"}
                onChange={() => handleRadioChange("symbolSpace", "with")}
              />{" "}
              With Space
            </label>

            <label>
              <input
                type="radio"
                checked={currencySettings.symbolSpace === "without"}
                onChange={() => handleRadioChange("symbolSpace", "without")}
              />{" "}
              Without Space
            </label>
          </div>
        </div>

        {/* Symbol Position */}
        <div>
          <h4 className="mt-5 font-semibold">Currency Symbol Position</h4>
          <div className="flex justify-between mt-2 font-medium">
            <label>
              <input
                type="radio"
                checked={currencySettings.symbolPosition === "pre"}
                onChange={() => handleRadioChange("symbolPosition", "pre")}
              />{" "}
              Pre
            </label>

            <label>
              <input
                type="radio"
                checked={currencySettings.symbolPosition === "post"}
                onChange={() => handleRadioChange("symbolPosition", "post")}
              />{" "}
              Post
            </label>
          </div>
        </div>

        {/* Symbol Type */}
        <div>
          <h4 className="mt-5 font-semibold">Currency Symbol & Name</h4>
          <div className="flex justify-between mt-2 font-medium">
            <label>
              <input
                type="radio"
                checked={currencySettings.symbolType === "symbol"}
                onChange={() => handleRadioChange("symbolType", "symbol")}
              />{" "}
              With Currency Symbol
            </label>

            <label>
              <input
                type="radio"
                checked={currencySettings.symbolType === "name"}
                onChange={() => handleRadioChange("symbolType", "name")}
              />{" "}
              With Currency Name
            </label>
          </div>
        </div>

        {/* Preview */}
        <div>
          <label className="font-semibold">Preview :</label>{" "}
          <span className="font-medium">{preview}</span>
        </div>
      </div>

      <div className="flex justify-end p-5 mt-6">
        <SaveButton  />
      </div>
    </div>
  );
};

export default CurrencySetting;
