# NC-AI-001 Excel Import Instructions

## Quick Import Guide

### Method 1: Direct CSV Import

1. Open Microsoft Excel or Google Sheets
2. File → Import → Choose `NC_AI_001_Risk_Register_Template.csv`
3. Select delimiter: **Comma**
4. Import data starting at row 2 (first row is headers)

### Method 2: Copy-Paste

1. Open `NC_AI_001_Risk_Register_Template.csv` in any text editor
2. Select all and copy (Cmd/Ctrl + A, then Cmd/Ctrl + C)
3. Open new Excel/Sheets document
4. Paste (Cmd/Ctrl + V)
5. Data → Text to Columns → Delimited → Comma

---

## Column Descriptions

After import, you'll have these columns:

| Column | Description | Fill In |
|--------|-------------|---------|
| Risk_ID | Unique identifier (pre-filled) | Keep as-is |
| Risk_Category | One of 8 categories | Keep as-is |
| Risk_Description | Brief risk description | Keep as-is |
| Example_Scenarios | Example situations | Keep as-is |
| Potential_Impacts | Possible consequences | Keep as-is |
| Impact_Scale | 1-5 rating | **You fill** |
| Likelihood_Scale | 1-5 rating | **You fill** |
| Risk_Score | Impact × Likelihood | **Auto-calculate** |
| Risk_Level | Based on score | **Auto-calculate** |
| Existing_Controls | Current mitigations | **You fill** |
| Planned_Controls | New mitigations | **You fill** |
| Control_Owner | Responsible person | **You fill** |
| Treatment_Target_Date | Deadline | **You fill** |
| Status | Not Started/In Progress/Complete | **You track** |
| Notes | Additional information | **You fill** |

---

## Excel Formula for Auto-Calculations

### Risk Score Formula

Add this formula to column H (Risk_Score):
```excel
=IF(F2="","",F2*G2)
```

### Risk Level Formula

Add this formula to column I (Risk_Level):
```excel
=IF(H2="","",IF(H2>=20,"Extreme",IF(H2>=15,"High",IF(H2>=10,"Medium",IF(H2>=5,"Low","Minimal")))))
```

### Color Coding (Optional)

Apply conditional formatting:

| Risk Level | Color | Formula |
|-----------|-------|---------|
| Extreme | Red | `=$I2="Extreme"` |
| High | Orange | `=$I2="High"` |
| Medium | Yellow | `=$I2="Medium"` |
| Low | Green | `=$I2="Low"` |
| Minimal | Light Gray | `=$I2="Minimal"` |

---

## Recommended Excel Structure

### Sheet 1: Risk Register
- All risk entries
- Auto-calculated scores and levels
- Full assessment data

### Sheet 2: Risk Matrix
Create a 5×5 heat map showing:
- Impact (1-5) on X axis
- Likelihood (1-5) on Y axis
- Risk counts in each cell

### Sheet 3: Action Items
- Filtered view of risks requiring action
- Sorted by priority
- Track implementation progress

### Sheet 4: Summary Dashboard
- Total risks by level
- Counts by category
- Completion percentages
- Top 10 priorities

---

## Import Troubleshooting

### Common Issues

**Problem**: Data all in one column
- **Solution**: Use Text to Columns wizard, select "Comma" delimiter

**Problem**: Special characters showing as weird symbols
- **Solution**: Save CSV as UTF-8 encoding, re-import

**Problem**: Numbers showing as text
- **Solution**: Select column → Data → Convert to Number

**Problem**: Formula not calculating
- **Solution**: Set calculation mode to Automatic (Excel Options → Formulas → Automatic)

---

## Need Help?

Refer to the main README.md for detailed instructions or email governance@kaizenstrategic.ai

