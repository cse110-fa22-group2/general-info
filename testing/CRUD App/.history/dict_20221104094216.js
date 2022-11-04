/**
 * @typedef {{
 *  name: string,
 *  categories: string,
 *  definition: string,
 *  date_creation: string,
 *  created_by: string,
 *  last_edited_on: string,
 *  last_edited_by: string
 * }} term
 */
import DOMPurify from './DOMPurify/dist/purify.es.js';
export function generateTermId() {
    return crypto.randomUUID();
};
export const exampleTerm = {
    "name": "HTML",
    "categories": "WebDev, Programming Language",
    "definition": "Today is a good day."
};
export function showDialog(){
    document.getElementById('term_template').style.display = 'block';
}
export function cancel(){
    document.getElementById('term_template').style.display = 'none';
}