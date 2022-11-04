/**
 * @typedef {{
 *  name: string,
 *  tags: string,
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
    "tags": "WebDev, Programming Language",
    "definition": "HyperText Markup Language",
    "date_creation": "11/4/2022",
    "created_by": "Bob",
    "last_edited_on": "11/5/2022",
    "last_edited_by": "Joe"
};
function loadTerms() {
    return JSON.parse(localStorage.getItem('terms')) || {};
}
function archiveTerms(terms) {
    localStorage.setItem('terms', JSON.stringify(terms));
}
export function showDialog(){
    document.getElementById('term_template').style.display = 'block';
}
export function cancel(){
    document.getElementById('term_template').style.display = 'none';
}