# Citation-decay source-method contingency

## Summary

Citation-decay source-method contingency is the validation motif that functional-form conclusions about citation aging depend on data source, fitting design, and observation window.

## Canonical Form

- Unit of analysis: citation trajectory, paper cohort, field, bibliographic database, or decay model.
- Typical representation: source-method caveat, exponential versus power-law comparison, F-statistic model test, or fitting-design sensitivity.
- Validation target: prevent overgeneralizing a citation-decay law from one database, paper set, or model specification.
- Empirical signature: exponential and power-law interpretations can both appear plausible, with preferred form changing by method or cohort.

## Uses in Science of Science

- Adds an interpretive caveat to [citation decay model comparison](../methods/citation_decay_model_comparison.md).
- Links citation aging to [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) and [citation trajectory models](../methods/citation_trajectory_models.md).
- Helps evaluate claims about [ultradiffusive citation decay](../mechanisms/ultradiffusive_citation_decay.md) without assuming one universal functional form.
- Supports transparent reporting of fitting windows, right censoring, and plateau terms.

## Operationalization

- Compare candidate decay forms on the same aligned citation trajectories.
- Report the database, cohort restrictions, field assignment, citation percentile, and observation window.
- Use model-selection criteria or F-statistics that account for model degrees of freedom and data availability.
- Run sensitivity checks across fields, cohorts, and citation-volume strata.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) notes controversy between exponential and slower power-law interpretations of citation decay.
- The paper states that this controversy is partly due to different analysis types and distinct data sources.
- Parolo et al. compare exponential and power-law fits using least squares and F-statistics and find that exponential fits are preferable for most papers, while the fraction better fit by power laws increases in more recent cohorts.
- The authors connect recent-cohort changes to the long time required for citation trajectories to reach their final plateau.

## Caveats

- Model fit does not identify the social mechanism behind attention decay.
- Recent cohorts are especially vulnerable to right censoring.
- Individual paper trajectories are noisy, so cohort and percentile choices matter.

## Links

- [citation decay model comparison](../methods/citation_decay_model_comparison.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [ultradiffusive citation decay](../mechanisms/ultradiffusive_citation_decay.md)
- [post-peak right-censoring boundary](post_peak_right_censoring_boundary.md)
- [citation decay-rate alpha](../measures/citation_decay_rate_alpha.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; SciSciNet: W1833467796; WoS: unknown]

## Metadata

- Concept ID: `citation_decay_source_method_contingency`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: citation-decay method contingency; decay functional-form caveat; source-sensitive citation aging; exponential power-law decay sensitivity
