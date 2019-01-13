const doc_title = document.querySelector('.doctor_name');
const img_doc = document.querySelector('.img_doctor img');
const doc_prof = document.querySelector('.doctor_prof');
const host = 'http://localhost:8000';

if(window.location.href === `${host}/doctor/1`){
    doc_title.innerHTML = 'Pavel Wenzel';
    img_doc.src = `${host}/images/doc1.jpg`;
    doc_prof.innerHTML = 'Cardiologist'
}

if(window.location.href === `${host}/doctor/2`){
    doc_title.innerHTML = 'Lucie Veselá';
    img_doc.src = `${host}/images/doc2.jpg`;
    doc_prof.innerHTML = 'Neurologist';
}

if(window.location.href === `${host}/doctor/3`){
    doc_title.innerHTML = 'Josef Keutizner';
    img_doc.src = `${host}/images/doc3.jpg`;
    doc_prof.innerHTML = 'Gastroenterologist';
}