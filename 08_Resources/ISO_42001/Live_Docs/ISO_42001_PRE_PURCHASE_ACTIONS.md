# What To Do BEFORE Buying ISO 42001 Standard

## You Can Do This Right Now (Free)

**You don't need the standard to start.** Do these now while waiting for Chad's payment.

**This is not surface level.** This is the actual foundation work that will save you time later.

---

## ✅ DO TODAY (30 Minutes)

**Why 30 minutes?** Because you're just documenting what you already do. You're not inventing anything new.

### 1. Create AI Systems Inventory
**Time**: 15 minutes  
**Why**: ISO 42001 wants to know what AI you're managing. You can't manage what you don't know.

**Step-by-step**:
1. Open a new document
2. List every AI tool you use (yes, ChatGPT counts)
3. For each tool, write:
   - What you use it for
   - What could go wrong (risk level)
   - Why that risk level

**Your list** (copy this and customize):
```
AI TOOL INVENTORY - Kaizen Strategic AI

ChatGPT Plus
- Purpose: Client consultations, content creation, problem-solving
- Risk Level: MEDIUM
- Why: I paste client business info, market data, sometimes names
- Used For: Chad's discovery meeting prep, content writing, strategy analysis
- Controls: I don't paste banking info or social insurance numbers

Claude
- Purpose: Complex analysis, strategic planning, documentation
- Risk Level: MEDIUM
- Why: Similar to ChatGPT - handles client business information
- Used For: Technical documentation, deep analysis, multi-step reasoning
- Controls: Same as ChatGPT - no highly sensitive personal info

Cursor
- Purpose: AI-powered coding in my development environment
- Risk Level: LOW
- Why: Mostly internal tool for building client websites/systems
- Used For: Writing code, debugging, generating boilerplate
- Controls: Only sees my code, not client production data

GitHub Copilot
- Purpose: Code generation and development assistance
- Risk Level: LOW
- Why: Same as Cursor - internal development tool
- Used For: Code suggestions, autocomplete, learning new syntax
- Controls: Only suggests code patterns, doesn't access client data

OpenAI API
- Purpose: Custom AI solutions I build for clients
- Risk Level: HIGH
- Why: These go into production client systems with real data
- Used For: Client chatbots, document processing, custom integrations
- Controls: I build these from scratch with security measures, test before deployment

Anthropic API
- Purpose: Advanced AI for complex client projects
- Risk Level: HIGH
- Why: Same as OpenAI API - production systems
- Used For: High-stakes client projects needing Claude's capabilities
- Controls: Same as OpenAI - security first, testing before launch

Zapier
- Purpose: Automating workflows between client systems
- Risk Level: MEDIUM
- Why: Handles data flows between client apps
- Used For: Connecting client CRM to email, triggering notifications
- Controls: Only connects approved systems, encrypted connections

Make.com (Integromat)
- Purpose: Advanced automation for complex workflows
- Risk Level: MEDIUM
- Why: Handles complex multi-step data processing
- Used For: Multi-system integrations, data transformations
- Controls: Same as Zapier - secure connections only

Google Cloud AI
- Purpose: Document processing for clients
- Risk Level: MEDIUM-HIGH
- Why: Processes invoices, receipts, business documents
- Used For: Client document automation, invoice processing
- Controls: Only processes approved documents, secure storage
```

**Next steps**: Save this to `08_Resources/AI_Systems_Inventory.md`

**Why this matters**: When an auditor asks "What AI do you use?", you show them this list. Done.

---

### 2. Draft Your AI Policy
**Time**: 10 minutes  
**Format**: Copy the template below and customize

```
KAIZEN STRATEGIC AI - AI POLICY

We use artificial intelligence responsibly to serve our clients and operate our business.

Our Commitment:
- We use AI to enhance human capabilities, not replace them
- We maintain human oversight on all important decisions
- We protect client data with appropriate security measures
- We test and validate AI outputs before client delivery
- We learn from mistakes and continuously improve
- We are transparent with clients about AI use

Principles:
1. Human Oversight: All significant decisions involve human judgment
2. Data Security: Client data is secure, encrypted, and private
3. Testing First: We test AI systems before deployment
4. Continuous Improvement: We learn, adapt, and enhance
5. Client Trust: We are transparent about how we use AI

Owner: Gabriel Lacroix
Effective Date: [Today's Date]
Review: Annual
Approved: [Your Signature]
```

**Save this**: `08_Resources/AI_Policy.md`

---

### 3. Define Your Scope
**Time**: 5 minutes  
**Format**: One paragraph

For Kaizen, your scope is likely:

**Draft Scope Statement**:
```
Kaizen Strategic AI operates an AI Management System covering our use of artificial intelligence tools and services for client consulting, custom AI development, and internal operations. 

This includes:
- AI-powered client consultations and analysis
- Custom AI solution development for clients
- Third-party AI tool usage (ChatGPT, Claude, APIs)
- Workflow automation and integrations
- AI-generated content and documentation

Scope: Company-wide AI use for all business operations and client services.
```

**Save this**: Add to your AI Policy document

---

## ✅ DO THIS WEEK (While Waiting)

### 4. Create Basic Risk Register
**Time**: 1 hour  
**Why**: You're already thinking about risks. Write them down so you can manage them.

**Step-by-step**:
1. Look at each tool in your inventory
2. Ask: "What's the worst thing that could happen?"
3. Write it down with how likely and how bad
4. Note how you prevent it

**Your risk register** (copy and add to it):
```
AI RISK REGISTER - Kaizen Strategic AI

| Risk | Tool(s) | Impact | Likelihood | How We Prevent It | Owner | Status |
|------|---------|--------|-----------|------------------|-------|--------|
| Client data accidentally shown to OpenAI | ChatGPT, Claude | HIGH | MEDIUM | - Never paste SIN numbers or banking info<br>- Use general descriptions, not specific IDs<br>- Assume everything goes to training data | Gabriel | Managed |
| AI gives wrong advice to client | ChatGPT, Claude | HIGH | LOW | - Review all client-facing content<br>- Verify facts before sharing<br>- Tell clients to double-check important decisions | Gabriel | Managed |
| AI hallucinates code suggestions | Cursor, Copilot | MEDIUM | MEDIUM | - Review all AI-generated code<br>- Test before deploying<br>- Use version control to track changes | Gabriel | Managed |
| API costs spiral out of control | OpenAI API, Anthropic API | MEDIUM | LOW | - Monitor usage dashboard weekly<br>- Set budget alerts<br>- Test in sandbox before production<br>- Pass costs to client projects | Gabriel | Monitored |
| Zapier workflow breaks client system | Zapier, Make.com | MEDIUM | LOW | - Test workflows in staging first<br>- Build error handling<br>- Monitor first 24 hours after launch | Gabriel | Managed |
| Google Cloud AI loses client documents | Google Cloud AI | HIGH | LOW | - Use secure storage with encryption<br>- Backup documents separately<br>- Test retention policies | Gabriel | Managed |
| Client unhappy with AI quality | All tools | MEDIUM | MEDIUM | - Set expectations upfront<br>- Provide human oversight<br>- Offer to adjust based on feedback<br>- Always have manual alternative | Gabriel | Managed |
| AI bias in client recommendations | ChatGPT, Claude | MEDIUM | LOW | - Review outputs for fairness<br>- Consider different perspectives<br>- Test with diverse scenarios | Gabriel | Managed |
| Third-party AI tool has data breach | All SaaS tools | HIGH | LOW | - Choose reputable providers<br>- Use strong passwords<br>- Enable 2FA on all accounts<br>- Don't store secrets in AI tools | Gabriel | Mitigated |
| Can't access AI tools due to outage | ChatGPT, Claude | LOW | MEDIUM | - Have multiple tool options<br>- Keep manual processes as backup<br>- Document current work regularly | Gabriel | Acceptable |
```

**Next steps**: 
- Save this to `08_Resources/AI_Risk_Register.md`
- Add to it when you think of new risks
- Update "Status" when you change controls

**Why this matters**: Shows you're thinking systematically about problems, not just reacting. Auditors love this.

---

### 5. Create AI Impact Assessment Template ⭐ NEW CONCEPT
**Time**: 30 minutes  
**Why**: This is THE unique thing ISO 42001 adds. Risk assessment asks "what could go wrong?" Impact assessment asks "how could this harm people?"

**Step-by-step**:
1. Think about each client AI project
2. Ask: "Could this hurt anyone if it goes wrong?"
3. Write down who might be affected and how

**Template** (use this for Chad's project):
```
AI IMPACT ASSESSMENT

Project: [Project Name]
Client: [Client Name]
Date: [Today's Date]

What does this AI system do?
Example: "Tournament registration chatbot that helps players sign up, answers questions, and recommends divisions based on skill level."

Who could be affected if this goes wrong?
- Players signing up for tournaments
- Tournament organizers
- Me (as service provider)
- Payment processing partners

What's the worst that could happen to people?

Player perspective:
- Wrong division assignment → unfair matches, frustration
- Registration lost → can't play, lost money
- Bad recommendations → poor experience

Organizer perspective:
- System fails during signup rush → chaos, refunds needed
- Inaccurate skill assessments → unbalanced brackets

Financial perspective:
- Payment processing error → double charges or failed charges
- Revenue loss → event can't run

What are we doing to prevent these harms?

Before launch:
[ ] Test registration flow end-to-end
[ ] Verify payment processing
[ ] Test skill assessment logic
[ ] Have backup manual process ready
[ ] Get client sign-off on AI recommendations

After launch:
[ ] Monitor for complaints in first 24 hours
[ ] Have "escalate to human" option
[ ] Track error rates
[ ] Review skill assessment accuracy
[ ] Regular check-ins with client

Mitigations:
- Manual override available for all critical steps
- Immediate human support during events
- Clear refund policy if system fails
- Transparency about AI limitations
```

**Save this**: `08_Resources/AI_Impact_Assessment_Template.md`

**Next steps**:
- Use this template for Chad's project
- Fill it out BEFORE building
- Show Chad: "Here's how we're protecting players"

**Why this matters**: This is what makes ISO 42001 different. Shows you think about people, not just technology.

---

### 6. Document Your Typical AI Project Flow
**Time**: 20 minutes  
**Why**: Auditors want to see you have a repeatable process. Write down what you actually do.

**Think about Chad's tournament project** and write the steps:

```
TYPICAL AI PROJECT FLOW - Kaizen

Discovery Phase (Week 1):
[ ] Meet with client (Chad at Sherwood Brewhouse)
[ ] Understand current process (manual registration, Word forms)
[ ] Identify pain points (time consuming, error prone)
[ ] Identify AI opportunities (chatbot, automated processing)
[ ] Define scope (Rabbit vs Deer package)
[ ] Get sign-off on approach

Planning Phase (Week 1-2):
[ ] Choose AI tools (likely: Zapier or Make.com + chatbot)
[ ] Design solution architecture (how pieces connect)
[ ] Plan data handling (player info, payments, schedules)
[ ] Set client expectations (AI does this, human does that)
[ ] Get approval on design before building

Implementation Phase (Week 2-4):
[ ] Build AI solution (chatbot, automation workflows)
[ ] Test in sandbox/staging environment
[ ] Integrate with client systems (tournament software, payment)
[ ] Build error handling (what if payment fails? What if chatbot gets confused?)
[ ] Document everything (how it works, how to fix it)
[ ] Train client (or just give them simple instructions)

Launch Phase (Week 4):
[ ] Final testing (run through full flow as fake player)
[ ] Review with client
[ ] Get sign-off
[ ] Go live
[ ] Monitor closely first 24-48 hours
[ ] Fix anything that breaks

Support Phase (Ongoing):
[ ] Address issues quickly (response within 2 hours)
[ ] Collect feedback (what worked? what didn't?)
[ ] Make improvements (refine AI responses, adjust flows)
[ ] Regular check-ins (weekly, then monthly)
```

**Note**: This is your Rabbit/Deer project flow. For Elephants, more steps.

**Save this**: `08_Resources/AI_Project_Process.md`

**Why this matters**: Shows you're not winging it. You have a process. Even if it's simple.

---

### 7. Set Up Your ISO 42001 Folder Structure
**Time**: 5 minutes  
**Format**: File folders

Create these folders:
```
08_Resources/
  ISO_42001_Documentation/
    Policies/
    Procedures/
    Records/
    Evidence/
    Audits/
```

**Done**: Now you have somewhere to save everything

---

### 8. Create Incident Log Template
**Time**: 10 minutes  
**Why**: Things go wrong. Document what happened and how you fixed it.

You probably don't have incidents yet, but set up the log now:

```
INCIDENT LOG

| Date | Description | Impact | Root Cause | Fix Applied | Prevention | Status |
|------|-------------|--------|------------|-------------|------------|--------|
| [Example] 2025-10-30 | ChatGPT gave outdated info to client | LOW | I didn't verify fact | Called client, corrected info | Always verify important facts | Closed |
```

**Real examples you might log later**:
- "ChatGPT suggested something that didn't work"
- "Client system had glitch when AI triggered it"
- "AI misunderstood client requirement"
- "Payment processing failed on first test"

**Save this**: `08_Resources/ISO_42001_Documentation/Records/Incident_Log.md`

**Why this matters**: Shows you learn from mistakes. Auditors want to see you improve.

---

### 9. Read Your Key Docs (Optional)
**Time**: 30-60 minutes  
**Why**: Get context without overwhelming yourself

Don't read everything. Just skim:
- `ISO_42001_KEY_TAKEAWAYS.md` (15 min) - Just the bullet points at top
- `ISO_42001_CHECKLIST.md` (15 min) - Just the phases
- `ISO_42001_SIMPLE_WORKFLOWS.md` (15 min) - Just the workflows

Skip the rest for now. You're getting the standard soon anyway.

**Done**: You have context. You can work from your checklists now.

---

## What This Gives You

**By doing these 9 things** (2-3 hours total), you'll have:
- ✅ AI Systems Inventory (all 8 tools documented)
- ✅ AI Policy (1-page commitment)
- ✅ Scope defined (what you're managing)
- ✅ Risk Register (10 risks identified with controls)
- ✅ AI Impact Assessment template (unique to ISO 42001!)
- ✅ Project process documented (your Rabbit/Deer flow)
- ✅ Folder structure ready (organized)
- ✅ Incident log ready (when things go wrong)
- ✅ Context from key docs (you've skimmed what matters)

**Translation**: When you DO buy the standard, you're already 30-40% done. You're not starting from zero.

---

## The Beautiful Part

**You can do ALL of this without the standard.**

The standard tells you:
- "Write a policy" ✅ (you did this)
- "Document your AI tools" ✅ (you did this)
- "Assess risks" ✅ (you did this)
- "Document your processes" ✅ (you did this)

You're just following common sense AI governance.

**The standard just validates** you're doing it right.

---

## Chad's Tournament Project: Your First ISO-Aware Project

**Tomorrow's meeting**: Perfect timing to practice what you just set up.

**Before the meeting** (15 min prep):
1. Fill out Impact Assessment template (see section 5 above)
   - What AI might you use? (Chatbot? Zapier automation?)
   - Who's affected? (Players, Chad, you)
   - What could go wrong? (Wrong division, lost registration, payment issues)
   - How do we prevent it? (Testing, human review, backup plan)

2. Check your Risk Register
   - Which risks apply to tournament registration?
   - What controls are you using?

**During the meeting**:
- Be transparent: "I'm following responsible AI practices to protect your players"
- Mention: "We test everything before launch, have backup plans"
- Show professionalism: This isn't just coding, it's risk-managed delivery

**After the meeting** (15 min wrap-up):
1. Document what you discussed
2. Note what AI tools you're using
3. Update your AI Systems List if adding new tools
4. Fill out Impact Assessment fully
5. Add project to your evidence folder

**Save to**: `08_Resources/ISO_42001_Documentation/Evidence/Chad_Tournament_Project.md`

**Why this matters**: This is your first documented AI project following ISO 42001 principles. Real evidence of your system in action.

---

## Timeline

### Today (30-45 min):
1. AI Systems Inventory (copy the list, customize for your tools)
2. AI Policy draft (copy the template)
3. Scope definition (one paragraph)
4. Impact Assessment template (read through, understand it)

### This Week (1-2 hours):
5. Risk Register (copy the 10 risks, add any of your own)
6. Project process doc (think about Chad's flow)
7. Folder structure (create the folders)

### Optional (30 min):
8. Incident log template (set up for later)
9. Skim key docs (just get context)

**Total**: ~2-3 hours of work  
**Result**: 30-40% of implementation foundation done  
**Cost**: $0 (all free)  
**Value**: You're not scrambling when you buy the standard

---

## After Chad Pays

**Then you buy**:
- ISO 42001 Standard ($280)
- Review what you built
- Adjust based on standard
- Fill any gaps
- Keep going

**You're not waiting**: You're building.

---

## Bottom Line

**BEFORE buying standard**: 
- Build your foundation
- Document what you have
- Create your basic frameworks
- Start using good practices

**AFTER buying standard**:
- Validate what you built
- Fill specific gaps
- Get certified

**Don't wait**: Start today with what's free.

