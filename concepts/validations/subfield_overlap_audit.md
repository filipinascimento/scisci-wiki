# Subfield overlap audit

## Summary

Subfield overlap audit checks whether algorithmically defined local research fields are distinct enough to support field-level inference, mechanism splits, and clustered standard errors.

## Canonical Form

- Unit of analysis: source-article subfield, pair of subfields, focal scientist, overlap coefficient, or related-article set.
- Typical representation: pairwise overlap distribution among subfields attached to the same focal entity.
- Validation target: show that nominally separate subfields are not just duplicate versions of the same intellectual neighborhood.
- Empirical signature: most within-focal-entity subfield pairs have low or zero overlap in their related-article membership.

## Uses in Science of Science

- Validates [PMRA subfield delineation](../methods/pmra_subfield_delineation.md) when multiple source articles are used for one scientist.
- Supports [superstar death event studies](../methods/superstar_death_event_study.md) by showing that within-star subfield variation is meaningful.
- Helps justify star-level clustering while preserving field-level mechanism variation.
- Provides a diagnostic for any local-field method based on citations, text embeddings, related articles, or topic neighborhoods.

## Operationalization

- For every pair of subfields attached to the same focal scientist or source entity, compute related-record overlap.
- Summarize the distribution with zero-overlap share, mean overlap, upper-tail overlap, and high-overlap thresholds.
- Inspect whether high-overlap pairs are concentrated in a few focal entities or specific journals.
- Use overlap results to decide whether to merge near-duplicate fields, cluster inference at a higher level, or keep subfields separate.

## Evidence and Validations

- Verified full-text evidence from Azoulay, Fons-Rosen, and Graff Zivin (2019) audits 21,661 pairwise combinations among subfields attached to the same deceased superstar.
- The paper reports that roughly half of same-star subfield pairs have zero overlap, with mean overlap around 0.06.
- High overlap appears only in the extreme upper tail, supporting the authors' use of subfield-level analyses.
- The paper still clusters standard errors at the superstar level to account for dependence among subfields linked to the same star.
- Star-level robustness checks roll related articles up to the scientist level and yield similar core results.

## Caveats

- Low article-set overlap does not rule out conceptual dependence through shared methods, personnel, or adjacent problems.
- Overlap audits depend on the field-construction cutoff and the source database's coverage.
- The appropriate threshold for merging fields is design-specific rather than universal.

## Links

- [PMRA subfield delineation](../methods/pmra_subfield_delineation.md)
- [superstar death event study](../methods/superstar_death_event_study.md)
- [matched control subfield construction](../methods/matched_control_subfield_construction.md)
- [deceased superstar life-scientist panel](../datasets/deceased_superstar_life_scientist_panel.md)
- [mortality-event pretrend validation](mortality_event_pretrend_validation.md)
- [field-year Poisson QML](../methods/field_year_poisson_qml.md)

## References

- Azoulay, P., Fons-Rosen, C., & Graff Zivin, J. S. (2019). Does Science Advance One Funeral at a Time? *American Economic Review*, 109(8), 2889-2920. https://doi.org/10.1257/aer.20161574 [OpenAlex: W2193631239; Dimensions: pub.1120042002; WoS: unknown]

## Metadata

- Concept ID: `subfield_overlap_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2019) (2019)
- Latest seen paper: Azoulay et al. (2019) (2019)
- Primary reference DOI: `10.1257/aer.20161574`
- OpenAlex ID: `W2193631239`
- Dimensions ID: `pub.1120042002`
- SciSciNet ID: `W2193631239`
- Aliases: local-field overlap check; related-article overlap audit; subfield distinctness validation; within-star overlap audit
