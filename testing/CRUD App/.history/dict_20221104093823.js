/**
 * @typedef {{
 *  name: string,
 *  categories: string,
 *  definition: string
 * }} term
 */

export function showDialog(){
    document.getElementById('term_template').style.display = 'block';
}
export function cancel(){
    document.getElementById('term_template').style.display = 'none';
}