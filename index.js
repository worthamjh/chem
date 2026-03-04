const express = require('express');
const app = express();
const path= require('path');
const methodOverride = require('method-override')
const {v4: uuid } = require('uuid');

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const resources = [
  { id: uuid(),
    title: "Exploartion 1-Systems and System Models",
    pdf: "https://kami.app/AwT-kRs-jVR-sK3",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.1-Life%20in%20the%20Earth%20System/1.1.Ex1-Systems%20and%20System%20Models%20Image.PNG",
  },
  { id: uuid(),
    title: "Lab-Life Under a Microscope Student Handout",
    pdf: "https://kami.app/VvC-kzj-kzv-Ndd",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.1-Life%20in%20the%20Earth%20System/1.1.L1-Life%20Under%20a%20Microscope%20Image.PNG",
  },
  { id: uuid(),
    title: "Exploration 2-The Earth System",
    pdf: "https://kami.app/vAN-bvD-MJj-1r7",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.1-Life%20in%20the%20Earth%20System/1.1.Ex2-The%20Earth%20System%20Image.PNG",
  },
  { id: uuid(),
    title: "Lab-The Study of Life Student Handout",
    pdf: "https://kami.app/38d-UEE-z7a-3d2",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.1-Life%20in%20the%20Earth%20System/1.1.L2-The%20Study%20of%20Life%20Image.PNG",
  },
  { id: uuid(),
    title: "Lab-Modeling a System Student Handout",
    pdf: "https://kami.app/YAi-4Dp-dtm-c4Z",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.1-Life%20in%20the%20Earth%20System/1.1.L3-Modeling%20a%20System%20Image.PNG",
  },
  { id: uuid(),
    title: "Life in the Earth System Lesson Self Check",
    pdf: "https://kami.app/Kcu-PuF-dN6-L9e",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.1-Life%20in%20the%20Earth%20System/1.1.Ev-Lesson%20Self%20Check%20Image.PNG",
  },
  { id: uuid(),
    title: "Exploration 1-Interacting Systems in Organisms",
    pdf: "https://kami.app/eE2-NhK-N9x-uTi",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.2-Organisms_%20Cells%20to%20Body%20Systems/1.2.Ex1-Interacting%20Systems%20in%20Organisms%20Image.PNG",
  },
  { id: uuid(),
    title: "Lab-Connecting Form to Function",
    pdf: "https://kami.app/vue-jHV-xca-d1i",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.2-Organisms_%20Cells%20to%20Body%20Systems/1.2.L1-Connecting%20Form%20to%20Function%20Lab%20Worksheet%20Image.PNG",
  },
  { id: uuid(),
    title: "Exploration 2-The Cell System",
    pdf: "https://kami.app/xVL-PQv-2Wd-hzx",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.2-Organisms_%20Cells%20to%20Body%20Systems/1.2.Ex2-The%20Cell%20System%20Image.PNG",
  },
  { id: uuid(),
    title: "Lab-Comparing Cells Lab",
    pdf: "https://kami.app/pb5-dsg-cSV-Ty3",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.2-Organisms_%20Cells%20to%20Body%20Systems/1.2.L2-Comparing%20Cells%20Lab%20Worksheet%20Image.PNG",
  },
  { id: uuid(),
    title: "Lab-Modeling Interacting Body Systems",
    pdf: "https://kami.app/FQt-7cj-JV7-DKU",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.2-Organisms_%20Cells%20to%20Body%20Systems/1.2.L3-Modeling%20Interacting%20Body%20Systems%20Image.PNG",
  },
  { id: uuid(),
    title: "Organisms:Cell to Body Lesson Self Check",
    pdf: "https://kami.app/9sF-WMy-tzx-2fB",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.2-Organisms_%20Cells%20to%20Body%20Systems/1.2.Ev-Lesson%20Self%20Check%20Image.PNG",
  },
  { id: uuid(),
    title: "Exploration 1-Control Systems in Organisms",
    pdf: "https://kami.app/tf6-JqV-kKj-rF3",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.3-Mechanisims%20of%20Homeostasis/1.3.Ex1-Control%20Systems%20in%20Organisms%20Image.PNG",
  },
  { id: uuid(),
    title: "Lab- Negative and Positive Feedback",
    pdf: "https://kami.app/imy-BRH-mMR-iem",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.3-Mechanisims%20of%20Homeostasis/1.3.L1Negative%20and%20Positive%20Feedback%20Lab%20Worksheet%20Image.PNG",
  },
  { id: uuid(),
    title: "Exploration 2-Homeostasis in the Human Body",
    pdf: "https://kami.app/xwX-QMw-BcV-eXE",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.3-Mechanisims%20of%20Homeostasis/1.3.Ex2-Homeostasis%20in%20the%20Human%20Body%20Image.PNG",
  },
  { id: uuid(),
    title: "Lab-Investigating Homeostasis and Exercise",
    pdf: "https://kami.app/av7-GE6-565-DYe",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.3-Mechanisims%20of%20Homeostasis/1.3.L2-Investigating%20Homeostasis%20and%20Exercise%20Lab%20Worksheet%20Image.PNG",
  },
  { id: uuid(),
    title: "Exploration 3-Homeostasis in Other Organisms",
    pdf: "https://kami.app/xCM-wBV-rAg-QiB",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.3-Mechanisims%20of%20Homeostasis/1.3.Ex3-Homeostasis%20in%20Other%20Organisms%20Image.PNG",
  },
  { id: uuid(),
    title: "Mechanisms of Homeostasis Lesson Self Check",
    pdf: "https://kami.app/w9r-RnP-Df3-uyY",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.3-Mechanisims%20of%20Homeostasis/1.3.Ev-Lesson%20Self%20Check%20Image.PNG",
  },
  { id: uuid(),
    title: "Exploration 1-Technology and Living Systems",
    pdf: "https://kami.app/ZDv-nDT-Cep-zUT",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.4-Bioengineering/1.4.Ex1-Technology%20and%20Living%20Systems%20Image.PNG",
  },
  { id: uuid(),
    title: "Exploration 2-Engineering in Life Science",
    pdf: "https://kami.app/hDK-HkS-RPr-kmS",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.4-Bioengineering/1.4.Ex2-Engineering%20in%20Life%20Science%20Image.PNG",
  },
  { id: uuid(),
    title: "Lab-Modeling Joint Movement",
    pdf: "https://kami.app/Tie-nsA-8yR-L5U",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.4-Bioengineering/1.4.L1-Modeling%20Joint%20Movement%20Lab%20Worksheet%20Image.PNG",
  },
  { id: uuid(),
    title: "Lab-Careers in Science",
    pdf: "https://kami.app/z8y-QFQ-aZw-GLp",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.4-Bioengineering/1.4.L2-Careers%20in%20Science%20Image.PNG",
  },
  { id: uuid(),
    title: "Bioengineering Lesson Self Check",
    pdf: "https://kami.app/QMN-K7F-sax-1Se",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.4-Bioengineering/1.4.Ev.Bioengineering%20Image.PNG",
  },
  { id: uuid(),
    title: "Thing Explainer-Bags of Stuff Inside of You",
    pdf: "https://kami.app/61C-uWc-sTR-RGX",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.5-Post%20Unit%20Living%20Systems/1-Thing%20Explainer_Bags%20of%20Stuff%20Inside%20of%20You%20Image.PNG",
  },
  { id: uuid(),
    title: "Living Systems Unit Practice and Review",
    pdf: "https://kami.app/crv-2cM-qNT-LqC",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.5-Post%20Unit%20Living%20Systems/1.Ev-Living%20Systems%20Practice%20and%20Review%20Image.PNG",
  },
  { id: uuid(),
    title: "Unit Performance Task-Living Systems",
    pdf: "https://kami.app/X3W-ZEd-FBZ-yqb",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.5-Post%20Unit%20Living%20Systems/1-Unit%20Performance%20Task%20Worksheet%20Image.PNG",
  }
];

const resources2 =[
  { id: uuid(),
    title: "ASS ASS ASS ASS ASS",
    pdf: "https://kami.app/X3W-ZEd-FBZ-yqb",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.5-Post%20Unit%20Living%20Systems/1-Unit%20Performance%20Task%20Worksheet%20Image.PNG",
  }
];

const resources1Lesson1 =  [
  { id: uuid(),
    title: "Exploartion 1-Systems and System Models",
    pdf: "https://kami.app/AwT-kRs-jVR-sK3",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.1-Life%20in%20the%20Earth%20System/1.1.Ex1-Systems%20and%20System%20Models%20Image.PNG",
  },
  { id: uuid(),
    title: "Lab-Life Under a Microscope Student Handout",
    pdf: "https://kami.app/VvC-kzj-kzv-Ndd",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.1-Life%20in%20the%20Earth%20System/1.1.L1-Life%20Under%20a%20Microscope%20Image.PNG",
  },
  { id: uuid(),
    title: "Exploration 2-The Earth System",
    pdf: "https://kami.app/vAN-bvD-MJj-1r7",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.1-Life%20in%20the%20Earth%20System/1.1.Ex2-The%20Earth%20System%20Image.PNG",
  },
  { id: uuid(),
    title: "Lab-The Study of Life Student Handout",
    pdf: "https://kami.app/38d-UEE-z7a-3d2",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.1-Life%20in%20the%20Earth%20System/1.1.L2-The%20Study%20of%20Life%20Image.PNG",
  },
  { id: uuid(),
    title: "Lab-Modeling a System Student Handout",
    pdf: "https://kami.app/YAi-4Dp-dtm-c4Z",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.1-Life%20in%20the%20Earth%20System/1.1.L3-Modeling%20a%20System%20Image.PNG",
  },
  { id: uuid(),
    title: "Life in the Earth System Lesson Self Check",
    pdf: "https://kami.app/Kcu-PuF-dN6-L9e",
    img: "https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.1-Life%20in%20the%20Earth%20System/1.1.Ev-Lesson%20Self%20Check%20Image.PNG",
  }
];


app.get('/chem', (req,res) => {
    res.render('chem/index.ejs', {resources})
})

app.get('/chem/newassignment', (req,res) => {
  res.render('/chem/newassignment.ejs');
})
app.get('/chem/unit0', (req,res) => {
  res.render('/chem/unit0.ejs')
})

app.get('/chem/unit1', (req,res) => {
  res.render('chem/unit1.ejs', {resources})
})
app.get('/chem/unit1lesson1', (req,res) => {
  res.render('chem/unit1lesson1.ejs', {resources1Lesson1})
})
app.get('/chem/unit1lesson2', (req,res) => {
  res.render('chem/unit1lesson2.ejs')
})
app.get('/chem/unit1lesson3', (req,res) => {
  res.render('chem/unit1lesson3.ejs')
})

app.get('/chem/unit2', (req,res) => {
  res.render('chem/unit2.ejs', {resources2})
})

app.get('/chem/unit3', (req,res) => {
  res.render('chem/unit3.ejs')
})

app.get('/chem/unit4', (req,res) => {
  res.render('chem/unit4.ejs')
})

app.get('/chem/unit5', (req,res) => {
  res.render('chem/unit5.ejs')
})



app.listen(3000, () => {
    console.log('On port 3000');
})