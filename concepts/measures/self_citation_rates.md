# Self-citation rates

## Summary

Self-citation rates measure the share of citations or references that connect an author, paper, journal, institution, country, or other unit to its own prior work.

## Canonical Form

- Unit of analysis: author, paper, journal, institution, country, field, or evaluation portfolio.
- Typical representation: self-citing share, self-cited share, self-citation-excluded citation count, or ratio of self-citations to all citations.
- Measurement target: how much observed citation impact is internally generated rather than externally received.
- Empirical signature: nonzero baseline self-citation in normal cumulative work, with extreme tails that can distort impact indicators.

## Uses in Science of Science

- Adds a correction and audit layer to [citation impact indicators](citation_impact_indicators.md), [h-index](h_index.md), [journal impact factor](journal_impact_factor.md), and author-level rankings.
- Has a journal-level specialization in [journal self-citation rate](journal_self_citation_rate.md).
- Links citation behavior to [cumulative advantage](../mechanisms/cumulative_advantage.md), because self-citations can help early visibility compound into later external citations.
- Supports [responsible metrics](responsible_metrics.md) by separating raw citation counts from counts with self-citations removed.
- Provides input to [citation metric gaming](../validations/citation_metric_gaming.md) when self-citation rates are unusually high or strategically timed.
- Can also be used as a familiarity or own-work-reliance proxy in [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md) studies.
- Uses [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md) when multi-author citation pairs need finer attribution.
- Uses [authorship-normalized self-citation rate](authorship_normalized_self_citation_rate.md) when the denominator should be author-paper opportunities rather than papers or references.
- Uses [self-citation-excluded author metrics](self_citation_excluded_author_metrics.md) when the output is a corrected author indicator rather than only a self-citation share.
- Can depend on [full-name self-citation matching](../methods/full_name_self_citation_matching.md) in historical corpora without persistent author identifiers.
- Has distributional and uncertainty companions in [zero self-citation authorship share](zero_self_citation_authorship_share.md) and [self-citation bootstrap ratio intervals](../methods/self_citation_bootstrap_ratio_intervals.md).
- Has a classifier-feature counterpart in [self-citation status role feature](../methods/self_citation_status_role_feature.md) when own-work overlap is used to predict citation function.
- Requires team-size denominator checks such as [self-citation team-size denominator effect](../validations/self_citation_team_size_denominator_effect.md) when multi-author papers are expanded into author-pair edges.
- Has an h-index-specific robustness check in [h-index self-citation sensitivity](../validations/h_index_self_citation_sensitivity.md).
- Has a team-impact robustness check in [self-citation-adjusted team impact](../validations/self_citation_adjusted_team_impact.md).
- Can contribute to [self-citation cumulative amplification](../mechanisms/self_citation_cumulative_amplification.md) when early own-work citations help later external citations accumulate.
- Must distinguish [outgoing self-citation metric boundary](../validations/outgoing_self_citation_metric_boundary.md) from incoming self-origin citation shares when the denominator changes.

## Operationalization

- Define the self unit explicitly: author self-citation, coauthor self-citation, paper self-citation, journal self-citation, institutional self-citation, or country self-citation.
- For author-level analyses, choose an explicit [author self-citation definition](../methods/author_self_citation_definition_choice.md) before exclusion or reporting.
- For author-level analyses, match citing and cited paper authors and compute counts with and without any overlapping author.
- For journal analyses, compare citations from a journal to its own recent papers against citations to older own papers or against all citations.
- For journal-impact audits, compute [impact factor biased self-citation practices](impact_factor_biased_self_citation_practices.md) rather than only the overall journal self-citation share.
- Report both raw and self-citation-excluded indicators, especially when using citation metrics for evaluation.

## Evidence and Validations

- Verified full-text evidence from King et al. (2017) analyzes 1.5 million JSTOR papers from 1779 to 2011 and reports that nearly 10% of references are self-citations by a paper's authors.
- King et al. connect self-citation to cumulative advantage: self-citations can increase direct citation counts and may also encourage later citations from other scholars.
- King et al. also show why self-citation rates should be decomposed: most authorships have zero self-citations, rates vary by field and team size, and group ratios need bootstrap uncertainty intervals.
- The King et al. full text now supports split validation pages for outgoing-versus-incoming metric boundaries, JSTOR blackout-window artifacts, opportunity-set confounding, and subfield ratio heterogeneity.
- Verified full-text evidence from Ioannidis et al. (2019) builds a database of 100,000 top scientists with citation indicators shown with and without self-citations, plus ratios of citations to citing papers.
- Ioannidis et al. report that among the top 100,000 authors for 1996-2017, median self-citation percentage is 12.7%, with a very wide range from 0.0% to 93.8%.
- The same paper warns that very high self-citation proportions can make citation metrics spurious and that simply removing self-citations may not be enough when citation farms or other anomalies are present.
- Verified full-text evidence from Chorus and Waltman (2016) adds a journal-level operationalization through impact-factor-biased self-citation timing.
- Verified full-text evidence from Waltman (2016) adds a definition-choice layer: author self-citations are commonly any shared-author citations, but focal-author, coauthor, and fractional author-set-overlap definitions also appear in the literature.
- Verified full-text evidence from Hirsch (2005) adds an h-index-specific correction: self-citations matter for h only when they keep papers just above the h boundary.
- Verified full-text evidence from Wuchty et al. (2007) removes author-overlap self-citations to test whether larger teams' self-citation opportunities explain the relative team-impact advantage.
- Verified full-text evidence from Park et al. (2023) uses increasing self-citation in papers and patents as a proxy for reliance on familiar prior work.
- Park et al. report that using more of one's own work is negatively associated with disruption in models of papers and patents.

## Caveats

- Self-citation is not automatically inappropriate; it can mark cumulative programs, method reuse, data reuse, or legitimate continuity.
- Self-citation definitions vary substantially, especially for multi-author papers and large collaborations.
- Removing self-citations can change rankings but does not remove all strategic citation behavior.
- Extreme self-citation should trigger audit, not automatic misconduct inference.

## Links

- [citation impact indicators](citation_impact_indicators.md)
- [responsible metrics](responsible_metrics.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)
- [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md)
- [authorship-normalized self-citation rate](authorship_normalized_self_citation_rate.md)
- [self-citation-excluded author metrics](self_citation_excluded_author_metrics.md)
- [full-name self-citation matching](../methods/full_name_self_citation_matching.md)
- [zero self-citation authorship share](zero_self_citation_authorship_share.md)
- [self-citation bootstrap ratio intervals](../methods/self_citation_bootstrap_ratio_intervals.md)
- [outgoing self-citation metric boundary](../validations/outgoing_self_citation_metric_boundary.md)
- [self-citation opportunity-set confound](../validations/self_citation_opportunity_set_confound.md)
- [subfield self-citation ratio heterogeneity](subfield_self_citation_ratio_heterogeneity.md)
- [JSTOR blackout-window time-series artifact](../validations/jstor_blackout_window_time_series_artifact.md)
- [self-citation status role feature](../methods/self_citation_status_role_feature.md)
- [self-citation team-size denominator effect](../validations/self_citation_team_size_denominator_effect.md)
- [author self-citation definition choice](../methods/author_self_citation_definition_choice.md)
- [JSTOR network dataset](../datasets/jstor_network_dataset.md)
- [journal self-citation rate](journal_self_citation_rate.md)
- [impact factor biased self-citation practices](impact_factor_biased_self_citation_practices.md)
- [citation source concentration ratio](citation_source_concentration_ratio.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [cited work diversity](cited_work_diversity.md)
- [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md)
- [self-citation cumulative amplification](../mechanisms/self_citation_cumulative_amplification.md)
- [cumulative advantage](../mechanisms/cumulative_advantage.md)
- [attention inequality](../mechanisms/attention_inequality.md)
- [h-index](h_index.md)
- [h-index self-citation sensitivity](../validations/h_index_self_citation_sensitivity.md)
- [self-citation-adjusted team impact](../validations/self_citation_adjusted_team_impact.md)
- [journal impact factor](journal_impact_factor.md)

## References

- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]
- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; WoS: unknown]
- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]
- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `self_citation_rates`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: King et al. (2017) (2017)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1177/2378023117738903`
- OpenAlex ID: `W2466144917`
- Dimensions ID: `pub.1099634910`
- SciSciNet ID: `W3104836124`
- Aliases: self-citation share; self-cited rate; self-citing rate; citation self-reference; self-citation correction
