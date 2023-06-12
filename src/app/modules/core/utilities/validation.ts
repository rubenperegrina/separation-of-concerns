import { ErrorKeys, ValidationConfig } from "../models/config.model";

const config: ValidationConfig = {
    required: 'This field is required'
}

export const getValidationErrorMessage = (errorName: ErrorKeys) => {
    return config[errorName];
}