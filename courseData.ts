
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
ทำงานบนพื้นฐานของ **"กฎ (Rules)"** และ **"ตรรกะ (Logic)"** ที่มนุษย์เขียนขึ้นมาอย่างชัดเจน เป็นระบบแบบ Deterministic คือถ้า Input เหมือนเดิม Output จะเหมือนเดิม 100% เสมอ

**การทำงาน:**
- ใช้เงื่อนไขแบบ If-Then-Else (ถ้า...แล้ว...มิฉะนั้น...)
- ไม่มีการ "เรียนรู้" สิ่งใหม่ด้วยตัวเอง แต่ทำตามคำสั่งที่โปรแกรมไว้เป๊ะๆ

**ตัวอย่างงาน HR:**
- **Payroll Calculation:** การคำนวณเงินเดือน ภาษี ประกันสังคม ที่ต้องเป๊ะตามกฎหมาย
- **Leave Eligibility:** ตรวจสอบสิทธิ์วันลา (เช่น ถ้าอายุงาน < 1 ปี ลาพักร้อนไม่ได้)
- **Compliance Check:** ตรวจสอบเอกสารว่าครบถ้วนตามระเบียบหรือไม่

**จุดเด่น vs จุดด้อย:**
✅ **โปร่งใส (Explainable):** อธิบายได้ทุกขั้นตอนว่าทำไมถึงตัดสินใจแบบนี้
✅ **ควบคุมได้ (Controllable):** ไม่มีการ "มั่ว" หรือ "หลอน" (Hallucination)
❌ **เปราะบาง (Brittle):** ถ้าเจอกรณีแปลกๆ ที่ไม่อยู่ในกฎ ระบบจะไปต่อไม่ได้ทันที
❌ **ดูแลยาก:** ถ้าระเบียบเปลี่ยน ต้องมารื้อแก้ Code ใหม่ทั้งหมด

---

### 2. Predictive AI (สายพยากรณ์ - "The Brain")
**ฉายา:** Machine Learning / Statistical AI

**Core Idea:**
เรียนรู้จาก **"ข้อมูลในอดีต (Historical Data)"** เพื่อค้นหา Pattern ที่ซ่อนอยู่ และนำมา **"พยากรณ์ (Predict)"** สิ่งที่จะเกิดขึ้นในอนาคต เป็นระบบแบบ Probabilistic (ความน่าจะเป็น)

**การทำงาน:**
- ใช้สถิติและอัลกอริทึมในการวิเคราะห์ข้อมูลมหาศาล
- ให้ผลลัพธ์เป็น "ค่าความเสี่ยง" หรือ "โอกาสความเป็นไปได้" (เช่น 78%, 90%)

**ตัวอย่างงาน HR:**
- **Churn Prediction:** ทำนายว่าพนักงานคนไหนมีความเสี่ยงจะลาออกใน 6 เดือนข้างหน้า
- **Talent Acquisition:** คัดกรอง Resume โดยดูจากประวัติคนที่เคยประสบความสำเร็จในตำแหน่งนี้
- **Performance Forecasting:** คาดการณ์แนวโน้มผลงานของทีมในไตรมาสถัดไป

**จุดเด่น vs จุดด้อย:**
✅ **เห็นสิ่งที่คนมองไม่เห็น:** จับ Pattern ความสัมพันธ์ซับซ้อนได้ดี
✅ **เก่งขึ้นตามข้อมูล:** ยิ่งมี Data เยอะ ยิ่งแม่นยำ
❌ **Probability ≠ Truth:** ต้องระวังเสมอว่า "ความน่าจะเป็น ไม่ใช่ความจริง" (เช่น เสี่ยงลาออก 80% ไม่ได้แปลว่าจะลาออกแน่ๆ)
❌ **Bias:** ถ้าข้อมูลในอดีตมีความลำเอียง (เช่น เคยรับแต่ผู้ชาย) AI ก็จะเรียนรู้ความลำเอียงนั้นมาด้วย

---

### 3. Generative AI (สายสร้างสรรค์ - "The Voice")
**ฉายา:** GenAI / Large Language Models (LLMs)

**Core Idea:**
ไม่ได้แค่จำหรือวิเคราะห์ แต่สามารถ **"สร้าง (Generate)"** เนื้อหาใหม่ที่ไม่เคยมีมาก่อนได้ ไม่ว่าจะเป็นข้อความ รูปภาพ หรือเสียง โดยเรียนรู้จากบริบทและความหมาย

**การทำงาน:**
- เข้าใจภาษาธรรมชาติ (Natural Language) เหมือนมนุษย์คุยกัน
- สามารถเชื่อมโยงข้อมูลกระจัดกระจายมาร้อยเรียงเป็นเรื่องราวใหม่ได้

**ตัวอย่างงาน HR:**
- **Content Creation:** ร่าง Job Description (JD), เขียนอีเมลเชิญสัมภาษณ์, ร่างประกาศนโยบายบริษัท
- **Summarization:** สรุปผล Performance Review จากคอมเมนต์ยาวๆ ให้เหลือประเด็นสำคัญ
- **Personalization:** สร้างแผนพัฒนา (IDP) เฉพาะบุคคล หรือ Career Path ที่เหมาะกับคนนั้นๆ
- **HR Chatbot:** ตอบคำถามพนักงานด้วยภาษาที่เข้าใจง่ายและมีความเห็นอกเห็นใจ (Empathy)

**จุดเด่น vs จุดด้อย:**
✅ **มีความคิดสร้างสรรค์:** ช่วยแก้ปัญหาทางตันในการเริ่มงานเขียน (Writer's Block)
✅ **ยืดหยุ่นสูง:** รับมือกับคำสั่งที่คลุมเครือได้ดีกว่าแบบอื่นๆ
❌ **Hallucination:** อาจ "มั่ว" ข้อมูลขึ้นมาเองได้อย่างมั่นใจ ต้องมีคนตรวจสอบเสมอ
❌ **ความปลอดภัยข้อมูล:** ต้องระวังไม่ป้อนข้อมูลความลับบริษัทลงไปใน Public AI

---

### 🎯 Insight สำคัญ: ทำไมต้องใช้ร่วมกัน? (Slide 4)

องค์กรที่เก่งจริง จะไม่ใช้แค่ตัวใดตัวหนึ่ง เพราะแต่ละตัวมีจุดบอดของตัวเองครับ

**1. ถ้าใช้ Predictive AI อย่างเดียว**
คุณจะรู้ข้อมูล เช่น **"สมชายมีโอกาสลาออก 72%"**
แต่คุณจะไปต่อไม่ถูกว่า:
- ควรคุยกับเขาอย่างไร?
- ควรเสนออะไรให้เขาอยู่ต่อ?
- ควรเขียนแผน Retention Plan แบบไหนที่โดนใจเขา?

**2. ถ้าใช้ Generative AI อย่างเดียว**
คุณจะเขียนแผน Retention ได้ดีมาก ภาษาสวยหรู
แต่คุณจะไม่รู้ว่า:
- **ควรทำกับใครก่อน?** (ใครคือกลุ่มเสี่ยงสูงที่ต้องรีบดูแล)
- ทรัพยากรที่มีจำกัดควรลงไปที่ใคร?

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
> **Generative = Voice (เสียงสื่อสาร)**

ถ้าขาดอย่างใดอย่างหนึ่ง การทำงานของ HR จะไม่ครบวงจรครับ`
        },
        {
          id: "ai-skills-5",
          title: "5 ทักษะ AI แบบมนุษย์ (Slide 19)",
          type: "concept",
          icon: "fa-hand-holding-heart",
          // Placeholder for Slide 19
          image: "https://placehold.co/1200x675/e2e8f0/475569?text=Slide+19:+AI+Skills+(Listen,+Speak,+Read,+Write,+Think)",
          content: `### มอง AI เป็นเพื่อนร่วมงานที่มี 5 ทักษะ

เพื่อให้เห็นภาพการนำไปใช้ หน้า 19 ได้เปรียบเทียบ AI กับทักษะมนุษย์ดังนี้ครับ:

**1. Listen (ฟัง)**
- **AI ทำอะไร**: Voice recognition, Sentiment analysis
- **Use Case**: วิเคราะห์อารมณ์พนักงานจาก Townhall recording หรือ Voice of Employee

**2. Speak (พูด)**
- **AI ทำอะไร**: Conversational AI, Voice synthesis
- **Use Case**: HR Chatbot ตอบคำถาม Policy, ระบบช่วยฝึกซ้อมการสนทนา (Role-play)

**3. Read (อ่าน)**
- **AI ทำอะไร**: Resume parsing, Semantic search
- **Use Case**: สกัด Skill จาก Resume 5,000 ใบ, ตรวจสอบความขัดแย้งในระเบียบบริษัท

**4. Write (เขียน)**
- **AI ทำอะไร**: สร้างเนื้อหา, ร่างเอกสาร
- **Use Case**: เขียน JD, ร่าง Performance Summary ให้ Manager (ลดเวลาจาก 1 ชม. เหลือ 20 นาที)

**5. Think (คิด)**
- **AI ทำอะไร**: Predictive models, Reasoning
- **Use Case**: วางแผน Workforce Planning, วิเคราะห์ความเสี่ยงองค์กร`
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
          content: `### Hybrid Intelligence คืออะไร? (Slide 7)

ไม่ใช่แค่การใช้ AI หลายตัว แต่คือการออกแบบระบบให้ทำงานร่วมกับ **"มนุษย์"** และ **"ข้อมูลองค์กร"**

**องค์ประกอบสำคัญ (Layered System):**
1.  **Data Layer**: ข้อมูลดิบ (HRIS, Performance Data)
2.  **Model Layer**: สมองที่ใช้คิด (Predictive Model, Scoring Engine)
3.  **Governance Layer**: กฎหมาย จริยธรรม และการตรวจสอบ (สำคัญมากสำหรับองค์กรใหญ่)
4.  **Human Layer**: การตัดสินใจสุดท้ายโดยมนุษย์

---

### กรณีศึกษา: คุณสมชาย (Slide 8)
ตัวอย่างการตัดสินใจเรื่อง **Promotion** โดยใช้ Hybrid System:

**Step 1: Symbolic AI (ด่านแรก)**
- ตรวจสอบกฎ: อายุงานครบ 18 เดือน? ไม่มีการลงโทษวินัย? -> **ผ่าน/ไม่ผ่าน**

**Step 2: Predictive AI (วิเคราะห์)**
- คำนวณ: โอกาสประสบความสำเร็จในตำแหน่งใหม่ **78%**
- คะแนนความพร้อม (Readiness Score) **82/100**

**Step 3: Generative AI (นำเสนอ)**
- ร่างเอกสารเสนอเลื่อนตำแหน่ง (Promotion Memo)
- สร้างแผนพัฒนา (Development Plan) เตรียมไว้ให้

**Step 4: Human (ตัดสินใจ)**
- HR และ Manager พิจารณาข้อมูลทั้งหมด + บริบททางสังคม (Soft Side) แล้วตัดสินใจขั้นสุดท้าย

> **สรุป**: AI ช่วย "เตรียมข้อมูลและวิเคราะห์" เพื่อให้มนุษย์ "ตัดสินใจ" ได้แม่นยำและเร็วขึ้นครับ`
        },
        {
          id: "governance-risk",
          title: "Governance: สิ่งที่ต้องมีก่อนเริ่มใช้",
          type: "risk",
          icon: "fa-shield-alt",
          // No specific slide image, maybe a generic one or none
          content: `### ทำไมต้องมี Governance Layer?

สำหรับองค์กรที่มีพนักงาน 2,000 คน ถ้าไม่มีระบบกำกับดูแล อาจเกิดความเสี่ยงมหาศาลครับ

**1. Guardrails (รั้วป้องกัน)**
- ป้องกันไม่ให้ AI แนะนำสิ่งที่ผิดกฎหมาย หรือเลือกปฏิบัติ (Bias)
- ป้องกันข้อมูลรั่วไหล (Data Leakage)

**2. Human Oversight (มนุษย์ต้องกำกับดูแล)**
- **กฎเหล็ก**: ห้ามใช้ AI ตัดสินเรื่องคอขาดบาดตาย (เช่น เลิกจ้าง, ลดเงินเดือน) โดยอัตโนมัติ
- AI เป็นเพียง Decision Support (ผู้ช่วยตัดสินใจ) เท่านั้น

**3. Probability ≠ Truth (ความน่าจะเป็น ไม่ใช่ความจริง)**
- ถ้า AI บอกว่า "สมชายเสี่ยงลาออก 70%" แปลว่า "คนที่มีพฤติกรรมคล้ายสมชายในอดีต เคยลาออก 70%"
- **ไม่ได้แปลว่า** สมชายจะลาออกแน่นอน ห้ามไปลงโทษเขา แต่ควรเข้าไปดูแลพูดคุย`
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
          content: `### Framework การตัดสินใจ (Slide 12)

HR ไม่ควรใช้ AI กับทุกงาน เราต้องดูกราฟ 2 แกน: **ความซ้ำซาก (Repetition)** และ **การใช้เหตุผล (Reasoning)**

**1. AUTOMATE (ซ้ำสูง + ตรรกะง่าย)**
- **งาน**: ตอบคำถาม FAQ, ออกหนังสือรับรอง, คัดกรองเบื้องต้น
- **วิธี**: ใช้ระบบอัตโนมัติ (RPA) หรือ Rule-based

**2. AUGMENT (ซ้ำน้อย + ตรรกะสูง)**
- **งาน**: การตัดสินใจเลื่อนตำแหน่ง, การวางแผน Nachfolgeregelung (Succession)
- **วิธี**: ใช้ AI ช่วยวิเคราะห์ข้อมูล (Enhance Reasoning) แต่มนุษย์ตัดสินใจ

**3. AGENTIFY (ซ้ำสูง + ตรรกะสูง)**
- **งาน**: สรุปผล Survey 10,000 คอมเมนต์, คัดกรอง Resume จำนวนมาก
- **วิธี**: ใช้ AI Agent หรือ Workflow Automation ที่ "คิดก่อนทำ"

**4. IGNORE (ซ้ำน้อย + ตรรกะง่าย)**
- **งาน**: กรณีพิเศษ (Ad-hoc), งานแม่บ้าน
- **วิธี**: ทำมือต่อไป ไม่คุ้มลงทุน`
        },
        {
          id: "workflow-automation",
          title: "AI Workflow Automation (Slide 13-15)",
          type: "practical",
          icon: "fa-cogs",
          // Placeholder for Slide 13
          image: "https://placehold.co/1200x675/e2e8f0/475569?text=Slide+13:+AI+Workflow+Automation",
          content: `### เปลี่ยนจาก Tool เป็น System

**Automate the Repeatable (Slide 10)**
- เริ่มจากงานที่ปริมาณเยอะๆ ก่อน (Volume) เพื่อให้เห็น ROI ชัดเจน
- เช่น การตอบคำถาม Policy พนักงาน 1,200 ครั้ง/เดือน

**Traditional vs AI Automation (Slide 13)**
- **Traditional**: ทำตามคำสั่งเป๊ะๆ (Executes) ถ้าเจออะไรแปลกๆ จะ Error
- **AI Automation**: คิดก่อนทำ (Thinks before executing) อ่านบริบทได้ ปรับตัวได้

**Levels of Intelligence (Slide 15)**
- **Level 1 (Rule-based)**: แจ้งเตือนเมื่อวันลาหมด
- **Level 2 (Pattern)**: เห็นแพทเทิร์นการลาออก
- **Level 3 (Predictive)**: ทำนายว่าใครจะลาออก
- **Level 4 (Generative/Adaptive)**: สร้างแผนรักษาพนักงาน (Retention Plan) ให้หัวหน้างาน
- **Level 5 (Autonomous)**: ระบบบริหารจัดการ Talent แบบ Real-time (ระดับสูงสุด)`
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
