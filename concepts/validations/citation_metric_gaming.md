# Citation metric gaming

## Summary

Citation metric gaming refers to strategic citation behavior that inflates bibliometric indicators without corresponding increases in independent intellectual influence.

## Canonical Form

- Unit of analysis: journal, author, paper, editor, citation edge, or evaluation system.
- Typical representation: anomaly score, self-citation ratio, impact-factor-window self-citation bias, citation-farm cluster, or audit flag.
- Mechanism: metric incentives encourage editors, authors, journals, or small groups to create citations that improve measured performance.
- Empirical signature: unusually high or strategically timed self-citations, citation cartels, coercive citation reports, or extreme divergence between raw and corrected indicators.

## Uses in Science of Science

- Provides a validation layer for [responsible metrics](../measures/responsible_metrics.md), [journal impact factor](../measures/journal_impact_factor.md), [h-index](../measures/h_index.md), and [citation impact indicators](../measures/citation_impact_indicators.md).
- Links [self-citation rates](../measures/self_citation_rates.md) to evaluation incentives and possible manipulation.
- Helps separate legitimate cumulative citation from suspicious metric-targeting behavior.
- Motivates audits, sensitivity checks, and field-normalized comparisons before using indicators for rewards.
- For RCR-style article metrics, includes [RCR denominator gaming resistance](rcr_denominator_gaming_resistance.md), where reference-list stacking and self-citation scenarios are treated as explicit stress tests.
- Is one concrete form of [indicator systemic effects](../mechanisms/indicator_systemic_effects.md), where evaluation rules reshape researcher or journal behavior.
- In the journal-impact-factor setting, splits into [author preemptive journal self-citation](../mechanisms/author_preemptive_journal_self_citation.md), [editorial impact-factor pressure channel](../mechanisms/editorial_impact_factor_pressure_channel.md), and [post-2004 IFBSCP acceleration](../measures/post_2004_ifbscp_acceleration.md).
- Uses [IFBSCP first-diagnosis workflow](../methods/ifbscp_first_diagnosis_workflow.md) to keep journal anomaly screens separate from misconduct claims.
- For attribution-aware metrics, includes [credit metric jockeying risk](credit_metric_jockeying_risk.md), where authors may strategically affect inferred credit shares.

## Operationalization

- Compute raw indicators and variants excluding self-citations or suspicious citation clusters.
- For journals, compare journal self-citations to impact-factor-window papers against self-citations to earlier papers.
- Use [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md) for journal-window targeting, [self-citation-excluded author metrics](../measures/self_citation_excluded_author_metrics.md) for author-level correction, and [citation source concentration ratio](../measures/citation_source_concentration_ratio.md) for concentrated author citation sources.
- Flag unusually high author self-citation percentages, journal self-citation timing spikes, citation-farm clusters, or coercive citation reports for qualitative audit.
- Treat metric-gaming flags as screening signals, not direct proof of misconduct.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) defines Impact Factor Biased Self-citation Practices (IFBSCP) as a ratio comparing journal self-citations to impact-factor-window papers with journal self-citations to earlier papers.
- Chorus and Waltman report that a ratio above one suggests a journal's impact factor may be disproportionately affected by self-citations, and they compare the measure with survey data on coercive citation practices.
- Their verified text stresses an important validation caveat: high IFBSCP can have legitimate explanations and should be used as a first-diagnosis tool, not as proof of wrongdoing.
- Verified full-text evidence from Ioannidis et al. (2019) extends the audit idea to authors, warning that extreme self-citations and citation farms can make citation metrics spurious and meaningless.
- This author-level workflow is split out as [citation farm case review](citation_farm_case_review.md), where high self-citation or high citation-source concentration flags trigger manual inspection.
- Ioannidis et al. provide indicators with and without self-citations and recommend case-by-case examination for extreme self-citation shares.
- Verified full-text evidence from King et al. (2017) shows why self-citation auditing matters even when behavior is not malicious: self-citations are a nontrivial component of references and can contribute to cumulative advantage.
- Verified full-text evidence from Hutchins et al. (2016) adds an RCR-specific gaming analysis, arguing that single-author self-citation and denominator manipulation through low-FCR reference stacking face practical limits and may become self-defeating.

## Caveats

- Not all high self-citation or recent journal self-citation is gaming.
- Field age, journal topical concentration, special issues, methods papers, and legitimate research programs can generate high self-citation.
- Gaming detection needs qualitative follow-up, policy context, and transparent thresholds.
- Removing self-citations alone may miss citation cartels, coercive citation, review-article effects, or hidden metric incentives.

## Links

- [self-citation rates](../measures/self_citation_rates.md)
- [self-citation-excluded author metrics](../measures/self_citation_excluded_author_metrics.md)
- [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md)
- [IFBSCP first-diagnosis workflow](../methods/ifbscp_first_diagnosis_workflow.md)
- [IFBSCP threshold-exceedance share](../measures/ifbscp_threshold_exceedance_share.md)
- [coercive-citation survey linkage](coercive_citation_survey_linkage.md)
- [legitimate recent self-citation mechanisms](../mechanisms/legitimate_recent_self_citation_mechanisms.md)
- [domain-specific IFBSCP gradient](domain_specific_ifbscp_gradient.md)
- [author preemptive journal self-citation](../mechanisms/author_preemptive_journal_self_citation.md)
- [editorial impact-factor pressure channel](../mechanisms/editorial_impact_factor_pressure_channel.md)
- [post-2004 IFBSCP acceleration](../measures/post_2004_ifbscp_acceleration.md)
- [citation source concentration ratio](../measures/citation_source_concentration_ratio.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [citation farm case review](citation_farm_case_review.md)
- [credit metric jockeying risk](credit_metric_jockeying_risk.md)
- [RCR denominator gaming resistance](rcr_denominator_gaming_resistance.md)
- [indicator systemic effects](../mechanisms/indicator_systemic_effects.md)
- [indicator lifecycle review](../methods/indicator_lifecycle_review.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [h-index](../measures/h_index.md)
- [attention inequality](../mechanisms/attention_inequality.md)
- [cumulative advantage](../mechanisms/cumulative_advantage.md)
- [peer review gatekeeping](../mechanisms/peer_review_gatekeeping.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; WoS: unknown]
- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]
- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]
- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; SciSciNet: W2953304564; WoS: unknown]

## Metadata

- Concept ID: `citation_metric_gaming`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: citation gaming; metric manipulation; citation farms; coercive citation; impact factor manipulation
