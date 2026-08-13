# h-index

## Summary

The h-index is the largest number h such that a scholar has h publications with at least h citations each, combining productivity and citation impact in one scalar.

## Canonical Form

- Unit of analysis: author, journal, institution, or group, though originally proposed for individuals.
- Typical representation: scalar derived from sorted citation counts.
- Mechanism or measurement target: cumulative productivity plus impact.
- Empirical signature: increases with career length and publication volume.

## Uses in Science of Science

- Widely used in evaluation and career studies.
- Useful as a familiar baseline when discussing career impact, but often criticized in science-of-science work.
- Connects individual-level metrics to cumulative advantage and field normalization.
- Later person-level models use the [individual Q parameter](individual_q_parameter.md) and productivity to predict h-index trajectories with uncertainty.
- Has a discipline-adjusted variant in [field-normalized h-index](field_normalized_h_index.md).
- Splits into operational motifs for the [h-core publication set](../representations/h_core_publication_set.md), [m-quotient](m_quotient.md), [group h-index](group_h_index.md), and [h-index self-citation sensitivity](../validations/h_index_self_citation_sensitivity.md).
- Hirsch's full-text metric design also splits into [h-index total-citation scaling](h_index_total_citation_scaling.md), [h-index citation-curve intersection](../representations/h_index_citation_curve_intersection.md), [h-index tail insensitivity](../validations/h_index_tail_insensitivity.md), [h-index seniority benchmarks](h_index_seniority_benchmarks.md), [recognition-cohort h-index validation](../validations/recognition_cohort_h_index_validation.md), and [h-index field-scale caveat](../validations/h_index_field_scale_caveat.md).
- Hirsch's caveats also motivate [coauthor-normalized h-index](coauthor_normalized_h_index.md), [large-team h-index inflation](../validations/large_team_h_index_inflation.md), and [career-spanning citation-source coverage](../methods/career_spanning_citation_source_coverage.md).
- Hirsch's dynamic discussion is split out as [h-index monotonicity and h-core turnover](../validations/h_index_monotonicity_turnover.md), where a nondecreasing h-index can hide changing h-core membership and post-publication lag.
- Responsible-metrics use of h-index should route individual decisions through [portfolio-based researcher assessment](../methods/portfolio_based_researcher_assessment.md).
- Misuse as a mandatory career screen is split out in [h-index threshold assessment misuse](../validations/h_index_threshold_assessment_misuse.md).
- Hirsch's comparison of alternative scalar indicators is split out as [single-number author-metric tradeoff audit](../validations/single_number_author_metric_tradeoff_audit.md).

- A residual Hirsch pass separates [review-article author-metric distortion](../validations/review_article_author_metric_distortion.md), [h-index mainstream-topic opportunity caveat](../validations/h_index_mainstream_topic_opportunity_caveat.md), [h-index seminal low-h false negative](../validations/h_index_seminal_low_h_false_negative.md), [author-metric threshold randomness](../validations/author_metric_threshold_randomness.md), [h-index calculability affordance](../methods/h_index_calculability_affordance.md), [author-metric resource-competition use case](../mechanisms/author_metric_resource_competition_use_case.md), [h-index extreme-tail field gap](../validations/h_index_distribution_extreme_tail_field_gap.md), and [preprint-to-metric implementation feedback](../mechanisms/preprint_to_metric_implementation_feedback.md).

## Operationalization

- Inputs: author-disambiguated publications and citations.
- Measures: h-index, [m-quotient](m_quotient.md), g-index, [field-normalized h-index](field_normalized_h_index.md), and self-citation-adjusted h-index.
- Common model forms: descriptive metric, controls in regression, or evaluation audit.

## Evidence and Validations

- Hirsch introduced the metric; subsequent literature emphasizes limitations and variants.
- Verified full-text evidence from Hirsch (2005) defines the h-index as a joint productivity-impact scalar and motivates it for comparing individual scientific output.
- Hirsch also defines the underlying h papers, proposes the m-quotient for seniority adjustment, discusses group-level h-index extension, and describes a self-citation correction focused on papers near the h boundary.
- A further Hirsch split makes the metric's total-citation scaling, tail insensitivity, seniority benchmarks, recognition-cohort checks, and cross-field caveats explicit.
- Hirsch also shows that h-index is monotone while the supporting paper set can turn over, motivating [h-index monotonicity and h-core turnover](../validations/h_index_monotonicity_turnover.md).
- A later Hirsch split makes the database-coverage requirement and coauthorship-size caveat explicit for author-level h-index use.
- Verified full-text evidence from Radicchi et al. (2008) identifies cross-discipline comparison as an h-index limitation and defines a generalized field-normalized h-index.
- Verified full-text evidence from Sinatra et al. (2016) treats the h-index as an evolving career outcome, showing how productivity and scientist-level impact parameters can predict later h-index trajectories while preserving uncertainty.
- The same paper supports [Q-model career impact prediction](../methods/q_model_career_prediction.md), where h-index is one forecast target rather than a standalone measure.
- Verified full-text evidence from Hicks et al. (2015) warns that h-index values depend on age, field, and database coverage, and should not replace qualitative judgment of a researcher's portfolio.

## Caveats

- Strongly age-, field-, database-, and authorship-dependent.
- Ignores citation context, author contribution, and tail impact above h.
- Composite author indicators can include h-index while exposing role, coauthorship, and self-citation dimensions separately.

## Links

- [scientific career impact](../mechanisms/scientific_career_impact.md)
- [h-core publication set](../representations/h_core_publication_set.md)
- [m-quotient](m_quotient.md)
- [group h-index](group_h_index.md)
- [h-index citation-curve intersection](../representations/h_index_citation_curve_intersection.md)
- [h-index productivity-citation rate model](../methods/h_index_productivity_citation_rate_model.md)
- [h-index stretched-exponential curve model](../methods/h_index_stretched_exponential_curve_model.md)
- [h-index self-citation sensitivity](../validations/h_index_self_citation_sensitivity.md)
- [h-index monotonicity and h-core turnover](../validations/h_index_monotonicity_turnover.md)
- [h-index total-citation scaling](h_index_total_citation_scaling.md)
- [h-index tail insensitivity](../validations/h_index_tail_insensitivity.md)
- [h-index seniority benchmarks](h_index_seniority_benchmarks.md)
- [h-index scientific-age start sensitivity](../validations/h_index_scientific_age_start_sensitivity.md)
- [h-index unique-name cohort selection](../validations/h_index_unique_name_cohort_selection.md)
- [recognition-cohort h-index validation](../validations/recognition_cohort_h_index_validation.md)
- [h-index field-scale caveat](../validations/h_index_field_scale_caveat.md)
- [coauthor-normalized h-index](coauthor_normalized_h_index.md)
- [large-team h-index inflation](../validations/large_team_h_index_inflation.md)
- [career-spanning citation-source coverage](../methods/career_spanning_citation_source_coverage.md)
- [h-index threshold assessment misuse](../validations/h_index_threshold_assessment_misuse.md)
- [single-number author-metric tradeoff audit](../validations/single_number_author_metric_tradeoff_audit.md)
- [individual Q parameter](individual_q_parameter.md)
- [Q-model career impact prediction](../methods/q_model_career_prediction.md)
- [cumulative advantage](../mechanisms/cumulative_advantage.md)
- [scientific discovery prediction](../methods/scientific_discovery_prediction.md)
- [responsible metrics](responsible_metrics.md)
- [portfolio-based researcher assessment](../methods/portfolio_based_researcher_assessment.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [self-citation rates](self_citation_rates.md)
- [author citation composite indicator](author_citation_composite_indicator.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [field-normalized h-index](field_normalized_h_index.md)
- [citation distribution scaling](citation_distribution_scaling.md)

- [review-article author-metric distortion](../validations/review_article_author_metric_distortion.md)
- [h-index mainstream-topic opportunity caveat](../validations/h_index_mainstream_topic_opportunity_caveat.md)
- [h-index seminal low-h false negative](../validations/h_index_seminal_low_h_false_negative.md)
- [author-metric threshold randomness](../validations/author_metric_threshold_randomness.md)
- [h-index calculability affordance](../methods/h_index_calculability_affordance.md)
- [author-metric resource-competition use case](../mechanisms/author_metric_resource_competition_use_case.md)
- [h-index extreme-tail field gap](../validations/h_index_distribution_extreme_tail_field_gap.md)
- [preprint-to-metric implementation feedback](../mechanisms/preprint_to_metric_implementation_feedback.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]
- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]
- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]
- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]
- Hicks, D., Wouters, P., Waltman, L., de Rijcke, S., & Rafols, I. (2015). Bibliometrics: The Leiden Manifesto for research metrics. *Nature*, 520, 429-431. https://doi.org/10.1038/520429a [OpenAlex: W2068452509; Dimensions: pub.1033957063; WoS: unknown]

## Metadata

- Concept ID: `h_index`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Aliases: Hirsch index; author impact index
