# Coercive-citation screen false-negative check

## Summary

Coercive-citation screen false-negative check tests whether an IFBSCP-based screen misses survey-identified coercive journals, especially high-COPPP journals below field thresholds.

## Canonical Form

- Unit of analysis: journal, coercive-citation survey report, IFBSCP value, COPPP value, or false-negative case.
- Typical representation: cross-tab of survey positives against metric flags and misses.
- Validation target: estimate whether a journal self-citation timing screen misses known coercion cases.
- Empirical signature: some survey-identified journals fall below median or percentile IFBSCP cutoffs.

## Uses in Science of Science

- Adds a miss-rate check to [coercive-citation survey linkage](coercive_citation_survey_linkage.md).
- Qualifies [IFBSCP first-diagnosis workflow](../methods/ifbscp_first_diagnosis_workflow.md) as a screening process rather than a complete detector.
- Links [coercive observations per published paper](../measures/coercive_observations_per_published_paper.md) to metric-validation outcomes.
- Supports [indicator false precision](indicator_false_precision.md) in citation-gaming audits.

## Operationalization

- Build a survey-positive set of journals with normalized coercive observations.
- Compute IFBSCP for the aligned pre-disclosure year.
- Mark which survey positives exceed absolute, field-percentile, or median thresholds.
- Inspect high-COPPP journals that fall below the threshold as false-negative cases.
- Report miss patterns before using the screen for enforcement or journal-specific accusations.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) reports that among the ten journals with the highest COPPP, two had IFBSCP below the median Social Sciences value and would not have been identified by IFBSCP diagnosis.
- The paper reports only a positive correlation of 0.19 between IFBSCP and COPPP in the 64-journal survey-positive population.
- Chorus and Waltman conclude that IFBSCP partly relates to coercive citation practices and is a first-diagnosis tool, not a complete detector.

## Caveats

- Survey data can contain recall, response, and reputation biases.
- Metric false negatives can arise when coercion is not concentrated in the impact-factor window.
- A miss check should not imply that all metric-positive journals are guilty.

## Links

- [coercive-citation survey linkage](coercive_citation_survey_linkage.md)
- [IFBSCP first-diagnosis workflow](../methods/ifbscp_first_diagnosis_workflow.md)
- [coercive observations per published paper](../measures/coercive_observations_per_published_paper.md)
- [indicator false precision](indicator_false_precision.md)
- [citation metric gaming](citation_metric_gaming.md)
- [field-percentile IFBSCP threshold](field_percentile_ifbscp_threshold.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; SciSciNet: W2516374594; WoS: unknown]

## Metadata

- Concept ID: `coercive_citation_screen_false_negative_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Chorus and Waltman (2016) (2016)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: coercive citation false-negative audit; IFBSCP miss check; coercion screen sensitivity check; survey-positive IFBSCP miss
