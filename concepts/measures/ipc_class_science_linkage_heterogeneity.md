# IPC-class science linkage heterogeneity

## Summary

IPC-class science linkage heterogeneity measures how science-citing patent shares and science-linked citation premiums vary across technology classes.

## Canonical Form

- Unit of analysis: patent, IPC class, technology-class cohort, science-citing patent group, or forward-citation group.
- Typical representation: SKAI, NSKAI, FCDI, patent count, or average forward citations by IPC class.
- Measurement target: sectoral variation in how closely technological invention draws on scientific publications.
- Empirical signature: some IPC classes have high science-citing shares or high science-linked citation premiums, while others do not.

## Uses in Science of Science

- Adds a technology-class layer to [scientific knowledge application index](scientific_knowledge_application_index.md), [normalized scientific knowledge application index](normalized_scientific_knowledge_application_index.md), and [forward citation differentiation index](forward_citation_differentiation_index.md).
- Tests whether science-to-technology transfer is field-specific rather than uniform across a patent corpus.
- Helps interpret country and organization contrasts by separating institutional effects from technology-class composition.
- Provides a sectoral validation layer for [patent-paper links](../datasets/patent_paper_links.md).
- Supports [dominant-class science-linkage dilution](../validations/dominant_class_science_linkage_dilution.md) when aggregate measures are driven by a high-volume class.

## Operationalization

- Assign patents to IPC classes at a stated hierarchy level, such as two-digit IPC sections or subclasses.
- Select classes using a transparent count threshold or coverage rule.
- Compute patent counts, SKAI, FCDI, and average forward citations for each retained class.
- Report whether patents with multiple IPC codes are counted fractionally, wholly in each class, or assigned to a primary class.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) summarizes nano medical device patents by two-digit IPC class.
- Their top ten IPC classes cover 98% of the analyzed patents.
- The dominant A61 medical/veterinary/hygiene class has SKAI 20.7% and FCDI 2.90, while organic chemistry class C07 has the highest SKAI at 46.2%.
- The highest FCDI appears in C09, where science-citing patents average 16.7 forward citations and non-science-citing patents average 1.9, giving FCDI 8.81.
- G01 and B32 have FCDI below 1, showing that science-citing patents can receive fewer forward citations than non-science-citing patents in some classes.
- The dominance of A61 relative to smaller high-SKAI classes motivates [dominant-class science-linkage dilution](../validations/dominant_class_science_linkage_dilution.md).

## Caveats

- Two-digit IPC classes are broad and can hide finer subfield heterogeneity.
- Multiple IPC codes per patent can make class counts overlap unless the counting rule is explicit.
- Small classes can produce unstable FCDI ratios when non-science-citing or science-citing denominators are small.
- IPC classes are technology categories, not direct scientific fields.

## Links

- [scientific knowledge application index](scientific_knowledge_application_index.md)
- [normalized scientific knowledge application index](normalized_scientific_knowledge_application_index.md)
- [forward citation differentiation index](forward_citation_differentiation_index.md)
- [field classifications](field_classifications.md)
- [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md)
- [science application impact nonmonotonicity](../validations/science_application_impact_nonmonotonicity.md)
- [dominant-class science-linkage dilution](../validations/dominant_class_science_linkage_dilution.md)
- [technological complexity science-linkage gradient](../mechanisms/technological_complexity_science_linkage_gradient.md)
- [national science-technology linkage gap](../mechanisms/national_science_technology_linkage_gap.md)
- [patent-paper links](../datasets/patent_paper_links.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology—The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `ipc_class_science_linkage_heterogeneity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: IPC science-transfer heterogeneity; technology-class SKAI; IPC-class FCDI; sectoral patent-science linkage
