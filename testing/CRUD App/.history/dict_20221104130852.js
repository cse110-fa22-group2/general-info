/**
 * @typedef {{
 *  name: string,
 *  tags: string[],
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

    for(let i = 0; i < term.)
    const nameH1 = termE1.querySelector('term_name > h1');
    nameH1.textContent = term.name;

    const dateH2 = termE1.querySelector('blog-title > h3');
    dateH2.textContent = `Posted on: ${blog.date}`;

    const summaryP = blogE1.querySelector('blog-summary > p');
    summaryP.textContent = `Summary: ${blog.summary}`;

    const editP = blogE1.querySelector('blog-post > img#edit');
    editP.setAttribute('data-blogID', blogId);
    editP.addEventListener('click', () => { 
        editBlog(blogId);
    });
    
    const deleteP = blogE1.querySelector('blog-post > img#delete');
    deleteP.setAttribute('data-blogID', blogId);
    deleteP.addEventListener('click', () => {
        deleteBlog(blogId);
    });

    return blogE1;
}


export function showDialog(){
    document.getElementById('term_template').style.display = 'block';
}
export function cancel(){
    document.getElementById('term_template').style.display = 'none';
}