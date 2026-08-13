# Normalized linkage baseline drift

## Summary

Normalized linkage baseline drift is the validation caveat that a normalized science-to-technology linkage score can decline because the benchmark rises, not because the focal group weakens in absolute terms.

## Canonical Form

- Unit of analysis: country-year, organization-year, technology-year, normalized linkage index, or benchmark cohort.
- Typical representation: absolute SKAI line plotted beside normalized SKAI, benchmark trend, or decomposition table.
- Validation target: separate focal change from reference-set change in normalized patent science-linkage indicators.
- Empirical signature: a focal country or group increases its science-citing patent share while its normalized score falls because other groups increase faster.

## Uses in Science of Science

- Guards interpretation of [normalized scientific knowledge application index](../measures/normalized_scientific_knowledge_application_index.md).
- Connects relative-linkage results to [scientific knowledge application index](../measures/scientific_knowledge_application_index.md) and absolute patent counts.
- Helps diagnose [national science-technology linkage gap](../mechanisms/national_science_technology_linkage_gap.md) without mistaking benchmark convergence for focal decline.
- Provides a general robustness check for normalized indicators.

## Operationalization

- Report the focal group's absolute SKAI, the benchmark SKAI, and the normalized ratio in the same table or figure.
- Decompose normalized change into focal numerator change and benchmark denominator change.
- State which countries, organizations, patent classes, and years define the benchmark.
- Test whether qualitative claims survive alternative benchmark sets or technology scopes.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) defines NSKAI as a country science-linkage score normalized by the global average in nano medical device patents.
- The paper reports that the United States remains above the worldwide average but its normalized score declines over time.
- Wang and Li interpret this decline as largely reflecting increasing science application in other countries rather than an absolute weakening of U.S. science linkage.
- The example shows why normalized linkage indicators need their benchmark trend reported alongside the focal trend.

## Caveats

- Baseline drift can be informative if the research question is relative standing rather than absolute capability.
- Alternative benchmarks can change the magnitude and direction of normalized trends.
- A stable normalized score can still hide absolute growth or decline if the focal group and benchmark move together.
- Normalization does not remove patent-citation, field-composition, or database-coverage biases.

## Links

- [normalized scientific knowledge application index](../measures/normalized_scientific_knowledge_application_index.md)
- [scientific knowledge application index](../measures/scientific_knowledge_application_index.md)
- [national science-technology linkage gap](../mechanisms/national_science_technology_linkage_gap.md)
- [technological complexity science-linkage gradient](../mechanisms/technological_complexity_science_linkage_gradient.md)
- [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md)
- [patent-age forward-citation control](patent_age_forward_citation_control.md)
- [ratio-metric absolute-impact context](ratio_metric_absolute_impact_context.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology-The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `normalized_linkage_baseline_drift`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: NSKAI baseline drift; normalized SKAI denominator drift; linkage benchmark drift; relative science-linkage drift
