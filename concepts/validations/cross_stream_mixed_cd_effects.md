# Cross-stream mixed CD effects

## Summary

Cross-stream mixed CD effects are the caveat that one focal invention can consolidate some predecessor streams while destabilizing others, so a single aggregate CD score may hide heterogeneous effects across user communities or knowledge streams.

## Canonical Form

- Unit of analysis: focal patent, predecessor stream, user community, future citation stream, or CD-index component.
- Typical representation: aggregate disruption score decomposed by predecessor or audience stream.
- Validation target: identify mixed effects that are collapsed by one-number disruption measures.
- Empirical signature: the same focal work redirects some future citations away from predecessors while reinforcing others.

## Uses in Science of Science

- Qualifies the [disruption index](../measures/disruption_index.md).
- Refines [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md).
- Extends [CD-index undefined cases](cd_index_undefined_cases.md) from missingness to interpretive heterogeneity.
- Links to [impact direction-magnitude decoupling](impact_direction_magnitude_decoupling.md), because aggregate impact can mix directions.

## Operationalization

- Partition predecessors by technology class, citation cluster, assignee community, or use context.
- Compute disruption-like effects by stream rather than only for the whole predecessor set.
- Compare aggregate scores with stream-specific scores.
- Flag focal works with both consolidating and destabilizing stream effects.

## Evidence and Validations

- Verified full-text evidence from Funk and Owen-Smith (2017) notes that dynamic-network measures can be applied to different streams of future use.
- The paper's framing implies that focal inventions may affect different predecessor communities in different directions.
- This caveat motivates decomposing aggregate CD-style measures when the target has multiple technological audiences.

## Caveats

- Stream decomposition requires enough future citations for stable estimates.
- Communities or streams can be hard to identify without additional classification or network clustering.
- Mixed effects do not invalidate aggregate CD scores, but they narrow what the aggregate can claim.

## Links

- [disruption index](../measures/disruption_index.md)
- [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md)
- [CD-index undefined cases](cd_index_undefined_cases.md)
- [impact direction-magnitude decoupling](impact_direction_magnitude_decoupling.md)
- [continuous disruption-consolidation scale](../methods/continuous_disruption_consolidation_scale.md)

## References

- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; SciSciNet: W2303284028]

## Metadata

- Concept ID: `cross_stream_mixed_cd_effects`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Funk and Owen-Smith (2017) (2017)
- Primary reference DOI: `10.1287/mnsc.2015.2366`
- OpenAlex ID: `W2303284028`
- Dimensions ID: `pub.1064718099`
- SciSciNet ID: `W2303284028`
- Aliases: mixed disruption-consolidation streams; CD stream heterogeneity; heterogeneous predecessor-stream effects; aggregate CD masking
