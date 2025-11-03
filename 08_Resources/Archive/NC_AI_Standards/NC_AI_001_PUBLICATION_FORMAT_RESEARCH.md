# NC-AI-001 Publication Format Research

## Research Summary

Conducted deep research into ISO standard document formats, NIST framework publications, and free AI governance template best practices.

---

## Key Findings

### ISO Standard Publication Format

**Official ISO Standards** are published in:
1. **PDF** - Primary format for official standards
2. **HTML** - Web-accessible version
3. **ePub** - E-reader compatible
4. **Word (.docx)** - Drafting templates during development
5. **XML** - Internal workflow (2025+), generates other formats

**NOT typically published as**:
- Markdown (.md) - Used for version control, not official publication
- CSV - Data export only, not the standard itself
- Excel - Supporting data only, not the standard document

### ISO Document Formatting Requirements

**Structure**:
- Front Matter: Cover page, copyright, foreword, introduction
- Body: Clauses and subclauses
- Back Matter: Annexes, bibliography, indexes

**Typography**:
- Font: Cambria (standard ISO font)
- Numbering: Arabic numerals with full stops (1, 1.1, 1.1.1)
- Avoid: Italics, bold, underline for emphasis (accessibility)
- Layout: Continuous text, no intentional page breaks between clauses

**Metadata**:
- ISO 7200: Title blocks with document info
- ISO 690: Bibliographic references
- ISO 2145: Numbering conventions

---

### Free AI Governance Template Formats (Research Target)

**What formats do free resources actually use?**

Based on ISO 42001 market research:

1. **GSDCouncil ISO 42001 Toolkit**
   - PDF for documentation
   - Excel for checklists and tools
   - Word for templates

2. **FairNow Compliance Playbook**
   - PDF for the playbook/guide
   - Excel for assessment tools
   - Word for editable templates

3. **DQS Readiness Checklist**
   - PDF for the checklist
   - Excel for self-assessment scoring

4. **ISO-Docs Resource Center**
   - PDF for documentation
   - Excel templates for practical use
   - Word templates for customization

**Pattern**: All provide **PDF + Excel + Word** as the standard triad for templates.

---

### Industry Best Practice

**For professional publication of governance templates**:

**Primary Deliverables**:
1. **PDF** - Official, printable, format-locked version
2. **Word (.docx)** - Editable template for user customization
3. **Excel (.xlsx)** - Data capture and calculations

**Secondary/Supporting**:
4. **HTML** - Web-embedded version
5. **CSV** - Data export only
6. **Markdown** - Version control and development

**Industry Reality Check**:
- **NO major organization publishes governance templates in Markdown as primary format**
- Markdown is internal/development tool
- Markdown excellent for GitHub docs, version control
- But NOT considered "publication ready" for official standards

---

## Format Comparison

| Format | Official ISO | Free Templates | Our Use | Recommendation |
|--------|-------------|----------------|---------|----------------|
| **PDF** | ✅ Primary | ✅ Primary | ⏳ Needed | **Create this** |
| **Word** | ✅ Templates | ✅ Templates | ⏳ Needed | **Create this** |
| **Excel** | N/A | ✅ Common | ✅ Have CSV | **Convert CSV→Excel** |
| **Markdown** | ❌ Internal only | ❌ Never published | ✅ Have | Keep for dev |
| **CSV** | ❌ Data only | ❌ Data only | ✅ Have | Support format |
| **HTML** | ✅ Web version | Sometimes | ⏳ Needed | **Consider** |

---

## Strategic Recommendations

### For Professional Publication

**DO publish in**:
1. **PDF** - As the official, authoritative version
   - Professional formatting
   - ISO-style presentation
   - Non-editable reference document
   - Print-ready

2. **Word (.docx)** - As the editable template
   - Users can customize
   - Professional formatting preserved
   - Industry standard for templates
   - Familiar to all users

3. **Excel (.xlsx)** - As the data capture tool
   - Replace CSV with proper Excel format
   - Formulas for risk calculations
   - Conditional formatting
   - Professional spreadsheets

**DO NOT publish primarily in**:
- ❌ Markdown alone (too technical, not professional)
- ❌ CSV alone (too basic, not visually appealing)
- ❌ Just one format (limits accessibility)

### For Development and Version Control

**Keep Markdown for**:
- ✅ Internal development
- ✅ GitHub documentation
- ✅ Version control
- ✅ Multi-format generation

**This is smart**: Write once in Markdown, generate all formats from it.

---

## Recommended File Structure

### Publication Package (What Users Get)

```
NC-AI-001-Package/
├── NC-AI-001-AI-Risk-Register-Template.pdf          (Official PDF)
├── NC-AI-001-AI-Risk-Register-Template.docx         (Editable Word)
├── NC-AI-001-AI-Risk-Register-Template.xlsx         (Excel workbook)
├── NC-AI-001-README.pdf                             (Documentation)
└── README.txt                                       (Package instructions)
```

### Development Files (Our Working Files)

```
08_Resources/
├── NC-AI-001_AI_Risk_Register_Template.md           (Source markdown)
├── NC-AI-001_Risk_Register_Template.csv             (Source data)
├── NC-AI-001_STRATEGIC_DECISIONS.md                 (Development notes)
├── NC-AI-001_README.md                              (Documentation source)
└── NC-AI-001_PUBLICATION_FORMAT_RESEARCH.md         (This file)
```

### Generation Workflow

```
Markdown (.md) + CSV (.csv) 
    ↓
Generate via Pandoc/scripts
    ↓
PDF + Word + Excel (properly formatted)
```

---

## ISO-Compliant Formatting Standards

### When Creating PDF/Word Versions

**Apply These Standards**:

1. **Cover Page**
   - Document title: NC-AI-001: AI Risk Register Template
   - Subtitle: Northern Cascadia AI Governance Standard
   - Version: 1.0
   - Publication date: [Date]
   - Publisher: Northern Cascadia Institute of AI Governance
   - License: Public Domain

2. **Typography**
   - Heading font: Calibri or Arial (close to Cambria, more accessible)
   - Body font: 11pt, readable sans-serif
   - Numbering: Follow ISO 2145 (1, 1.1, 1.1.1)
   - Line spacing: 1.15 or 1.5
   - Page margins: 2.5cm all sides

3. **Tables**
   - Clear headers
   - Alternating row colors for readability
   - Professional borders
   - Fit within page margins

4. **Formatting Guidelines**
   - **Avoid**: Heavy use of bold/italics for emphasis
   - **Use**: Clear structure, white space, professional layout
   - **Style**: Reference ISO 42001 official PDF for visual style

---

## Excel Template Requirements

### What Excel Should Include

1. **Risk Register Sheet**
   - Pre-populated 28 risks
   - Formula-based calculations
   - Conditional formatting for risk levels
   - Data validation for scores

2. **Risk Matrix Sheet**
   - Visual 5×5 heat map
   - Impact vs Likelihood
   - Color-coded by risk level

3. **Summary Dashboard Sheet**
   - Risk counts by category
   - Risk counts by level
   - Top 10 priorities
   - Treatment status

4. **Instructions Sheet**
   - How to use the template
   - Risk scoring guide
   - Control implementation steps

### Excel Features Needed

- Auto-calculating formulas
- Data validation (1-5 for impact/likelihood)
- Conditional formatting (colors by risk level)
- Dropdown menus for status tracking
- Protected cells/formulas
- Professional formatting

---

## Action Plan

### Immediate Actions

1. **Create PDF Version**
   - Export markdown to PDF using proper formatting
   - Apply ISO-style formatting
   - Professional page layout
   - Table formatting and styling

2. **Create Word Version**
   - Convert markdown to Word
   - Preserve formatting
   - Add editing instructions
   - Template-style layout

3. **Upgrade CSV to Excel**
   - Convert to proper .xlsx
   - Add formulas for auto-calc
   - Add conditional formatting
   - Add multiple sheets (register, matrix, dashboard)
   - Add instructions sheet

4. **Package Professionally**
   - Create download zip
   - Include all formats
   - Add README with instructions
   - Professional branding

### Keep Markdown For

- ✅ Version control
- ✅ GitHub publication
- ✅ Source for all other formats
- ✅ Development and updates

### Don't Publish Only in Markdown

- ❌ Too technical for end users
- ❌ Doesn't look "official"
- ❌ Not industry standard for templates
- ❌ Limits professionalism

---

## Conclusion

**You were right to question the formatting.**

**Research shows**:
- Official standards: PDF primary
- Free templates: PDF + Word + Excel triad
- Markdown: Development tool, not publication format
- Industry: Expects professional, formatted documents

**Best Practice**:
- Keep Markdown as source/version control
- Generate PDF, Word, Excel from it
- Publish the professional package
- Also offer Markdown on GitHub for tech-savvy users

**This approach**:
- ✅ Professional and publication-ready
- ✅ Industry-standard formats
- ✅ Maximum accessibility
- ✅ Maintainable (write once, generate many)
- ✅ Credible for ISO 42001 alignment

---

**Next Step**: Generate properly formatted PDF, Word, and Excel versions from our markdown source.


