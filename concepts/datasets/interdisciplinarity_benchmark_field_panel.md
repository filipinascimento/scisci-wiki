# Interdisciplinarity benchmark field panel

## Summary

An interdisciplinarity benchmark field panel samples comparable article sets from selected fields and years, then computes the same interdisciplinarity indicators for each field-year cell.

## Canonical Form

- Unit of analysis: field-year article set, journal subject category, benchmark panel cell, or paper sample.
- Typical representation: field by year panel with sample size, authors per paper, single-author share, cited references, cited categories, and integration scores.
- Measurement target: baseline levels and trends in interdisciplinary research practices across fields.
- Empirical signature: field-specific trajectories distinguish broad changes in research behavior from a focal program, institution, or topic effect.

## Uses in Science of Science

- Provides comparison baselines for [interdisciplinarity](../mechanisms/interdisciplinarity.md), [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md), and policy interventions that claim to increase knowledge integration.
- Separates field-level norms from focal-portfolio effects in [science map overlays](../representations/science_map_overlays.md).
- Supplies contextual baselines for [within-subject-category citation share](../measures/within_subject_category_citation_share.md), [category variety](../measures/category_variety.md), [Rao-Stirling diversity](../measures/rao_stirling_diversity.md), and collaboration indicators.
- Supports [interdisciplinarity metric-map triangulation](../validations/interdisciplinarity_metric_map_triangulation.md) by letting scalar metrics and maps be interpreted against field-year benchmarks.

## Operationalization

- Select fields from a declared classification system, such as Web of Science subject categories.
- Sample article records at comparable time points and record sample-size decisions.
- Assign cited references to field categories and compute within-field citation share, cited-category count, reference-list length, authorship indicators, and integration scores.
- Preserve the classification version, journal-to-category thesaurus, extraction rules, and sampling frame so the panel can be reused or extended.

## Evidence and Validations

- Verified full-text evidence from Porter and Rafols (2009) samples six Web of Science subject categories at 1975, 1985, 1995, and 2005.
- Their six benchmark fields are Biotechnology and Applied Microbiology, Electrical and Electronic Engineering, Mathematics, Research and Experimental Medicine, Neurosciences, and Atomic, Molecular and Chemical Physics.
- The paper reports average sample sizes near 1,000 articles per field-year cell, with smaller cells for fields or years where fewer records were available.
- Porter and Rafols use the panel to show that cited references, cited subject categories, and coauthors grow substantially, while the Integration score grows more modestly.
- The same field-year panel supports validation cautions for [reference-list length growth confound](../validations/reference_list_length_growth_confound.md), [team-authorship interdisciplinarity non-equivalence](../validations/team_authorship_interdisciplinarity_non_equivalence.md), and [interdisciplinarity diversity saturation effect](../validations/interdisciplinarity_diversity_saturation_effect.md).

## Caveats

- Benchmarks inherit the field classification, journal coverage, and document-type filters of the source database.
- A small benchmark set can illustrate field differences but should not be treated as a universal baseline for all science.
- Longitudinal comparisons require stable category assignment or explicit correction for classification drift.

## Links

- [interdisciplinarity](../mechanisms/interdisciplinarity.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [within-subject-category citation share](../measures/within_subject_category_citation_share.md)
- [category variety](../measures/category_variety.md)
- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [science map overlays](../representations/science_map_overlays.md)
- [field-year cited-SC overlay](../representations/field_year_cited_sc_overlay.md)
- [interdisciplinarity metric-map triangulation](../validations/interdisciplinarity_metric_map_triangulation.md)
- [reference-list length growth confound](../validations/reference_list_length_growth_confound.md)
- [team-authorship interdisciplinarity non-equivalence](../validations/team_authorship_interdisciplinarity_non_equivalence.md)
- [field classifications](../measures/field_classifications.md)
- [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md)

## References

- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]

## Metadata

- Concept ID: `interdisciplinarity_benchmark_field_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Porter and Rafols (2009) (2009)
- Latest seen paper: Porter and Rafols (2009) (2009)
- Primary reference DOI: `10.1007/s11192-008-2197-2`
- OpenAlex ID: `W2087238585`
- Dimensions ID: `pub.1024224648`
- SciSciNet ID: `W2087238585`
- Aliases: six-field interdisciplinarity benchmark; WoS interdisciplinarity panel; field-year interdisciplinarity panel; NAKFI benchmark fields
