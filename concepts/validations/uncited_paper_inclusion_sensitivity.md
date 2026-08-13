# Uncited-paper inclusion sensitivity

## Summary

Uncited-paper inclusion sensitivity checks whether excluding zero-citation papers changes citation-normalization baselines, distributional scaling, or rankings.

## Canonical Form

- Unit of analysis: field-year citation distribution, zero-citation paper, expected citation baseline, or normalized indicator.
- Typical representation: c0 with and without uncited papers, zero-mass sensitivity table, or shifted normalized-citation distribution.
- Validation target: whether a citation indicator is robust to the treatment of uncited records.
- Empirical signature: including uncited papers changes c0, normalized ratios, or field comparisons enough to affect conclusions.

## Uses in Science of Science

- Connects [uncited-paper mass](../measures/uncited_paper_mass.md) to field-normalized citation indicators.
- Makes [relative citation performance c_f](../measures/relative_citation_performance_cf.md) and [mean normalized citation score](../measures/mean_normalized_citation_score.md) reproducible.
- Helps audit [citation distribution scaling](../measures/citation_distribution_scaling.md) when zero counts are omitted from log-scale plots.
- Complements [document-type citation filtering](../methods/document_type_citation_filtering.md), because document-type choices affect the zero-citation denominator.

## Operationalization

- Count uncited papers within each field-year-document-type reference set.
- Compute c0 and normalized scores with zero-citation papers included and excluded.
- Compare distributional plots, field rankings, and portfolio indicators under both choices.
- Report the treatment of uncited records in methods and metadata.
- Inspect whether missing citation links or database coverage create artificial zeros.

## Evidence and Validations

- Verified full-text evidence from Radicchi, Fortunato, and Castellano (2008) states that their calculations neglect uncited articles.
- The paper reports that including uncited articles produces only a small shift in c0 and does not affect their analysis.
- This explicit sensitivity check supports their normalized citation distribution results while making the zero-citation treatment visible.
- The broader motif remains important because other datasets, shorter citation windows, or lower-coverage fields can have much larger uncited shares.

## Caveats

- Robustness in one field-year sample does not imply robustness for all citation windows or databases.
- Zero citations may mean low impact, short exposure, missing references, poor database coverage, or noncitation-based uptake.
- Log-scale distribution plots can hide the zero-citation mass unless it is reported separately.

## Links

- [uncited-paper mass](../measures/uncited_paper_mass.md)
- [relative citation performance c_f](../measures/relative_citation_performance_cf.md)
- [field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [mean normalized citation score](../measures/mean_normalized_citation_score.md)
- [reference set construction](../methods/reference_set_construction.md)
- [document-type citation filtering](../methods/document_type_citation_filtering.md)
- [citation window selection](../methods/citation_window_selection.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [log-binned citation distribution estimator](../methods/log_binned_citation_distribution_estimator.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `uncited_paper_inclusion_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: zero-citation inclusion sensitivity; uncited denominator sensitivity; zero-count citation baseline; uncited-paper robustness
