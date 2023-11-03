export const prepareName = (input: string): string  => {
    return input.replaceAll("[^A-Za-z()\\[\\]]", "").toLowerCase()
}
export const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}