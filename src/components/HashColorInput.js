import PropTypes from "prop-types";
import { isValidAddress } from "./utils";
import HashColor from "./HashColor";
import Input from "./UI/Input";

const VALIDATIONS = {
  address: { size: 42, maxLength: 50, validityFn: isValidAddress },
  hash: {
    size: 66,
    maxLength: 80,
    validityFn: address => /^(0x){1}[0-9a-fA-F]{64}$/i.test(address)
  },
  none: { size: 70, maxLength: 99999, validityFn: () => true }
};

const HashColorInput = props => {
  const { size, maxLength, validityFn } = VALIDATIONS[props.type]; // eslint-disable-line
  const isValid = validityFn(props.value);

  return (
    <HashColor hashee={props.value} clickable={false} color={isValid}>
      <Input
        variant={props.variant}
        type="text"
        onChange={props.onChange}
        className={props.className}
        size={size}
        value={props.value}
        spellCheck="false"
        style={{
          color: "inherit",
          fontFamily: "var(--font-monospace) monospace",
          fontSize: "var(--font-monospace-size)",
          border: isValid ? "solid 1px black" : "solid 1px #e7040f"
        }}
        maxLength={maxLength}
        placeholder={props.placeholder}
      />
    </HashColor>
  );
};

export default HashColorInput;

HashColorInput.propTypes = {
  className: PropTypes.className,
  variant: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

HashColorInput.defaultProps = {
  type: "none"
};
