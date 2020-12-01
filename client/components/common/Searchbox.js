import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import Link from "next/link";

import "@reach/combobox/styles.css";
import styles from "../../styles/searchbox.module.scss";
import { useContext } from "react";
import ThemeContext from "../../theme/Context";

const Searchbox = ({ data, value, onChange }) => {
  const { themeClass } = useContext(ThemeContext);
  return (
    <Combobox className={styles.container} aria-labelledby="demo">
      <ComboboxInput
        className={themeClass}
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
      <ComboboxPopover>
        <ComboboxList>
          {data &&
            data.map(({ place_id, description }) => (
              <Link key={place_id} href={`/place/${place_id}`}>
                <ComboboxOption value={description} />
              </Link>
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default Searchbox;
