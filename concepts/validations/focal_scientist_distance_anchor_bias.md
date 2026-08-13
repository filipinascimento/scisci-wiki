# Focal-scientist distance anchor bias

## Summary

Focal-scientist distance anchor bias is the validation concern that Erdos-number-style collaboration distances depend strongly on the chosen anchor scientist's productivity and connectedness.

## Canonical Form

- Unit of analysis: focal scientist, collaboration path, distance profile, coauthorship network, or anchor selection.
- Typical representation: focal distance distribution, anchor comparison, or centrality sensitivity check.
- Validation target: prevent generalizing one focal scientist's distance profile to the whole collaboration network.
- Empirical signature: distance results change substantially when the focal anchor is replaced by another highly productive or highly connected scientist.

## Uses in Science of Science

- Adds an anchor-selection caveat to [focal collaboration distance profile](../measures/focal_collaboration_distance_profile.md).
- Links to [productivity-connectedness decoupling](productivity_connectedness_decoupling.md), because high output does not guarantee network reach.
- Qualifies [collaboration path length](../measures/collaboration_path_length.md) when distances are measured from one named scientist.
- Helps interpret popular collaboration-distance measures as local views rather than universal network summaries.

## Operationalization

- Compute distance profiles from multiple focal scientists with different productivity and collaboration patterns.
- Compare anchor-based distances with all-pairs path length or giant-component metrics.
- Report whether the focal scientist has unusual productivity, degree, or component location.
- Treat infinite distances and solo-heavy careers explicitly.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) discusses Erdos-number-style distances and notes that results can be shaped by the focal scientist's exceptional output.
- Newman contrasts prolific but poorly connected or solo-oriented scientists with focal scientists who create broad collaboration reach.
- This motif is distinct from the focal-distance measure itself because it is an anchor-bias validation.
- It is also distinct from productivity-connectedness decoupling because it applies that decoupling to focal distance interpretation.

## Caveats

- A focal anchor can be appropriate when the research question is explicitly about that person or school.
- Anchor bias depends on the observation window and source coverage.
- Multiple-anchor comparisons require careful handling of disconnected components.

## Links

- [focal collaboration distance profile](../measures/focal_collaboration_distance_profile.md)
- [productivity-connectedness decoupling](productivity_connectedness_decoupling.md)
- [collaboration path length](../measures/collaboration_path_length.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [collaboration giant component](../measures/collaboration_giant_component.md)
- [connected-pairs-only distance censoring](connected_pairs_only_distance_censoring.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; SciSciNet: W2025572017; WoS: unknown]

## Metadata

- Concept ID: `focal_scientist_distance_anchor_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1103/PhysRevE.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `pub.1060727007`
- SciSciNet ID: `W2025572017`
- Aliases: focal collaboration anchor bias; Erdos-number anchor bias; focal distance anchor sensitivity; named-scientist distance bias
