/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiChevronDown } from "react-icons/fi";
import Select, { StylesConfig } from "react-select";

interface dataType {
  value: string;
  label: string;
}

const VARIANTS = (variant: string) => {
  switch (variant) {
    case "blue":
      return {
        control: {
          backgroundColor: "#F2F8FF",
        },
        singleValue: {
          color: "#005BC4",
        },
        placeholder: {
          color: "#005BC4",
        },
        menu: {
          backgroundColor: "#F2F8FF",
        },
        option: {
          ":hover": {
            backgroundColor: "white",
          },
        },
      };
    default:
      return {
        control: {},
        singleValue: {},
        placeholder: {},
        menu: {},
        option: {},
      };
  }
};

function SelectCustom({
  data,
  getValue,
  isMulti = false,
  isSearchable = false,
  variant,
  placeholder,
}: {
  data: dataType[];
  getValue?: React.Dispatch<React.SetStateAction<string | string[]>>;
  isMulti?: boolean | undefined;
  isSearchable?: boolean;
  variant?: string;
  placeholder?: string;
}) {
  const variantValue = VARIANTS(variant || "");

  const customStyles: StylesConfig<dataType, true> = {
    control: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      borderRadius: "8px",
      padding: " 8px 10px",
      borderColor: "#BFC9D9",
      borderWidth: "2px",
      ...variantValue.control,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: 0,
    }),
    singleValue: (provided) => ({
      ...provided,
      fontFamily: ["Public Sans", "sans-serif"],
      fontSize: "18px",
      ...variantValue.singleValue,
    }),
    placeholder: (provided) => ({
      ...provided,
      fontFamily: ["Public Sans", "sans-serif"],
      fontSize: "18px",
      ...variantValue.placeholder,
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "8px",
      padding: " 8px 10px",
      ...variantValue.menu,
    }),
    menuList: (provided) => ({
      ...provided,
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    }),
    option: (provided) => ({
      ...provided,
      borderRadius: "8px",
      ...variantValue.option,
    }),
    multiValue: (provided) => ({
      ...provided,
      borderRadius: "8px",
      backgroundColor: "white",
      border: "1px solid #00000040",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      fontWeight: "700",
      color: "#005BC4",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      borderRadius: "8px",
    }),
  };

  const handleChange = (selectedOption: any) => {
    if (isMulti) {
      const selectedValues = selectedOption
        ? selectedOption.map((option: dataType) => option.value)
        : [];
      getValue && getValue(selectedValues);
    } else {
      getValue && getValue(selectedOption?.value || "");
    }
  };

  return (
    <Select
      options={data}
      styles={customStyles}
      components={{
        DropdownIndicator: () => (
          <FiChevronDown style={{ marginRight: "8px" }} />
        ),
        IndicatorSeparator: () => null,
      }}
      placeholder={placeholder}
      isMulti={isMulti ? true : undefined}
      isSearchable={isSearchable}
      onChange={handleChange}
      className=" font-public_sans text-lg text-main_color-600"
    />
  );
}

export default SelectCustom;
