# Journal impact factor

## Summary

Journal impact factor is a journal-level citation indicator that compares [journal citation frequency](journal_citation_frequency.md) to the number of citable articles in a journal, historically used for journal selection, ranking, and evaluation.

## Canonical Form

- Unit of analysis: journal, journal year, field, library collection, or evaluation portfolio.
- Typical representation: citations received in a window divided by articles published in an earlier window.
- Mechanism or measurement target: average citation attention to recent articles in a journal.
- Empirical signature: small or selective journals can outrank larger high-volume journals when normalized by article output.

## Uses in Science of Science

- Serves as a historical anchor for journal-level [citation impact indicators](citation_impact_indicators.md).
- Normalizes raw [journal citation frequency](journal_citation_frequency.md) for source-selection and comparison tasks.
- Has denominator and distribution variants, including [per-cited-item impact factor](per_cited_item_impact_factor.md), [citable-items-cited impact factor](citable_items_cited_impact_factor.md), and [citable-item denominator ambiguity](../validations/citable_item_denominator_ambiguity.md).
- Has a recursive per-article comparator in [Article Influence Score](article_influence_score.md), with ranking sensitivity captured by [Article Influence versus impact-factor divergence](../validations/article_influence_impact_factor_divergence.md).
- Connects citation indexing, library selection, field coverage, and evaluation incentives.
- Supplies the journal-prestige axis for [journal-impact-factor retraction gradient](../validations/journal_impact_factor_retraction_gradient.md).
- Provides a cautionary case for [responsible metrics](responsible_metrics.md), because a journal-level average is often misapplied to articles, people, and institutions.
- Provides a direct researcher-assessment caution through [journal impact factor assessment misuse](../validations/journal_impact_factor_assessment_misuse.md).
- Provides a specific novelty-related caution through [journal impact factor novelty bias](../validations/journal_impact_factor_novelty_bias.md), where high-novelty papers can be placed in lower-than-expected JIF venues.
- Has a citation-timing caveat in [journal impact-time shift](../validations/journal_impact_time_shift.md), where durable journal impact and two-year impact factor can move differently.
- Also anchors [indicator false precision](../validations/indicator_false_precision.md) because tiny decimal differences in journal averages can be overinterpreted in evaluation.
- A further Garfield pass separates the historical [SCI journal citation report listings](../datasets/sci_journal_citation_report_listings.md), [cited-journal SDI profile](../methods/cited_journal_sdi_profile.md), [noncitation journal-use caveat](../validations/noncitation_journal_use_caveat.md), [cited-age guided impact denominator window](../methods/cited_age_guided_impact_denominator_window.md), and [journal coverage budget constraint](../validations/journal_coverage_budget_constraint.md).

## Operationalization

- Define the source journal set and citation window.
- Count citations to articles published by each journal in the selected prior window.
- Normalize by the number of citable items in the denominator window.
- Report whether denominator definitions, cited-item-only denominators, or cited-output-share variants are used.
- Interpret with document type, field, review-journal, journal-size, and coverage caveats.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) frames citation analysis as a tool for journal evaluation and science-policy studies.
- Garfield's full text explicitly distinguishes raw citation frequency from impact factors: large journals tend to be cited more often, while impact factors can reveal smaller journals whose articles are cited more frequently.
- Garfield defines the operational two-year variant by dividing 1969 citations to 1967-1968 articles by the number of articles published in 1967-1968.
- Garfield's footnote also proposes per-cited-item and citable-items-cited variants to distinguish one highly cited article from broad low-level citation across many articles.
- The reprinted full text links the measure to Science Citation Index and Current Contents journal-selection decisions, showing that journal impact factor began as a [citation-based source selection](../methods/citation_based_source_selection.md) and journal-comparison instrument rather than an article-quality measure.
- A later Garfield full-text pass adds evidence for SCI journal report tables, cited-journal alerting profiles, noncitation journal-use caveats, citation-age denominator choices, and the budget constraints behind journal coverage decisions.
- Verified full-text evidence from West et al. (2010) contrasts impact factor with Article Influence Score, showing that per-article journal rankings can shift when recursive citing-journal weights and longer citation windows are used.
- West et al. also provide metric-use caveats for [journal-metric article-level misuse](../validations/journal_metric_article_level_misuse.md), [Eigenfactor citation-window lag sensitivity](../validations/eigenfactor_citation_window_lag_sensitivity.md), and [review-journal Article Influence inflation](../validations/review_journal_article_influence_inflation.md).
- Verified full-text evidence from Wang, Song, and Barabasi (2013) adds a timing caveat: Cell and NEJM both increased fitted long-term impact, but Cell's impact factor fell as its impact time shifted later.
- Verified full-text evidence from Moher et al. (2018) shows that JIF remained a common assessment shortcut in hiring, promotion, funding, and rewards despite DORA-style warnings.
- Moher et al. summarize the distribution-skew problem for assessment: a small share of papers, roughly 10%-20%, can account for 80%-90% of the journal impact factor.

## Caveats

- Journal averages do not measure the quality or future impact of a specific article.
- The measure is sensitive to citation window, [citable-item denominator ambiguity](../validations/citable_item_denominator_ambiguity.md), document type, review-article prevalence, field citation density, and database coverage.
- Raw frequency comparisons should also be checked for [journal-size total-influence effect](../validations/journal_size_total_influence_effect.md) and [short-window journal ranking instability](../validations/short_window_journal_ranking_instability.md).
- Evaluation use can create incentives for gaming, target substitution, and journal prestige substitution.
- [Impact factor biased self-citation practices](impact_factor_biased_self_citation_practices.md) should be checked when journal self-citations are concentrated in the impact-factor window.
- Journal coverage and noncitation readership goals can make citation-only source selection incomplete even when citation data are carefully normalized.

## Links

- [citation impact indicators](citation_impact_indicators.md)
- [journal citation frequency](journal_citation_frequency.md)
- [per-cited-item impact factor](per_cited_item_impact_factor.md)
- [citable-items-cited impact factor](citable_items_cited_impact_factor.md)
- [citable-item denominator ambiguity](../validations/citable_item_denominator_ambiguity.md)
- [journal-size total-influence effect](../validations/journal_size_total_influence_effect.md)
- [short-window journal ranking instability](../validations/short_window_journal_ranking_instability.md)
- [journal self-citation rate](journal_self_citation_rate.md)
- [Article Influence Score](article_influence_score.md)
- [Article Influence versus impact-factor divergence](../validations/article_influence_impact_factor_divergence.md)
- [Eigenfactor citation-window lag sensitivity](../validations/eigenfactor_citation_window_lag_sensitivity.md)
- [review-journal Article Influence inflation](../validations/review_journal_article_influence_inflation.md)
- [journal-metric article-level misuse](../validations/journal_metric_article_level_misuse.md)
- [source normalized impact per paper](source_normalized_impact_per_paper.md)
- [Eigenfactor metrics](eigenfactor_metrics.md)
- [field normalized citation impact](field_normalized_citation_impact.md)
- [responsible metrics](responsible_metrics.md)
- [indicator false precision](../validations/indicator_false_precision.md)
- [indicator systemic effects](../mechanisms/indicator_systemic_effects.md)
- [journal-impact-factor retraction gradient](../validations/journal_impact_factor_retraction_gradient.md)
- [journal impact factor novelty bias](../validations/journal_impact_factor_novelty_bias.md)
- [journal impact-time shift](../validations/journal_impact_time_shift.md)
- [journal impact factor assessment misuse](../validations/journal_impact_factor_assessment_misuse.md)
- [self-citation rates](self_citation_rates.md)
- [impact factor biased self-citation practices](impact_factor_biased_self_citation_practices.md)
- [IFBSCP threshold-exceedance share](ifbscp_threshold_exceedance_share.md)
- [IFBSCP window sensitivity](../validations/ifbscp_window_sensitivity.md)
- [domain-specific IFBSCP gradient](../validations/domain_specific_ifbscp_gradient.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)
- [retraction cause taxonomies](../methods/retraction_cause_taxonomies.md)
- [Web of Science](../datasets/web_of_science.md)
- [SCI journal citation report listings](../datasets/sci_journal_citation_report_listings.md)
- [cited-journal SDI profile](../methods/cited_journal_sdi_profile.md)
- [noncitation journal-use caveat](../validations/noncitation_journal_use_caveat.md)
- [cited-age guided impact denominator window](../methods/cited_age_guided_impact_denominator_window.md)
- [journal coverage budget constraint](../validations/journal_coverage_budget_constraint.md)
- [citation-based source selection](../methods/citation_based_source_selection.md)
- [citation sample representativeness check](../validations/citation_sample_representativeness_check.md)
- [journal citation network mapping](../representations/journal_citation_network_mapping.md)
- [attention inequality](../mechanisms/attention_inequality.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]
- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]
- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]
- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]
- Moher, D., Naudet, F., Cristea, I. A., Miedema, F., Ioannidis, J. P. A., & Goodman, S. N. (2018). Assessing scientists for hiring, promotion, and tenure. *PLOS Biology*, 16(3), e2004089. https://doi.org/10.1371/journal.pbio.2004089 [OpenAlex: W2794944797; Dimensions: pub.1101831393; SciSciNet: W2794944797; WoS: unknown]

## Metadata

- Concept ID: `journal_impact_factor`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Moher et al. (2018) (2018)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Aliases: impact factor; JIF; journal citation impact; journal evaluation; venue impact factor
