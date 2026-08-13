# National science-technology linkage gap

## Summary

National science-technology linkage gap is the observed difference across countries in how strongly patents draw on scientific publications within the same technology domain.

## Canonical Form

- Unit of analysis: country, country-year, inventor-country patent cohort, technology class, or national innovation system.
- Typical representation: country SKAI, [normalized scientific knowledge application index](../measures/normalized_scientific_knowledge_application_index.md), or science-citing patent share by country.
- Mechanism or conclusion: national systems can differ in how effectively scientific knowledge is connected to industrial technology.
- Empirical signature: countries with similar technology domains show different science-citing patent shares and different patent impact ratios.

## Uses in Science of Science

- Connects patent-level science reliance to national innovation-system comparisons.
- Supports policy analyses of latecomer versus advanced-country science-to-technology pathways.
- Provides a country-level context for [scientific knowledge application index](../measures/scientific_knowledge_application_index.md) and [forward citation differentiation index](../measures/forward_citation_differentiation_index.md).
- Links science-of-science evidence to innovation policy, technology upgrading, and regional specialization.
- Can be interpreted through [technological complexity science-linkage gradient](technological_complexity_science_linkage_gradient.md) when country differences may reflect technology complexity or class mix.

## Operationalization

- Assign patents to countries using inventor addresses, assignee addresses, or another declared country rule.
- Compute SKAI and NSKAI by country and year within a harmonized patent corpus.
- Compare absolute patent counts, science-citing shares, and forward-citation outcomes.
- Stratify by technology class when country-level field composition differs.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) compares nano medical device patents from the United States, Germany, the United Kingdom, Japan, France, and China.
- They report that the United States has the strongest science-technology linkage in this field, with 41.0% of U.S. patents citing scientific publications over 2003-2012.
- China has the lowest SKAI in their country table, 12.1%, and the authors interpret Chinese nano medical device patents as more industry-oriented than science-based in this period.
- They argue that China's low linkage may reflect a different latecomer-country path and lower average technological complexity in the selected field.
- That complexity interpretation is split out as [technological complexity science-linkage gradient](technological_complexity_science_linkage_gradient.md).
- Their normalized index shows the U.S. above the global average and China below it, while several advanced countries move closer to or above the average.

## Caveats

- Country assignment by inventor address is not the same as ownership, market location, or knowledge source.
- A low country SKAI can reflect technology mix, patent-office behavior, domestic industry structure, or missing scientific-reference data.
- Wang and Li test one technology domain and one emerging country, so the mechanism should be generalized only after multi-field evidence.
- National comparisons need comparable patent-family, citation-window, and scientific-reference filtering rules.

## Links

- [normalized scientific knowledge application index](../measures/normalized_scientific_knowledge_application_index.md)
- [scientific knowledge application index](../measures/scientific_knowledge_application_index.md)
- [forward citation differentiation index](../measures/forward_citation_differentiation_index.md)
- [science application impact nonmonotonicity](../validations/science_application_impact_nonmonotonicity.md)
- [technological complexity science-linkage gradient](technological_complexity_science_linkage_gradient.md)
- [normalized linkage baseline drift](../validations/normalized_linkage_baseline_drift.md)
- [ratio-metric absolute-impact context](../validations/ratio_metric_absolute_impact_context.md)
- [IPC-class science linkage heterogeneity](../measures/ipc_class_science_linkage_heterogeneity.md)
- [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [geographic collaboration distance](../measures/geographic_collaboration_distance.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology—The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `national_science_technology_linkage_gap`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: country science-technology gap; national SKAI gap; latecomer science-technology linkage; country patent science-base difference
