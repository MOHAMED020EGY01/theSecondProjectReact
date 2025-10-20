/**
 * 
 * @param {string} text input text required to be sliced
 * @param {number} {max=20} maximum length of the sliced text
 * @returns {string} sliced text
 */
export const textSlicer = (text:string,max:number = 20): string => {
    if(text.length >= max) return `${text.slice(0, max)} ...`;
    return text;
}