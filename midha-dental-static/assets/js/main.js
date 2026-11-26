
const toggle=document.querySelector('.menu-toggle'),links=document.querySelector('.nav-links');
if(toggle&&links){toggle.addEventListener('click',()=>{links.classList.toggle('open');toggle.setAttribute('aria-expanded',links.classList.contains('open')?'true':'false')})}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('.faq-question').forEach(q=>q.addEventListener('click',()=>q.parentElement.classList.toggle('open')));
document.querySelectorAll('form[data-demo]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();alert('Thank you. This is a design preview; appointment requests are not sent or stored yet. Please call the clinic to confirm.');form.reset()}));

// Appointment form: switch between new and existing patient fields.
const patientRadios=document.querySelectorAll('input[name="patientType"]');
const existingFields=document.querySelectorAll('.patient-existing');
const newFields=document.querySelectorAll('.patient-new');
function updatePatientType(){
  const selected=document.querySelector('input[name="patientType"]:checked')?.value || 'new';
  existingFields.forEach(el=>el.hidden=selected!=='existing');
  newFields.forEach(el=>el.hidden=selected!=='new');
  document.getElementById('newPatientCard')?.classList.toggle('selected',selected==='new');
  document.getElementById('existingPatientCard')?.classList.toggle('selected',selected==='existing');
}
patientRadios.forEach(r=>r.addEventListener('change',updatePatientType));
updatePatientType();
