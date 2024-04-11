import PropTypes from "prop-types";

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
  CHECKBOX: 3,
  PASSWORD: 4
};

const Field = ({ type = FIELD_TYPES.INPUT_TEXT, label, name, placeholder, id}) => {
  let component;
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = (
        <input
          id={id}
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
        />
      );
      break;
      case FIELD_TYPES.PASSWORD:
        component = (
          <input
            id={id}
            type="password"
            name={name}
            placeholder={placeholder}
            data-testid="field-testid"
          />
        );
        break;
    case FIELD_TYPES.TEXTAREA:
      component = <textarea name={name} data-testid="field-testid" />;
      break;
      case FIELD_TYPES.CHECKBOX:
        component = (
          <input 
            type="checkbox" 
            id={id} 
            data-testid="field-testid" 
          />
        );
        break;      
    default:
      component = (
        <input
          id={id}
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
        />
      );
  }
  return (
    <div>
      <label for={id}>{label}</label>
      {component}
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
 Field.defaultProps = {
   label: "",
   placeholder: "",
   type: FIELD_TYPES.INPUT_TEXT,
   name: "field-name",
 }

export default Field;
