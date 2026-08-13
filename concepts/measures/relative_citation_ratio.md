# Relative Citation Ratio

## Summary

The Relative Citation Ratio is an article-level metric that normalizes citation rates using a co-citation-defined field and NIH-funded paper benchmark.

## Canonical Form

- Unit of analysis: paper, especially biomedical papers.
- Typical representation: scalar relative influence score.
- Mechanism or measurement target: field-normalized article influence.
- Empirical signature: citation rate compared to a dynamically defined co-citation field.

## Uses in Science of Science

- Important example of a field-normalized metric using a paper-specific reference set.
- Useful for evaluating how normalization choices encode field boundaries.
- Connects citation impact indicators with co-citation representations.

- A residual Hutchins pass adds [co-citation journal-rate substrate](../methods/co_citation_journal_rate_substrate.md), [co-cited article deduplication rule](../methods/co_cited_article_deduplication_rule.md), [synchronous JCR publication-year rule](../methods/synchronous_jcr_publication_year_rule.md), [RCR denominator aggregation sensitivity](../validations/rcr_denominator_aggregation_sensitivity.md), [PubMed-indexed RCR eligibility boundary](../datasets/pubmed_indexed_rcr_eligibility_boundary.md), [RCR citation-snapshot exclusion boundary](../validations/rcr_citation_snapshot_exclusion_boundary.md), [NIH grant-publication linkage cleaning](../methods/nih_grant_publication_linkage_cleaning.md), [RCR zero log-transform floor](../methods/rcr_zero_log_transform_floor.md), [RCR threshold interpretation bands](rcr_threshold_interpretation_bands.md), and [RCR translational-outcome boundary](../consequences/rcr_translational_outcome_boundary.md).
## Operationalization

- Inputs: article citations over time, co-citation network, benchmark set.
- Measures: article citation rate, field citation rate, expected citation rate, RCR.
- Common model forms: dynamic co-citation field normalization.
- For responsible deployment, publish components through [metric accessibility and component disclosure](../methods/metric_accessibility_and_component_disclosure.md), audit [proprietary field-taxonomy opacity](../validations/proprietary_field_taxonomy_opacity.md), and pair RCR with a broader [funding portfolio outcome suite](../methods/funding_portfolio_outcome_suite.md) where funding impact is the target.

## Evidence and Validations

- Hutchins et al. introduced RCR; later papers critique assumptions and algorithmic choices.
- Verified full-text evidence from Hutchins et al. (2016) defines the RCR workflow around article citation rates, co-citation-derived fields, field citation rates, and a benchmark normalization step.
- The workflow now links to split-out primitives for [article citation rate](article_citation_rate.md), [field citation rate](field_citation_rate.md), [expected citation rate](expected_citation_rate.md), [co-citation field normalization](../methods/co_citation_field_normalization.md), and [RCR expert validation](../validations/rcr_expert_validation.md).
- A further Hutchins split makes the infrastructure and checks explicit: [iCite RCR tool](../datasets/icite_rcr_tool.md), [NIH R01 benchmark corpus](../datasets/nih_r01_benchmark_corpus.md), [RCR benchmark calibration](../methods/rcr_benchmark_calibration.md), [RCR ranking invariance](../validations/rcr_ranking_invariance.md), and [low-denominator metric inflation check](../validations/low_denominator_metric_inflation_check.md).
- Hutchins et al. also motivate [co-citation field stabilization check](../validations/co_citation_field_stabilization_check.md), which treats early RCR values as provisional until the co-citation field has enough citations, and [RCR denominator gaming resistance](../validations/rcr_denominator_gaming_resistance.md), which evaluates reference-list manipulation scenarios.
- The full text makes RCR a useful bridge concept between [co citation](../representations/co_citation.md), [field normalized citation impact](field_normalized_citation_impact.md), and responsible evaluation of article-level metrics.
- RCR is a worked example of [reference set construction](../methods/reference_set_construction.md): the comparison field is induced dynamically from co-cited papers rather than assigned only by journal category.
- Additional Hutchins split-outs capture [citation-network field variance check](../validations/citation_network_field_variance_check.md), [Weighted Relative Citation Ratio](weighted_relative_citation_ratio.md), [RCR interdisciplinary field-drift check](../validations/rcr_interdisciplinary_field_drift_check.md), [RCR reviewer reliability ceiling](../validations/rcr_reviewer_reliability_ceiling.md), and [RCR venue-dispersion check](../validations/rcr_venue_dispersion_check.md).
- A further Hutchins pass separates metric accessibility and component disclosure, proprietary field-taxonomy opacity, [citation-influence quality boundary](../validations/citation_influence_quality_boundary.md), and funding portfolio outcome suites as reusable metric-governance motifs.

## Caveats

- Original benchmark and design are domain-specific.
- RCR can be opaque without careful reconstruction of the co-citation field and citation window.
- Portfolio and venue-level uses require separate size-dependence, field-drift, expert-reliability, and journal-dispersion checks.

## Links

- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [article citation rate](article_citation_rate.md)
- [field citation rate](field_citation_rate.md)
- [expected citation rate](expected_citation_rate.md)
- [co-citation field normalization](../methods/co_citation_field_normalization.md)
- [co-citation network field definition](../representations/co_citation_network_field_definition.md)
- [iCite RCR tool](../datasets/icite_rcr_tool.md)
- [metric accessibility and component disclosure](../methods/metric_accessibility_and_component_disclosure.md)
- [NIH R01 benchmark corpus](../datasets/nih_r01_benchmark_corpus.md)
- [RCR benchmark calibration](../methods/rcr_benchmark_calibration.md)
- [RCR expert validation](../validations/rcr_expert_validation.md)
- [RCR ranking invariance](../validations/rcr_ranking_invariance.md)
- [low-denominator metric inflation check](../validations/low_denominator_metric_inflation_check.md)
- [co-citation field stabilization check](../validations/co_citation_field_stabilization_check.md)
- [RCR denominator gaming resistance](../validations/rcr_denominator_gaming_resistance.md)
- [co citation](../representations/co_citation.md)
- [reference set construction](../methods/reference_set_construction.md)
- [citation window selection](../methods/citation_window_selection.md)
- [responsible metrics](responsible_metrics.md)
- [web of science](../datasets/web_of_science.md)
- [citation-network field variance check](../validations/citation_network_field_variance_check.md)
- [Weighted Relative Citation Ratio](weighted_relative_citation_ratio.md)
- [RCR interdisciplinary field-drift check](../validations/rcr_interdisciplinary_field_drift_check.md)
- [RCR reviewer reliability ceiling](../validations/rcr_reviewer_reliability_ceiling.md)
- [RCR venue-dispersion check](../validations/rcr_venue_dispersion_check.md)
- [proprietary field-taxonomy opacity](../validations/proprietary_field_taxonomy_opacity.md)
- [citation-influence quality boundary](../validations/citation_influence_quality_boundary.md)
- [funding portfolio outcome suite](../methods/funding_portfolio_outcome_suite.md)

- [RCR denominator aggregation sensitivity](../validations/rcr_denominator_aggregation_sensitivity.md)
- [PubMed-indexed RCR eligibility boundary](../datasets/pubmed_indexed_rcr_eligibility_boundary.md)
- [RCR translational-outcome boundary](../consequences/rcr_translational_outcome_boundary.md)
## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative citation ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]
- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `relative_citation_ratio`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Aliases: RCR; article-level influence score
