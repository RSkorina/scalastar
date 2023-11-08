import { originalNameHash } from "./originalNameHash";
import { irreversableHash } from "./irreversableHash";

// TODO COME UP WITHA  BETTER WAY TO SOLVE THIS PROBLEM
export const catHash = ({hashType, firstName, lastName}: {hashType: string, firstName: string, lastName: string}): string => {
    console.log('hashType', hashType)
    if (hashType === 'original'){
        return originalNameHash({firstName, lastName});
    }
    else if (hashType === 'irreversable'){
        return irreversableHash({firstName, lastName});
    }

    return 'Fireheart'
} 