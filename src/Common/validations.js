export const validate = (name, value, validations) => {
    const errors = [];
    if (validations.required) {
      if (!value) {
        errors.push(`${name} is require`);
      }
    }
  
    if (validations.minLength) {
      if (!value || value.length < validations.minLength) {
        errors.push(
          `${name} must be at least ${validations.minLength} characters`
        );
      }
    }
  
    if (validations.pattern) {
      if (!value || !value.match(validations.pattern)) {
        errors.push(`${name} is invalid`);
      }
    }
  
    return errors;
  };
  