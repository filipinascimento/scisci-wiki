# Developmental index

## Summary

The developmental index measures the extent to which a paper incrementally develops prior work rather than disruptively redirecting attention away from it.

## Canonical Form

- Unit of analysis: paper, patent, team, field-year cohort, or topic area.
- Typical representation: inverse disruption score, development percentile, or team-level developmental outcome.
- Measurement target: continuity with existing research directions.
- Empirical signature: higher values indicate work that is more developmental and less disruptive.

## Uses in Science of Science

- Complements [disruption index](disruption_index.md) by explicitly naming the developmental side of the same citation-structure contrast.
- Supports comparisons of [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md), [team size and disruption](../mechanisms/team_size_disruption.md), and [novelty and conventionality](../mechanisms/novelty_conventionality.md).
- Pairs with [citation-window impact split](citation_window_impact_split.md) to distinguish immediate attention from longer-run influence.

## Operationalization

- Compute a disruption score from focal-paper, predecessor, and successor citation patterns.
- Transform it into a developmental score by taking the inverse or reversed scale.
- Compare developmental-index percentiles across team structures, fields, years, and team-size strata.
- Report the transformation used, because sign conventions vary across datasets and papers.

## Evidence and Validations

- Verified full-text evidence from Xu, Wu, and Evans (2022) defines the developmental index as the inverse of disruption from Wu, Wang, and Evans (2019).
- Xu et al. use it to measure the extent to which a paper incrementally refines previous work rather than radically challenging it.
- The paper reports that developmental-index percentile decreases as L-ratio increases, meaning flatter teams are associated with less developmental and more disruptive work.

## Caveats

- The measure inherits the assumptions and citation-window sensitivity of the underlying disruption score.
- Developmental work can be valuable, cumulative, and high impact; lower disruption is not automatically worse.
- Field citation practices and reference-list conventions can shift the baseline.

## Links

- [disruption index](disruption_index.md)
- [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)
- [same-size team hierarchy contrast](../validations/same_size_team_hierarchy_contrast.md)
- [citation-window impact split](citation_window_impact_split.md)
- [disruptiveness fixed-effect decomposition](../methods/disruptiveness_fixed_effect_decomposition.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]
- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]

## Metadata

- Concept ID: `developmental_index`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: inverse disruption score; development index; developmental percentile; incremental-development score
