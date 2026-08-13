# Science map overlays

## Summary

Science map overlays place a focal portfolio, institution, funding program, paper set, or topic distribution onto a base map of science so the entity's research footprint can be compared across fields.

## Canonical Form

- Unit of analysis: paper set, author, institution, funder, grant portfolio, journal set, field, or topic collection.
- Typical representation: base science map plus colored, weighted, or time-varying overlays over disciplines, journals, clusters, or map regions.
- Measurement target: where an entity's scientific activity sits relative to the global structure of science.
- Empirical signature: concentration, spread, bridges, missing regions, and shifts in mapped activity over time.

## Uses in Science of Science

- Makes [science maps](science_maps.md) operational for portfolio comparison and strategic analysis.
- Uses [field classifications](../measures/field_classifications.md) and [science map update workflows](../methods/science_map_update_workflows.md) as infrastructure.
- Supports [interdisciplinarity](../mechanisms/interdisciplinarity.md), [diversity measures](../measures/diversity_measures.md), and funder or institution portfolio audits.
- Helps validate scalar interdisciplinarity indicators through [interdisciplinarity metric-map triangulation](../validations/interdisciplinarity_metric_map_triangulation.md).

## Operationalization

- Choose a base map and record its version, node granularity, layout method, and classification system.
- Map the focal records to base-map units using journal labels, paper-level clusters, references, topics, or embeddings.
- Weight overlays by publication count, citation count, funding amount, collaboration count, normalized impact, or time.
- Compare overlays with null or baseline portfolios matched by field, institution type, funder, or year.
- Check the base map with [science map accuracy validation](../validations/science_map_accuracy_validation.md) before using overlay patterns for evaluation.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) describes science maps as reference systems for comparing data overlays such as funding versus publication data, institutional portfolios, and expertise coverage.
- The UCSD map paper emphasizes usability for overlays as a criterion for evaluating a map/classification system, alongside coverage, accuracy, legibility, and updateability.
- The same full text now supports [annualized overlay node sizing](annualized_overlay_node_sizing.md), which scales mapped nodes by average yearly record counts over source-title coverage years.
- Verified full-text evidence from Porter and Rafols (2009) uses science-map visualization to study whether six research fields became more interdisciplinary over time.
- Porter and Rafols construct the maps from a [WoS subject-category co-citation matrix](wos_subject_category_cocitation_matrix.md), aggregate categories into macro-disciplines, and overlay field-year cited-category distributions.
- Their field-year implementation is split out as [field-year cited-SC overlay](field_year_cited_sc_overlay.md), and their reusable supplementary artifacts motivate [science mapping kit reuse](../methods/science_mapping_kit_reuse.md).
- Verified full-text evidence from Stirling (2007) and Wang et al. (2015) motivates decomposing overlay spread into variety, balance, and disparity instead of treating map coverage as one scalar.

## Caveats

- Overlays inherit all assumptions of the base map, including field taxonomy, journal assignment, layout distortion, and version drift.
- A visually broad overlay can reflect many nearby categories, a balanced portfolio, or a few distant categories; interpretation requires explicit diversity measures.
- Counts and colors can obscure uncertainty in classification and missing records.

## Links

- [science maps](science_maps.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)
- [science-map projection readability tradeoff](../validations/science_map_projection_readability_tradeoff.md)
- [journal-cluster science backbones](journal_cluster_science_backbones.md)
- [field classifications](../measures/field_classifications.md)
- [science map update workflows](../methods/science_map_update_workflows.md)
- [annualized overlay node sizing](annualized_overlay_node_sizing.md)
- [WoS subject-category co-citation matrix](wos_subject_category_cocitation_matrix.md)
- [field-year cited-SC overlay](field_year_cited_sc_overlay.md)
- [macro-discipline factor aggregation](../methods/macro_discipline_factor_aggregation.md)
- [science mapping kit reuse](../methods/science_mapping_kit_reuse.md)
- [interdisciplinarity benchmark field panel](../datasets/interdisciplinarity_benchmark_field_panel.md)
- [interdisciplinarity metric-map triangulation](../validations/interdisciplinarity_metric_map_triangulation.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [diversity measures](../measures/diversity_measures.md)
- [category variety](../measures/category_variety.md)
- [distributional balance](../measures/distributional_balance.md)
- [category disparity](../measures/category_disparity.md)
- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [interdisciplinarity](../mechanisms/interdisciplinarity.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]
- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]
- Stirling, A. (2007). A general framework for analysing diversity in science, technology and society. *Journal of the Royal Society Interface*, 4(15), 707-719. https://doi.org/10.1098/rsif.2007.0213 [OpenAlex: W2110158660; Dimensions: pub.1011912474; WoS: unknown]
- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]

## Metadata

- Concept ID: `science_map_overlays`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Porter and Rafols (2009) (2009)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Aliases: portfolio overlay map; research footprint map; base-map overlay; science portfolio map
