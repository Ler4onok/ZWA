console.log(window.location.href)

const doc_title = document.querySelector('.name_doctor h2');

if(window.location.href === 'http://localhost:8000/doctor/3'){
    doc_title.innerHTML = 'Josef Keutizner'
}

if(window.location.href === 'http://localhost:8000/doctor/2'){
    doc_title.innerHTML = 'Dominika Trojanová'
}

if(window.location.href === 'http://localhost:8000/doctor/1'){
    doc_title.innerHTML = 'Pavel Wenzel'
}

console.log(doc_title)