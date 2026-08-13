# Citation network rewiring nulls

## Summary

Citation network rewiring nulls test whether observed citation-network measures exceed what would be expected after randomly rewiring edges while preserving selected citation-behavior constraints.

## Canonical Form

- Unit of analysis: paper citation network, patent citation network, field-year cohort, focal metric, or rewired simulation.
- Typical representation: Monte Carlo rewired network ensemble, observed-minus-null gap, null distribution, p-value, or time-varying residual trend.
- Method target: distinguish substantive structural change from artifacts of citation volume, degree, age gaps, or field growth.
- Empirical signature: observed metric values differ systematically from rewired networks that preserve key local citation properties.

## Uses in Science of Science

- Adds a network-null robustness layer to [disruption measure validation](../validations/disruption_measure_validation.md).
- Tests whether [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md) survives changing publication, citation, and authorship practices.
- Complements [disruptiveness practice-control stack](../validations/disruptiveness_practice_control_stack.md), which uses normalized indicators and regression controls before the network rewiring null.
- Complements [CD-index time windows](../measures/cd_index_time_windows.md), [modified CD index](../measures/modified_cd_index.md), and field-year controls.
- Can be generalized to validate citation centrality, co-citation, bibliographic coupling, and science-technology graph measures.

## Operationalization

- Choose a focal citation-network metric, such as CD5.
- Build observed paper or patent citation networks with publication/application years and citation edges.
- Randomly rewire citation edges while preserving constraints such as citations made, citations received, and age gap between citing and cited works.
- Recompute the focal metric on each rewired network.
- Compare observed values with the rewired ensemble by field, year, technology class, or cohort.

## Evidence and Validations

- Verified full-text evidence from Park, Leahey, and Funk (2023) uses Monte Carlo simulations that randomly rewire observed paper and patent citation networks.
- Their null model preserves key citation-behavior characteristics, including the number of citations made and received by individual works and the age gap between citing and cited works.
- Park et al. report that observed CD5 values are lower than those in the simulated networks and that the gap widens over time.
- The rewiring analysis is part of a broader robustness battery showing that declining disruptiveness is unlikely to be explained by changing publication, citation, or authorship practices alone.

## Caveats

- A rewiring null is only as strong as the constraints it preserves; omitted structure can create misleading residuals.
- Null models that preserve degree and age gaps may still miss field, institution, topic, team, or document-type constraints.
- Rewiring evaluates structural expectations, not the quality, truth, or social value of the observed work.

## Links

- [disruption measure validation](../validations/disruption_measure_validation.md)
- [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md)
- [disruptiveness practice-control stack](../validations/disruptiveness_practice_control_stack.md)
- [alternative CD-index derivation robustness](../validations/alternative_cd_index_derivation_robustness.md)
- [disruption index](../measures/disruption_index.md)
- [CD-index time windows](../measures/cd_index_time_windows.md)
- [modified CD index](../measures/modified_cd_index.md)
- [citation networks](../representations/citation_networks.md)
- [field classifications](../measures/field_classifications.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [patent citation source roles](../validations/patent_citation_source_roles.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `citation_network_rewiring_nulls`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: rewired citation nulls; citation-network null model; Monte Carlo citation rewiring; disruption rewiring robustness
