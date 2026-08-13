# Universal citation distribution collapse

## Summary

Universal citation distribution collapse validates citation normalization by checking whether field-specific citation distributions align after rescaling raw citation counts by a field-year baseline.

## Canonical Form

- Unit of analysis: field-year citation distribution, document-type filtered paper set, or normalized citation histogram.
- Typical representation: c0 P(c, c0) plotted against c_f = c/c0, data-collapse plot, or fitted universal curve.
- Validation target: whether a proposed field-normalized citation score removes major field and year differences in citation density.
- Empirical signature: rescaled distributions from different fields or years lie close to the same curve.

## Uses in Science of Science

- Provides a validation layer for [relative citation performance c_f](../measures/relative_citation_performance_cf.md).
- Tests the distributional basis of [field-normalized citation impact](../measures/field_normalized_citation_impact.md), not just its average behavior.
- Helps justify [citation distribution scaling](../measures/citation_distribution_scaling.md) as a prerequisite for cross-field impact comparisons.
- Complements [field-balanced top-rank representation](field_balanced_top_rank_representation.md), which tests ranking consequences.

## Operationalization

- Build citation distributions separately by field, publication year, citation census date, and document type.
- Compute each field-year average c0.
- Plot or compare rescaled distributions using c_f = c/c0 and c0 P(c, c0).
- Use a documented estimator such as [log-binned citation distribution estimator](../methods/log_binned_citation_distribution_estimator.md) when plotting sparse, heavy-tailed distributions.
- Quantify collapse quality with fitted curves, distance measures, or field-specific deviations.
- Repeat across publication years to test temporal stability.

## Evidence and Validations

- Verified full-text evidence from Radicchi, Fortunato, and Castellano (2008) shows that citation distributions from disciplines with different average citation levels collapse after rescaling by c0.
- The paper reports that the rescaled curve resembles a [lognormal relative-citation curve](lognormal_relative_citation_curve.md), with fitted parameters broadly compatible across the studied disciplines.
- Radicchi et al. repeat the analysis for Hematology, Neuroimaging, and Nuclear Physics across 1990, 1999, and 2004, finding that the scaling remains stable over time.
- The collapse is used as empirical validation for c_f as an unbiased relative indicator across disciplines and years.

## Caveats

- A visible collapse does not remove all evaluation bias, especially field importance, interdisciplinary placement, author contribution, and citation motivation.
- Collapse quality can depend on field taxonomy, document-type filters, citation windows, and whether uncited papers are included.
- Multidisciplinary categories may mix distinct disciplinary distributions and require special handling.

## Links

- [relative citation performance c_f](../measures/relative_citation_performance_cf.md)
- [field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md)
- [lognormal relative-citation curve](lognormal_relative_citation_curve.md)
- [log-binned citation distribution estimator](../methods/log_binned_citation_distribution_estimator.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [field-balanced top-rank representation](field_balanced_top_rank_representation.md)
- [multidisciplinary field-mix caveat](multidisciplinary_field_mix_caveat.md)
- [uncited-paper inclusion sensitivity](uncited_paper_inclusion_sensitivity.md)
- [reference set construction](../methods/reference_set_construction.md)
- [document-type citation filtering](../methods/document_type_citation_filtering.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `universal_citation_distribution_collapse`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: citation data collapse; universal citation scaling validation; c_f distribution collapse; field-normalized citation collapse
