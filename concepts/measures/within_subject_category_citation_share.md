# Within-subject-category citation share

## Summary

Within-subject-category citation share is the fraction of cited subject-category instances in a paper set that point back to the same category as the focal publication set.

## Canonical Form

- Unit of analysis: paper, field-year cell, journal subject category, cited-reference assignment, or citation category instance.
- Typical representation: percentage of cited subject-category instances that remain within the focal subject category.
- Measurement target: disciplinary self-reliance or dependence on same-category knowledge sources.
- Empirical signature: higher values indicate that references are concentrated in the focal category; lower values indicate more outward citation.

## Uses in Science of Science

- Provides a simple concentration-oriented companion to [category variety](category_variety.md), [distributional balance](distributional_balance.md), and [Rao-Stirling diversity](rao_stirling_diversity.md).
- Helps distinguish broad reference-list growth from genuine outward knowledge integration in [interdisciplinarity](../mechanisms/interdisciplinarity.md) studies.
- Supports [interdisciplinarity benchmark field panels](../datasets/interdisciplinarity_benchmark_field_panel.md) by showing how field norms differ before computing composite indicators.
- Gives a transparent field-level diagnostic for [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md) and classification sensitivity.

## Operationalization

- Assign each focal article to a source subject category or field.
- Assign cited references to subject categories using journal-category mappings or paper-level field assignments.
- Count cited-category instances where the cited category equals the focal category, then divide by all cited-category instances in the focal paper set.
- Report the category system, multi-category handling, document-type filters, and year.

## Evidence and Validations

- Verified full-text evidence from Porter and Rafols (2009) computes the percentage of citations within the focal Web of Science subject category for six fields.
- Porter and Rafols show that within-category citation share is not simply a function of subject-category size: Mathematics remains highly within-category, while Biotechnology and Research and Experimental Medicine draw relatively little from their own categories.
- The same paper reports field-specific longitudinal changes from 1975 to 2005, using the measure as one facet of interdisciplinarity.
- Porter and Rafols treat the measure as a partial balance/concentration indicator rather than a complete interdisciplinarity score.

## Caveats

- Same-category citation can reflect disciplinary coherence, field taxonomy artifacts, or journal assignment practices.
- Multi-category journals can inflate or dilute within-category shares depending on counting rules.
- Low within-category share is not automatically high interdisciplinarity unless the cited categories are also sufficiently balanced and distant.

## Links

- [interdisciplinarity](../mechanisms/interdisciplinarity.md)
- [interdisciplinarity benchmark field panel](../datasets/interdisciplinarity_benchmark_field_panel.md)
- [category variety](category_variety.md)
- [distributional balance](distributional_balance.md)
- [category disparity](category_disparity.md)
- [Rao-Stirling diversity](rao_stirling_diversity.md)
- [field classifications](field_classifications.md)
- [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md)

## References

- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]

## Metadata

- Concept ID: `within_subject_category_citation_share`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Porter and Rafols (2009) (2009)
- Latest seen paper: Porter and Rafols (2009) (2009)
- Primary reference DOI: `10.1007/s11192-008-2197-2`
- OpenAlex ID: `W2087238585`
- Dimensions ID: `pub.1024224648`
- SciSciNet ID: `W2087238585`
- Aliases: within-SC citation share; within-field citation percentage; same-category citation share; disciplinary self-citation share
