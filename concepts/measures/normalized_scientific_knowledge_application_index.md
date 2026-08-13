# Normalized scientific knowledge application index

## Summary

Normalized scientific knowledge application index (NSKAI) compares a country or group-specific science-citing patent share with the global average for the same technology and year.

## Canonical Form

- Unit of analysis: country-year, region-year, organization-year, field-year, or patent-class-year.
- Typical representation: ratio where 1 is the global or reference-set average.
- Measurement target: relative science base of technological development.
- Empirical signature: values above 1 indicate stronger scientific-publication use than the benchmark, while values below 1 indicate weaker use.

## Uses in Science of Science

- Makes [scientific knowledge application index](scientific_knowledge_application_index.md) comparable across countries when the worldwide baseline changes over time.
- Supports diagnosis of [national science-technology linkage gap](../mechanisms/national_science_technology_linkage_gap.md).
- Separates absolute growth in science-citing patents from relative standing against a common benchmark.
- Can be paired with [field classifications](field_classifications.md), IPC classes, or technology categories for science-policy comparisons.
- Needs [normalized linkage baseline drift](../validations/normalized_linkage_baseline_drift.md) when the benchmark is changing over time.

## Operationalization

- Compute SKAI for each country or comparison group in each year.
- Compute the global or reference-set SKAI for the same technology scope and year.
- Compute `NSKAI_i,t = SKAI_i,t / SKAI_global,t`.
- Interpret values relative to 1, while reporting the patent corpus, technology scope, and countries included in the denominator.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) normalizes country SKAI by the global average for nano medical device patents.
- Their interpretation is explicit: an NSKAI value above 1 means a country's nano medical device patents have a higher science base than the worldwide average, and a value below 1 means a weaker science-technology linkage.
- They report that the United States has the highest NSKAI among the six countries studied, while China remains far below the global average over 2003-2012.
- The U.S. value declines over time mainly because other countries increase their science application more rapidly, illustrating why normalization is useful.
- This trend is split out as [normalized linkage baseline drift](../validations/normalized_linkage_baseline_drift.md).

## Caveats

- NSKAI inherits all measurement limits of patent citation data and scientific-reference filtering.
- The benchmark matters: a global average over one technology field is not equivalent to a global average over all patents.
- A below-average NSKAI may reflect industrial specialization, patenting strategy, patent-office behavior, or data coverage, not only weak knowledge transfer.
- Latecomer-country interpretations should be tested across multiple technologies before generalizing.

## Links

- [scientific knowledge application index](scientific_knowledge_application_index.md)
- [national science-technology linkage gap](../mechanisms/national_science_technology_linkage_gap.md)
- [normalized linkage baseline drift](../validations/normalized_linkage_baseline_drift.md)
- [technological complexity science-linkage gradient](../mechanisms/technological_complexity_science_linkage_gradient.md)
- [science-based patent grouping](../methods/science_based_patent_grouping.md)
- [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md)
- [IPC-class science linkage heterogeneity](ipc_class_science_linkage_heterogeneity.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [science-technology distance](science_technology_distance.md)
- [field classifications](field_classifications.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology—The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `normalized_scientific_knowledge_application_index`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: NSKAI; normalized science-base patent share; country-normalized SKAI; relative scientific knowledge application
