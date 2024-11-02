function showSection(sectionId) {
    document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

async function hitungLuasPersegi() {
    const sisi = document.getElementById('sisiPersegi').value;
    const response = await fetch('http://23.23.13.38:8080/function/luas-persegi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rusuk: parseFloat(sisi) })
    });

    const data = await response.json();
    document.getElementById('hasilPersegi').innerText = `Luas Persegi: ${data.luas}`;
}

async function hitungLuasKubus() {
    const sisi = document.getElementById('sisiKubus').value;
    const response = await fetch('http://54.175.180.134:8080/function/luas-permukaan-kubus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rusuk: parseFloat(sisi) })
    });

    const data = await response.json();
    document.getElementById('hasilKubus').innerText = `Luas Permukaan Kubus: ${data.luasPermukaanKubus}`;
}
