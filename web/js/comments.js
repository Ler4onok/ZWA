console.log(window.location.href)

const doc_title = document.querySelector('.name_doctor p');

if(window.location.href === 'http://localhost:8000/doctor/3'){
    doc_title.innerHTML = 'Josef Keutizner'
}

if(window.location.href === 'http://localhost:8000/doctor/2'){
    doc_title.innerHTML = 'Lucie Veselá'
}

if(window.location.href === 'http://localhost:8000/doctor/1'){
    doc_title.innerHTML = 'Pavel Wenzel'
}