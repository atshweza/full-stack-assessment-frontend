import axios from 'axios';

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

export const calculateRem = (size) => `${(size / 16) * 1}rem`;

export const debounce = (func, wait, immediate) => {
  let timeout;
  // eslint-disable-next-line func-names
  return function () {
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    // eslint-disable-next-line func-names
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const handleApiError = (error) => {
  const errorMessage = error.error || error;

  return {
    ok: false,
    result: null,
    error: new Error(errorMessage).message,
  };
};

export const handleApiSuccess = (result) => ({
  ok: true,
  result,
  error: null,
});

export const handleApiCall = async (endpoint, callBack = null) => {
  try {
    const { data, error } = await axios.get(endpoint);

    if (error) {
      return handleApiError(error);
    }

    if (callBack) {
      callBack(data);
    }

    return handleApiSuccess(data.data);
  } catch (error) {
    const err =
      error && error.response && error.response.data
        ? error.response.data
        : error;
    return handleApiError(err);
  }
};

export const truncate = (input, limit) =>
  input.length > limit ? `${input.substring(0, limit)}...` : input;
