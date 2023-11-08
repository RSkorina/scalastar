import {prepareName, capitalizeFirstLetter} from './hashHelper'
import { prefix_canon, sufix_canon } from '../assets/data' 


const arrayPrefix = prefix_canon.split("\n");
const arraySuffix = sufix_canon.split("\n");
/*
 * inputString @string: The string that is going to hashed
 * resultStrings @string[]: array of strings, one of which will be the response 
*/
const hashString = ({inputString, resultStrings}: {inputString: string, resultStrings: string[]}): string => {
  const salt = 5
  let baseNumber: number = salt
  for (let i = 0; i < inputString.length; i++){
    if (baseNumber === 0) {baseNumber = 1};
    baseNumber = (baseNumber * inputString[i].charCodeAt(0)) % resultStrings.length;
  }
  return resultStrings[baseNumber]
}

export const irreversableHash = ({firstName, lastName}: {firstName: string, lastName: string}) => {
  
  const prefix = hashString({inputString: prepareName(firstName), resultStrings: arrayPrefix});
  const suffix = hashString({inputString: prepareName(lastName), resultStrings: arraySuffix});
  console.log(capitalizeFirstLetter(`${prefix}${suffix}`))
  return `${prefix}${suffix}`
}

irreversableHash({firstName: 'R', lastName: 'S'})