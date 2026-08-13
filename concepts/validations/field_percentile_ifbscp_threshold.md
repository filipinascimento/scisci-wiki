# Field-percentile IFBSCP threshold

## Summary

Field-percentile IFBSCP threshold flags anomalous journal self-citation timing using field-relative percentile cutoffs rather than a single universal IFBSCP value.

## Canonical Form

- Unit of analysis: journal-year, field, IFBSCP value, percentile threshold, or coercive-citation screen.
- Typical representation: journal above a field-specific IFBSCP percentile, such as the 90th percentile.
- Validation target: account for field-level differences in baseline IFBSCP distributions before labeling outliers.
- Empirical signature: a journal is compared with journals in the same domain rather than only with a global threshold.

## Uses in Science of Science

- Refines [IFBSCP threshold-exceedance share](../measures/ifbscp_threshold_exceedance_share.md) with field-relative cutoffs.
- Connects [domain-specific IFBSCP gradient](domain_specific_ifbscp_gradient.md) to anomaly screening.
- Supports [field-specific indicator suites](../methods/field_specific_indicator_suites.md) for journal metrics.
- Adds a responsible-metric thresholding example for [citation metric gaming](citation_metric_gaming.md).

## Operationalization

- Compute IFBSCP values for all eligible journals in a field or domain.
- Estimate the chosen percentile cutoff within that field and year.
- Flag journals above the field-relative cutoff and compare them with survey or case-study evidence.
- Report field size, eligibility filters, and the percentile threshold used.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) compares survey-identified coercive journals with the Social Sciences field distribution.
- The paper notes that 22 of 64 identified journals had IFBSCP at or above 2.23, the 90th percentile threshold for the Social Sciences domain.
- Chorus and Waltman also compare the highest COPPP journals against that Social Sciences percentile cutoff.

## Caveats

- A percentile threshold is relative; a high-field baseline can normalize widespread problematic behavior.
- Field boundaries and journal assignment rules affect the cutoff.
- Percentile flags need case-study or survey follow-up before journal-specific conclusions.

## Links

- [IFBSCP threshold-exceedance share](../measures/ifbscp_threshold_exceedance_share.md)
- [domain-specific IFBSCP gradient](domain_specific_ifbscp_gradient.md)
- [field-specific indicator suites](../methods/field_specific_indicator_suites.md)
- [coercive-citation survey linkage](coercive_citation_survey_linkage.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; SciSciNet: W2516374594; WoS: unknown]

## Metadata

- Concept ID: `field_percentile_ifbscp_threshold`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Chorus and Waltman (2016) (2016)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: field-relative IFBSCP threshold; IFBSCP percentile cutoff; field-normalized journal self-citation screen; domain percentile IFBSCP
