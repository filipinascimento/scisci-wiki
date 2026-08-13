# IFBSCP first-diagnosis workflow

## Summary

IFBSCP first-diagnosis workflow uses impact-factor-window self-citation anomalies to prioritize journals for qualitative follow-up rather than to label journals as misconduct cases.

## Canonical Form

- Unit of analysis: journal, journal-year, IFBSCP score, threshold flag, audit candidate, or follow-up case study.
- Typical representation: ranked anomaly list, threshold-filtered journal subset, audit queue, or mixed-methods screening design.
- Method target: turn a noisy bibliometric anomaly into a defensible investigation workflow.
- Empirical signature: high-IFBSCP journals are selected for closer inspection, while conclusions require additional evidence such as surveys, editorial correspondence, article-type review, or case studies.

## Uses in Science of Science

- Operationalizes the caution attached to [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md).
- Links [citation metric gaming](../validations/citation_metric_gaming.md) to practical audit design.
- Provides a workflow around [coercive-citation survey linkage](../validations/coercive_citation_survey_linkage.md), where survey evidence validates but does not perfectly identify coercion.
- Separates anomaly detection from accusation, supporting [responsible metrics](../measures/responsible_metrics.md) and [indicator false precision](../validations/indicator_false_precision.md).

## Operationalization

- Compute IFBSCP for eligible journal-years and choose field-aware thresholds.
- Generate a short list of journals with high or rising IFBSCP values.
- Check legitimate recent self-citation mechanisms, field context, special issues, article types, and publication volume.
- Seek corroborating evidence such as author surveys, editorial policy, correspondence, reviewer requests, or reference-list version histories.
- Report the workflow as screening and follow-up, not as automatic misconduct classification.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) repeatedly states that high IFBSCP does not prove unethical behavior.
- The paper argues that IFBSCP can quickly sift through a large candidate set and identify a subset more likely to include potential culprits.
- Chorus and Waltman recommend further scrutiny before drawing journal-specific conclusions.
- The paper's comparison with survey-identified coercive journals provides support for the first-diagnosis interpretation while also showing false negatives.
- The discussion recommends using IFBSCP to zoom in on suspiciously high journals before collecting case-study evidence for or against actual malpractice.

## Caveats

- A first-diagnosis workflow still depends on threshold choices, field definitions, and database coverage.
- False positives and false negatives are expected because citation traces are indirect behavioral evidence.
- Qualitative follow-up can be difficult when editorial correspondence or submission histories are unavailable.

## Links

- [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)
- [coercive-citation survey linkage](../validations/coercive_citation_survey_linkage.md)
- [legitimate recent self-citation mechanisms](../mechanisms/legitimate_recent_self_citation_mechanisms.md)
- [IFBSCP threshold-exceedance share](../measures/ifbscp_threshold_exceedance_share.md)
- [domain-specific IFBSCP gradient](../validations/domain_specific_ifbscp_gradient.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [indicator false precision](../validations/indicator_false_precision.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; SciSciNet: W2516374594; WoS: unknown]

## Metadata

- Concept ID: `ifbscp_first_diagnosis_workflow`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Chorus and Waltman (2016) (2016)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: IFBSCP screening workflow; self-citation anomaly audit queue; citation-gaming first diagnosis; journal self-citation audit workflow
