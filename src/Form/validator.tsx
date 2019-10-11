import {FormValue} from "./index";
import {FormField} from "./index";
import {FormErrors} from "./index";

const validator = (fields: Array<FormField>, values: FormValue): FormErrors => {
  const fieldsWithRules = fields.filter(f => f.rules);
  const errors:FormErrors = {};
  fieldsWithRules.map((f:FormField) => {
    if (!errors[f.key]) {
      errors[f.key] = [];
    }

    f.rules && f.rules.map(rule => {
      if (rule.required && (!values[f.key])) {
        errors[f.key].push(rule.message);
      }
      if (rule.minLength && rule.minLength > values[f.key].length) {
        errors[f.key].push(rule.message);
      }
      if (rule.maxLength && rule.maxLength < values[f.key].length) {
        errors[f.key].push(rule.message);
      }
    });
  });

  return errors;
};

export default validator;