# Coercive-citation survey linkage

## Summary

Coercive-citation survey linkage validates a citation-gaming screen by comparing journal-level anomaly scores with independent survey reports of coercive citation practices.

## Canonical Form

- Unit of analysis: journal, survey response, coercive-observation count, journal-year IFBSCP, or normalized coercion rate.
- Typical representation: anomaly-score comparison against survey-reported coercion labels or counts.
- Validation target: test whether a bibliometric screen identifies journals independently perceived as coercive.
- Empirical signature: journals named in surveys have higher anomaly scores than comparable journals in the same field.

## Uses in Science of Science

- Validates [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md) as a first-diagnosis screen.
- Provides evidence for [citation metric gaming](citation_metric_gaming.md) without treating a metric as proof of misconduct.
- Connects quantitative journal-citation traces with survey evidence about editorial behavior and author experience.
- Uses [coercive observations per published paper](../measures/coercive_observations_per_published_paper.md) to normalize survey reports before comparing journals.

## Operationalization

- Obtain an independent survey or qualitative list of journals reported as coercive.
- Normalize coercive-observation counts by journal size when comparing journals.
- Compute IFBSCP or another anomaly score for the same journals and a matched field-year baseline.
- Report false negatives and weak correlations as part of the validation, because misconduct screens are expected to be noisy.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) links IFBSCP to Wilhite and Fong's survey of coercive citation in Economics, Sociology, Psychology, and Business.
- Chorus and Waltman select 64 survey-identified journals with more than one coercive observation, Web of Science indexing, and computable 2011 IFBSCP.
- They normalize survey reports as coercive observations per published paper (COPPP).
- The 64 journals have mean IFBSCP 1.93 compared with 1.54 for the 581 Social Sciences journals in 2011; 22 of the 64 are at or above the Social Sciences 90th percentile threshold of 2.23, but two of the top ten COPPP journals fall below the median Social Sciences IFBSCP.

## Caveats

- Survey reports can be incomplete, field-specific, and affected by respondent awareness.
- A low IFBSCP does not rule out coercive citation, and a high IFBSCP does not prove it.
- Journal practices may change after public survey evidence, so survey year and metric year should be aligned carefully.

## Links

- [citation metric gaming](citation_metric_gaming.md)
- [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md)
- [coercive observations per published paper](../measures/coercive_observations_per_published_paper.md)
- [IFBSCP first-diagnosis workflow](../methods/ifbscp_first_diagnosis_workflow.md)
- [IFBSCP threshold-exceedance share](../measures/ifbscp_threshold_exceedance_share.md)
- [legitimate recent self-citation mechanisms](../mechanisms/legitimate_recent_self_citation_mechanisms.md)
- [journal self-citation rate](../measures/journal_self_citation_rate.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [peer review gatekeeping](../mechanisms/peer_review_gatekeeping.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; WoS: unknown]
- Wilhite, A. W., & Fong, E. A. (2012). Coercive citation in academic publishing. *Science*, 335(6068), 542-543. https://doi.org/10.1126/science.1212540 [OpenAlex: W2068889931; Dimensions: pub.1062448124; WoS: unknown]

## Metadata

- Concept ID: `coercive_citation_survey_linkage`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Chorus and Waltman (2016) (2016)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: coercive citation validation; survey-linked citation gaming screen; COPPP IFBSCP validation; coercive self-citation survey comparison
