# Journal-panel census inference caveat

## Summary

Journal-panel census inference caveat records that when a journal panel is treated as the full eligible population, interpretation should emphasize coverage rules and descriptive differences rather than sampling significance tests.

## Canonical Form

- Unit of analysis: journal-year panel, field comparison, coverage rule, eligibility filter, or descriptive trend.
- Typical representation: census-design caveat, no-significance-test note, coverage-denominator statement, or field panel inventory.
- Validation target: avoid applying sample-inference language to an observed eligible population while keeping coverage and inclusion rules visible.
- Empirical signature: differences across domains or years are described through observed eligible cases, with no sampling p-values.

## Uses in Science of Science

- Qualifies [WoS IFBSCP journal-year panel](../datasets/wos_ifbscp_journal_year_panel.md).
- Adds an inference caveat to [domain-specific IFBSCP gradient](domain_specific_ifbscp_gradient.md).
- Connects [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) and [WoS longitudinal coverage drift](wos_longitudinal_coverage_drift.md) to journal-panel analysis.
- Pairs with [journal self-citation count reliability filter](journal_self_citation_count_reliability_filter.md).

## Operationalization

- Define the database, years, fields, document types, and minimum-count filters that form the eligible panel.
- Treat included journal-years as the observed population under those rules.
- Avoid p-values for differences across years or fields when no sample is being drawn.
- Focus uncertainty discussion on coverage drift, eligibility filters, missing journals, and measurement error.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) says their field comparisons use all eligible journals rather than a sample.
- The paper therefore performs no tests of statistical significance for domain and year differences.
- The same section documents the number of eligible journals by year and field after applying the self-citation count reliability filter.

## Caveats

- Treating a panel as a census does not remove measurement error or database coverage bias.
- Eligibility filters can create a constructed population that differs from all scholarly journals.
- Descriptive census inference should still report uncertainty from linkage, classification, and longitudinal coverage changes.

## Links

- [WoS IFBSCP journal-year panel](../datasets/wos_ifbscp_journal_year_panel.md)
- [domain-specific IFBSCP gradient](domain_specific_ifbscp_gradient.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [WoS longitudinal coverage drift](wos_longitudinal_coverage_drift.md)
- [journal self-citation count reliability filter](journal_self_citation_count_reliability_filter.md)
- [impact factor incentive-scope filter](../methods/impact_factor_incentive_scope_filter.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; SciSciNet: W2516374594; WoS: unknown]

## Metadata

- Concept ID: `journal_panel_census_inference_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Chorus and Waltman (2016) (2016)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: journal census inference; full-panel significance caveat; eligible journal population caveat; descriptive journal-panel inference
