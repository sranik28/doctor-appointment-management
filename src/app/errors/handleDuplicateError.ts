import { TErrorSource, TGenericErrorResponse } from '../interface/error';

export const handleDuplicateError = (error: any): TGenericErrorResponse => {
  // Extract value within double quotes using regex
  const match = error.message.match(/"([^"]*)"/);

  // The extracted value will be in the first capturing group
  const extractedMessage = match && match[1];

  const errorSources: TErrorSource = [
    {
      path: '',
      message: `${extractedMessage} is already exists`,
    },
  ];
  const statusCode = 409;
  return {
    statusCode,
    message: 'Email already exists',
    errorSources,
  };
};
