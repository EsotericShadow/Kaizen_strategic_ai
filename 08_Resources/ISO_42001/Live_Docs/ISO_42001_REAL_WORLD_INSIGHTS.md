# ISO 42001 Real-World Insights

## Sources
**Source 1**: Risk 360 - ISO 42001 Implementation Insights  
**Speaker**: Christian Hyatt, CEO of Risk 360  
**Context**: First batch of ISO 42001 implementations globally

**Source 2**: ISO 42001 Structure Tutorial  
**Context**: Educational walkthrough of standard structure and clauses

**Source 3**: Standards Australia + National AI Centre - ISO 42001 Webinar  
**Speakers**: Aurelie Jacquet, Dr. Kobi Leins, Harm Ellens, Professor Lyria Bennett Moses  
**Context**: Australian experts explaining ISO 42001 launch

**Source 4**: Certified Info Sec - ISO 42001 Lead Implementor Training  
**Context**: Comprehensive implementation training walkthrough

**Source 5**: Ministry of Security - ISO 42001 Implementation Webinar  
**Speakers**: Santos Nandakumar (CIPM Mentor, 17 years experience), Shalini (Data Privacy Specialist)  
**Context**: "World's first ISO 42001 implementation webinar" - practical walkthrough

**Source 6**: Interser + Ministry of Security - ISO 42001 Webinar  
**Speakers**: Sanjeev Pand (Lead Auditor ISO 27001, 42001, 9001, 25 years experience)  
**Context**: Lead auditor training introduction with practical bias/ethics examples

**Source 7**: LRQA - ISO 42001 Promotional Video  
**Context**: Short introduction to ISO 42001 as management system standard

**Source 8**: Perry Johnson Registrars - ISO 42001 Webinar  
**Speakers**: Terry Bogo (PJR President), John Lafy (ISM Program Manager), Shannon Krack (Accreditations Manager), Brenda Bissell (ANAB Senior Manager)  
**Context**: Certification body perspective with ANAB accreditation insights

**Source 9**: Perry Johnson Registrars - ISO 42001 Q&A Session  
**Context**: Same speakers, focused Q&A on practical implementation and scoping

---

## Key Takeaways

### 1. ISO 42001 is the De Facto AI Framework ✅

**Real-world status**:
- Microsoft, Amazon, Google are ISO 42001 certified
- Anthropic (Claude) is certified
- Microsoft requiring vendors to get ISO 42001
- **It's the only AI certification option right now**
- Fastest growing AI certification globally

**Bottom line**: If you're doing AI governance, this is the standard.

---

### 2. Why Companies Get Certified

**Two main drivers**:

**1. AI Risk Management** (Internal)
- Need to move fast on AI
- Need to manage risk systematically
- Most companies have zero AI governance
- ISO 42001 provides framework

**2. Customer Trust** (External)
- ISO 42001 appearing in contracts
- Contractual amendments requiring certification
- AI addendums to vendor agreements
- **Revenue blocker if you don't have it**

**Sound familiar?** Same story as ISO 27001 for security.

---

### 3. Framework Structure

**ISO 42001 is NOT AI Security** ⚠️

**ISO 27001** = Security management  
**ISO 42001** = AI risk management

**Key difference**: Different objectives, not just security-focused.

**Structure** (Identical to ISO 27001):
- **Management System** (AIMS): Clauses 4-10
- **Controls**: 9 objectives, 38 controls

**If you know ISO 27001**: You're halfway there already.

---

### 4. The 9 Control Objectives

**A1**: Policies  
**A2**: AI Risk Management  
**A3**: Internal Organization  
**A4**: Resources for AI Systems  
**A5**: Assessing Impacts (AI Impact Assessment)  
**A6**: AI Systems Lifecycle  
**A7**: Data for AI Systems  
**A8**: Information for Interested Parties  
**A9**: Acceptable Use  
**A10**: Third-Party AI Services

**Not security controls** - AI risk management controls.

---

## Real-World Implementation

### Timeline

**Typical timeline**:
- **Planning**: 1-2 months
- **Implementation**: 6 months (3-12 month range)
- **Certification**: 6 months
- **Total**: ~12 months to certification

**Breakdown**:
- Stage 1 audit: 1-2 days
- 30-45 days later: Stage 2 audit
- Certification issued: ~30 days after stage 2

---

### Effort by Team

**Leadership**: 1-2 hours total  
**GRC/Security/Risk**: 1-2 weeks (most effort)  
**Product/Engineering**: 1 day + evidence gathering  
**Legal**: Half day

**Total**: Manageable if well organized.

---

### Common Work Streams

**1. Governance**
- Establish risk council
- Write policies
- Set risk appetite
- Define roles (RACI)

**2. Risk Management**
- AI risk assessment
- Risk register
- Risk prioritization
- Risk treatment

**3. Impact Assessment** ⭐ KEY NEW CONCEPT
- AI system impact assessment
- Identify potential harms to individuals/groups
- Document mitigations
- Different from risk assessment!

**4. Internal Audit**
- Annual requirement
- Must be independent
- Must be qualified
- Must be documented

**5. Engineering/SDLC**
- Embed AI into SDLC
- Data quality and governance
- Model selection criteria
- Agent identity and access

**6. Third-Party Risk**
- AI vendor assessments
- Contract language updates
- Criteria and questions

---

## Key Policies Required

**Must-have policies**:
- AIMS policy (overall)
- AI policy
- AI appropriate use policy
- AI risk management policy
- AI impact assessment policy

**Integration into existing policies**:
- Data retention → Add AI data
- SDLC → Add AI lifecycle
- Security policies → Add AI security
- Vendor management → Add AI vendors
- Data inventory → Add AI data

**Also need**:
- Risk council charter
- Roles and responsibilities

---

## AI System Impact Assessment - THE NEW THING

**This is unique to ISO 42001** - doesn't exist in ISO 27001.

**Purpose**: Identify potential impacts to individuals/groups from AI systems.

**Process**:
1. Define what the AI system does
2. Ask: "How could this impact individuals or groups?"
3. Risk score: Low, medium, high
4. Document mitigations

**Example** (From webinar):
- **System**: Alternative credit scoring for mortgages
- **Potential impact**: Discrimination against racial minorities, immigrants, low-income
- **Finding**: Discovered bias in data causing false denials
- **Mitigation**: Built bias detection, transparency tools, dispute process

**This is the philosophical difference**:
- Risk assessment: What could go wrong with AI?
- Impact assessment: How could AI harm people?

---

## Real Customer Example: Lending Company

**Context**: Alternative credit scores for mortgages using AI

**Scenario**:
- Pulls massive amounts of data
- Creates alternative credit scores
- Sells to major banks
- High-stakes decision making

### Implementation Steps

**1. Governance Setup**:
- Added AI to existing information risk council
- Updated charter
- Clear risk appetite statement
- Quarterly high-impact meetings
- Slack channel for async communication

**Stakeholders**:
- Engineering
- Data Science (NEW addition to IRC)
- Legal
- Security, Risk, Compliance

**2. AI Impact Assessment Process**:
- Created practical assessment workflow
- Set triggers in Jira (new dataset, new market, new factors)
- Assessed discrimination risks
- **Discovered actual bias in data**

**3. Mitigations Implemented**:

**Front-end**:
- Transparency on how score was calculated
- Show factors that drove decision
- Dispute process for users

**Back-end**:
- Bias detection system
- Anomaly flagging
- Quality control checks
- Review flags

**Result**: Both transparency for users AND technical safeguards.

---

## Practical Lessons from Webinar

### Lesson 1: Don't Slow Down Innovation
**Problem**: Companies worry AI governance will slow them down  
**Solution**: Make it practical and integrated, not check-the-box  
**Reality**: Can be done without blocking innovation

---

### Lesson 2: Impact Assessment is Different
**Not same as risk assessment**:
- Risk assessment: Technical/business risks
- Impact assessment: Human harm risks

**Both required** by ISO 42001.

---

### Lesson 3: Engineering Integration is Hardest Part
**Why**:
- Context dependent
- Co-pilot vs. custom LLM vs. orchestration - all different
- No universal best practices yet
- Requires deep thinking

**Examples**:
- Which model for which use case?
- Data governance and quality
- Agent identity and access (for 1000 agents)

**Reality**: Need AI expertise, not just compliance expertise.

---

### Lesson 4: Keep Governance High-Value
**Don't waste leadership time**:
- Effective prep for meetings
- High-impact quarterly sessions
- Async communication between meetings
- Never boring, always decision-focused

**Reality**: Must drive business decisions, not be compliance theater.

---

### Lesson 5: Scope is Critical
**How to scope**:
- What risk are you managing?
- Which stakeholders need assurance?
- Single product vs. entire company

**Examples**:
- **Product focus**: You sell an AI product
- **Company focus**: Internal AI use (Co-pilot, ChatGPT, agents)

**Can be both, but scoping wrong = waste of time/money.

---

## Certification Process

### Stage 1: Design Review (1-2 days)
**What they check**:
- Management system design
- Policies
- Risk assessment methodology
- Internal audit approach
- Are you ready?

**Look at**: 20-25 artifacts  
**Decision**: Ready for stage 2 or not

---

### Stage 2: Full Audit (30-45 days after stage 1)
**What they check**:
- All evidence for all controls
- Interviews with stakeholders
- Implementation effectiveness

**Look at**: 75-100 artifacts  
**Result**: Certification or nonconformities

---

### Surveillance Audit (Year 2-3)
**Lighter audit**:
- ~1/3 of controls
- Between stage 1 and 2 intensity
- Annual ongoing

---

### Recertification (Year 4)
**Start over**: Stage 1 + Stage 2

**Can integrate**: Do 42001 + 27001 together if you have both.

---

## Selecting a Certification Body

**Must be**:
- ✅ Accredited (ANAB, IAS, UKCAS)
- ✅ Independent (can't consult and audit)
- ✅ Cost competitive
- ✅ Reputable service
- ✅ AI expertise

**Questions to ask**:
- Can I talk to existing customers?
- What's your AI experience?
- Can you do integrated audits?

**Reality**: Get multiple quotes, don't choose based on logo alone.

---

## Tips for External Audits

**Preparation**:
- Get stakeholders ready
- Make them competent in framework
- Prepare for clause-by-clause review
- Spot check evidence beforehand
- Vet the auditor (individual, not just firm)
- Have communication plan

**During audit**:
- Ask for issues immediately
- Don't wait to the end
- Auditors get context wrong sometimes
- Be ready to explain

**Reality**: Can be helpful or frustrating depending on auditor.

---

## Market Landscape

### The Big Players (Certified)
- Microsoft
- Amazon
- Google
- Anthropic (Claude)

**Microsoft specific**: Requiring vendors in SSPA program to get ISO 42001

---

### Market Growth
- 750,000 language models
- 70,000+ AI companies
- Thousands of AI regulations globally
- Still in year 1 of certifications

**Prediction**: Years 2-4 will explode (like ISO 27001 did)

---

### Regional Differences

**EU**: Regulation-driven
- EU AI Act compliance
- GDPR-style enforcement
- Use 42001 to satisfy AI Act

**US**: Business-driven
- Microsoft/Amazon requiring it
- Contract-driven
- Customer trust focus

**Both evolving in parallel** - expect rapid US adoption too.

---

## Framework Evolution

**Will it keep up with AI changes?**
- **Yes**: Written at high enough level
- But: Not very prescriptive (both strength and weakness)

**Update timeline**:
- ISO 27001: 2013 → 2022 (9 years)
- **42001: Will update much faster** (AI moving fast)

**Reality**: Framework will evolve rapidly.

---

## Scope Guidance

**How to think about it**:
1. What risk are you managing?
2. Which stakeholders need assurance?

**Examples**:

**Product-focused scope**:
- You sell an AI product
- Product is the risk
- Scope the product, not whole company
- Example: Credit scoring product

**Company-focused scope**:
- No AI products
- But using AI internally (Co-pilot, agents, etc.)
- Managing internal risk
- Scope the company's AI use

**Can be both**: Just depends on your use case.

---

## Third-Party Management

**Can leverage vendor certification**?
- **Yes** for risk management: Use their program to support yours
- **No** for claiming certification: Can't use vendor's cert as your own

**Shared responsibility**:
- They manage their AI risk
- You manage your AI risk
- Their certifications support you, don't replace you

**What you need**:
- AI added to vendor assessments
- AI questions in questionnaires
- AI in contract language
- Criteria for vendor selection
- Maybe require vendors to be ISO 42001 certified?

---

## Critical Framework Requirements

### The 38 Controls Coverage

**Must cover all 38 controls**:
- Data quality (A7)
- Bias detection (A7)
- Transparency (A8)
- Human oversight (A6)
- Incident response (A9)
- Vendor management (A10)
- Lifecycle management (A6)
- And 31 more...

**Each control needs evidence**:
- What you're doing
- How you're doing it
- Why you chose that approach
- Continuous improvement

---

### Documentation Requirements

**Half of audit = Management System**:
- Clauses 4-10 must be fully documented
- Roles and responsibilities
- Policies and procedures
- Evidence of effectiveness
- Continuous improvement proof

**Documentation doesn't mean paperwork**:
- Can be in platform (like Full Circle)
- Can be streamlined
- But must exist and be accessible

---

## Internal Audit Requirement

**Must do annually**:
- Independent auditors (can't be program manager)
- Qualified (understand AI and ISO 42001)
- Formal and documented
- Report findings to management
- Drive improvements

**Reality**: Often outsourced to firms like Risk 360.

**Value beyond compliance**:
- Prep for external audit
- Hold stakeholders accountable
- Friendlier environment
- Continuous improvement

---

## Resources from Webinar

**Free Course**:
- Risk 360 ISO 42001 video series
- Clause-by-clause, control-by-control
- YouTube + website
- Same material as webinar, deeper dive

**Additional Frameworks**:
- **ISO 23894**: AI risk management (guidance, risk sources)
- **ISO 42005**: AI system impact assessment (guidance, template)
- **NIST AI Risk Management**: Alternative framework
- **HighTrust AI**: Another certification option (limited traction)

---

## Vendor Certification Question

**Conflict of interest?**
- **No** if consulting firm ≠ certification body
- **Yes** if consulting firm also auditing you
- **Reality**: Can use same platform/advisory firm, just not auditor

**Example**: Risk 360 does consulting but not auditing (that would be conflict).

---

## Evolution and Best Practices

**Current state**: Still year 1, lots unknown
**Reality**: No universal best practices yet  
**Challenge**: Unique situations with no precedent

**Example**: Managing identity/access for 1000 AI agents  
- No standard solution yet
- You might be one of few companies dealing with this
- Need smart people to think it through

---

## What This Means for Kaizen

### Timeline Reality Check
- **6 months implementation** is typical
- Can go faster (3 months) or slower (12 months)
- Depends on complexity and maturity

---

### Effort Reality Check
- **Manageable** if organized well
- Multiple teams involved
- Not just GRC work

---

### Cost Reality Check
- **Standard**: CHF 199 (~$280 CAD)
- **Certification body**: Varies
- **Consulting** (optional): $15K-$30K+
- **Your own time**: 6 months of work

---

### Framework Reality Check
**ISO 42001 is**:
- ✅ Not AI security (AI risk management)
- ✅ Similar to ISO 27001 structure
- ✅ 38 controls across 9 objectives
- ✅ Management system + controls

---

### Implementation Reality Check
**Must do**:
- Governance setup
- Risk management program
- **AI impact assessment** (unique!)
- Internal audit
- Policies and documentation
- Engineering integration

**Context matters**: Your use case determines approach

---

## Key Differences from ISO 27001

**Similarities**:
- Same high-level framework
- Same management system structure
- Same audit process
- Same governance requirements

**Differences**:
- Different objectives (risk vs security)
- **AI impact assessment** is new
- Controls are AI-focused
- More about human harm than technical harm

---

## Resources Available

**From Risk 360**:
- Free ISO 42001 course (YouTube)
- EU AI Act compliance guide
- SOCK 2 + AI guidance
- Example contract language
- Implementation support

**Look up**: "Risk 360 ISO 42001" on YouTube

---

## Bottom Line for Kaizen

### What This Means

**1. ISO 42001 is Real and Growing**:
- Microsoft, Google, Amazon certified
- Becoming contractual requirement
- Global momentum

**2. Implementation is Doable**:
- 6 months typical
- Multiple teams involved
- Manageable effort

**3. Unique Concepts**:
- AI impact assessment is key differentiator
- Not just security, it's risk management
- Engineering integration is hardest part

**4. Scope Carefully**:
- Product vs. company scope
- What risk are you managing?
- Which stakeholders matter?

**5. Revenue Driver**:
- Customer trust
- Contractual requirements
- Competitive differentiator

---

## Action Items Based on This

**For Kaizen**:

**Now**:
1. Download Risk 360 free course
2. Review AI impact assessment concept
3. Think about your scope
4. Consider engineering integration challenges

**Next Quarter**:
1. Formal planning if pursuing certification
2. Gap assessment
3. Resource allocation

**Start Simple**:
- Use as governance framework first
- Formal certification later
- Prove value before full commitment

---

## ISO 42001 Structure Walkthrough (Source 2)

### Key Structural Concepts

**Four Annexes**:
- **Annex A**: Controls (38 controls, 9 objectives) - REQUIRED
- **Annex B**: Implementation guidance for AI controls - GUIDANCE
- Annex C: Further guidance - OPTIONAL
- Annex D: Bibliography - REFERENCE

**Two that matter most**: Annex A and B

---

### Scope Definition

**Critical first step**: Define your AI system scope

**Examples from video**:
- Chatbots (customer service automation)
- Image recognition (biometric systems)
- Predictive analysis (financial forecasting)
- Robots (manufacturing/industrial)
- Data protection/GRC tools with AI suggestions
- Policy creation AI assistants

**Key principle**: Scope based on what you're trying to automate or streamline, not theoretical AI.

**Your approach**: Define scope based on your actual use cases.

---

### Core Elements & Definitions

**Principles to define**:
- Human values
- Labor practices
- Environmental sustainability
- **Transparency**
- **Accountability**
- **Privacy**
- Human-centered design
- **Safety and reliability**

**Human-centered design** (specific example from video):
- AI should complement human capabilities
- Not replace humans completely
- Enhance decision-making
- Provide data/insights to make informed decisions
- Not automation for automation's sake

**Your takeaway**: Define these principles for your organization.

---

### Key Clauses

**1. Context of Organization**
- Define organization's needs
- Define organization's expectations
- Assess capability to handle AI
- Current resources assessment
- Current infrastructure assessment
- Prepare AI management plan

**2. Leadership**
- AI policies
- AI controls
- AI roles and responsibilities
- Resource allocation
- Employee contributions
- Communication
- Business integration
- **Top-down approach required**

**3. Planning**
- AI risk criteria
- Acceptable vs non-acceptable risk
- Data privacy concerns
- Information security concerns
- Fair and transparent outputs
- Data patterns and algorithms
- Undesirable outputs
- Risk treatment
- **Healthcare & Finance**: Most exposed domains

**4. Support**
- Dedicated AI department (eventually)
- Chief AI Officer role (emerging)
- Right resources onboarding
- Technological resources
- Financial resources
- Information resources
- Risk management alignment

**5. Operation & Performance**
- Continuous improvement
- Maturity of AI models
- Education and training
- Communication
- Monitoring and evaluation

---

### Most Exposed Domains

**Healthcare**:
- Example: Disease diagnostics
- Risk: Wrong diagnosis → serious consequences
- Acceptable accuracy threshold must be defined
- May need to revert to manual if AI not reliable enough

**Finance**:
- High financial loss if AI fails
- Strict risk tolerance
- Extensive testing required

**Your industry**: Consulting/small business - less critical but still important.

---

### SDLC Lifecycle Applies

**AI follows same lifecycle**:
- Development
- Testing
- Deployment
- Operation

**What's different**:
- Use cases
- Amount of testing needed
- Risk determination
- **Core SDLC concept remains same**

**Your advantage**: You're already familiar with SDLC.

---

### Annex A: The 38 Controls (Overview)

**9 Control Objectives**:

1. **A1**: Policies
2. **A2**: AI Risk Management
3. **A3**: Internal Organization
4. **A4**: Resources for AI Systems
5. **A5**: Assessing Impacts (AI Impact Assessment)
6. **A6**: AI Systems Lifecycle
7. **A7**: Data for AI Systems
8. **A8**: Information for Interested Parties
9. **A9**: Acceptable Use
10. **A10**: Third-Party AI Services

**Must address all 38 controls** to meet the standard.

---

### Annex B: Key Implementation Guidance

**Documentation requirements** (mandated):
- Data used for ML must be documented
- Process of labeling data for training/testing
- Design choices including ML methods
- Performance metrics and evaluation

**Trustworthiness areas**:
- Fairness
- Transparency
- Explainability
- Accessibility
- Security

**Beyond AI**:
- Environmental impacts
- Misinformation potential
- Health and safety issues

**One notable control**: Justification of AI system development
- When will it be used?
- Why will it be used?
- Metrics to measure performance
- Document design choices
- Evaluate with AI-specific measures

---

## How Videos Complement Each Other

### Video 1 (Risk 360): Implementation Reality
- Timeline: 6 months typical
- Effort: 1-2 weeks core work
- Certification process details
- Real example: Lending company
- Market landscape

### Video 2 (Structure): Conceptual Framework
- How standard is organized
- What clauses mean
- Annex A vs B differences
- Core elements and definitions
- Scope examples

**Together**: You have both the "what" (structure) and the "how" (implementation).

---

## The Real Message

**From someone who's done it many times**:

> "ISO 42001 can be done without slowing down innovation. Make it practical and integrated, not check-the-box. The hardest part is engineering integration, not the paperwork. AI impact assessment is the key differentiator from security frameworks."

**From the structure tutorial**:

> "Define scope based on what you're trying to automate. AI should complement humans, not replace them. Healthcare and finance are most exposed domains. SDLC lifecycle applies to AI systems. Address all 38 controls."

**For Northern BC**:
- Get certified
- First mover advantage
- Market differentiation
- Customer trust

---

## Standards Australia Expert Insights (Source 3)

### Aurelie Jacquet - ISO 42001 Context

**Key Points**:
- **25 standards published** since 2018, **31 in development**
- **64 countries involved**, **150+ experts**
- ISO 42001 is the "crown jewel" - **THE certifiable standard**
- **First International Management System standard** for safe AI

**Why It Matters**:
- Enables certification (only one)
- Builds robust AI governance framework
- Interoperable with NIST, EU AI Act

**EU AI Act Connection**:
- EU certification will be delivered using ISO foundation
- Standards Australia works with European standards bodies
- ISO standards inform European standards

**Bottom line**: This is the bridge between global jurisdictions.

---

### Dr. Kobi Leins - Risk Perspective

**The Stats**:
- 90% of companies think they need AI governance
- Only **6% have policies**
- Only **6% on call had purchased standard** (self-selecting group)

**Historical Context**:
- Standards emerge from disasters (steamboat fires example)
- Standards predate regulation (cobblestones for regulations to follow)
- Early regulation makes you more competitive

**Key Message: Policies ≠ Governance**
- Policies alone are not enough
- Need **people + processes**
- Processes are the hard bit
- Don't slow down innovation, embed it

**Risk is a Set Menu**:
- You don't get to choose which risks to address
- Must consider all risks within corporate appetite:
  - Unintended consequences
  - Data misuse
  - Negative outputs
  - Human harm

**Global Perspective**:
- Don't think "best practice in Australia"
- Think "what others globally will expect"
- US, EU moving faster than Australia

**People = Cultural Change**:
- Need whistleblowing culture
- Anyone can raise concerns
- Data scientists without C-suite access must feel safe
- Performance reviews tied to risk acceptance

**Impact Assessment Reality**:
- Don't do standalone tack-on assessment
- Must roll into existing processes
- Need right people in room
- Companies that get this right will win

**Board Risk Appetite**:
- Boards = fear (personal liability)
- Execs = excitement (FOMO)
- Set tone for organization
- Translate to KPIs for execs
- Owners of tools reviewed against risk appetite

---

### Harm Ellens - Technical Implementation

**Standards Ecosystem**:
- ISO 42001 informed by many other standards
- Important ones: ISO 23894 (AI risk), ISO 22989 (ecosystem roles)
- Four Annexes: A, B, C, D
- **Annex A & B are the most important**

**Roles Matter**:
- AI producer
- AI service provider
- AI consumer
- Individual AI users
- **Standard must address all roles**

**Similar to ISO 31000**:
- If you know risk management, you'll find familiarity
- If you know ISO 27001, very familiar
- Same structure as other management systems

**Major Clauses**:
- Context of organization
- Leadership commitment
- Policies, roles, responsibilities
- Planning (risk, impacts, change, objectives)
- Support (resources, competence, awareness)
- Operation and performance
- Document the system
- Evaluate and improve

**AI-Specific Risk Sources**:
- Mentioned but detail in next webinar
- Part of control objectives

**Certification Timeline**:
- Expected July 2024 (from webinar date)
- Standards being developed for auditors
- Exams for auditors, lead auditors, implementers, lead implementers
- Handbook coming for constructing management systems

---

### Professor Lyria Bennett Moses - Legal & Compliance Context

**The Big Picture**: Standards sit in broader ecosystem

**Government's Tools**:
1. **Sticks** (law):
   - High-risk AI specific laws (proposed)
   - Existing law that applies (discrimination, Privacy Act, negligence, contract)
   - Air Canada chatbot case: held liable for chatbot error

2. **Sermons** (guidance):
   - Australia's AI Ethics Principles
   - What you "ought" to do

3. **Carrots** (procurement):
   - Government only buys from compliant suppliers
   - Extra customer = incentive

**Non-Government Sources**:
- Standards (ISO)
- Ethical principles (hundreds of lists)
- Requirements:
  - Market operators (Apple App Store)
  - Customers
  - Insurers
  - Industry associations

**Standards vs Law**:
- Standards can be referenced for legal compliance
- Show regulators you take requirements seriously
- **Not alternative to complying with law**
- **Can help avoid liability**

**AI Definitions Matter**:
- ISO 22989: Mirrors original OECD definition
- EU AI Act: Different definition
- EU definition hinges on one word: "infers"
- Creates problems distinguishing AI from other systems

**Standards Provide the HOW**:
- Ethics principles = vague
- ISO 42001 = practical how
- Appendices = implementation guidance
- Controls = detail

**Example: Reliability & Safety**:
- Australia AI Ethics: High-level principle
- ISO 42001: Policy requirements, roles, risk management process, lifecycle, evaluation, controls

**Integration is Key**:
- Don't install once
- Ongoing program
- Adapt to changing business needs
- Practice and operate continuously

---

### Q&A Insights from Standards Australia

**On Voluntary Adoption**:
- 90% of companies know they need governance
- 6% have policies
- Standards provide checklist of things to consider
- Let you choose what applies
- Must document why you skip controls

**Government Referencing**:
- Governments can reference standards in legislation
- Provides evidence of compliance
- Additional incentive when done explicitly
- Often useful to show regulators you're serious

**Impact Assessment Guidance**:
- Coming in "baby standards"
- Many models available
- Checklists not enough
- Need right people in room
- Companies that integrate will win

**Environmental Sustainability**:
- Technical report coming end of year
- Societal concerns project (formal guardrails)
- Hard to gain consensus, but moving forward

**Certification Timeline**:
- July timeframe mentioned
- Baby standards being developed
- Exams for auditors/implementers
- Handbook for constructing management systems

---

## Certified Info Sec Training Insights (Source 4)

### ISO 42001 Lead Implementor Context

**Certification is Stacking**:
- **Prerequisite**: ISO 31000 + ISO 23894
- Must understand risk management first
- Cannot do ISO 42001 without risk management foundation

**Why ISO 31000 First**:
- ISO 42001 requires risk-based approach
- Uses ISO 31000 methodology
- ISO 23894 extends 31000 for AI

**Training Path**:
1. ISO 31000 CIC training/certification
2. ISO 42001 lead implementor training
3. AIMS 101 exam
4. Application for certification
5. Digital credential

**Maintenance**:
- Continuing education required
- Renewal requirements

---

### ISO 42001 Structure & Content

**PDCA Model** (all ISO management systems):
- **Plan**: Modules 1-2 (Clauses 4-7)
- **Do**: Module 3 (Clause 8)
- **Check**: Module 4 (Clauses 9-10)
- **Act**: Continuous improvement

**Key Themes**:
1. Leadership and commitment
2. Planning (risk, opportunities)
3. Support (resources, competence, awareness, communication)
4. Operation (processes, procedures)
5. Performance evaluation
6. Continuous improvement

**Custom Tailored**:
- AI Management System fits your organization
- Based on needs and objectives
- Driven by business context

**Integrated Management**:
- AI not standalone
- Integrated with operational processes
- Enables better operations
- Informs normal operational goals

**Risk-Based Approach**:
- AI features require different safeguards
- Continuous learning
- Lack of transparency/explainability
- Additional concerns vs traditional approaches

**Planning Phase (Clauses 4-7)**:
- Context of organization
- Leadership commitment
- Policies, objectives
- Roles, responsibilities
- Risk management
- Resources, competence
- Awareness, communication

**Operation Phase (Clause 8)**:
- Processes and procedures
- From design phase
- Accomplishing what you planned

**Check/Act (Clauses 9-10)**:
- Performance evaluation
- Monitor, measure, analyze
- Corrective actions
- Continuous improvement

---

### Key Distinguishing Feature: AI Impact Assessments

**Shift in Focus**:
- Traditional risk assessments = internal requirements
- ISO 42001 = external implications on individuals and society
- Marks significant shift from traditional enterprise risk

**Required Standards**:
- **ISO 31000**: General risk management
- **ISO 23894**: AI-specific risk assessments
- **ISO 42005**: AI impact assessments
- **ISO 421 NxC**: AI risks, threats, vulnerabilities, scenarios

**Not Just Technology**:
- AI systems = entire system including all components
- Information security critical
- Cyber security critical
- AI is information processing technology

**Human-Centered**:
- Emphasis on effects on individuals and society
- Marked departure from internal focus
- Broader implications of AI technologies

---

### Integration with Other Standards

**Compatible Frameworks**:
- ISO 27001 (information security)
- ISO 27701 (privacy - PII management)
- ISO 9001 (quality management)
- NIST AI RMF (AI risk management)
- NIST CSF 2.0 (cyber security)
- ISO 22989 (AI concepts, terminology)
- ISO 5338 (AI lifecycle processes)
- ISO 2353 (ML systems framework)
- ISO TR 2427 (bias control)

**Why So Many**:
- AI integrated throughout organization
- Woven into other management systems
- Organizations combine frameworks

**ISO 27001 Integration**:
- Security is key objective
- Same high-level structure
- AI is cyber-connected
- Vulnerable to cyber security risks
- Malicious processes enhanced by AI
- Cybersecurity supply chain critical

**ISO 27701 Integration**:
- PII processed by AI systems
- Privacy controls for AI
- Privacy-related objectives and controls
- Comply with privacy obligations

**ISO 9001 Integration**:
- Customer-oriented
- Internal effectiveness
- Independent conformity assessment
- Customer confidence in AI products/services
- Complementary requirements:
  - Risk management
  - Software development
  - Supply chain coherence

**NIST AI RMF**:
- Explicitly called out in ISO 42001
- Detailed guidance on AI risk governance
- Risk identification, analysis, treatment
- Enormous value to ISO 42001
- Far beyond what ISO 421 provides

**NIST CSF 2.0**:
- Secures cyber aspects of AI
- Supply chain risk management
- Brings critical value to AI management
- Integrates with ISO 42001

---

### Certification Value

**Third-Party Assurance**:
- ISO 42001 = specification standard
- Requirements support audit
- Can get certified (not just follow)
- Achieve official certification
- Display and tell others

**What You Get**:
1. Validation of AI management
2. Independent corroboration
3. Ethical, responsible management
4. Enhanced stakeholder trust
5. Provable compliance (including EU AI Act)
6. Increased trustworthiness, credibility
7. Safe legal compliance efforts
8. Competitive advantage (early adopter)
9. Enhanced risk management
10. Proactive issue identification

**Board Governance**:
- Shows due care, due diligence
- Proper governance committee activity
- Ethical, trustworthy AI business conduct

**Competitive Advantage**:
- Published December 2023
- Early adopter edge in market
- Signals to clients, customers, regulators
- At forefront of responsible AI

---

## All Videos Together: Complete Picture

### The Ecosystem (Source 3)
- **International cooperation**: 64 countries, 150+ experts
- **Standards bridge jurisdictions**: NIST, EU, ISO all interconnected
- **Regulation coming**: Standards predate regulation
- **First-mover advantage**: Early adoption = competitive edge

### The Implementation (Source 1)
- **6 months typical**: 12 months to certification
- **Manageable effort**: 1-2 weeks core work
- **Engineering hardest part**: Not paperwork
- **Real companies**: Microsoft, Google, Anthropic certified

### The Structure (Source 2)
- **Four Annexes**: A (controls), B (guidance), C, D
- **38 controls, 9 objectives**: All must be addressed
- **SDLC applies**: Same lifecycle as traditional systems
- **Scope matters**: Product vs company focus

### The Training (Source 4)
- **Prerequisites required**: ISO 31000 + ISO 23894
- **PDCA model**: Plan, Do, Check, Act
- **Integrated approach**: Not standalone
- **Many frameworks**: Combine what works

### The Risk Approach (All Sources)
- **Risk-based required**: ISO 31000 foundation
- **Impact assessments unique**: Focus on individuals/society
- **Both assessments needed**: Risk + impact
- **Integrated processes**: Don't do standalone

### The Compliance Context (Source 3)
- **Law applies**: Standards complement, don't replace
- **Multiple sources**: Government, standards, customers, insurers
- **Government tools**: Sticks, sermons, carrots
- **Standards show seriousness**: Useful to regulators

---

## Ministry of Security Implementation Walkthrough (Source 5)

### Key Context

**World's First ISO 42001 Implementation Webinar** - Practical, hands-on approach

**Published**: December 2023 standard, webinar in early 2024  
**Focus**: How to actually implement, not theory

---

### AI Types Overview

**Three Types of AI**:
1. **Narrow/Weak AI**: Rule-based chatbots, fixed Q&A
   - Cannot generate new content
   - Reads backend, provides responses
   - Been around for decades

2. **Artificial Narrow Intelligence (Current)**: ChatGPT, generative AI
   - Can generate new content from datasets
   - Learns from training data
   - Provides responses based on understanding

3. **Artificial General Intelligence (Conceptual)**: Mimics human intelligence
   - Can apply knowledge across wide range of tasks
   - Still in conceptual phase

**AI Hierarchy**:
- **Artificial Intelligence** (wider umbrella)
  - **Machine Learning** (subset of AI)
    - **Deep Learning** (neural networks)
      - **Generative AI** (current ChatGPT)

**Key**: AI tries to mimic human behavior in that situation.

---

### ISO 42001 Fundamentals

**Two Parts to Standard**:
1. **Clauses**: Mandatory for certification
2. **Controls**: Best practices (can pick and choose)

**Key Difference from ISO 27001**:
- ISO 42001 includes control guidance in same standard
- ISO 27001 requires separate ISO 27002 for control guidance

**Clause Structure** (Same as other ISO standards):
- Context of organization
- Scope
- Leadership
- Planning
- Support
- Operation
- Performance evaluation
- Improvement

**Certification Note**: Certifying bodies still coming up, but standard is published.

---

### Santos Nandakumar's Clause Walkthrough

#### Context of Organization

**Create Context Register** (Excel sheet or document)

**External Issues**:
1. **Regulatory environment**: AI regulations coming worldwide
2. **Market trends**: Competitive landscape
3. **Social and ethical concerns**: Bias, traditions, culture, norms

**Internal Issues**:
1. **Resources**: Right people, process, technology
2. **Internal processes**: Workflow disruption assessment
3. **Data quality and availability**: Reliability of data feeds
4. **Relevance to purpose**: Stakeholder expectations

**Output**: Context register documenting all of above

#### Scope

**Define boundaries**:
- Which department(s)?
- Entire organization?
- Customer-facing or internal?
- Clear what's included/excluded

**Auditor perspective**: Needs clear boundary for audit

#### Leadership

**AIMS Manual** (like ISMS manual):
- Roles and responsibilities
- Leadership responsibilities
- AI manager as champion

**AI Policy**:
- Purpose of AI introduction
- Legal and regulatory requirements
- Commitment expectations
- Continual improvement
- Communication requirements

**Roles and Responsibilities**:
- Not just leadership
- People who develop/maintain AI systems
- Define roles clearly
- Communicate responsibilities
- Provide relevant training

#### Planning: Risk Assessment

**AI Risk Assessment** (similar but different from ISO 27001)

**Risk Categories**:
1. **Bias and fairness**: Unintentional biases in algorithms
2. **Security and privacy**: Data leakage, sensitive information
3. **Transparency**: Black box problem, no explanation
4. **Data quality and integrity**: Poor data = poor AI
5. **Regulatory compliance**: AI regulations
6. **Operational risk**: Process disruption

**Risk Treatment**:
- Compare risk value against risk appetite
- Risks above appetite need controls
- Technical measures (e.g., encryption)
- Statement of Applicability (SoA)

**Documents needed**:
- Risk assessment methodology
- Risk assessment sheet
- Risk treatment plan
- Statement of Applicability

#### NEW: System Impact Assessment

**This is NEW** - not in other ISO standards

**What it is**: Impact assessment for individuals/groups/society

**Can be input to risk assessment**

**Six Impact Areas**:
1. **Safety risk**: Irreplaceable harm (e.g., autonomous vehicles)
2. **Privacy risk**: PII compromise
3. **Security risk**: Same as privacy
4. **Ethical concerns**: Biased decisions (hiring AI example)
5. **Social equity risk**: Favoring certain groups, discrimination
6. **Unintended consequences**: Traffic optimization making it worse

**Document**: System impact assessment procedure and outputs

#### AI Objectives

**Create AI Objectives Register** (Excel sheet):
- Objective description
- Who responsible
- Which department
- What resources needed
- When completed
- Metrics to measure

**Must be**:
- Consistent with policy
- Measurable
- Legal/regulatory compliant
- Monitored, communicated, updated

#### Support

**Competency Metrics**:
- Roles involved in AIMS
- Skills required for each role
- Current staff skills
- Gap analysis → Training calendar

**Training Calendar**: From competency gaps

**Documents**: Competency metrics, training calendar

#### Performance Evaluation

**Metrics examples**:
- Accuracy of outcome
- Precision of data
- False positive rate
- Data quality compliance rate

**Process**: How to evaluate, what metrics to use

#### Internal Audit

**Same as ISO 27001**:
- Independent auditor
- Periodic audits
- Not involved in implementation

**Documents**: Internal audit plan, methodology, report

#### Management Review

**Same as ISO 27001 structure**:
- Status/action from previous review
- Changes to external/internal issues
- Changes to stakeholder needs
- Monitoring results
- Metrics outcomes
- Audit results
- Opportunities for improvement

**Frequency**: Quarterly ideally

**Documents**: Management review records

#### Improvement

**Corrections Register**: Documented format

**Non-conformities**: Take corrections immediately after audits

---

### Shalini's Controls Walkthrough (Annex A)

**40+ controls** (mentioned "40 plus controls")

**Implementation guidance provided** in same standard (unlike ISO 27001)

**Nine Control Categories**:

#### A1: Policies Related to AI

**Three aspects**:

1. **AI policy definition**:
   - Set tone based on business strategy, values, risk comfort
   - Legal requirements
   - Risk percentage impact
   - How AI impacts stakeholders
   - Guiding principles, roadmap
   - Handle deviations/exceptions

2. **Alignment with other policies**:
   - Quality, security, safety, privacy
   - Find where AI impacts existing policies
   - Refresh or add new bits
   - Seamless alignment

3. **Review AI policy**:
   - Regular checkups
   - Appoint someone in charge (management approved)
   - Adjust to changes (business, law, technology)
   - Use management review feedback

#### A2: Internal Organization

**AI roles and responsibilities**:
- Crystal clear role definition
- Accountability for AI lifecycle
- Job descriptions for every department
- Playbook everyone understands

**Reporting of concerns**:
- Open channel for concerns
- Confidential and anonymous reporting
- For employees and contractors
- Team of qualified professionals
- Direct management contact
- Rock solid protection for reporters
- Safe space culture

#### A3: Resources for AI System

**Resource documentation**:
- List important stuff for AI system
- Keep records of paths, data, tools, people
- Impact understanding
- Risk understanding

**Four sub-categories**:

1. **Data resources**:
   - Where data comes from
   - Last updated
   - Type (training/testing/real use)
   - How it's labeled
   - Intended use
   - Quality
   - Retention/disposal plan

2. **Tooling resources**:
   - Different types of algorithms/models
   - Data prep tools
   - Optimization methods
   - Evaluation methods
   - Software and hardware
   - Performance documentation

3. **System computing and computing resources**:
   - Technical requirements
   - Setup location (on-prem/cloud/edge)
   - Processing gear (network/storage)
   - Hardware usage
   - Environment considerations
   - Different stages (create/launch/run)

4. **Human resources**:
   - Right mix of skills
   - Data scientists
   - Safety/security/privacy experts
   - AI researchers/specialists
   - Domain experts
   - Different individuals for different stages

#### A4: Assessing Impacts of AI System

**AI system impact assessment process**:
- How AI shapes individuals/groups/societies
- Throughout lifecycle
- Legal implications, life opportunities, well-being, human rights, societal effects
- When and how to conduct

**Factors to consider**:
- System purpose, complexity, data sensitivity

**Assessment includes**:
- Identify, analyze, evaluate, take necessary action
- Tailored to organization's role and AI application domain

#### A5: Documentation of AI System Impact Assessment

**What to document**:
- AI system use and possible misuses
- Good and bad impacts on people/societies
- What can go wrong, how to fix
- Who system is for, how tricky
- Human touch involved
- People oversight
- Staff skills and jobs

**Retention**: Follow organizational schedules or legal rules

#### A6: AI System Lifecycle

**Management guidance for AI system development**:
- Set goals, define them
- Documented procedures
- Objectives for responsible development

**Processes for responsible design and development**:
- Different lifecycle stages
- Testing
- Human oversight (especially if affects people)
- When to check impacts
- Data quality considerations
- Approval criteria before release

**Sub-controls**:

1. **AI system requirements and specification**:
   - Why making AI system (business/customer/government)
   - Clear on training
   - Data needs
   - Rules throughout lifecycle
   - Tweaking if needed

2. **Documentation of AI system design and development**:
   - Detailed notes
   - Design decisions
   - Hardware considerations
   - Security threats
   - Solid blueprint
   - Document everything

3. **AI system verification and validation**:
   - Test and tools
   - Set criteria for release
   - Evaluate system
   - Potential risks to people/society
   - Reliability, safety, responsible use
   - Data quality, usage plans
   - Regular evaluation
   - Reassess if shortfalls

4. **AI system deployment**:
   - Can start one place, end elsewhere
   - Consider differences in rollouts
   - Release criteria:
     - Pass tests
     - Meet performance goals
     - User testing complete
     - Management green light

5. **AI system operation and monitoring**:
   - Performance monitoring
   - Error checking
   - Alignment with goals
   - Real-world data monitoring
   - Continuous learning systems need extra vigilance
   - Non-continuous systems may shift due to data changes
   - Respond to errors/failures/updates
   - User support
   - SLA processes
   - Security threats unique to AI
   - Data poisoning, model-related attacks

#### A7: Data for AI Systems

**Data for development and enhancement**:
- Careful with security because some data is personal
- Watch out for safety issues
- Clear about data use
- Open and understandable
- Data must match situation
- Accuracy and trustworthiness

**Sub-controls**:

1. **Acquisition of data**:
   - What type required
   - How much
   - Where from (internal/bought/shared/open)
   - Nature of source (static/flowing/machine-generated)
   - Details about data subjects
   - Biases, errors

2. **Quality of data**:
   - ISO 25024 for data quality
   - Meets certain conditions
   - Supervised/semi-supervised ML needs great data
   - Check and improve quality
   - Watch for bias

3. **Data provenance**:
   - ISO 8025: where data comes from
   - When created, updated, transferred, transformed
   - Story of data's journey
   - Determine if provenance checking needed

4. **Data preparation**:
   - Missing stuff, mistakes, inconsistent scales
   - Clean up mistakes
   - Fill missing bits
   - Standard form
   - Statistics and cleaning

#### A8: Information for Interested Parties

**System documentation and information for users**:
- Technical details and instructions
- General notification to users
- Complex systems need understanding
- Purpose, intended uses
- How much AI can cause harm vs benefit

**External reporting**:
- Open channel for users/external parties
- Report adverse impacts
- Concerns about fairness
- Collaborative, responsive environment

**Communication of incidents**:
- Range from system issues to security/privacy
- Recognize responsibilities in notifying users/stakeholders
- Based on context of system

**Information disclosure**:
- Jurisdiction may require opening up
- Share with authorities, regulators, customers
- Technical documentation
- Data sets for training/validation
- Algorithm reasoning
- Recalls, verification, validation
- Risks (from impact assessment)
- System records, logs

#### A9: Use of AI System

**Processes for responsible use**:
- Numerous ways to use
- Decide: in-house or outsource
- Policies address these decisions
- Include approvals, costs, legal requirements

**Objectives for responsible use**:
- Clear picture of different expectations
- Identify and document objectives
- Examples: fairness, accountability, transparency, explainability, reliability, safety, redundancy, privacy, security
- Implement mechanisms to achieve
- Decide if third-party or in-house

**Intended use**:
- Use AI system as should be used
- Follow intention of use
- Document all usage
- Performance accuracy
- Retain event logs/documentation
- Retention depends on purpose, org policies, legal requirements

#### A10: Third-Party and Customer Relationship

**Allocating responsibilities**:
- Split between org/partners/suppliers/customers/third parties
- Parties providing data vs algorithms vs developing
- All accountable for interested parties
- PII processor vs PII controller (GDPR example)

**Suppliers**:
- Can source: data sets, ML algorithms, modules, components
- Establish process
- Materials/products/services align with approach
- Follow policy

**Customers**:
- Understand expectations and needs
- Different types of relationships
- Different needs/expectations
- Identify risks related to use
- Treat risks by giving appropriate information to customers

---

### Practical Implementation Example: GenAI Risk Assessment Sheet

**"Mother of all documents"** for ISO 42001

**Combined**: GenAI risk assessment + DPIA

**Sections**:

1. **Description of Application**:
   - Company name
   - What application is about
   - Why used, description
   - Purpose, interests, techniques
   - Stage, timeline
   - Like a project charter

2. **Necessity and Proportionality**:
   - Why want this
   - How ensure data collected properly

3. **Technical and Organizational Measures**:
   - List all measures
   - Examples: contracts with vendors, opt-out forms, abuse monitoring, human review
   - Status: Planned/In work/In place/Not planned/Unclear
   - Details: Measure, purpose, current state
   - Who, when, how

4. **Risk Assessment**:
   - **Flavors**: Ethics, data privacy, general, security
   - **For each risk**:
     - What risk
     - Potential impact (financial/reputational/regulatory/criminal)
     - Probability
     - Impact
   - **Examples**:
     - Unintended refusal of services
     - IP secrecy
     - Model training infringed data protection
     - Input issues (PII, wrong data, financial records)
     - Copyright infringement
     - Output bias
     - Incomplete/inaccurate data
     - Sensitive questions not avoided
     - Deletion requests not complied
     - Individual rights

5. **Compliance Check**:
   - Applicable regulations
   - Consider: third-party secrets, own secrets, personal data, own IP, credit card data

6. **Conclusion**:
   - Overall risk level
   - High/Medium/Low

**Key**: Cover entire lifecycle (input → processing → output)

---

### Most Important Insights from Webinar

#### Santos Nandakumar's Top Points

1. **Context Register**: First document you create (Excel works)
2. **Scope**: Clear boundaries for auditor
3. **System Impact Assessment**: NEW concept, different from risk assessment
4. **40+ controls**: Can pick and choose based on organization
5. **Control guidance included**: Unlike ISO 27001
6. **Risk Assessment**: Must cover entire AI lifecycle
7. **Management Review**: Quarterly ideally
8. **GenAI Risk Sheet**: Mother of all documents, includes DPIA

#### Shalini's Top Points

1. **Document everything**: Most important thing
2. **Human touch**: Never missing, always oversight
3. **Safe space**: Confidential, anonymous reporting culture
4. **Resource documentation**: Keep records of everything
5. **Data quality critical**: Poor data = poor AI
6. **Tools**: Know what tool does what
7. **Continuous monitoring**: Not one-and-done
8. **Users must understand**: Complex systems need clarity

---

### Time Constraints Mentioned

**Standard requires**: 8-10 hours to explain  
**Webinar covered**: In very short time  
**Limitation**: Rushed through many controls  
**Suggestion**: Take more time in real implementation

**Promised**: GenAI risk assessment sheet sample (did deliver)

---

## All Five Videos: Complete Mosaic

### The Practitioner Layer (Source 5)
- **Documents to create**: Context register, scope, objectives register, competency metrics, risk assessment sheet, SoA, internal audit plan, management review records
- **Excel-friendly**: Most can be done in spreadsheets
- **Implementation focus**: What files to create, what they contain
- **GenAI-specific**: Practical risk assessment example
- **Certification**: Bodies still coming, but standard ready

### The Ecosystem Layer (Source 3)
- **International cooperation**: 64 countries, 150+ experts
- **Standards bridge jurisdictions**: NIST, EU, ISO interconnected
- **Regulation coming**: Standards predate regulation
- **Legal context**: Sticks, sermons, carrots framework

### The Implementation Reality (Source 1)
- **6 months typical**: 12 months to certification
- **Manageable effort**: 1-2 weeks core work
- **Engineering hardest part**: Not paperwork
- **Real companies**: Microsoft, Google, Anthropic certified

### The Structural Understanding (Source 2)
- **Four Annexes**: A (controls), B (guidance), C, D
- **38 controls, 9 objectives**: All must be addressed
- **SDLC applies**: Same lifecycle as traditional systems
- **Scope matters**: Product vs company focus

### The Training Prerequisites (Source 4)
- **Prerequisites required**: ISO 31000 + ISO 23894
- **PDCA model**: Plan, Do, Check, Act
- **Integrated approach**: Not standalone
- **Many frameworks**: Combine what works

### The Risk Approach (Sources 1, 3, 4, 5)
- **Risk-based required**: ISO 31000 foundation
- **Impact assessments unique**: Focus on individuals/society
- **Both assessments needed**: Risk + impact
- **Integrated processes**: Don't do standalone
- **Entire lifecycle**: Input → processing → output

### The Documentation Reality (Source 5)
- **Excel works**: Context register, objectives register, risk sheets
- **Document everything**: Most important thing
- **40+ controls**: Can pick and choose
- **GenAI risk sheet**: Mother of all documents

### The Legal Compliance (Source 3)
- **Law applies**: Standards complement, don't replace
- **Air Canada example**: Liable for chatbot error
- **Government tools**: Procurement as carrot

---

## Interser Lead Auditor Training Insights (Source 6)

### Sanjeev Pand's Introduction

**Credentials**: Lead Auditor ISO 27001, 42001, 9001 - 25 years experience  
**Organization**: Interser (multinational, Texas-based)  
**Context**: Lead auditor training introduction

**Interser's Services**:
- GRC solutions (governance, risk, compliance)
- Management system certification (ISMS, SOC, AIMS, Privacy, BCMS)
- Professional training
- Security assessment and testing (vulnerability assessment, penetration testing)

**Accreditations**:
- PCI DSS qualified security assessor
- AICPA SOC attestations
- Asia Pacific Accreditation Cooperation
- SEC, UAF, IAF, CNCA certifications
- Cloud Security Alliance start certifications
- Exemplar Global accredited training provider

---

### Why AI Needs Governance

**Reality Check Examples**:
- **Netflix**: Collects what you watch, even kids/elders, time zones
- **Voice alteration scam**: CEO's voice altered to instruct CFO to make payment
- **Google/Facebook polarization**: Search for political party → keeps showing favorable results
- **Election influence**: Too much information pushed based on data analysis

**Key Point**: Mass manipulation is real. Algorithm + data → can change opinions at scale.

**Bottom Line**: Technology cannot be stopped. Will be used governed or not. Better to govern.

---

### AI Bias & Ethics Deep Dive

**AI Bias Definition**:
- AI system makes decisions that are unfair or biased

**Example**: Medical AI for fever
- Only gives one medicine it wants to promote
- That's bias

**Ethics Definition**:
- AI systems used fairly, transparently, responsibly

**Examples of Ethical Concerns**:

1. **Hiring AI**:
   - Trained mostly on men → unfairly favors men
   - Vice versa possible too

2. **Loan Approval AI**:
   - Doesn't unfairly deny based on race/gender
   - Process transparent
   - People understand why approved/denied

3. **Social Media Polarization**:
   - Facebook/Google push ideology you search
   - Polarization into society
   - Next generation impacted

4. **Manipulation & Misinformation**:
   - Fake news, fake videos, fake audio
   - Generative AI creates convincing content
   - Can influence elections

---

### Ways to Make AI More Ethical

**Four Approaches**:

1. **Develop transparent algorithms**:
   - Problem: IPR/copyright concerns
   - Benefit: More beneficial
   - Challenge: Legal/statutory issues

2. **Implement ethical AI frameworks**:
   - Like ISO 42001

3. **Adherence to standards**:
   - ISO 42001 compliance

4. **Organizational practices**:
   - Bias detection processes
   - Privacy controls
   - Impact assessments

---

### ISO 42001 Overview

**Structure**:
- 10 Clauses (4-10)
- 11 Controls (actually same as other sources)
- Planning, development, risk assessment, impact assessment

**Purpose**: Governance model for responsible AI

**Certification**: Can be validated and verified like ISO 27001

**What it Provides**:
- Framework to establish, implement, maintain, continually improve AIMS
- Ensure responsible development and use of technology
- Not irresponsible use

**Responsible Development Means**:
- Complying with people's needs
- Ethical
- Legally abiding
- Not biased
- Doesn't promote particular trade practices

**Reason Organizations Adopt**:
- Ultimate responsibility lies with head of organization
- Want adequate system in place
- Visibility into progress

**Interser Position**: Among first to provide accredited ISO 42001 lead auditor training.

---

### Practical Exercises Discussed

**Exercise 1: Product Recommendation AI**
- Objective: Recommend products to users
- Develop checklist for ethical principles:
  - Fairness
  - Transparency
  - Non-bias

**Exercise 2: Fraud Detection AI**
- AI detects fraudulent online transactions
- Often flags legitimate customers by mistake
- Question: Prioritize catching fraud or protecting user experience?

---

### Q&A Insights from Interser Webinar

**Training Duration**:
- No prerequisite for certification (new standard)
- Can easily do it

**Certification Status**:
- Yes, multiple organizations certified
- Multiple people going through training

**Risk Assessment Process**:
- Understand context of organization
- What is AI trying to do?
- Risk assessment in multiple areas:
  - Technological
  - Process
  - People
  - Ethical

**Code Review**:
- Model driven by statistics (correlation, regression)
- Code review from functional and non-functional perspective
- Cyclic process: improve data → improve algorithm → improve code
- Version control essential

**Bias Detection**:
- Requires adequate process
- Few hours delay = wrong/banned results
- Understand application, stakeholders, legal implications
- Regulatory implications
- Data correctness (where collected)

**Privacy & PII**:
- Very important
- Not just medical data
- Including what you search in Google/Facebook
- Removing name alone doesn't make it non-PII
- Name + mobile + interest area = PII
- AI systems often taking data without identifying individuals

**Business Impact vs AI Impact Assessment**:
- If organization is ONLY AI business → business impact works
- If not → separate AI impact assessment needed
- Stakeholders, wider society impacts also considered

**AI Readiness Assessment**:
- Requires more clarity
- AI lifecycle needs validation first
- ISO 42001 is for AI management system
- Life cycle perspective (not just software development)

**Lead Auditor Training for 27001**:
- Not mandatory for ISO 42001
- But interoperable with other standards

**SDLc Stage for AI Considerations**:
- AI-specific considerations across all stages
- AI lifecycle separate from software development lifecycle
- Multiple lifecycles: data, application, algorithm/model
- All merge into AI development lifecycle

**Consent for PII**:
- Not "sometimes" — all the time, 99% of scenarios
- Weakness of system: consent made mandatory for legal defense
- May not be fair but depends on ethics/bias/law of land

**Prerequisite for Certification**:
- No asset prerequisite
- New standard launched last year
- Can easily do it

**Certification Body Readiness**:
- Interser among first accredited training providers
- Multiple sessions every month

---

### Key Distinctions from Sanjeev's Talk

**Bias vs Ethics**:
- Bias = favoring someone (definitely not correct)
- Ethics = adopting cultural needs (may be correct for certain scenario)

**AI Testing Tools**:
- Mostly same as information security
- Key difference: algorithm and ML parts (still evolving)

**CIA in ISO 42001**:
- CIA (confidentiality, integrity, availability) from ISO 27001 is factor
- But ISO 42001 is much more
- Impact assessment especially different
- Not limited to CIA

**AI Framework vs ISO 42001**:
- NIST AI Framework popular in US
- If business related to US, consider NIST too
- ISO 42001 is international standard

**Interoperability**:
- Yes, interoperable with all other standards
- Organization can add controls if needed
- Can make controls not applicable with adequate justification

---

### Critical Insights on Consent & Privacy

**Sanjeev's Real Talk**:
- Consent mandatory in 99% of scenarios
- Weakness of privacy systems
- Consent made mandatory to defend in legal situations
- May not be fair, but that's reality

**PII in AI Context**:
- Not just medical data
- What you search, interests, browsing
- Removing name alone doesn't work
- Name + mobile + interests = PII

**AI Systems Workaround**:
- Taking data without identifying individuals
- Enough data points = can still identify

**Need**: Law enforcement and regulatory bodies need to think about governance

---

### Integration with Existing Systems

**Not Standalone**:
- Integrates with ISO 27001, ISO 9001, etc.
- Organization can adopt additional controls
- Can justify non-applicable controls
- Flexible approach

**Lifecycle Thinking**:
- AI lifecycle ≠ Software lifecycle
- Multiple lifecycles merge:
  - Data lifecycle
  - Application lifecycle
  - Algorithm/model lifecycle
  - All = AI development lifecycle

---

## LRQA Promotional Video (Source 7)

### ISO 42001 Context

**Statistics**:
- 42% of enterprises exploring AI
- Governance hasn't kept up

**Market Reality**:
- Rapid adoption → real challenges
- EU AI Act setting clearer expectations
- Growing pressure to prove AI is ethical
- Public trust is fragile

**Business Need**:
- More than good intentions
- Need structure
- ISO 42001 = first international standard for AI management systems
- Practical framework to govern AI responsibly
- Embed ethical principles
- Manage risk across organization

---

### What ISO 42001 Provides

**Four Key Areas**:
1. Establish strong AI governance
2. Identify and manage AI-specific risks
3. Promote transparency and accountability
4. Continually improve system performance

**Integration Benefits**:
- Built on Annex SL structure
- Integrates easily with ISO 27001, ISO 9001
- Align AI strategy with existing risk and quality systems

**Why Certification Matters**:
- Shows serious about responsible innovation
- Gives confidence to regulators, partners, public

**LRQA Services**:
- ISO 42001 training
- ISO 42001 certification services
- Deep knowledge in cybersecurity compliance and risk management
- Assess readiness
- Strengthen governance
- Build long-term resilience

---

### The Message

**LRQA's Value Proposition**:
> "We help organizations navigate the complex AI landscape. Our experts deliver ISO 42001 training and certification services backed by deep knowledge in cybersecurity compliance and risk management."

**Proof Points**:
- Interser provides accredited training (among first)
- Multiple organizations already certified
- Monthly training sessions available

---

## All Seven Videos: Complete Mastery

### The Assessment Reality (Source 6)
- **Bias vs Ethics**: Distinct concepts (bias always bad, ethics contextual)
- **Consent Reality**: Mandatory in 99% scenarios (legal defense)
- **Privacy Complexity**: PII not just medical, includes all browsing behavior
- **No Prerequisites**: Can start certification training immediately

### The Business Case (Source 7)
- **42% exploring**: But governance lagging
- **Trust Fragile**: Public needs proof
- **EU AI Act**: Setting expectations
- **Certification Shows**: Serious about responsible innovation

### The Practitioner Layer (Source 5)
- **Documents to create**: Context register, scope, objectives register, SoA
- **Excel-friendly**: Most in spreadsheets
- **Implementation focus**: What files, what they contain
- **GenAI-specific**: Practical risk assessment example

### The Ecosystem Layer (Source 3)
- **International cooperation**: 64 countries, 150+ experts
- **Standards bridge jurisdictions**: NIST, EU, ISO interconnected
- **Regulation coming**: Standards predate regulation
- **Legal context**: Sticks, sermons, carrots framework

### The Implementation Reality (Source 1)
- **6 months typical**: 12 months to certification
- **Manageable effort**: 1-2 weeks core work
- **Engineering hardest part**: Not paperwork
- **Real companies**: Microsoft, Google, Anthropic certified

### The Structural Understanding (Source 2)
- **Four Annexes**: A (controls), B (guidance), C, D
- **38 controls, 9 objectives**: All must be addressed
- **SDLC applies**: Same lifecycle as traditional systems
- **Scope matters**: Product vs company focus

### The Training Prerequisites (Source 4)
- **Prerequisites required**: ISO 31000 + ISO 23894
- **PDCA model**: Plan, Do, Check, Act
- **Integrated approach**: Not standalone
- **Many frameworks**: Combine what works

---

## Cross-Cutting Themes Across All Sources

### Ethical Concerns
- **Data privacy and security**: Not just medical, all browsing
- **Bias and discrimination**: Algorithm can favor certain practices
- **Manipulation**: Opinion of masses can be changed
- **Misinformation**: Fake news, fake videos, fake audio

### Technical Realities
- **Code review**: Functional + non-functional, cyclic process
- **Bias detection**: Requires adequate process, few hours delay = wrong results
- **Lifecycle thinking**: Multiple lifecycles merge (data, app, algorithm, model)
- **Version control**: Essential for continuous improvement

### Operational Insights
- **No prerequisites**: Can start immediately
- **Certification happening**: Multiple orgs certified already
- **Training available**: Monthly sessions
- **Excel works**: Most documentation in spreadsheets

### Legal/Practical Reality
- **Consent reality**: Mandatory 99% of scenarios for legal defense
- **Governance need**: Can't stop technology, better to govern
- **Context critical**: Understand what AI trying to do first
- **Risk multi-faceted**: Technological, process, people, ethical

### Integration Notes
- **Interoperable**: With all standards
- **Add controls**: If needed
- **Justify omissions**: Controls can be non-applicable with justification
- **Lifecycle separate**: AI ≠ software lifecycle

---

## Perry Johnson Registrars Certification Body Perspective (Sources 8 & 9)

### Brenda Bissell - ANAB Senior Manager Insights

**ANAB Status**:
- Launched program January 16, 2024
- Already received **four applications** from certification bodies
- **120+ accredited CBs** globally under ANAB
- **Expecting 20-25 applications by end of 2024**
- One of **first accreditation bodies to launch**

**Major Players Interested**:
- Microsoft
- Google
- Facebook (Meta)
- Amazon
- **All participating in work group that wrote ISO 42001**
- **Working on it behind scenes for two years already**

---

### Market Size Expectations

**Growth Prediction**:
- ISO 27001 was fastest growing program globally
- **ISO 42001 will surpass that "very quickly"**
- All major accreditation bodies launching during 2024:
  - UKAS (mentioned)
  - RVA
  - Standards Council of Canada
  - Every AB around the world

**Industry Impact**:
- **Every industry** will be affected:
  - Healthcare
  - Medical device
  - Automotive
  - Aerospace
  - Marketing
  - Call centers
  - All industries

**Not Just ISO 27001 Organizations**:
- Applies to ISO 27001 orgs (yes)
- But **every organization in the world**
- Microsoft, Google, Amazon contacting ANAB already

---

### ISO 4206 Auditor Competency Requirements (DISC Version)

**Current DISC Requirements**:
- **Experienced in information security**: Yes
- **Two years AI experience**: Required
- **Three-day training course**: Required (24 hours)
- **Lead Auditor**: Must have participated in **three ISO 42001 audits** (chicken/egg problem!)

**ANAB's Approach**:
- Using DISC requirements currently
- **Chicken/egg scenario**: No auditors have done 3 audits yet
- **Solution**: Consider technical assessors for first three audits
- May need to continue using technical assessors

**ANAB Marketing for Assessors**:
- Marketing on website for **two months**
- **Zero applicants** received
- Starting major PR push this week:
  - PR wire/news article
  - LinkedIn campaign
  - Email campaign to industries

**Potential Sources for Technical Experts**:
- Universities (professors teaching AI)
- Industry (people willing to contract for few audits per year)
- Impartiality committees
- Both ANAB and CBS struggling with same issue

---

### Auditor Competency Reality

**Similar Challenge**:
- ISO 27001 Auditors don't necessarily have AI experience
- CB Auditors have been away from industry for years
- AB assessors same situation

**Expected Approach**:
- **Technical experts** + **ISO 27001 Auditors**
- AI technical experts work alongside trained auditors
- First audits likely use technical assessors heavily

**Training Availability**:
- Hard to find training classes right now
- Largest training organizations still developing
- One still 2-3 weeks away
- Another still in development phase
- **Everyone playing catch-up**
- Standard published **couple months early**

**Expected Development**:
- Exemplar Global will add ISO 42001 auditor program
- IRA will add it too
- **6-12 months down the road**

---

### Certification Scoping (Brenda's Expert View)

**Can Limit Scope**:
- Yes, very similar to ISO 27001
- Can limit to particular platform, application
- Or even just IT department
- **Single application** = valid scope

**Example from Terry**:
- 500 employees, single site
- 6-7 people responsible for AI phone system
- **Can scope to just that application**
- Just folks who have access to that application
- Important for saving client time and money

**Multi-Site Considerations**:
- ISO 4206 (DISC) doesn't provide multi-site guidance yet
- ISO 27001 multi-site changing with new version
- **A-1 approach**: Include all employees across all sites, then allocate days
- Current approach: Calculate by site, provide justification
- Expected to be similar for ISO 42001

**Roles Affect Audit Days**:
- **Developer** = different column
- **Provider** = different column  
- **User** = different column
- **Multiple roles** = different column
- **Four columns** in audit days table (different from other standards!)
- **No discounts allowed** (unlike MD5 which allows up to 30%)
- **Only additions** (more days)

---

### NDA and ISO 4206 Timeline

**Current Status**:
- **DISC**: Comment period ended January 17
- **FIS expected**: End of March (couple months from webinar)
- **Comment period**: 8 weeks
- **Then**: Resolution of comments
- **Expected final publication**: Not specified

**Expected Changes**:
- **DISC to FIS**: "Do not expect a lot of changes"
- **FIS to final**: "Do not anticipate a lot of change"
- **Consensus**: Major items won't change significantly

**Challenges in DISC**:
- Requirements seem "exaggerated or over the top"
- Competency requirements very demanding
- Audit days seem "a little above what I would expect"
- No consideration for "no impact"

**Feedback Provided**:
- ANAB made recommendations on audit days
- Questioning philosophy/approach to establish numbers
- Hoping for clarifications in FIS

---

### Remote/Hybrid Audits

**Brenda's Position**:
- **"Very feasible"**
- Will be similar to ISO 27001
- Learned those can be conducted effectively remotely/hybrid
- **50% on-site, 50% off-site** for manufacturing facilities
- No issues conducting remotely

**Expectation**: Will be **auditable remotely without any issues**

---

### ISAF and ISO Workgroups on AI Use

**International Workgroups Started**:
- **IAF AI workgroup**: Looking at AI use in accreditation and certification
- **ITIC AI group**: US CB regional organization (PJR is member)
- **First meeting**: Earlier this week
- Brenda member of both groups

**Current Uses Being Explored**:
- **One AB in Asia**: Already using AI to write reports
- **AI uses in certification process**:
  - Writing non-conformities (more consistent)
  - Developing audit plans
  - Assisting in process
- **Expected timeline**: Not this year, **definitely within 2-3 years**

**Workgroup Goals**:
- Identify requirements for consistency
- Among CBS and ABS
- Determine if mandatory or informative document
- **Two meetings so far**: Just identifying terms of reference

**Terry's Point**:
- Large hanging fruit:
  - Audit plans
  - Executive committee review process
  - Large part of labor for registrars
- **Make our jobs easier** (as with every industry)

---

### Sector-Specific Experience

**Shannon's Answer**:
- Required for all programs to establish sector-specific competency criteria
- Auditors must meet those criteria
- Could be regional, laws/regulations for geographic area
- **4206 speaks to this** as well

**Critical for Internal Auditors**:
- Organizations need to understand what internal auditors need
- **Sector-specific requirements** likely needed
- **Local legislation** regarding use of AI
- **Example**: Some US states require clear public disclosure if AI is used

**Terry's Real Talk**:
- When interviewing AI experts: They're clueless about ISO standards
- ISO 27001 Auditors: Expert in standards, don't have AI experience
- **Technical experts + ISO Auditors**: Working together approach

---

### User vs Developer Controls

**Brenda's Clarity**:
- Similar to ISO 27001
- Some controls aimed at **producers/developers**
- Some specific for **providers**
- Some for **users**
- **Just like ISO 27001**: Justification for inclusion/exclusion in SoA

**User Perspective** (John's Question):
- Don't have access to backend systems
- A lot of risk management around **vetting providers**
- Need to vet or audit those providers
- Need to understand risk associated
- Depends on information given and expected outcomes

**Multiple Roles**:
- Organization can be one or multiple of: developer, provider, user
- Audit days increase with multiple roles

---

### Certification Timeline and Readiness

**Canadian Pilot**:
- Conducted last summer (banking institution)
- Waiting for report from SCC
- Learned a lot about auditing the standard
- **Fed back to workgroup**
- Used to make changes from DISC to FDIS

**Standard Development Process**:
1. Draft/DISPERSION
2. Send for comment
3. Comments received and disposed
4. Final draft (FDIS)
5. Send for comments again
6. Final publication

**Lessons Learned Fed Back**: Used between DISC and FDIS

**Terry's Observation**:
- **Standard published couple months early** than anticipated
- Everyone playing catch-up
- Training, procedures, working documents all behind

---

### Market Dynamics

**New Certification Bodies Coming**:
- Three or four **AI organizations** interested in becoming certification bodies
- Don't know what they do yet
- Haven't applied yet

**Brenda Expects**:
- **New players** entering Management Systems (just like boutique CBS did with ISO 27001)
- About 10 years ago: Boutique CBS came into ISO 27001
- Focus on information security and finance industry
- Now: **Another group** entering because of AI

**Success Story Potential**:
- **Not too late for consultants**
- Great time to expand scope
- New standard that's going to be "really hot"
- Help clients with documentation, conduct training
- **Expected to explode** very quickly

---

### Key Business Benefits from PJR Webinar

**Certification Benefits**:
1. Demonstrates responsible AI use
2. Shows dedication to ethical practices
3. Transparency and accountability
4. Communicate to customers/stakeholders
5. Competitive advantage in AI-centric landscape
6. Meeting requirements
7. Flexible and adaptable
8. Customer confidence
9. Access to global markets

**Reasons Organizations Want It**:
- **Ultimate responsibility** lies with head of organization
- Want adequate system in place
- **Visibility into progress**
- **Legal actions** could impact solvency of organization
- **Regulators expect it**

---

### Practical Scoping Example

**Real Scenario** (Terry's Example):
- Single site, 500 employees
- **6-7 people** responsible for AI phone system
- Only that application
- **Can scope to just that**
- Important for audit day calculation and cost

**Brenda's Confirmation**:
- Yes, can limit scope to particular platform/application
- Or IT department
- Similar to ISO 27001
- Will be important to analyze for saving client time/money

---

### Critical Insights from PJR Webinar

**1. Auditor Shortage Reality**:
- No qualified auditors yet
- Technical experts + ISO Auditors = hybrid approach
- Universities, industry contracts will be sources
- Training still being developed

**2. Market Explosion Coming**:
- Will surpass ISO 27001 growth
- All industries impacted
- Microsoft, Google, Amazon already working on it
- New certification bodies entering market

**3. Scope is Flexible**:
- Can be very narrow (single application)
- Important for cost management
- Just like ISO 27001 approach

**4. No Discounts on Audit Days**:
- Unlike MD5 (up to 30% reduction)
- Only additions allowed
- Four columns: Developer, Provider, User, Multiple

**5. Remote Audits Work**:
- Very feasible
- Similar to ISO 27001
- 50/50 split for manufacturing
- No issues conducting remotely

**6. AI Will Impact Cert Process**:
- Asia AB already using AI to write reports
- Within 2-3 years common
- IAF and ITIC workgroups started

---

### Brenda's Final Assessment

**Program Readiness**: Very early, standard published ahead of schedule  
**Market Interest**: Extremely high from major tech companies  
**Challenges**: Auditor competency, ISO 4206 still in DISC  
**Opportunity**: Huge for consultants and certification bodies  
**Timeline**: Exploding very quickly, expects massive growth

---

## All Nine Videos: Ultimate Mastery

### The Certification Body Reality (Sources 8 & 9)
- **Market explosion**: Will surpass ISO 27001
- **Auditor shortage**: Zero applicants after two months marketing
- **Hybrid approach**: Technical experts + ISO Auditors
- **Scope flexibility**: Single application scoping saves money
- **No audit day discounts**: Only additions allowed
- **AI cert process**: Asia already using AI for reports

### The Assessment Reality (Source 6)
- **Bias vs Ethics**: Distinct concepts
- **Consent reality**: Mandatory 99% scenarios
- **Privacy complexity**: All browsing behavior
- **No prerequisites**: Can start immediately

### The Business Case (Source 7)
- **42% exploring**: Governance lagging
- **Trust fragile**: Public needs proof
- **EU AI Act**: Setting expectations
- **Certification shows**: Serious about innovation

### The Practitioner Layer (Source 5)
- **Documents to create**: Context register, SoA, objectives
- **Excel-friendly**: Most in spreadsheets
- **Implementation focus**: What files, what they contain
- **GenAI-specific**: Risk assessment template

### The Ecosystem Layer (Source 3)
- **International cooperation**: 64 countries, 150+ experts
- **Standards bridge jurisdictions**: NIST, EU, ISO
- **Regulation coming**: Standards predate regulation
- **Legal context**: Sticks, sermons, carrots

### The Implementation Reality (Source 1)
- **6 months typical**: 12 months to certification
- **Manageable effort**: 1-2 weeks core work
- **Engineering hardest part**: Not paperwork
- **Real companies**: Microsoft, Google, Anthropic

### The Structural Understanding (Source 2)
- **Four Annexes**: A (controls), B (guidance), C, D
- **38 controls, 9 objectives**: Must address all
- **SDLC applies**: Same lifecycle
- **Scope matters**: Product vs company

### The Training Prerequisites (Source 4)
- **Prerequisites required**: ISO 31000 + ISO 23894
- **PDCA model**: Plan, Do, Check, Act
- **Integrated approach**: Not standalone
- **Many frameworks**: Combine what works

---

**This is the current state of ISO 42001 in the real world. Use these insights to guide your approach.**

**You now have practical, detailed implementation guidance from nine expert sources including certification bodies and accreditation authorities.**

