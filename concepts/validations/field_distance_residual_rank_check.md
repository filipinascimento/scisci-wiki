# Field-distance residual rank check

## Summary

Field-distance residual rank check compares field rankings by raw science-technology distance with rankings based on distance residuals after accounting for citation-count differences.

## Canonical Form

- Unit of analysis: field, paper, distance residual, citation-count bin, or field rank.
- Typical representation: rank correlation or scatter plot of raw mean distance against residual mean distance.
- Validation target: test whether field proximity to the patent-paper boundary is driven by field citation volume.
- Empirical signature: fields that are near or far from the boundary remain similarly ordered after citation-count residualization.

## Uses in Science of Science

- Strengthens [distance-based basic-applied typology](../methods/distance_based_basic_applied_typology.md).
- Connects field-level science-technology analysis to [field classifications](../measures/field_classifications.md).
- Provides a specific robustness layer for [science-technology distance](../measures/science_technology_distance.md).

## Operationalization

- Regress or residualize node distance using fixed effects for citation counts.
- Aggregate residual distances by field.
- Compare the residual field ranking with the raw mean-distance ranking.
- Report rank stability and highlight fields whose position changes substantially.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) ranks fields by raw distance and by residual distance after accounting for citation differences.
- The supplement describes residuals that show whether papers have unusually high or low distance given their citation counts.
- The resulting check supports the field ordering as more than a field citation-count artifact.

## Caveats

- Residualization depends on the chosen citation-count controls.
- Field labels can mix heterogeneous specialties with different technology linkages.
- Residual rank stability does not prove causal basic-applied positioning.

## Links

- [distance-based basic-applied typology](../methods/distance_based_basic_applied_typology.md)
- [field classifications](../measures/field_classifications.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [citation-count pathway confound](citation_count_pathway_confound.md)
- [frontier-distance random citation null](frontier_distance_random_citation_null.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; SciSciNet: W2743628650; WoS: unknown]

## Metadata

- Concept ID: `field_distance_residual_rank_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Dimensions ID: `pub.1091201170`
- SciSciNet ID: `W2743628650`
- Aliases: residual field-distance ranking; citation-adjusted frontier rank check; field distance residual audit; basic-applied residual rank robustness
