
import { CourseData } from './types';

export const COURSE_CONTENT: CourseData = {
  title: "AI for HR: Masterclass (Batch 3)",
  modules: [
    {
      id: "ch1",
      title: "บทที่ 1: ปูพื้นฐานและประเภทของ AI (Slide 4-6, 19)",
      lessons: [
        {
          id: "ai-types-deep",
          title: "เจาะลึก 3 ประเภทของ AI และการทำงานร่วมกัน",
          type: "concept",
          icon: "fa-layer-group",
          // Placeholder for Slide 4
          image: "https://placehold.co/1200x675/e2e8f0/475569?text=Slide+4:+Predictive+vs+Generative+AI",
          content: `### ภาพรวม: Predictive vs Generative (Slide 4-5)

สำหรับองค์กรขนาดใหญ่ (2,000 คน+) การเข้าใจประเภทของ AI เป็นเรื่องสำคัญมากครับ เราไม่ได้เลือกใช้อย่างใดอย่างหนึ่ง แต่เราต้องใช้แบบ **"Complementary" (เสริมกัน)** เพื่อสร้าง Hybrid Intelligence ที่สมบูรณ์แบบ

---

### 1. Symbolic AI (สายตรรกะ - "Rule-based")
**ฉายา:** Good Old-Fashioned AI (GOFAI)

**Core Idea:**
ทำงานบนพื้นฐานของ **"กฎ (Rules)"** และ **"ตรรกะ (Logic)"** ที่มนุษย์เขียนขึ้นมาอย่างชัดเจน เป็นระบบแบบ Deterministic (Input เหมือนเดิม Output เหมือนเดิม 100%)

**ตัวอย่างงาน HR:**
- **Payroll Calculation:** คำนวณเงินเดือน ภาษี ที่ต้องเป๊ะตามกฎหมาย
- **Compliance Check:** ตรวจสอบคุณสมบัติการเลื่อนตำแหน่ง (เช่น อายุงาน < 2 ปี ห้ามโปรโมท)
- **Policy Chatbot:** ตอบคำถามกฎระเบียบที่ชัดเจน

**ข้อดี/ข้อเสีย:**
✅ **Transparent:** อธิบายเหตุผลได้ทุกขั้นตอน
✅ **Controllable:** ควบคุมความถูกต้องได้ 100%
❌ **Brittle:** ไม่ยืดหยุ่น เจอเคสแปลกๆ จะไปต่อไม่ได้

---

### 2. Predictive AI (สายพยากรณ์ - " The Brain")
**ฉายา:** Machine Learning / Statistical AI

**Core Idea:**
เรียนรู้จาก **"ข้อมูลในอดีต"** เพื่อค้นหา Pattern และ **"พยากรณ์"** ความน่าจะเป็น (Probabilistic)

**ตัวอย่างงาน HR:**
- **Attrition Risk:** ทำนายความเสี่ยงพนักงานลาออก
- **Talent Acquisition:** Scoring ผู้สมัครจากประวัติความสำเร็จในอดีต
- **Performance Forecasting:** คาดการณ์แนวโน้มผลงาน

**ข้อควรระวัง:**
🛑 **Probability ≠ Truth:** ค่าความเสี่ยง 80% ไม่ได้แปลว่าเป็นความจริงเสมอไป แต่เป็นแนวโน้มจากสถิติ
🛑 **Bias:** ถ้าข้อมูลในอดีตมีความลำเอียง AI ก็จะเรียนรู้ความลำเอียงนั้นมาด้วย

---

### 3. Generative AI (สายสร้างสรรค์ - "The Voice")
**ฉายา:** GenAI / LLMs

**Core Idea:**
ไม่ได้แค่จำ แต่สามารถ **"สร้าง (Generate)"** เนื้อหาใหม่ (Text, Image, Code) จากการเข้าใจบริบท

**ตัวอย่างงาน HR:**
- **Drafting:** ร่าง JD, อีเมล, ประกาศ
- **Summarization:** สรุป Performance Review
- **Personalization:** สร้างแผน IDP รายบุคคล
- **Roleplay:** ฝึกซ้อมการสัมภาษณ์หรือ Feedback

**จุดเด่น:**
✨ **Creativity:** ช่วยแก้ปัญหาทางตันในการเริ่มงานเขียน
✨ **Flexibility:** จัดการกับข้อมูลที่ไม่มีโครงสร้าง (Unstructured Data) ได้ดี

---

### 🎯 Why Use Together? (Slide 4)

องค์กรที่ Mature จะใช้ AI ทั้ง 3 แบบร่วมกัน:
1.  **Symbolic**: ใช้กรองกฎเหล็ก (Eligibility)
2.  **Predictive**: ใช้ระบุกลุ่มเป้าหมาย (Who to focus on?)
3.  **Generative**: ใช้สร้าง Actions/Communication (What to do?)

**ตัวอย่างการใช้งานร่วมกัน:**
*Predictive บอกว่า "สมชายเสี่ยงลาออก 80%" -> Generative ช่วยร่าง "Retention Script" เพื่อให้หัวหน้าไปคุย*

---

### 🧠 Hybrid Intelligence สำหรับ HR องค์กร 2,000 คน

AI ที่ทรงพลังจริง ๆ ต้องทำงานสอดประสานกันแบบนี้ครับ:

1.  **Predictive AI (ทำหน้าที่เป็นสมอง)**: ช่วยระบุเป้าหมาย
    - "Top 10% ของพนักงานที่มีความเสี่ยงลาออกสูงคือกลุ่มนี้"
    - "25 คนนี้มีความพร้อม (Readiness) สูงมากสำหรับการเลื่อนตำแหน่ง"
2.  **Generative AI (ทำหน้าที่เป็นเสียง/มือ)**: ช่วยลงมือปฏิบัติทันที
    - **Retention script:** ร่างบทพูดสำหรับหัวหน้างานเพื่อไปคุยกับกลุ่มเสี่ยง
    - **Career path proposal:** สร้างข้อเสนอเส้นทางอาชีพใหม่เพื่อจูงใจ
    - **Promotion justification:** ร่างเอกสารสนับสนุนการเลื่อนตำแหน่ง
    - **Personalized learning plan:** สร้างแผนเรียนรู้รายบุคคล

**บทสรุปสำหรับผู้บริหาร:**
ในองค์กรระดับ Enterprise ปี 2026:
> **Predictive = Brain (สมองวิเคราะห์)**
> **Generative = Voice (เสียงสื่อสาร)**`
        },
        {
          id: "ai-skills-5",
          title: "5 ทักษะ AI แบบมนุษย์ (Slide 19)",
          type: "concept",
          icon: "fa-hand-holding-heart",
          // Placeholder for Slide 19
          image: "https://placehold.co/1200x675/e2e8f0/475569?text=Slide+19:+AI+Skills+(Listen,+Speak,+Read,+Write,+Think)",
          content: `### มอง AI เป็นเพื่อนร่วมงานที่มี 5 ทักษะ (Slide 19)

เพื่อให้เห็นภาพการนำไปใช้ Slide 19 เปรียบเทียบ AI กับทักษะมนุษย์ 5 ด้าน:

**1. Listen (ฟัง)**
- **Capability:** Speech Recognition, Sentiment Analysis
- **HR Use Case:** วิเคราะห์อารมณ์จาก Townhall, Meeting Recording, หรือ Voice of Employee (VoE)

**2. Speak (พูด)**
- **Capability:** Text-to-Speech, Conversational AI
- **HR Use Case:** HR Chatbot ตอบคำถามพนักงาน 24/7, ระบบ Role-play ฝึกซ้อมการให้ Feedback

**3. Read (อ่าน)**
- **Capability:** OCR, NLP, Resume Parsing
- **HR Use Case:** สกัด Skill จาก Resume 5,000 ใบ, ตรวจสอบความขัดแย้งในระเบียบ, สรุป Theme จาก Exit Interview

**4. Write (เขียน)**
- **Capability:** Text Generation
- **HR Use Case:** เขียน JD, ร่างประกาศ, ทำสรุปการประชุม, เขียน Performance Review Summary (ลดเวลา 80%)

**5. Think (คิด)**
- **Capability:** Prediction, Optimization, Reasoning
- **HR Use Case:** วางแผน Workforce Planning, วิเคราะห์ความเสี่ยงองค์กร, จัดตารางกะงาน (Shift Scheduling)`
        }
      ]
    },
    {
      id: "ch2",
      title: "บทที่ 2: Hybrid Intelligence & Governance (Slide 7-8)",
      lessons: [
        {
          id: "hybrid-intelligence",
          title: "โครงสร้าง Hybrid Intelligence",
          type: "concept",
          icon: "fa-network-wired",
          // Placeholder for Slide 7
          image: "https://placehold.co/1200x675/e2e8f0/475569?text=Slide+7:+Hybrid+Intelligence+Diagram",
          content: `### Hybrid Intelligence Architecture (Slide 7)

ไม่ใช่แค่การใช้เครื่องมือหลายตัว แต่คือการสร้าง **"Layered System"** ที่ทำงานร่วมกัน:

1.  **Data Layer (เชื้อเพลิง):** HRIS, Payroll, Survey, Performance Data
2.  **Model Layer (สมอง):** 
    - Predictive Models (คำนวณความเสี่ยง)
    - Scoring Engines (ให้คะแนนความพร้อม)
3.  **Governance Layer (กฎควบคุม):** Policy, Privacy, Bias Check
4.  **Generative Layer (การสื่อสาร):** แปลง Insight เป็นภาษาคน
5.  **Human Layer (การตัดสินใจ):** HRBP และ Manager ใช้ "วิจารณญาณ" ขั้นสุดท้าย

---

### Case Study: คุณสมชาย (Somchai T.) - Slide 8
ตัวอย่างการตัดสินใจเรื่อง **Promotion** แบบ Hybrid:

**Stage 1: Symbolic AI (Rule Check)**
*   *Rule:* อายุงาน > 18 เดือน? ผ่าน Performance 2 รอบ?
*   *Result:* ✅ ผ่านเกณฑ์ (Eligible)

**Stage 2: Predictive AI (Analysis)**
*   *Model:* คำนวณความน่าจะเป็นที่จะประสบความสำเร็จ
*   *Result:* 📊 **Success Probability 78%**, Readiness Score 82/100

**Stage 3: Generative AI (Action)**
*   *Task:* สร้างเอกสารสนับสนุน
*   *Result:* 📝 ร่าง **Promotion Memo** และ **Development Plan** สำหรับ Gap ที่เหลืออีก 18%

**Stage 4: Human (Decision)**
*   *Action:* HRBP ดูข้อมูลทั้งหมด + บริบททีม + ความเหมาะสม
*   *Result:* 🤝 **อนุมัติ** และใช้แผนพัฒนาที่ AI ร่างให้เป็นแนวทางคุย

> **Summary:** AI ช่วยลดเวลาในการรวบรวมและวิเคราะห์ข้อมูล เพื่อให้มนุษย์โฟกัสที่ **"Quality of Decision"** และ **"People Conversation"**`
        },
        {
          id: "governance-risk",
          title: "Governance: สิ่งที่ต้องมีก่อนเริ่มใช้",
          type: "risk",
          icon: "fa-shield-alt",
          // No specific slide image, maybe a generic one or none
          content: `### Governance Layer (Slide 7 Deep Dive)

สำหรับองค์กร Enterprise (2,000+ คน) นี่คือสิ่งที่แยก "ของเล่น" ออกจาก "เครื่องมือจริง":

**1. Guardrails (รั้วป้องกันความเสี่ยง)**
- **Technical Guardrails:** ป้องกันข้อมูล PII (ส่วนบุคคล) หลุดออกไป Public LLM
- **Ethical Guardrails:** ตรวจจับ Bias ในการคัดเลือกคน (เช่น ป้องกันการกีดกันเพศ/อายุ)

**2. Human Oversight (มนุษย์ต้องกำกับดูแล)**
- **High-Stakes Decisions:** ห้าม AI ตัดสินใจเองในเรื่องที่มีผลกระทบต่อชีวิตคน (ไล่ออก, ลดเงินเดือน, ให้โบนัส)
- **Review Cycle:** ต้องมี HR Review ก่อนกดส่งเสมอ

**3. Audit Trail (รอยเท้า)**
- ทุกคำแนะนำของ AI ต้องถูกบันทึกไว้ว่า "ทำไมถึงแนะนำแบบนี้" เพื่อตรวจสอบย้อนหลังได้ (Explainability)

> **กฎเหล็ก:** AI เป็นเพียง **"Decision Support"** (ผู้ช่วยตัดสินใจ) ไม่ใช่ "Decision Maker" (ผู้ตัดสินใจ)`
        }
      ]
    },
    {
      id: "ch3",
      title: "บทที่ 3: กลยุทธ์การนำ AI มาใช้ (Slide 9-15)",
      lessons: [
        {
          id: "adoption-matrix",
          title: "Adoption Matrix: เลือกงานให้ถูกกับ AI (Slide 12)",
          type: "practical",
          icon: "fa-chart-matrix",
          // Placeholder for Slide 12
          image: "https://placehold.co/1200x675/e2e8f0/475569?text=Slide+12:+Adoption+Matrix+(Automate/Augment/Agentify)",
          content: `### Adoption Matrix: 4 กลยุทธ์ตามความยากงาน (Slide 12)

HR ไม่ควรใช้ AI กับทุกงาน เราต้องวิเคราะห์ผ่าน 2 แกน: **ความซ้ำซาก (Repetition)** และ **การใช้เหตุผล (Reasoning)**

**1. AUTOMATE (ซ้ำสูง + ตรรกะง่าย)**
*   **เป้าหมาย:** แทนคนเพื่อลดงาน Admin
*   **งาน:** ตอบคำถามสิทธิวันลา, ออกหนังสือรับรอง, ปรับปรุงข้อมูลพนักงาน
*   **เครื่องมือ:** RPA, Chatbot (Q&A)

**2. AUGMENT (ซ้ำน้อย + ตรรกะสูง)**
*   **เป้าหมาย:** ช่วยคนคิด (Enhance Reasoning) คิดได้เร็วและกว้างขึ้น
*   **งาน:** การตัดสินใจเลื่อนตำแหน่ง, การวางแผน Nachfolgeregelung (Succession), ปรับโครงสร้างองค์กร
*   **เครื่องมือ:** Predictive Analytics, Dashboard

**3. AGENTIFY (ซ้ำสูง + ตรรกะสูง)**
*   **เป้าหมาย:** สร้าง Workflow อัจฉริยะ (AI Workflow Automation)
*   **งาน:** สรุปผล Engagement Survey 10,000 คอมเมนต์, คัดกรอง Resume จำนวนมากแบบละเอียด
*   **เครื่องมือ:** AI Agents, Intelligent Workflows

**4. IGNORE (ซ้ำน้อย + ตรรกะง่าย)**
*   **เป้าหมาย:** ทำมือต่อไป (ROI ไม่คุ้ม)
*   **งาน:** กรณีพิเศษ (Ad-hoc), งานจัดการทั่วไปที่นานๆ ทำที`
        },
        {
          id: "workflow-automation",
          title: "AI Workflow Automation (Slide 13-15)",
          type: "practical",
          icon: "fa-cogs",
          // Placeholder for Slide 13
          image: "https://placehold.co/1200x675/e2e8f0/475569?text=Slide+13:+AI+Workflow+Automation",
          content: `### จาก "Tool" สู่ "System" (Slide 13-15)

**Automate the Repeatable (Slide 10)**
หลักการแรก: เริ่มจากงานที่ "Friction" สูงและทำซ้ำบ่อยๆ ก่อน เพื่อสร้าง Quick Wins

**Traditional vs AI Automation**
*   **Traditional (RPA):** "Executes" ทำตามคำสั่งเป๊ะๆ ถ้าเจออะไรผิดแปลกจะ Error ทันที
*   **AI Automation:** "Thinks before executing" อ่านบริบทได้ ปรับตัวได้ ตัดสินใจเบื้องต้นได้

**Levels of Intelligence (Slide 15) - เราอยู่ตรงไหน?**
1.  **Rule-based:** แจ้งเตือนเมื่อวันลาหมด (ขั้นพื้นฐาน)
2.  **Pattern:** เห็นแพทเทิร์นการลาออกของพนักงาน (เริ่มมี Data)
3.  **Predictive:** ทำนายว่า "ใคร" มีแนวโน้มจะลาออก (เริ่มฉลาด)
4.  **Generative/Adaptive:** สร้างแผนรักษาคนอัตโนมัติรายบุคคล (เริ่ม Proactive)
5.  **Autonomous:** ระบบบริหารจัดการ Talent แบบ Real-time (ระดับสูงสุด)`
        }
      ]
    },
    {
      id: "ch4",
      title: "บทที่ 4: การประยุกต์ใช้จริงใน 11 Stages",
      lessons: [
        {
          id: "lifecycle-detailed",
          title: "AI ใน Employee Life Cycle 11 Stages",
          type: "practical",
          icon: "fa-route",
          // Placeholder for Lifecycle
          image: "https://placehold.co/1200x675/e2e8f0/475569?text=Employee+Life+Cycle+Diagram",
          content: `### การประยุกต์ใช้ AI ครบวงจร

**Stage 1-3: Recruiting (หาคน)**
- **Attraction**: AI วิเคราะห์ Candidate Persona และเขียน Content ให้ตรงใจ
- **Sourcing**: สแกนหาโปรไฟล์ LinkedIn ที่มี Skill ตรงกับ Top Performer ของเรา
- **Recruiting**: ใช้ AI ช่วยออกแบบ Interview Scorecard ลดความลำเอียง

**Stage 4-6: Development (พัฒนา)**
- **Onboarding**: "Buddy Bot" ตอบคำถามเด็กใหม่ 24 ชม.
- **Engagement**: วิเคราะห์ Survey แบบ Real-time แยกตามแผนก/ช่วงอายุ
- **Performance**: ร่าง Feedback แบบ SBI (Situation-Behavior-Impact) ให้หัวหน้า

**Stage 7-11: Retention & Separation (รักษา/จากลา)**
- **Retention**: แจ้งเตือนเมื่อ High Potential เริ่มมีสัญญาณเบื่อหน่าย (Engagement Drop)
- **Promotion**: วิเคราะห์ข้อมูลย้อนหลัง 3 ปี เพื่อดูความพร้อม
- **Separation**: สรุปประเด็นจาก Exit Interview เพื่อแก้ปัญหาที่ต้นเหตุ`
        }
      ]
    },
    {
      id: "ch5",
      title: "บทที่ 5: การเขียน Prompt (Prompt Engineering)",
      lessons: [
        {
          id: "prompt-mastery",
          title: "สูตรลับการสั่งงาน AI (6 Components)",
          type: "prompt-template",
          icon: "fa-wand-magic",
          // Placeholder for Prompt Structure
          image: "https://placehold.co/1200x675/e2e8f0/475569?text=Prompt+Engineering+Structure",
          content: `### เขียน Prompt อย่างไรให้เหมือนมืออาชีพ?

**1. Task (งาน)**: ขึ้นต้นด้วยกริยา เช่น "ร่าง", "สรุป", "วิเคราะห์"
**2. Context (บริบท)**: บอกสถานการณ์ เช่น "สำหรับพนักงานระดับ Junior"
**3. Examples (ตัวอย่าง)**: ใส่ตัวอย่างงานที่ชอบให้ AI ดู (สำคัญมาก)
**4. Persona (บทบาท)**: เช่น "จงตอบในฐานะ HR Director ประสบการณ์ 20 ปี"
**5. Format (รูปแบบ)**: ขอเป็นตาราง, Bullet point, หรือ Email
**6. Tone (น้ำเสียง)**: ทางการ, เห็นอกเห็นใจ, กระชับ

> **Tip**: การใช้ AI ให้เก่งไม่ใช่แค่การถามครั้งเดียว แต่คือการ "คุยต่อ" (Iterate) จนกว่าจะได้ผลลัพธ์ที่พอใจครับ`
        }
      ]
    }
  ]
};
