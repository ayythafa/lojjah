let sendbtn = document.getElementById("send");
sendbtn.addEventListener("click", function (event) {
  event.preventDefault();

  let useranswer = document.getElementById("answer").value;
  if (useranswer === "تلقي") {
    alert("إجابة صحيحة ! أحسنت");
    document.getElementById("maalem1").style.display = "block";
  } else {
    alert("حاول ثانية ");
  }
});
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");
let modalQ = document.getElementById("modal-question");
let modalAns = document.getElementById("modal-answers");
let closeBtn = document.getElementById("closeBtn");
let nextBtn = document.getElementById("nextBtn");
let correct = document.getElementById("correct");

// مصفوفة المعالم
let landmarks = [
  {
    id: "landmark1",
    image: "images/m1img.jpg",
    question:
      "قال تعالى : من المؤمنين رجال صدقوا ما عاهدوا الله عليه........  هذه الآية نزلت في ..... ؟",
    options: ["أنس بن النضر", "خالد بن الوليد ", "مصعب بن عمير "],
    correct: "أنس بن النضر",
    next: "landmark2",
    nextMap: "images/📍 (1).png",
  },
  {
    id: "landmark2",
    image: "images/m2img.jpg",
    question:
      ":أكمل الفراغ : قال عبدالله بن مسعود كنّا إذا تعلمنا..........آيات من القرآن لم نتعلم العشر التي بعدها حتى نعرف حلالها وحرامها وأمرها ونهيها",
    options: ["الخمس", "السبع", "العشر"],
    correct: "العشر",
    next: "landmark3",
    nextMap: "images/📍 (2).png",
  },
  {
    id: "landmark3",
    image: "images/m3img.jpg",
    question:
      "قال تعالى:﴿وَقُرْآنًا فَرَقْنَاهُ لِتَقْرَأَهُ عَلَى النَّاسِ عَلَىٰ ...... وَنَزَّلْنَاهُ تَنزِيلًا﴾ ؟",
    options: ["مكث", "علم", "لا أعلم الإجابة"],
    correct: "مكث",
    next: "landmark4",
    nextMap: "images/📍 (3).png",
  },
  {
    id: "landmark4",
    image: "images/m4img.jpg",
    question:
      "?الأستمرار في تلقي الدين إلى نهاية الطريق. المقصود بنهاية الطريق",
    options: ["نهاية التعليم", "نهاية  الإصلاح", "نهاية العمر"],
    correct: "نهاية العمر",
    next: "landmark5",
    nextMap: "images/📍 (4).png",
  },
  {
    id: "landmark5",
    image: "images/m5img.jpg",
    question: "الشمولية للدين يقصد بها الإحاطة التفصيلية بأمور الدين ؟",
    options: ["صح", "خطأ"],
    correct: "خطأ",
    next: "landmark6",
    nextMap: "images/📍 (5).png",
  },
  {
    id: "landmark6",
    image: "images/m6img.jpg",
    question: "ما هو المقصد الكلي للقرآن",
    options: ["تحقيق العبودية لله", "الاحكام الفقهية", "-القصص"],
    correct: "تحقيق العبودية لله",
    next: "landmark7",
    nextMap: "images/📍 (6).png",
  },
  {
    id: "landmark7",
    image: "images/m7img.jpg",
    question: "التربية على فهم مراتب الدين هو المعلم ......في القسم الثاني.",
    options: ["الرابع", "الثالث", "الأول"],
    correct: "الثالث",
    next: "landmark8",
    nextMap: "images/📍 (7).png",
  },
  {
    id: "landmark8",
    image: "images/m8img.jpg",
    question: "القسم الكثير في بداية السورة يدل على",
    options: ["التعظيم", "الترهيب", "لا شيء مما سبق"],
    correct: "التعظيم",
    next: "landmark9",
    nextMap: "images/📍 (8).png",
  },
  {
    id: "landmark9",
    image: "images/m9img.jpg",
    question: "أول تغيير في تلقي الدين هو:",
    options: [
      "التغيير في القدوة",
      "التغيير في المحتوى",
      "التغيير في التهيئة الإيمانية",
    ],
    correct: "التغيير في التهيئة الإيمانية",
    next: "landmark10",
    nextMap: "images/📍 (9).png",
  },
  {
    id: "landmark10",
    image: "images/m10img.jpg",
    question: "ما المقصود بالتلقي للعمل:",
    options: [
      "ينوي أن يتلقى العلم ليعمل فقط",
      "ينوي أن يتلقى العلم ليعمل ثم يعمل",
      "لا شيء مما سبق",
    ],
    correct: "ينوي أن يتلقى العلم ليعمل ثم يعمل",
    next: "landmark11",
    nextMap: "images/📍 (10).png",
  },
  {
    id: "landmark11",
    image: "images/m11img.jpg",
    question:
      "قال تعالى:{ ما كَانَ لِبَشَرٍ أَن يُؤْتِيَهُ اللهُ الكِتابَ وَالحُكْمَ وَالنُّبوَّةَ ثُمَّ يقُولَ للنّاسِ كونوا عِباداً لي من دونِ اللهِ وَلكِنْ كونوا رَبّانِيّينَ بما كُنتُم تُعَلِّمونَ الكِتابَ وَبِما كُنْتُمْ تَدرُسونَ}، قال الطبري في معنى هذا:",
    options: [
      "قراءة الكتاب بتمهل لحفظه أو تدبره",
      "التأثر من تكرار عملٍ يُعمل",
      "كل ما سبق",
    ],
    correct: "كل ما سبق",
    next: "landmark12",
    nextMap: "images/📍 (11).png",
  },
  {
    id: "landmark12",
    image: "images/m12img.jpg",
    question: "التنويع في الوسائل البيانية يشتت التركيز ويقلل من جودته:",
    options: ["صح", "خطأ"],
    correct: "خطأ",
    next: "landmark13",
    nextMap: "images/📍 (12).png",
  },
  {
    id: "landmark13",
    image: "images/m13img.jpg",
    question: "من الأدلة على تلقي الدين باعتبار وجود نموذج مطبق 'قدوة':",
    options: [
      "قوله تعالى:{  لَقَد كانَ لَكُم في رَسولِ اللَّهِ أُسوَةٌ حَسَنَةٌ لِمَن كانَ يَرجُو اللَّهَ وَاليَومَ الآخِرَ وَذَكَرَ اللَّهَ كَثيرًا }",
      "قوله تعالى:{ وَكَيْفَ تَكْفُرونَ وَأَنْتُمْ تُتْلى عَلَيْكُم آياتُ اللهِ وَفِيكُمْ رَسُولُهُ وََنْ يَعْتَصِم باللهِ فَقَدْ هُدِيَ الى صِراطٍ مُسْتَقيمٍ}",
      "كل ما سبق",
    ],
    correct: "كل ما سبق",
    next: "landmark14",
    nextMap: "images/📍 (13).png",
  },
  {
    id: "landmark14",
    image: "images/m14img.jpg",
    question:
      "على المصلح أو المربي أن يجمع بين الخطاب العام والخطاب الخاص في التربية:",
    options: ["صح", "خطأ ليس ضروريا"],
    correct: "صح",
    next: "correct",
    nextMap: "images/📍 (13).png",
  },
  {
    id: "correct",
    question: "مبارك! حصلت على المفتاح الأول",
    options: [],
  },
];

// فتح المودل وتعبئته
// فتح المودل وتعبئته
function openModal(landmark) {
  modal.style.display = "flex";
  modalImg.src = landmark.image;
  modalQ.textContent = landmark.question;

  // نضيف الأزرار للإجابات
  modalAns.innerHTML = "";
  landmark.options.forEach((opt) => {
    let btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (opt === landmark.correct) {
        modal.style.display = "none";
        if (landmark.next) {
          document.getElementById(landmark.next).style.display = "inline-block";
        }
        document.getElementById("map").src = landmark.nextMap;
      } else {
        alert("خطأ ❌ حاول مرة ثانية");
      }
    };
    modalAns.appendChild(btn);
  });
}

// ربط الأزرار بالمعالم
landmarks.forEach((l) => {
  document.getElementById(l.id).onclick = () => openModal(l);
});

// إغلاق المودل
closeBtn.onclick = () => {
  modal.style.display = "none";
};
//الباب الثاني
function eftah2() {
  let bab2 = document.getElementById("bab2box");
  bab2.style.display = "block";
}
let sendbtn2 = document.getElementById("send2");
sendbtn2.addEventListener("click", function (event) {
  event.preventDefault();

  let useranswer = document.getElementById("answer2").value;
  if (useranswer === "التربية") {
    alert("إجابة صحيحة ! أحسنت");
    document.getElementById("maalem2").style.display = "block";
  } else {
    alert("حاول ثانية ");
  }
});

// مصفوفة المعالم
let tlandmarks = [
  {
    id: "tlandmark1",
    image: "images/m1t.jpg",
    question:
      "الإهتمام بقضية صناعة المصلحين من أهم المعالم في السيرة النبوية؟ ",
    options: ["لا،فالمصلحون موجودون", "نعم،مهم جدا"],
    correct: "نعم،مهم جدا",
    next: "tlandmark2",
    nextMap: "images/📍 (15).png",
  },
  {
    id: "tlandmark2",
    image: "images/m2t.jpg",
    question: "يكتمل تعليم العلم الشرعي ب",
    options: [
      "الرافد العلمي",
      "الرافدالعملي",
      "الرافد التربوي ",
      "جميع ما سبق",
    ],
    correct: "جميع ما سبق",
    next: "tlandmark3",
    nextMap: "images/📍 (16).png",
  },
  {
    id: "tlandmark3",
    image: "images/m3t.jpg",
    question: "كان من أهم ما أسهم في أن يحمل أصحاب رسول الله الرايه من بعده",
    options: [
      "قرب النبي من أصحابه ووجوده معهم",
      "دعاء الرسول صلى الله عليه وسلم لهم",
    ],
    correct: "قرب النبي من أصحابه ووجوده معهم",
    next: "tlandmark4",
    nextMap: "images/📍 (17).png",
  },
  {
    id: "tlandmark4",
    image: "images/m4t.jpg",
    question:
      "إبراز النبي صلى الله عليه وسلم لأصحابه هو دور ……له تأثير في التمكين و الإصلاح",
    options: ["تربوي", "إصلاحي"],
    correct: "تربوي",
    next: "tlandmark5",
    nextMap: "images/📍 (19).png",
  },
  {
    id: "tlandmark5",
    image: "images/m5t.jpg",
    question: "من أهم الأمثلة على الإدراك التفصيلي لأحوال المتربين......",
    options: [
      "قصة النبي صلى الله عليه وسلم مع جابر في بيع جمله",
      "قول النبي لإبن عباس اللهم علمه الكتاب",
      "الحوار",
    ],
    correct: "قصة النبي صلى الله عليه وسلم مع جابر في بيع جمله",
    next: "tlandmark6",
    nextMap: "images/📍 (20).png",
  },
  {
    id: "tlandmark6",
    image: "images/m6t.jpg",
    question: "يُعد العمل قرينًا للخطأ",
    options: ["صح", "خطأ"],
    correct: "صح",
    next: "tlandmark7",
    nextMap: "images/📍 (21).png",
  },
  {
    id: "tlandmark7",
    image: "images/m7t.jpg",
    question: "أول قدامة بن مظعون:",
    options: ["الزنا", "شرب الخمر"],
    correct: "شرب الخمر",
    next: "tlandmark8",
    nextMap: "images/📍 (22).png",
  },
  {
    id: "tlandmark8",
    image: "images/m8t.jpg",
    question:
      "من الأساليب التربوية عند النبي صلى الله عليه وسلم العتاب والتشديد والتغليظ في جميع المواقف",
    options: ["صح", "خطأ"],
    correct: "خطأ",
    next: "tlandmark9",
    nextMap: "images/📍 (23).png",
  },
  {
    id: "tlandmark9",
    image: "images/m9t.jpg",
    question: "ماذا يفهم من تفسير الطبري لقصة يوسف عليه السلام ؟",
    options: [
      "أن الابتلاءات دليل على الغضب الإلهي",
      "أن يوسف عليه السلام لم يتعرض للظلم",
      "أن الصبر على ما يناله المسلم في سبيل الله، يقابله قدرة الله على تغييره.",
    ],
    correct:
      "أن الصبر على ما يناله المسلم في سبيل الله، يقابله قدرة الله على تغييره.",
    next: "tlandmark10",
    nextMap: "images/📍 (24).png",
  },
  {
    id: "tlandmark10",
    image: "images/m10t.jpg",
    question: "ما الذي يُعتبر أساس التربية في هذا المعلم؟",
    options: [
      "كثرة العبادات والطقوس فقط",
      "معرفة الصديق من العدو والعض على الدين بالنواجذ.",
      "حفظ القرآن الكريم كاملًا",
    ],
    correct: "معرفة الصديق من العدو والعض على الدين بالنواجذ.",
    next: "tlandmark11",
    nextMap: "images/📍 (25).png",
  },
  {
    id: "tlandmark11",
    image: "images/m11t.jpg",
    question: "على أي أساس كان التصنيف الأساسي للصحابة رضوان الله عليهم ",
    options: [
      "عدد الغزوات التي شاركوا فيها",
      "العمل، مثل كونهم مهاجرين وأنصار",
      "حفظ الأحاديث",
    ],
    correct: "العمل، مثل كونهم مهاجرين وأنصار",
    next: "tlandmark12",
    nextMap: "images/📍 (26).png",
  },
  {
    id: "tlandmark12",
    image: "images/m12t.jpg",
    question: "كيف تعامل النبي ﷺ مع الغزوات من ناحية الأسباب؟",
    options: [
      "كان يكتم الوجهة إلا في غزوة تبوك",
      "كان يعلن وجهتها دائمًا للصحابة",
      "لم يتخذ أي أسباب احترازية",
    ],
    correct: "كان يكتم الوجهة إلا في غزوة تبوك",
    next: "correct2",
    nextMap: "images/📍 (18).png",
  },
  {
    id: "correct2",
    question: "مبارك! حصلت على المفتاح الثاني",
    options: [],
  },
];

// فتح المودل وتعبئته
function openModal(tlandmark) {
  modal.style.display = "flex";
  modalImg.src = tlandmark.image;
  modalQ.textContent = tlandmark.question;

  // نضيف الأزرار للإجابات
  modalAns.innerHTML = "";
  tlandmark.options.forEach((opt) => {
    let btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (opt === tlandmark.correct) {
        modal.style.display = "none";
        if (tlandmark.next) {
          document.getElementById(tlandmark.next).style.display =
            "inline-block";
        }
        document.getElementById("map").src = tlandmark.nextMap;
      } else {
        alert("خطأ ❌ حاول مرة ثانية");
      }
    };
    modalAns.appendChild(btn);
  });
}

// ربط الأزرار بالمعالم
tlandmarks.forEach((l) => {
  document.getElementById(l.id).onclick = () => openModal(l);
});

// إغلاق المودل
closeBtn.onclick = () => {
  modal.style.display = "none";
};
//الباب الثالث
function eftah3() {
  let bab3 = document.getElementById("bab3box");
  bab3.style.display = "block";
}
let sendbtn3 = document.getElementById("send3");
sendbtn3.addEventListener("click", function (event) {
  event.preventDefault();

  let useranswer = document.getElementById("answer3").value;
  if (useranswer === "الإصلاح") {
    alert("إجابة صحيحة ! أحسنت");
    document.getElementById("maalem3").style.display = "block";
  } else {
    alert("حاول ثانية ");
  }
});
let slandmarks = [
  {
    id: "slandmark1",
    image: "images/ms1.jpg",
    question:
      "من كان يريد الإصلاح على منهاج النبوة اليوم فلينظر إلى مشكلات الواقع الكبرى ومدى إنتشارها وليعطها أولوية في الإصلاح",
    options: ["العبارة صحيحة", "العبارة خاطئة", "غير ذلك"],
    correct: "العبارة صحيحة",
    next: "slandmark2",
    nextMap: "images/📍 (28).png",
  },
  {
    id: "slandmark2",
    image: "images/ms2.jpg",
    question: ".......هي التبليغ باللسان والأمر بالمعروف والنهي عن المنكر.",
    options: ["التربية", "الدعوة", "السياسة"],
    correct: "الدعوة",
    next: "slandmark3",
    nextMap: "images/📍 (29).png",
  },
  {
    id: "slandmark3",
    image: "images/ms3.jpg",
    question:
      "هذا المعلم لا ينبغي أن يغفل عنه ولا أن يستهان به وأن لا يعتبر أنه من الأمور التكميلية في الدعوة بل هو أساس فيها.",
    options: [
      "المعلم الثالث لمنهاج النبوة في الإصلاح وهو مرتبط بالدعوة",
      "المعلم الثالث لمنهاج النبوة في التربية وهو القرب الدائم والخلطة الواسعة في مختلف الأحوال",
      "لا شيء مما ذكر",
    ],
    correct: "المعلم الثالث لمنهاج النبوة في الإصلاح وهو مرتبط بالدعوة",
    next: "slandmark4",
    nextMap: "images/📍 (30).png",
  },
  {
    id: "slandmark4",
    image: "images/ms4.jpg",
    question: "التنزه عن المكاسب والمطامع  الشخصية في السياق الإصلاحي هو:",
    options: [
      "التنزه والترفع عن الإصلاح",
      "التجرد من الإصلاح والمصلحين",
      "التجرد الإصلاحي",
    ],
    correct: "التجرد الإصلاحي",
    next: "slandmark5",
    nextMap: "images/📍 (31).png",
  },
  {
    id: "slandmark5",
    image: "images/ms5.jpg",
    question:
      "العمل الإصلاحي مثله مثل أي وظيفة نستطيع تبديله والإستغناء عنه في أي وقت.",
    options: [" صح", "خطأ بل هو عمل ملازم لا ينتهي إلا بالموت"],
    correct: "خطأ بل هو عمل ملازم لا ينتهي إلا بالموت",
    next: "slandmark6",
    nextMap: "images/📍 (32).png",
  },
  {
    id: "slandmark6",
    image: "images/ms6.jpg",
    question:
      "قال تعالى: {وَكَيْفَ تَكْفُرُونَ وَأَنتُمْ تُتْلَىٰ عَلَيْكُمْ آيَاتُ اللَّهِ وَفِيكُمْ رَسُولُهُ}، هذه الآية جمعت بين المنهج.......و.........",
    options: [
      "المعرفي والتطبيقي",
      "العلمي والعملي",
      "كل ما سبق يدل على نفس المعنى",
    ],
    correct: "كل ما سبق يدل على نفس المعنى",
    next: "slandmark7",
    nextMap: "images/📍 (33).png",
  },
  {
    id: "slandmark7",
    image: "images/ms7.jpg",
    question: "يجب على الداعية أو المصلح الجمع بين الجهاد والدعوة.",
    options: ["لا، فهما لا يجتمعان أبدً", "نعم، وقد قام النبي ﷺ بذلك"],
    correct: "نعم، وقد قام النبي ﷺ بذلك",
    next: "slandmark8",
    nextMap: "images/📍 (34).png",
  },
  {
    id: "slandmark8",
    image: "images/ms8.jpg",
    question:
      "الهدي العملي للنبي ﷺ في إقامة الدين كان من أهم معالمه ...... بدليل وصف بعض العلماء السيرة ب'المغازي'",
    options: ["الدعوة", "الجهاد", "السلطة والقيادة"],
    correct: "الجهاد",
    next: "slandmark9",
    nextMap: "images/📍 (35).png",
  },
  {
    id: "slandmark9",
    image: "images/ms9.jpg",
    question: "على المصلح عندما يقوم بتكليف الناس بالأعمال أن يكلفهم بحسب:",
    options: [
      "معرفته الواسعة بالتكاليف",
      "بحسب قدراتهم وإمكاناتهم",
      "نظرته الحادة للأمور",
    ],
    correct: "بحسب قدراتهم وإمكاناتهم",
    next: "slandmark10",
    nextMap: "images/📍 (36).png",
  },
  {
    id: "slandmark10",
    image: "images/ms10.jpg",
    question:
      "قال تعالى : {يا أيها الذين آمنوا اذكروا نعمة الله عليكم إذ جاءتكم جنود فأرسلنا عليهم ريحا وجنودا لم تروها وكان الله بما تعملون بصيرا}.نزلت هذه الآية لتثبيت المؤمنين في غزوة.......",
    options: ["الأحزاب", "بدر", "الخندق"],
    correct: "الخندق",
    next: "slandmark11",
    nextMap: "images/📍 (37).png",
  },
  {
    id: "slandmark11",
    image: "images/ms11.jpg",
    question:
      "بعض الأحاديث و الآيات المكية نزلت كتهيئة لما سيحدث في المستقبل  ماعدا:",
    options: [
      "عن عائشة رضي الله عنها قالت: قال رسول الله ﷺ: يا عثمان، إن الله عز وجل عسى أن يُلبسك قميصًا، فإن أرادك المنافقون على أن تخلعه، فلا تخلعه، حتى تلقاني.",
      "قال تعالى : {عسى ربكم أن يُهلك عدوكم ويستخلفكم في الأرض فينظر كيف تعملون}",
      "لا شيء مما سبق",
    ],
    correct: "لا شيء مما سبق",
    next: "slandmark12",
    nextMap: "images/📍 (38).png",
  },
  {
    id: "slandmark12",
    image: "images/ms12.jpg",
    question:
      "للسياسة أهمية كبيرة في إقامة الدين، ولم يفرق النبي ﷺ بين الملك والخلافة",
    options: [
      "العبارة الأولى خاطئة والثانية صحيحة",
      "العبارة الأولى صحيحة، والثانية كذلك",
      "العبارة الأولى صحيحة، والثانية خاطئة",
    ],
    correct: "العبارة الأولى صحيحة، والثانية خاطئة",
    next: "slandmark13",
    nextMap: "images/📍 (39).png",
  },
  {
    id: "slandmark13",
    image: "images/ms13.jpg",
    question: "سمى النبي ﷺ التفرق.......",
    options: ["جاهلية", "كفر", "مشكلة"],
    correct: "جاهلية",
    next: "slandmark14",
    nextMap: "images/📍 (40).png",
  },
  {
    id: "slandmark14",
    image: "images/ms14.jpg",
    question:
      "سمى الله تعالى التخلي عن مرجعية الوحي في الحكم بـ.......في الآية المذكورة في المَعلم",
    options: ["ظلم", "كفر", "فسوق"],
    correct: "كفر",
    next: "slandmark15",
    nextMap: "📍 (41).png",
  },
  {
    id: "slandmark15",
    image: "images/ms15.jpg",
    question:
      "من كان في مرحلة استضعاف لا يجب عليه الأخذ بآيات الكف عن القتال؛ لأنها قد نُسخت",
    options: ["العبارة صحيحة", "العبارة خاطئة"],
    correct: "العبارة خاطئة",
    next: "slandmark16",
    nextMap: "images/📍 (43).png",
  },
  {
    id: "slandmark16",
    image: "images/ms16.jpg",
    question: "السنن الإلهية هي:",
    options: [
      "سنن ثابتة خاصة فيما يتعلق بالنصر، والهزيمة، والابتلاء، وعقوبة الكفار",
      "عادة جارية لله سبحانه وتعالى فيما يقدره",
      "كل ماسبق صحيح",
    ],
    correct: "كل ماسبق صحيح",
    next: "correct3",
    nextMap: "images/📍 (42).png",
  },
  {
    id: "correct3",
    question: "مبارك! حصلت على المفتاح الثالث",
    options: [],
  
  },
];

// فتح المودل وتعبئته
function openModal(slandmark) {
  modal.style.display = "flex";
  modalImg.src = slandmark.image;
  modalQ.textContent = slandmark.question;

  // نضيف الأزرار للإجابات
  modalAns.innerHTML = "";
  slandmark.options.forEach((opt) => {
    let btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (opt === slandmark.correct) {
        modal.style.display = "none";
        if (slandmark.next) {
          document.getElementById(slandmark.next).style.display =
            "inline-block";
            document.getElementById("end").style.display="block";
        }
        document.getElementById("map").src = slandmark.nextMap;
      } else {
        alert("خطأ ❌ حاول مرة ثانية");
      }
    };
    modalAns.appendChild(btn);
  });
}

// ربط الأزرار بالمعالم
slandmarks.forEach((l) => {
  document.getElementById(l.id).onclick = () => openModal(l);
});

// إغلاق المودل
closeBtn.onclick = () => {
  modal.style.display = "none";
};
