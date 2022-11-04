/**
 * @typedef {{
 *  name: string,
 *  tags: string[],
 *  definition: string,
 *  date_creation: string,
 *  created_by: string,
 *  last_edited_on: string,
 *  last_edited_by: string,
 *  edit_count: number
 * }} term
 */
// import DOMPurify from './DOMPurify/dist/purify.es.js';
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
function loadDict() {
    return JSON.parse(localStorage.getItem('terms')) || {};
}
function archiveDict(dict) {
    localStorage.setItem('terms', JSON.stringify(dict));
}
export function insertTerm(term) {
    const dict = loadDict();
    const termId = generateTermId();

    dict[termId] = term;
    archiveDict(dict);
    return blogId;
}
export function selectTerm(termId) {
    const dict = loadDict();
    return dict[termId];
}
export function selectDict() {
    const dict = loadDict();
    return dict;
}

export function updateTerm(termId, term) {
    const dict = loadDict();
    term.edit_count += 1;
    dict[termId] = term;
    archiveDict(dict);
}

export function deleteTerm(termId) {
    const dict = loadDict();
    if (!(termId in dict)){
        return false;
    } 
    delete dict[termId];
    archiveDict(dict);
    location.reload();
    return true;
}

export function termsCount() {
    const dict = loadDict();
    return Object.keys(dict).length;
}

export function renderTerm(termId, term) {
    const template = document.getElementById("dict_template");

    const termE1 = template.content.cloneNode(true);
    termE1.children[0].dataset.termId = termId;


    const nameH1 = termE1.querySelector('term_name > h1');
    nameH1.textContent = term.name;

    const tagUL1 = termE1.querySelector('tags > ul');
    for(let i = 0; i < term.tags.length; i++){
        tagUL1.innerHTML += '<li>' + term.tags[i] + '</li>';
    }

    return termE1;
}
export function renderAllTerms(term_container) {
    const dict = selectDict();

    for(const [termId, term] of Object.entries(dict)){
        const termE1 = renderTerm(termId, term);
        const existingTerm = term_container.querySelector(`[data-term-id="${termId}"]`);
        if (existingTerm) {
            existingTerm.remove();
        }

        term_container.appendChild(termE1);
    }
    return true;
}
export function add(){
    document.getElementById('term_template').style.display = 'none';
    //const name = DOMPurify.sanitize(document.getElementById('name').value);
    const name = document.getElementById('name').value;
    //const tags_str = DOMPurify.sanitize(document.getElementById('tags').value);
    const tags_str = document.getElementById('tags').value;
    //const definition = DOMPurify.sanitize(document.getElementById('definition').value);
    const definition = document.getElementById('definition').value;
    const cur_time = new Date();
    const term_container = document.getElementById('dict');
    const term = {};
    term['name'] = name;
    term['tags'] = tags_str.split(',');
    term['definition'] = definition;
    term['date_creation'] = cur_time;
    term['created_by'] = 'placeholder';
    term['last_edited_on'] = cur_time;
    term['last_edited_by'] = 'placeholder';
    term['edit_count'] = 0;
    insertTerm(term);
    renderAllTerms(term_container);
}
export function deleteAll() {
    const dict = selectDict();

    for(const [termId, term] of Object.entries(dict)){
        deleteTerm(termId);
    }
    renderAllTerms(document.getElementById('dict'));
}

export function showDialog(){
    document.getElementById('term_template').style.display = 'block';
}
export function cancel(){
    document.getElementById('term_template').style.display = 'none';
}