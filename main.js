function handleSubmit() {
var req = [{id:'f-store',label:'ชื่อร้าน'},{id:'f-province',label:'จังหวัด'},{id:'f-name',label:'ชื่อผู้ติดต่อ'},{id:'f-phone',label:'เบอร์โทรศัพท์'}];
var missing = [];
req.forEach(function(r) {
var el = document.getElementById(r.id);
if (!el.value.trim()) { el.style.borderColor = 'var(--lavender)'; missing.push(r.label); }
else el.style.borderColor = '';
});
if (missing.length) { alert('กรุณากรอก: ' + missing.join(', ')); return; }
var store = document.getElementById('f-store').value.trim();
document.getElementById('success-msg').textContent = 'ขอบคุณที่สนใจในแบรนด์ MIRAR';
document.getElementById('form-view').style.display = 'none';
document.getElementById('success-view').style.display = 'block';
}
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
a.addEventListener('click', function(e) {
var t = document.querySelector(this.getAttribute('href'));
if (t) { e.preventDefault(); t.scrollIntoView({behavior:'smooth',block:'start'}); }
});
});
var obs = new IntersectionObserver(function(entries) {
entries.forEach(function(e) {
if (e.isIntersecting) { e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; }
});
}, {threshold:0.1});
document.querySelectorAll('.value-card,.product-card,.process-step,.province-chip,.stat-cell').forEach(function(el,i) {
el.style.opacity='0'; el.style.transform='translateY(20px)';
el.style.transition='opacity 0.5s '+(i*0.07)+'s ease, transform 0.5s '+(i*0.07)+'s ease';
obs.observe(el);
});