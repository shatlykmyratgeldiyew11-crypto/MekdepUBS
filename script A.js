/* ===========================/* ===========================
   TEST A soraglary
=========================== */
const testA = [
    {q:"1. Türkmen dilinde näçe sany çekimli we näçe sany çekimsiz harp bar?",
     a:{a:"8 çekimli, 21 çekimsiz", b:"9 çekimli, 22 çekimsiz", ç:"9 çekimli, 21 çekimsiz"},
     correct:"a"},

    {q:"2. -a, -e, -na, -ne haýsy düşümiň goşulmasy?",
     a:{a:"Eýelik düşümiň", b:"Ýöneliş düşümiň", ç:"Ýeňiş düşümiň"},
     correct:"b"},

    {q:"3. İşlik nämäni aňladýar?",
     a:{a:"Gymyldy hereketi", b:"Bir zat aýtmagy", c:"Sorag soramagy", d:"Habar bermegi"},
     correct:"a"},

    {q:"4. Haýsy sorag sözlemidir?",
     a:{a:"Gadyrly halyçylar!", b:"Sen düýn obada bolduňmy?", ç:"Ördek suwda ýüzýär"},
     correct:"b"},

    // English
    {q:"5. My father … a doctor.", a:{a:"is", b:"am", c:"are"}, correct:"a"},
    {q:"6. … her mother teaches at school?", a:{a:"is", b:"am", c:"are"}, correct:"a"},
    {q:"7. Mary … tennis on Sundays.", a:{a:"plays", b:"playing", c:"play"}, correct:"a"},
    {q:"8. It is … in Summer.", a:{a:"cold", b:"hot", c:"rainy"}, correct:"b"},
    {q:"9. I … in the living room.", a:{a:"play", b:"have a shower", c:"relax"}, correct:"c"},

    // Russian
    {q:"10. Сколько букв?", a:{А:"25", Б:"30", В:"33"}, correct:"В"},
    {q:"11. Состав слова это-", a:{А:"приставка, корень, суффикс…", Б:"слог", В:"ударение"}, correct:"А"},
    {q:"12. Звонкие согласные?", a:{А:"с, ж, г, ш", Б:"б, в, г, д", В:"п, ф, т"}, correct:"Б"},
    {q:"13. Главные члены?", a:{А:"Определение", Б:"Слог", В:"Подлежащее и сказуемое"}, correct:"В"},
    {q:"14. Личные местоимения?", a:{А:"Я, ТЫ, ОН…", Б:"МОЙ…", В:"ЕГО…"}, correct:"А"},

    // ÝDE
    {q:"15. Adama uky näme üçin gerek?", a:{a:"ösmek üçin", b:"semremek üçin", ç:"dynç almak üçin"}, correct:"ç"},
    {q:"16. 7–10 ýaşly okuwçy näçe sagat ýatmaly?", a:{a:"8", b:"9", ç:"10–11"}, correct:"ç"},
    {q:"17. Bedenterbiýe näme üçin?", a:{a:"owadan bolmak üçin", b:"saglygyňy berkitmek üçin", ç:"bedeni taýýar etmek"}, correct:"b"},

    // Math
    {q:"18. 390 – (240 + 100 : 2) =", a:{a:"200", b:"100", ç:"220"}, correct:"b"},
    {q:"19. Haýsy dogry?", a:{a:"100см=1м / 1кг=100г", b:"100см=10м /1кг=1000г", ç:"100см=1м /1кг=1000г"}, correct:"ç"},
    {q:"20. Iki günde näçe kelem äkidildi?", a:{a:"670", b:"770", ç:"410"}, correct:"a"}
];

/* ===========================
   TEST B soraglary
=========================== */
const testB = [
    {q:"1. Diňe dodak çekimlisi bolan söz haýsy?", a:{a:"göle", b:"balyk", ç:"oglan", d:"çukur"}, correct:"a"},
    {q:"2. -ym, -im, -um, -üm nämäniň goşulmasy?", a:{a:"Menlik", b:"Senlik", ç:"Olluk"}, correct:"a"},
    {q:"3. 'Orazyň kakasy' haýsy düşüm?", a:{a:"Baş", b:"Eýelik", ç:"Ýöneliş"}, correct:"a"},
    {q:"4. Sypatlar haýsy soraga jogap?", a:{a:"nädip", b:"nähili", ç:"kim?"}, correct:"b"},

    // English
    {q:"5. The children … in the yard.", a:{a:"are playing", b:"is playing", c:"am playing"}, correct:"a"},
    {q:"6. Is the boy playing football?", a:{a:"Yes, he is", b:"No, he is", c:"Yes, he isn’t"}, correct:"a"},
    {q:"7. Are you doing homework?", a:{a:"Yes, I'm not", b:"Yes, I'm", c:"No, I am"}, correct:"b"},
    {q:"8. My … cat is black.", a:{a:"brother", b:"brothers", c:"brother’s"}, correct:"c"},
    {q:"9. …… I go to the market tomorrow?", a:{a:"Will", b:"Did", c:"Shall"}, correct:"c"},

    // Russian
    {q:"10. Звонкие согласные?", a:{А:"с, ж, г, ш", Б:"б, в, г, д", В:"п, ф, т"}, correct:"Б"},
    {q:"11. Сколько букв?", a:{А:"25", Б:"30", В:"33"}, correct:"В"},
    {q:"12. Личные местоимения?", a:{А:"Я, ТЫ, ОН", Б:"МОЙ", В:"ЕГО"}, correct:"А"},
    {q:"13. Состав слова?", a:{А:"приставка-корень-суффикс", Б:"слог", В:"ударение"}, correct:"А"},
    {q:"14. Главные члены?", a:{А:"Определение", Б:"Слог", В:"Подлежащее и сказуемое"}, correct:"В"},

    // ÝDE
    {q:"15. Çalt uklamak üçin näme etmeli?", a:{a:"telewizor görmek", b:"basyrnyp ýatmak", ç:"gezelenç etmek"}, correct:"ç"},
    {q:"16. Irki maşk näme üçin?", a:{a:"tertip üçin", b:"dynç almak üçin", c:"sagdyn bolmak üçin"}, correct:"c"},
    {q:"17. Bedenterbiýe näme üçin?", a:{a:"owadan bolmak", b:"saglygyňy berkitmek", c:"bedeni taýýar etmek"}, correct:"b"},

    // Math
    {q:"18. Haýsy dogry?", a:{a:"25×7 < 160÷2", b:"25×7 > 160÷2", c:"25×7 = 160÷2"}, correct:"b"},
    {q:"19. Haýsy dogry?", a:{a:"100см=1м / 1сағ=60мин", b:"100см=10м /1сағ=60с", c:"100см=1м /1сағ=60мин"}, correct:"c"},
    {q:"20. Iki günde näçe kelem äkidildi?", a:{a:"670", b:"770", c:"410"}, correct:"a"}
];

/* ===========================
       TESTI BAŞLAMAK
=========================== */
let currentTest = [];
let startTime;

function startTest(){
    const select = document.getElementById("testSelect").value;
    currentTest = select === "A" ? testA : testB;

    const form = document.getElementById("testForm");
    form.innerHTML = "";
    startTime = new Date();

    currentTest.forEach((item, index)=>{
        let html = `<div class='question'><h3>${item.q}</h3>`;
        for(let opt in item.a){
            html += `
                <label><input type="radio" name="q${index}" value="${opt}"> 
                ${opt}) ${item.a[opt]}</label><br>`;
        }
        html += `</div>`;
        form.innerHTML += html;
    });

    form.innerHTML += `<button type="button" onclick="finishTest()">Testi Tamamla</button>`;
}

/* ===========================
       NETIJE + ÝALŇYŞLAR
=========================== */
function finishTest(){
    let correct = 0;
    let wrongList = [];

    currentTest.forEach((item, index)=>{
        const checked = document.querySelector(`input[name="q${index}"]:checked`);

        if(checked){
            if(checked.value === item.correct){
                correct++;
            } else {
                wrongList.push({
                    sorag: item.q,
                    dogry: item.correct,
                    variant: item.a[item.correct],
                    yazan: checked.value
                });
            }
        } else {
            wrongList.push({
                sorag: item.q,
                dogry: item.correct,
                variant: item.a[item.correct],
                yazan: "Jogap ýok"
            });
        }
    });

    const percent = Math.round((correct / currentTest.length) * 100);

    let html = `
        <b>Dogry:</b> ${correct} / 20<br>
        <b>Prosent:</b> ${percent}%<br><br>
        <h3>Ýalňyş edilen soraglar:</h3>
    `;

    if(wrongList.length === 0){
        html += "<p style='color:green;'><b👍 Ähli sorag dogry!</b></p>";
    } else {
        wrongList.forEach((w, i)=>{
            html += `
                <p><b>${i+1}) ${w.sorag}</b><br>
                • Dogry jogap: <b>${w.dogry}) ${w.variant}</b><br>
                • Seniň jogabyň: <span style="color:red;">${w.yazan}</span></p>
            `;
        });
    }

    document.getElementById("result").innerHTML = html;
}


