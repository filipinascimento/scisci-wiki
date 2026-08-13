# Pre-disclosure coercion metric alignment

## Summary

Pre-disclosure coercion metric alignment matches bibliometric coercion-screening measures to a time point before public disclosure of survey evidence, reducing behavioral reactivity in validation.

## Canonical Form

- Unit of analysis: journal, survey disclosure date, metric year, coercive-citation report, or validation sample.
- Typical representation: pre-disclosure metric snapshot aligned to a later public survey or report.
- Validation target: avoid validating a metric after targets have had time to change behavior because of public exposure.
- Empirical signature: the metric year precedes the publication or disclosure event that could affect journal self-citation behavior.

## Uses in Science of Science

- Refines [coercive-citation survey linkage](coercive_citation_survey_linkage.md).
- Adds timing hygiene to [IFBSCP first-diagnosis workflow](../methods/ifbscp_first_diagnosis_workflow.md).
- Connects [coercive observations per published paper](../measures/coercive_observations_per_published_paper.md) to event-timing design.
- Provides a metric-validation example related to [prediction feedback loops](prediction_feedback_loops.md).

## Operationalization

- Identify when the survey, public report, blacklist, or public accusation became visible.
- Choose a metric year before that disclosure.
- Ensure the journal was indexed and the metric could be computed for that year.
- Compare pre-disclosure metric values against survey-reported coercion while noting possible preexisting awareness.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) selects 64 survey-identified journals that had more than one coercive observation, were indexed in Web of Science, and had computable 2011 IFBSCP values.
- The paper focuses on 2011 because journals may have altered practices after the survey evidence was published in 2012.
- This design aligns metric validation to a pre-disclosure period and reduces post-exposure behavioral reactivity.

## Caveats

- Survey responses can still refer to behavior over a broader period than the metric year.
- Journals may react to informal reputation signals before public survey publication.
- Pre-disclosure alignment improves validation timing but does not prove the metric detects coercion causally.

## Links

- [coercive-citation survey linkage](coercive_citation_survey_linkage.md)
- [IFBSCP first-diagnosis workflow](../methods/ifbscp_first_diagnosis_workflow.md)
- [coercive observations per published paper](../measures/coercive_observations_per_published_paper.md)
- [prediction feedback loops](prediction_feedback_loops.md)
- [citation metric gaming](citation_metric_gaming.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; SciSciNet: W2516374594; WoS: unknown]

## Metadata

- Concept ID: `pre_disclosure_coercion_metric_alignment`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Chorus and Waltman (2016) (2016)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: pre-survey coercion alignment; pre-disclosure IFBSCP validation; coercion metric timing alignment; reactivity-aware coercion validation
