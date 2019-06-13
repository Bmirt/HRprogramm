import React, { Component } from "react";
import PropTypes from "prop-types";
import Select, { components } from "react-select";

const Option = props => (
  <div>
    <components.Option {...props}>
      <input type="checkbox" checked={props.isSelected} onChange={() => null} />{" "}
      <label>{props.label}</label>
    </components.Option>
  </div>
);

const MultiValue = props => (
  <components.MultiValue {...props}>
    <span>{props.data.label}</span>
  </components.MultiValue>
);

class MultiSelect extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.node,
        label: PropTypes.node
      })
    ).isRequired,
    onChangeCallback: PropTypes.func.isRequired
  };

  static defaultProps = {
    options: []
  };

  render() {
    const { options, onChangeCallback, ...otherProps } = this.props;

    return (
      <Select
        closeMenuOnSelect={false}
        isMulti
        components={{ Option, MultiValue }}
        options={options}
        hideSelectedOptions={false}
        backspaceRemovesValue={false}
        onChange={e => onChangeCallback(e)}
        {...otherProps}
      />
    );
  }
}

export default MultiSelect;
