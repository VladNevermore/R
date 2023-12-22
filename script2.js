let currentPage = 0;

const pages = [
    {
        title: "Бинарная тень",
        text: `<p>Способность объединять реальность и виртуальность в непревзойденном симфоническом спектакле выражается в загадочной фигуре. Никто не способен в действительности даже близко продвинуться в изучении подобной темы, изредка замечая троичные коды, мелькающие в эфире.  Попытки расшифровки этих сигналов и выявлений скрытых посланий остаются тщетными на фоне взаимодействия с аудиторией. Восприятие знаков буквально или как часть хитроумного плана один из самых сложных вопросов на данный момент.</p>
        
<p>Точки взаимодействия реальности и виртуальности в ходе стримов оказываются максимально запутанными. Моменты, где происходят ключевые события и загадки, для которых требуются дополнительные исследования затуманены на фоне самоироничных речей и шуточных разгадок.</p>

<p>Анализ метаморфозы внешности, характера и образа может являться проявлением обычного взросления и стечения обстоятельств или же открывает гипотезу ключевого решения, способного заметно приблизиться к раскрытию основных тайн.</p>

<p>Рассматривая вопрос изменения поведения аудитории в ответ на бинарные темы, можно прийти к выводу, что растущий интерес и активное взаимодействие зрителей становится важным элементом в разгадке загадок. Совместный анализ обратной связи и реакции создает возможность найти паттерны и тайные знаки. Следует быть осторожным, поскольку доказана угроза разрушения ментального сознания и насильного влияния в момент чрезмерного анализа реакции 04.05.23.</p>

<p>Точно доказано, что долгосрочное и чересчур страстное увлечение стримера к своей творческой работе вопреки физическому здоровью является источников вдохновения сущности. Постепенно, как паразит, способно поглощать энергию, выраженную в страсти и замыслах стримера и возможно превращая их в собственную сущность.</p>

<p>!Коды, которые визуализируются не только в эфире, создают уникальные образы и символы, тем самым заставляя сталкиваться с гипотезой, что каждый жест несет в себе свой уникальный смысл, который может приводить к решению более глубоких тайн или еще больше запутать.</p>`,
    },
    {
        title: "Внешнее проявление",
        text: "<p>Изучая очень ограниченный материал, который имеется, следует отметить, что внешнее проявление сущности можно сравнить с тенью. Максимально закрытый образ, дополняющийся маской и волосами, которые скрывают половину лица, поднимают вопросы о причинах столь агрессивно-закрытого проявления сущности.</p> <p>На данный момент неизвестно, что именно может материализовать сущность, однако посредством наблюдения можно с точностью сказать, что копирование “бабочки-заколки” ни разу не проявлялось. Связано ли это со слабыми возможностями сущности или чрезмерной силой данного атрибута пока что остается под вопросом.</p> <p>Использование цветовой палитры становится невероятно важным для анализа. Считается, что подобный ход напрямую влияет на изменение в атмосфере трансляций. Но не стоит забывать о менее очевидных вещах, таких как заметные изменения в свете, тени, общая эстетика. Следует с осторожностью обращать внимание на фоновые звуки, которые могут доноситься за пределами нашего видения.</p> <p>Анализ комментариев и реакций зрителей открывает взгляд на влияние внешнего облика на восприятие аудитории, приближая к ответам на вопрос о том, как эти изменения влияют на его отношение с публикой.</p>"
    },
    {
        title: "Астральный путь",
        text: "<p>На фоне обычных трансляций могут возникать внезапные моменты, когда взгляд стримера становится направленным в бескрайние просторы неизведанных миров. Не стоит недооценивать “обычный взгляд в камеру”.</p> <p>Пытаясь воссоздать реальные моменты в трансляции с целью внести в них смутные образы астральных миров посредством виртуальных рисунков, намекающие о неведомых мирах, в которых путешествует сущность.</p> <p>Следует отметить, что одним из главных источников в свободном доступе присутствуют ранее упомянутые виртуальные рисунки. Каждый по-своему воплощает образы сущности, демонстрируя свои взгляды, что помогает составлять общую картину происходящего и становится ценными следами в поиске правды. Однако не стоит включать во внимание каждый образ, который может оказаться ошибочным.</p>"
    }
];


const isTextPage = window.location.pathname.includes('/R/Binaryshadow/'); // Укажите путь к вашей странице с текстом

if (isTextPage) {

    const tiResultElement = document.getElementById('tiresult');

    if (!tiResultElement) {

        const tiResultFragment = `
<pre id="tiresult" style="font-size: 9px; background-color: #000000; font-weight: bold; padding: 4px 5px; --fs: 9px;"><b style="color:#000000">06600996066666696609660690090006099699660099000696</b>
<b style="color:#000000">90006966669669690909000669666996996006699069609960</b>
<b style="color:#000000">0966906600969990060606690660669</b><b style="color:#131313">6</b><b style="color:#2F2F2F">6</b><b style="color:#373737">0</b><b style="color:#333333">9</b><b style="color:#1E1E1E">0</b><b style="color:#080808">9</b><b style="color:#000000">0096609606600</b>
<b style="color:#000000">909006600669660690669090000</b><b style="color:#010101">6</b><b style="color:#252525">0</b><b style="color:#626262">6</b><b style="color:#A4A4A4">9</b><b style="color:#D8D8D8">6</b><b style="color:#F4F4F4">9</b><b style="color:#FCFCFC">9</b><b style="color:#F9F9F9">9</b><b style="color:#E3E3E3">9</b><b style="color:#848484">9</b><b style="color:#090909">0</b><b style="color:#000000">600066990066</b>
<b style="color:#000000">9006606600999996009099909</b><b style="color:#1E1E1E">9</b><b style="color:#636363">0</b><b style="color:#B0B0B0">9</b><b style="color:#E7E7E7">6</b><b style="color:#FFFFFF">9660</b><b style="color:#F9F9F9">9</b><b style="color:#E6E6E6">9</b><b style="color:#C9C9C9">6</b><b style="color:#575757">9</b><b style="color:#000000">6609966660666</b>
<b style="color:#000000">96696006609990990960969</b><b style="color:#323232">9</b><b style="color:#8E8E8E">6</b><b style="color:#DCDCDC">9</b><b style="color:#FFFFFF">096</b><b style="color:#FDFDFD">6</b><b style="color:#F5F5F5">0</b><b style="color:#D8D8D8">0</b><b style="color:#AFAFAF">9</b><b style="color:#909090">6</b><b style="color:#646464">6</b><b style="color:#292929">9</b><b style="color:#030303">6</b><b style="color:#000000">6096696966606</b>
<b style="color:#000000">699696006090999960609</b><b style="color:#1D1D1D">0</b><b style="color:#A0A0A0">6</b><b style="color:#F0F0F0">6</b><b style="color:#FFFFFF">9090</b><b style="color:#F2F2F2">6</b><b style="color:#B7B7B7">0</b><b style="color:#595959">0</b><b style="color:#252525">6</b><b style="color:#0F0F0F">0</b><b style="color:#040404">6</b><b style="color:#000000">6660906600906066</b>
<b style="color:#000000">09669996000660099660</b><b style="color:#252525">0</b><b style="color:#C5C5C5">9</b><b style="color:#FFFFFF">0696</b><b style="color:#FCFCFC">0</b><b style="color:#F3F3F3">0</b><b style="color:#F2F2F2">9</b><b style="color:#E5E5E5">6</b><b style="color:#9D9D9D">6</b><b style="color:#353535">6</b><b style="color:#000000">690609090660099669</b>
<b style="color:#000000">6696960900060909900</b><b style="color:#1F1F1F">9</b><b style="color:#CBCBCB">0</b><b style="color:#FFFFFF">696</b><b style="color:#EFEFEF">0</b><b style="color:#C9C9C9">0</b><b style="color:#BDBDBD">9</b><b style="color:#D4D4D4">9</b><b style="color:#EFEFEF">6</b><b style="color:#FEFEFE">6</b><b style="color:#FFFFFF">6</b><b style="color:#EFEFEF">6</b><b style="color:#3A3A3A">9</b><b style="color:#000000">96999660096099666</b>
<b style="color:#000000">666909066099060696</b><b style="color:#060606">9</b><b style="color:#B0B0B0">0</b><b style="color:#FFFFFF">99</b><b style="color:#FAFAFA">0</b><b style="color:#969696">0</b><b style="color:#3B3B3B">0</b><b style="color:#393939">6</b><b style="color:#575757">9</b><b style="color:#828282">6</b><b style="color:#CDCDCD">6</b><b style="color:#FAFAFA">9</b><b style="color:#FFFFFF">00</b><b style="color:#5B5B5B">9</b><b style="color:#000000">90000606966960606</b>
<b style="color:#000000">969969609969960060</b><b style="color:#535353">9</b><b style="color:#F9F9F9">0</b><b style="color:#FFFFFF">00</b><b style="color:#6D6D6D">0</b><b style="color:#000000">0069</b><b style="color:#020202">9</b><b style="color:#969696">0</b><b style="color:#FFFFFF">699</b><b style="color:#4D4D4D">0</b><b style="color:#000000">90069660609090066</b>
<b style="color:#000000">609696909609969660</b><b style="color:#999999">9</b><b style="color:#FFFFFF">60</b><b style="color:#FCFCFC">6</b><b style="color:#626262">6</b><b style="color:#050505">0</b><b style="color:#010101">9</b><b style="color:#0A0A0A">0</b><b style="color:#222222">6</b><b style="color:#575757">0</b><b style="color:#D7D7D7">9</b><b style="color:#FFFFFF">06</b><b style="color:#E6E6E6">6</b><b style="color:#212121">6</b><b style="color:#000000">00609660906609009</b>
<b style="color:#000000">969900600690696996</b><b style="color:#A8A8A8">0</b><b style="color:#F7F7F7">0</b><b style="color:#FFFFFF">9</b><b style="color:#FEFEFE">0</b><b style="color:#F4F4F4">9</b><b style="color:#D0D0D0">0</b><b style="color:#C5C5C5">6</b><b style="color:#D5D5D5">9</b><b style="color:#EDEDED">9</b><b style="color:#FFFFFF">6660</b><b style="color:#EAEAEA">0</b><b style="color:#2E2E2E">9</b><b style="color:#000000">66066966900000000</b>
<b style="color:#000000">600969900609096696</b><b style="color:#676767">9</b><b style="color:#B7B7B7">6</b><b style="color:#D6D6D6">6</b><b style="color:#E5E5E5">0</b><b style="color:#EDEDED">0</b><b style="color:#F6F6F6">0</b><b style="color:#FDFDFD">9</b><b style="color:#FEFEFE">6</b><b style="color:#FCFCFC">9</b><b style="color:#FBFBFB">0</b><b style="color:#FEFEFE">9</b><b style="color:#FFFFFF">69</b><b style="color:#E4E4E4">0</b><b style="color:#1F1F1F">0</b><b style="color:#000000">96990906009096699</b>
<b style="color:#000000">000669699969090000</b><b style="color:#0E0E0E">6</b><b style="color:#333333">0</b><b style="color:#6B6B6B">9</b><b style="color:#949494">9</b><b style="color:#9F9F9F">0</b><b style="color:#A6A6A6">0</b><b style="color:#C4C4C4">6</b><b style="color:#DCDCDC">0</b><b style="color:#E8E8E8">9</b><b style="color:#F7F7F7">6</b><b style="color:#FFFFFF">909</b><b style="color:#787878">0</b><b style="color:#000000">066060099990096960</b>
<b style="color:#000000">6669006090990600699</b><b style="color:#020202">9</b><b style="color:#040404">0</b><b style="color:#0E0E0E">9</b><b style="color:#3A3A3A">6</b><b style="color:#858585">9</b><b style="color:#CACACA">0</b><b style="color:#EDEDED">6</b><b style="color:#FBFBFB">6</b><b style="color:#FFFFFF">60</b><b style="color:#FCFCFC">9</b><b style="color:#888888">6</b><b style="color:#010101">6</b><b style="color:#000000">609600966066999609</b>
<b style="color:#000000">60966996996609696696</b><b style="color:#272727">0</b><b style="color:#7B7B7B">9</b><b style="color:#CDCDCD">0</b><b style="color:#F7F7F7">9</b><b style="color:#FFFFFF">990</b><b style="color:#FBFBFB">9</b><b style="color:#CACACA">6</b><b style="color:#565656">0</b><b style="color:#000000">60669699696000609066</b>
<b style="color:#000000">0900660069900960</b><b style="color:#060606">0</b><b style="color:#282828">9</b><b style="color:#676767">6</b><b style="color:#AEAEAE">0</b><b style="color:#E8E8E8">6</b><b style="color:#FFFFFF">690</b><b style="color:#FEFEFE">9</b><b style="color:#E5E5E5">9</b><b style="color:#ADADAD">6</b><b style="color:#585858">0</b><b style="color:#0D0D0D">0</b><b style="color:#000000">909606060000909000690</b>
<b style="color:#000000">09609060096960</b><b style="color:#3E3E3E">0</b><b style="color:#858585">9</b><b style="color:#BFBFBF">9</b><b style="color:#EBEBEB">6</b><b style="color:#FFFFFF">6000</b><b style="color:#F3F3F3">0</b><b style="color:#C1C1C1">0</b><b style="color:#747474">9</b><b style="color:#2C2C2C">9</b><b style="color:#020202">0</b><b style="color:#000000">96990966069000606909966</b>
<b style="color:#000000">6006609099990</b><b style="color:#242424">6</b><b style="color:#B8B8B8">9</b><b style="color:#FFFFFF">6666</b><b style="color:#F6F6F6">0</b><b style="color:#D8D8D8">0</b><b style="color:#979797">0</b><b style="color:#434343">9</b><b style="color:#0A0A0A">0</b><b style="color:#000000">99009069696669096000966999</b>
<b style="color:#000000">966900909900</b><b style="color:#010101">6</b><b style="color:#4A4A4A">6</b><b style="color:#C5C5C5">0</b><b style="color:#EFEFEF">6</b><b style="color:#E9E9E9">6</b><b style="color:#CCCCCC">6</b><b style="color:#9A9A9A">6</b><b style="color:#595959">9</b><b style="color:#1C1C1C">9</b><b style="color:#000000">96999969900990900960696909606</b>
<b style="color:#000000">0909069900609</b><b style="color:#292929">9</b><b style="color:#656565">9</b><b style="color:#717171">6</b><b style="color:#444444">9</b><b style="color:#181818">9</b><b style="color:#000000">00666909099090996909699099096990</b>
<b style="color:#000000">9990006969000</b><b style="color:#030303">6</b><b style="color:#020202">6</b><b style="color:#000000">06069990900690669900666699990690060</b>
<b style="color:#000000">66990690990696666906000006900096066960990006690609</b>
<b style="color:#000000">96009666990660960966966906999969009066966099000996</b>
</pre>
            </pre>
        `;
        document.querySelector('.content').insertAdjacentHTML('afterbegin', tiResultFragment);
    }
}


function updateContent() {
    const titleElement = document.getElementById('title');
    const contentElement = document.getElementById('textContent');
    const backButton = document.querySelector('.pagination-back');
    const forwardButton = document.querySelector('.pagination-forward');

    titleElement.textContent = pages[currentPage].title;
    contentElement.innerHTML = pages[currentPage].text;

    backButton.style.display = (currentPage === 0) ? 'none' : 'block';
    forwardButton.style.display = (currentPage === pages.length - 1) ? 'none' : 'block';
}



function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updateContent();
    }
}


const returnHomeButton = document.createElement('div');
returnHomeButton.classList.add('return-home');
returnHomeButton.textContent = 'Вернуться на главную';
returnHomeButton.onclick = returnHome;
document.body.appendChild(returnHomeButton);

function returnHome() {
    window.location.href = 'https://vladnevermore.github.io/R/kripota'; 
}



function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updateContent();
    }
}

updateContent();

