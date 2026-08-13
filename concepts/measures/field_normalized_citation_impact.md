# Field-normalized citation impact

## Summary

Field-normalized citation impact adjusts citation counts for field, publication year, document type, and citation window so comparisons are not dominated by different citation practices.

## Canonical Form

- Unit of analysis: paper or aggregate portfolio.
- Typical representation: ratio, percentile, or standardized citation score.
- Mechanism or measurement target: relative attention compared with similar papers.
- Empirical signature: papers are compared against a reference set rather than raw global counts.

## Uses in Science of Science

- Used whenever impact is compared across fields, years, institutions, or teams.
- Required for testing career, novelty, team-size, and dataset-coverage hypotheses fairly.
- Central to bibliometric evaluation debates.
- Extends to author-level hybrids such as [field-normalized h-index](field_normalized_h_index.md).

- A residual Radicchi pass adds [bare-citation field odds gap](../validations/bare_citation_field_odds_gap.md), [unit-mean lognormal fit constraint](../methods/unit_mean_lognormal_fit_constraint.md), [fieldwise lognormal-parameter compatibility](../validations/fieldwise_lognormal_parameter_compatibility.md), [top-rank binomial dispersion null](../validations/top_rank_binomial_dispersion_null.md), [longitudinal c0 growth control](../validations/longitudinal_c0_growth_control.md), [author productivity distribution collapse](../validations/author_productivity_distribution_collapse.md), [cited half-life temporal confound](../validations/cited_half_life_temporal_confound.md), [single-publication evaluation boundary](../representations/single_publication_evaluation_boundary.md), [impact-factor field-bias demonstrator](../validations/impact_factor_field_bias_demonstrator.md), and [WoS citation-event definition](../representations/wos_citation_event_definition.md).
## Operationalization

- Inputs: citations, field assignment, publication year, document type, citation window.
- Measures: [relative citation performance c_f](relative_citation_performance_cf.md), [mean normalized citation score](mean_normalized_citation_score.md), percentile rank, [top-percentile indicators](citation_percentile_indicators.md), [top-percentile publication share](top_percentile_publication_share.md), z-scores, universality-rescaled counts.
- Expected-value inputs include baselines such as [field-year citation baseline c0](field_year_citation_baseline_c0.md), whose construction depends on the chosen reference set.
- Common model forms: [cited-side normalization](../methods/cited_side_normalization.md), [citing-side normalization](../methods/citing_side_normalization.md), reference-set normalization, and regression adjustment.

## Evidence and Validations

- Radicchi et al. argued for universal rescaling across fields; Waltman's review catalogs indicator families.
- Verified full-text evidence from Radicchi et al. (2008) shows the central operational idea: compare citation impact after rescaling by field-specific citation averages rather than raw counts.
- Radicchi et al. also define [field-normalized h-index](field_normalized_h_index.md) by rescaling both citation performance and publication rank.
- The same Radicchi full text supports [universal citation distribution collapse](../validations/universal_citation_distribution_collapse.md), [lognormal relative-citation curve](../validations/lognormal_relative_citation_curve.md), and [field-balanced top-rank representation](../validations/field_balanced_top_rank_representation.md) as validations that the normalized score reduces field bias, while [relative citation importance-scope caveat](../validations/relative_citation_importance_scope_caveat.md) limits the interpretation of normalized scores.
- A residual Radicchi pass adds [field-size citation-density decoupling](../validations/field_size_citation_density_decoupling.md), [average-normalization skewness check](../validations/average_normalization_skewness_check.md), [citation-normalization residual-bias stack](../validations/citation_normalization_residual_bias_stack.md), and [single-year field-comparison cohort](../methods/single_year_field_comparison_cohort.md) as design and validation refinements.
- Verified full-text evidence from Hutchins et al. (2016) provides a paper-specific normalization alternative, using co-citation neighborhoods as dynamic reference fields.
- Hutchins et al. split the normalization chain into article citation rate, field citation rate, and expected citation rate, making [co-citation field normalization](../methods/co_citation_field_normalization.md) a concrete design alternative to static field categories.
- Verified full-text evidence from Waltman (2016) clarifies that field-normalized indicators require explicit assumptions about reference sets, document selection, citation windows, and the mathematical meaning of normalization.
- Waltman's review makes [reference set construction](../methods/reference_set_construction.md) and [citation window selection](../methods/citation_window_selection.md) explicit design decisions rather than background metadata.
- Waltman also separates field-classification-based cited-side normalization from citing-side normalization and shows why [field-classification sensitivity](../validations/field_classification_sensitivity.md) should be treated as a validation step.

## Caveats

- Field classification choices can change results.
- Interdisciplinary papers and emerging fields are hard to place in a single reference set.

## Links

- [citation impact indicators](../measures/citation_impact_indicators.md)
- [cross-field citation-density sources](../mechanisms/cross_field_citation_density_sources.md)
- [citation distribution scaling](citation_distribution_scaling.md)
- [relative citation performance c_f](relative_citation_performance_cf.md)
- [field-year citation baseline c0](field_year_citation_baseline_c0.md)
- [JCR field-year citation parameter panel](../datasets/jcr_field_year_citation_parameter_panel.md)
- [mean normalized citation score](mean_normalized_citation_score.md)
- [paper-first normalization before aggregation](../methods/paper_first_normalization_before_aggregation.md)
- [citation percentile indicators](citation_percentile_indicators.md)
- [top-percentile publication share](top_percentile_publication_share.md)
- [cited-side normalization](../methods/cited_side_normalization.md)
- [citing-side normalization](../methods/citing_side_normalization.md)
- [field-classification sensitivity](../validations/field_classification_sensitivity.md)
- [reference set construction](../methods/reference_set_construction.md)
- [citation window selection](../methods/citation_window_selection.md)
- [relative citation ratio](../measures/relative_citation_ratio.md)
- [article citation rate](article_citation_rate.md)
- [field citation rate](field_citation_rate.md)
- [expected citation rate](expected_citation_rate.md)
- [co-citation field normalization](../methods/co_citation_field_normalization.md)
- [science maps](../representations/science_maps.md)
- [field classifications](field_classifications.md)
- [field-normalized h-index](field_normalized_h_index.md)
- [publication-rate normalized rank](publication_rate_normalized_rank.md)
- [author-count citation normalization test](../methods/author_count_citation_normalization_test.md)
- [universal citation distribution collapse](../validations/universal_citation_distribution_collapse.md)
- [universal citation-distribution mechanism gap](../validations/universal_citation_distribution_mechanism_gap.md)
- [field-size citation-density decoupling](../validations/field_size_citation_density_decoupling.md)
- [average-normalization skewness check](../validations/average_normalization_skewness_check.md)
- [citation-normalization residual-bias stack](../validations/citation_normalization_residual_bias_stack.md)
- [single-year field-comparison cohort](../methods/single_year_field_comparison_cohort.md)
- [lognormal relative-citation curve](../validations/lognormal_relative_citation_curve.md)
- [field-balanced top-rank representation](../validations/field_balanced_top_rank_representation.md)
- [relative citation importance-scope caveat](../validations/relative_citation_importance_scope_caveat.md)
- [multidisciplinary field-mix caveat](../validations/multidisciplinary_field_mix_caveat.md)
- [uncited-paper inclusion sensitivity](../validations/uncited_paper_inclusion_sensitivity.md)
- [web of science](../datasets/web_of_science.md)
- [openalex](../datasets/openalex.md)
- [dimensions](../datasets/dimensions.md)

- [bare-citation field odds gap](../validations/bare_citation_field_odds_gap.md)
- [top-rank binomial dispersion null](../validations/top_rank_binomial_dispersion_null.md)
- [WoS citation-event definition](../representations/wos_citation_event_definition.md)
## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]
- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]
- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]

## Metadata

- Concept ID: `field_normalized_citation_impact`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Aliases: normalized citations; MNCS; citation percentiles
