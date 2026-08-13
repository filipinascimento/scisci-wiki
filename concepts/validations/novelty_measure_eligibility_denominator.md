# Novelty-measure eligibility denominator

## Summary

Novelty-measure eligibility denominator is the validation motif that recombination-novelty estimates depend on which papers have enough source metadata to enter the measurable denominator.

## Canonical Form

- Unit of analysis: paper, cited-reference set, document type, field category, subject-category observation, or novelty-eligible record.
- Typical representation: original-article filter, minimum-reference filter, subject-category filter, or expanded field-observation denominator.
- Validation target: make the eligible universe for novelty measurement explicit before interpreting novelty shares or citation effects.
- Empirical signature: papers without enough structured references or field categories are excluded from the novelty measure.

## Uses in Science of Science

- Adds a denominator caveat to [new journal-pair novelty](../measures/new_journal_pair_novelty.md).
- Documents the eligibility layer for [WoS 2001 novelty article cohort](../datasets/wos_2001_novelty_article_cohort.md).
- Connects [document-type citation filtering](../methods/document_type_citation_filtering.md), [reference set construction](../methods/reference_set_construction.md), and [WoS subject category fractionalization](wos_subject_category_fractionalization.md).
- Helps compare novelty estimates across databases and fields with different reference coverage.

## Operationalization

- Define which document types are eligible for novelty scoring.
- Require enough cited references or component pairs to compute the measure.
- Record whether field/category identifiers are required and how multi-category papers are handled.
- Report excluded-record shares and test whether exclusions differ by field, journal, year, country, or team type.
- Keep the novelty denominator separate from the broader publication denominator.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) restricts the analysis to original articles with at least two Web of Science journal references.
- The paper excludes records without subject categories and expands multi-category papers into multiple observations.
- These filters make novelty measurable but also define the denominator to which results apply.

## Caveats

- Excluding papers with sparse references can bias against fields, document types, or regions with different citation practices.
- Multi-category expansion can overweight multidisciplinary papers unless handled carefully.
- Eligibility filters should be reported alongside novelty prevalence and outcome models.

## Links

- [new journal-pair novelty](../measures/new_journal_pair_novelty.md)
- [WoS 2001 novelty article cohort](../datasets/wos_2001_novelty_article_cohort.md)
- [document-type citation filtering](../methods/document_type_citation_filtering.md)
- [reference set construction](../methods/reference_set_construction.md)
- [WoS subject category fractionalization](wos_subject_category_fractionalization.md)
- [journal-pair entity proxy boundary](journal_pair_entity_proxy_boundary.md)
- [historical newness lookback window](historical_newness_lookback_window.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `novelty_measure_eligibility_denominator`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: novelty denominator eligibility; recombination-novelty eligible universe; novelty measurement denominator; reference-pair eligibility filter
