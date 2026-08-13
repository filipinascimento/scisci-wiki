# Impact factor biased self-citation practices

## Summary

Impact factor biased self-citation practices measure whether a journal's self-citations disproportionately target papers in the impact-factor citation window.

## Canonical Form

- Unit of analysis: journal, journal year, journal self-citation, impact-factor window, field, or publisher portfolio.
- Typical representation: IFBSCP ratio, threshold exceedance share, field-specific trend, or journal audit flag.
- Measurement target: timing bias in journal self-citations that may inflate the journal impact factor.
- Empirical signature: a ratio above one indicates that journal self-citations are more concentrated in impact-factor-window papers than in earlier own papers.

## Uses in Science of Science

- Refines [self-citation rates](self_citation_rates.md) for the journal-impact-factor setting.
- Provides a concrete measure for [citation metric gaming](../validations/citation_metric_gaming.md).
- Adds an audit layer to [journal impact factor](journal_impact_factor.md) and [responsible metrics](responsible_metrics.md).
- Uses [Web of Science](../datasets/web_of_science.md) journal citation data as the typical source layer.
- Splits into actor and trend motifs for [author preemptive journal self-citation](../mechanisms/author_preemptive_journal_self_citation.md), [editorial impact-factor pressure channel](../mechanisms/editorial_impact_factor_pressure_channel.md), and [post-2004 IFBSCP acceleration](post_2004_ifbscp_acceleration.md).
- Has operational split-outs for [IFBSCP nonoverlapping baseline window](../methods/ifbscp_nonoverlapping_baseline_window.md), [IFBSCP first-diagnosis workflow](../methods/ifbscp_first_diagnosis_workflow.md), and [journal self-citation count reliability filter](../validations/journal_self_citation_count_reliability_filter.md).
- Adds sensitivity and validation motifs for [five-year IFBSCP variant](../methods/five_year_ifbscp_variant.md), [pre-disclosure coercion metric alignment](../validations/pre_disclosure_coercion_metric_alignment.md), [field-percentile IFBSCP threshold](../validations/field_percentile_ifbscp_threshold.md), [coercive-citation screen false-negative check](../validations/coercive_citation_screen_false_negative_check.md), [journal-panel census inference caveat](../validations/journal_panel_census_inference_caveat.md), and [impact-factor incentive-scope filter](../methods/impact_factor_incentive_scope_filter.md).

## Operationalization

- For each journal-year, count journal self-citations to papers published in the impact-factor years, usually the prior two years.
- Compare that share with journal self-citations to papers published in a preceding baseline window.
- Compute the IFBSCP ratio and track values above thresholds such as 1.5, 2, or 3.
- Interpret high ratios as screening signals that require qualitative follow-up, not as direct proof of misconduct.
- Apply minimum-count filters and report the baseline-window parameter before interpreting journal-year ratios.
- Choose scope, window, threshold, and census assumptions before interpreting IFBSCP screens as evidence of coercive or strategic citation behavior.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) defines IFBSCP as the ratio comparing a journal's self-citation share to papers in impact-factor years with its self-citation share to papers in preceding years.
- The paper states that IFBSCP equals 1 when the self-citation share to impact-factor-window papers equals the share to preceding-year papers.
- Chorus and Waltman report that high IFBSCP values became more prevalent after about 2004, including increases in the shares of journals above thresholds 1.5, 2, and 3.
- The paper compares IFBSCP with survey-reported coercive citation cases and treats the measure as a first-diagnosis tool rather than proof of wrongdoing.
- A later Chorus/Waltman pass separates the five-year variant, pre-disclosure validation timing, field-percentile thresholding, false-negative checks, journal-panel census caveat, and impact-factor incentive-scope filter from the broader IFBSCP measure.

## Caveats

- High IFBSCP can have legitimate causes, including fast-moving topics, journal topical concentration, special issues, and recent-paper relevance.
- Thresholds are policy choices and should be field- and journal-context sensitive.
- The measure identifies timing bias in journal self-citation, not all citation manipulation.
- Coercive-citation screening can miss survey-positive journals if the behavior is diffuse, below field thresholds, or not concentrated in the impact-factor window.

## Links

- [journal impact factor](journal_impact_factor.md)
- [self-citation rates](self_citation_rates.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)
- [WoS IFBSCP journal-year panel](../datasets/wos_ifbscp_journal_year_panel.md)
- [IFBSCP nonoverlapping baseline window](../methods/ifbscp_nonoverlapping_baseline_window.md)
- [IFBSCP first-diagnosis workflow](../methods/ifbscp_first_diagnosis_workflow.md)
- [journal self-citation count reliability filter](../validations/journal_self_citation_count_reliability_filter.md)
- [IFBSCP threshold-exceedance share](ifbscp_threshold_exceedance_share.md)
- [coercive-citation survey linkage](../validations/coercive_citation_survey_linkage.md)
- [IFBSCP window sensitivity](../validations/ifbscp_window_sensitivity.md)
- [legitimate recent self-citation mechanisms](../mechanisms/legitimate_recent_self_citation_mechanisms.md)
- [domain-specific IFBSCP gradient](../validations/domain_specific_ifbscp_gradient.md)
- [post-2004 IFBSCP acceleration](post_2004_ifbscp_acceleration.md)
- [author preemptive journal self-citation](../mechanisms/author_preemptive_journal_self_citation.md)
- [editorial impact-factor pressure channel](../mechanisms/editorial_impact_factor_pressure_channel.md)
- [responsible metrics](responsible_metrics.md)
- [citation impact indicators](citation_impact_indicators.md)
- [Web of Science](../datasets/web_of_science.md)
- [five-year IFBSCP variant](../methods/five_year_ifbscp_variant.md)
- [pre-disclosure coercion metric alignment](../validations/pre_disclosure_coercion_metric_alignment.md)
- [field-percentile IFBSCP threshold](../validations/field_percentile_ifbscp_threshold.md)
- [coercive-citation screen false-negative check](../validations/coercive_citation_screen_false_negative_check.md)
- [journal-panel census inference caveat](../validations/journal_panel_census_inference_caveat.md)
- [impact-factor incentive-scope filter](../methods/impact_factor_incentive_scope_filter.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; WoS: unknown]

## Metadata

- Concept ID: `impact_factor_biased_self_citation_practices`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Chorus and Waltman (2016) (2016)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: IFBSCP; impact factor biased self-citation; impact-factor-window self-citation; journal self-citation timing bias
