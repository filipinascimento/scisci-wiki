# Citation impact indicators

## Summary

Citation impact indicators summarize how often and in what context scholarly work is cited, often as imperfect proxies for attention, influence, or use.

## Canonical Form

- Unit of analysis: paper, author, journal, institution, field, funder, or country.
- Typical representation: scalar indicator or distribution over citation counts.
- Mechanism or measurement target: scholarly attention and downstream use.
- Empirical signature: skewed distributions requiring field, age, and document-type normalization.

## Uses in Science of Science

- Used for evaluation, mapping, ranking, career analysis, and validation of novelty/disruption measures.
- Acts as both outcome variable and control variable in many science-of-science studies.
- Motivates field-normalized indicators and critiques of simplistic evaluation.
- Requires explicit source choices such as [Web of Science](../datasets/web_of_science.md), [Scopus](../datasets/scopus.md), [Google Scholar](../datasets/google_scholar.md), [OpenAlex](../datasets/openalex.md), or [Dimensions](../datasets/dimensions.md).

## Operationalization

- Inputs: citation counts, [publication citation unit choice](../methods/publication_citation_unit_choice.md), publication year, field classification, document type, [reference sets](../methods/reference_set_construction.md), and [citation windows](../methods/citation_window_selection.md).
- Measures: raw citations, [citation percentile indicators](citation_percentile_indicators.md), [mean normalized citation score](mean_normalized_citation_score.md), [top-percentile publication share](top_percentile_publication_share.md), [journal citation frequency](journal_citation_frequency.md), [journal impact factor](journal_impact_factor.md), RCR.
- Classification choice: decide whether the target is total contribution or average performance through [citation-indicator size dependence](citation_indicator_size_dependence.md).
- Common model forms: normalization, percentile ranks, regression, causal adjustment.

## Evidence and Validations

- Large reviews emphasize the diversity of indicators and the need to match metrics to evaluation questions.
- Verified full-text evidence from Waltman (2016) reviews citation-impact indicators as research-evaluation tools and organizes the problem around database choice, publication/citation selection, normalization, skewed citation distributions, field differences, and indicator interpretation.
- Waltman's review corpus and search procedure are now split into [citation-indicator review corpus](../datasets/citation_indicator_review_corpus.md) and [CitNetExplorer review snowballing](../methods/citnetexplorer_review_snowballing.md), making the review evidence base inspectable.
- Waltman explicitly separates size-dependent total-impact indicators from size-independent average-performance indicators through [citation-indicator size dependence](citation_indicator_size_dependence.md).
- Waltman's full-text review separates average-based normalized indicators from highly cited and percentile-based indicators, making [mean normalized citation score](mean_normalized_citation_score.md) and [citation percentile indicators](citation_percentile_indicators.md) distinct operational choices.
- Waltman also separates [cited-side normalization](../methods/cited_side_normalization.md), [citing-side normalization](../methods/citing_side_normalization.md), [normalized citation aggregation choice](../methods/normalized_citation_aggregation_choice.md), and [field-classification sensitivity](../validations/field_classification_sensitivity.md) as design choices inside citation-impact construction.
- Verified full-text evidence from Radicchi et al. (2008) supports field normalization by showing that citation distributions become more comparable after rescaling by field-specific averages.
- Verified full-text evidence from Wang, Song, and Barabasi (2013) shows why citation indicators need age-aware interpretation: journal impact factors and early citations can be weak predictors for papers with exceptional long-term impact.
- Wang et al. also motivate [paper fitness](paper_fitness.md) and [citation trajectory models](../methods/citation_trajectory_models.md) as model-based alternatives to simple short-window citation counts.
- Their matched comparisons are split into [same-early-citation divergence](../validations/same_early_citation_divergence.md), [equal-fitness citation convergence](../validations/equal_fitness_citation_convergence.md), and [journal impact-time shift](../validations/journal_impact_time_shift.md).
- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) adds an interdisciplinarity-specific time-window warning: high-variety and high-disparity papers can be lower cited in three-year windows while higher cited over thirteen years.
- Verified full-text evidence from Ke et al. (2015) adds a delayed-recognition warning: many sleeping beauties become influential after windows far longer than typical citation-impact measurements.
- Redner (1998) and Radicchi et al. (2008) make [citation distribution scaling](citation_distribution_scaling.md) a prerequisite for interpreting averages, tails, and normalized impact. Redner also separates the paper-level citation unit from author-level citation aggregation.
- Verified full-text evidence from Hutchins et al. (2016) operationalizes article-level influence through a co-citation-field benchmark, connecting citation indicators to dynamically constructed comparison sets.
- Hutchins et al. also make metric infrastructure and validation motifs explicit through [iCite RCR tool](../datasets/icite_rcr_tool.md), [NIH R01 benchmark corpus](../datasets/nih_r01_benchmark_corpus.md), [RCR benchmark calibration](../methods/rcr_benchmark_calibration.md), [RCR ranking invariance](../validations/rcr_ranking_invariance.md), and [low-denominator metric inflation check](../validations/low_denominator_metric_inflation_check.md).
- The same full text adds [co-citation field stabilization check](../validations/co_citation_field_stabilization_check.md) and [RCR denominator gaming resistance](../validations/rcr_denominator_gaming_resistance.md), separating early-score provisionality from manipulation-resistance arguments.
- Verified full-text evidence from Sinatra et al. (2016), Clauset et al. (2017), and Wu et al. (2019) shows why citation counts should be interpreted as lagged, skewed, incentive-sensitive attention measures rather than direct quality measures.
- Verified full-text evidence from Meng et al. (2024) adds a full-text caveat: foundational discoveries can receive hidden citations through textual mentions without explicit references, so reference-list citation counts can understate incorporated influence.
- Meng et al. also make hidden-credit impact adjustments inspectable through [mention-conditioned citation probability](mention_conditioned_citation_probability.md), [hidden-to-explicit citation ratio](hidden_to_explicit_citation_ratio.md), [topic-to-paper hidden-credit allocation](../methods/topic_to_paper_hidden_credit_allocation.md), and [explicit-plus-hidden citation rank shift](explicit_plus_hidden_citation_rank_shift.md).
- Their full text adds separate guardrails for [hidden-citation full-text access barrier](../validations/hidden_citation_full_text_access_barrier.md) and [database and method textual-acknowledgment gap](../validations/database_method_textual_acknowledgment_gap.md).
- Verified full-text evidence from Teufel et al. (2006) adds a semantic caveat: citations have functions such as method use, contrast, weakness, and neutral background, so a count-only indicator loses information about why a citation occurred.
- Verified full-text evidence from Piwowar et al. (2018) adds an access caveat: OA articles receive 18% more citations than average after accounting for age and discipline in their analysis, with the effect driven mainly by Green and Hybrid OA.
- Piwowar et al. also show that the [open access citation advantage](../mechanisms/open_access_citation_advantage.md) varies by [OA route](../datasets/open_access_route_typology.md), so OA should not be collapsed to a binary covariate when route labels are available.
- Verified full-text evidence from Chen et al. (2007) adds a network-centrality alternative: PageRank-like citation scores are correlated with citation counts on average but can identify influential papers under-ranked by direct citation counts.
- Chen et al. also make the operating mechanism and validation checks explicit through [Google number](google_number.md), [recursive citation weighting](../mechanisms/recursive_citation_weighting.md), [reference-list dilution](../mechanisms/reference_list_dilution.md), [PageRank damping sensitivity](../validations/pagerank_damping_sensitivity.md), and [PageRank age-bias checks](../validations/pagerank_age_bias_check.md).
- Verified full-text evidence from Garfield (1972) and West et al. (2010) adds a journal-level lineage: raw [journal citation frequency](journal_citation_frequency.md) counts source-index references to journal titles, journal impact factor normalizes citation frequency by journal output, and Eigenfactor metrics use recursive journal-citation prestige.
- Verified full-text evidence from King et al. (2017), Chorus and Waltman (2016), and Ioannidis et al. (2019) adds a self-citation audit layer: citation indicators should often be reported with self-citations separated or removed, especially for author and journal evaluation.
- Verified full-text evidence from Wuchty et al. (2007) adds a team-level citation indicator: relative team impact compares mean citations to team-authored and solo-authored work, with separate self-citation robustness checks.
- Ioannidis et al. add author-level composite, field-percentile, self-citation-excluded, author-position, and concentration diagnostics, while Waltman shows that database coverage can materially affect citation-indicator construction.
- Verified full-text evidence from Thelwall et al. (2013) and Costas et al. (2015) adds an external-validation layer: [altmetric-citation association](../validations/altmetric_citation_association.md) is generally positive but weak and source-specific, so online attention should be treated as complementary evidence rather than a replacement citation indicator.
- Verified full-text evidence from Wang, Jones, and Wang (2019) adds a career-policy outcome use: [hit-paper probability](hit_paper_probability.md) measures whether grant-applicant cohorts produce top-5%-cited papers within field-year reference sets.
- Verified full-text evidence from Hirsch (2005) adds author-level h-index design caveats: h can be related to total citations through [h-index total-citation scaling](h_index_total_citation_scaling.md), but it is still sensitive to seniority, field scale, citation tails, and recognition-cohort interpretation.
- Verified full-text evidence from Li et al. (2019) adds a career-visibility caveat: citation counts are driven partly by social visibility, including institutional prestige and top-coauthor access, motivating [visibility-adjusted citation assessment](../methods/visibility_adjusted_citation_assessment.md) rather than raw citation comparisons alone.
- Verified full-text evidence from Radicchi et al. (2008) adds two normalization guardrails: normalized citation scores need a [relative citation importance-scope caveat](../validations/relative_citation_importance_scope_caveat.md), and author count may require an [author-count citation normalization test](../methods/author_count_citation_normalization_test.md) rather than simple field-year normalization alone.

## Caveats

- Citation is not equivalent to quality or social value.
- Coverage, citation practices, self-citation, negative citation, and field age all bias simple counts.
- Full-text use and hidden credit can be invisible to citation-count databases.
- Citation counts do not distinguish rhetorical function unless [citation contexts](../representations/citation_contexts.md), [citation function taxonomies](../representations/citation_function_taxonomies.md), or [citation function classification](../methods/citation_function_classification.md) are modeled.
- Source databases, access modes, and transparency limits can change both publication denominators and citation numerators.
- Database vintages, SSH/book coverage, conference proceedings, and proceedings-journal duplicates can change both numerator and denominator choices.
- Access status can be a confounder or mechanism for citation differences.
- Recursive network indicators such as [citation PageRank](citation_pagerank.md) introduce additional parameter and graph-coverage assumptions.
- Self-citation rates and citation metric gaming can make raw citation indicators misleading without audit.

## Links

- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation distribution scaling](citation_distribution_scaling.md)
- [publication citation unit choice](../methods/publication_citation_unit_choice.md)
- [Zipf citation-tail inference](../methods/zipf_citation_tail_inference.md)
- [citation tail sparsity limit](../validations/citation_tail_sparsity_limit.md)
- [citation tail maturation bias](../validations/citation_tail_maturation_bias.md)
- [citation percentile indicators](citation_percentile_indicators.md)
- [citation-indicator size dependence](citation_indicator_size_dependence.md)
- [mean normalized citation score](mean_normalized_citation_score.md)
- [top-percentile publication share](top_percentile_publication_share.md)
- [hit-paper probability](hit_paper_probability.md)
- [source normalized impact per paper](source_normalized_impact_per_paper.md)
- [cited-side normalization](../methods/cited_side_normalization.md)
- [citing-side normalization](../methods/citing_side_normalization.md)
- [normalized citation aggregation choice](../methods/normalized_citation_aggregation_choice.md)
- [field-classification sensitivity](../validations/field_classification_sensitivity.md)
- [citation window selection](../methods/citation_window_selection.md)
- [same-early-citation divergence](../validations/same_early_citation_divergence.md)
- [equal-fitness citation convergence](../validations/equal_fitness_citation_convergence.md)
- [citation speed-delay measure](citation_speed_delay_measure.md)
- [interdisciplinarity citation-window reversal](../validations/interdisciplinarity_citation_window_reversal.md)
- [sleeping-beauty short-window bias](../validations/sleeping_beauty_short_window_bias.md)
- [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md)
- [reference set construction](../methods/reference_set_construction.md)
- [paper fitness](paper_fitness.md)
- [journal impact-time shift](../validations/journal_impact_time_shift.md)
- [h index](../measures/h_index.md)
- [h-index total-citation scaling](h_index_total_citation_scaling.md)
- [h-index tail insensitivity](../validations/h_index_tail_insensitivity.md)
- [h-index field-scale caveat](../validations/h_index_field_scale_caveat.md)
- [relative citation ratio](../measures/relative_citation_ratio.md)
- [iCite RCR tool](../datasets/icite_rcr_tool.md)
- [NIH R01 benchmark corpus](../datasets/nih_r01_benchmark_corpus.md)
- [RCR benchmark calibration](../methods/rcr_benchmark_calibration.md)
- [RCR ranking invariance](../validations/rcr_ranking_invariance.md)
- [low-denominator metric inflation check](../validations/low_denominator_metric_inflation_check.md)
- [co-citation field stabilization check](../validations/co_citation_field_stabilization_check.md)
- [RCR denominator gaming resistance](../validations/rcr_denominator_gaming_resistance.md)
- [citation PageRank](citation_pagerank.md)
- [Google number](google_number.md)
- [citation PageRank hidden gems](../validations/citation_pagerank_hidden_gems.md)
- [PageRank damping sensitivity](../validations/pagerank_damping_sensitivity.md)
- [PageRank age-bias check](../validations/pagerank_age_bias_check.md)
- [journal citation frequency](journal_citation_frequency.md)
- [journal impact factor](journal_impact_factor.md)
- [Eigenfactor metrics](eigenfactor_metrics.md)
- [hidden citations](hidden_citations.md)
- [mention-conditioned citation probability](mention_conditioned_citation_probability.md)
- [hidden-to-explicit citation ratio](hidden_to_explicit_citation_ratio.md)
- [topic-to-paper hidden-credit allocation](../methods/topic_to_paper_hidden_credit_allocation.md)
- [citation contexts and functions](../representations/citation_contexts.md)
- [citation function taxonomies](../representations/citation_function_taxonomies.md)
- [citation function classification](../methods/citation_function_classification.md)
- [open access status](../datasets/open_access_status.md)
- [open access route typology](../datasets/open_access_route_typology.md)
- [open access citation advantage](../mechanisms/open_access_citation_advantage.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [self-citation rates](self_citation_rates.md)
- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [author citation composite indicator](author_citation_composite_indicator.md)
- [career-long and single-year author impact](career_long_single_year_author_impact.md)
- [field-subfield author percentile ranks](field_subfield_author_percentile_ranks.md)
- [author-position citation components](author_position_citation_components.md)
- [self-citation-excluded author metrics](self_citation_excluded_author_metrics.md)
- [citation source concentration ratio](citation_source_concentration_ratio.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [bibliographic database staleness caveat](../validations/bibliographic_database_staleness_caveat.md)
- [SSH bibliometric coverage gap](../validations/ssh_bibliometric_coverage_gap.md)
- [conference-proceedings coverage gap](../validations/conference_proceedings_coverage_gap.md)
- [conference/journal double counting](../validations/conference_journal_double_counting.md)
- [citation-indicator review corpus](../datasets/citation_indicator_review_corpus.md)
- [CitNetExplorer review snowballing](../methods/citnetexplorer_review_snowballing.md)
- [Web of Science](../datasets/web_of_science.md)
- [Scopus](../datasets/scopus.md)
- [Google Scholar](../datasets/google_scholar.md)
- [WoS-Scopus coverage overlap](../validations/wos_scopus_coverage_overlap.md)
- [Google Scholar transparency limitations](../validations/google_scholar_transparency_limitations.md)
- [citation database web-interface access](../methods/citation_database_web_interface_access.md)
- [full-database bibliometric access](../methods/full_database_bibliometric_access.md)
- [relative team-impact ratio](relative_team_impact_ratio.md)
- [team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md)
- [self-citation-adjusted team impact](../validations/self_citation_adjusted_team_impact.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [beauty coefficient](beauty_coefficient.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)
- [visibility-adjusted citation assessment](../methods/visibility_adjusted_citation_assessment.md)
- [relative citation importance-scope caveat](../validations/relative_citation_importance_scope_caveat.md)
- [author-count citation normalization test](../methods/author_count_citation_normalization_test.md)
- [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]
- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; WoS: unknown]
- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]
- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]
- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]
- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]
- Clauset, A., Larremore, D. B., & Sinatra, R. (2017). Data-driven predictions in the science of science. *Science*, 355(6324), 477-480. https://doi.org/10.1126/science.aal4217 [OpenAlex: W2585057539; Dimensions: pub.1083524092; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]
- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]
- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]
- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]
- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]
- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]
- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]
- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]
- Li, W., Aste, T., Caccioli, F., & Livan, G. (2019). Early coauthorship with top scientists predicts success in academic careers. *Nature Communications*, 10, 5170. https://doi.org/10.1038/s41467-019-13130-4 [OpenAlex: W2949684159; Dimensions: pub.1122584827; WoS: unknown]
- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]
- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; WoS: unknown]
- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]
- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]
- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]
- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]
- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]

## Metadata

- Concept ID: `citation_impact_indicators`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Price (1965) (1965)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Aliases: citation counts; impact metrics; bibliometric indicators
