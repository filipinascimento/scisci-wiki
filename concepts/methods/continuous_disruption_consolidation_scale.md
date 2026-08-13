# Continuous disruption-consolidation scale

## Summary

The continuous disruption-consolidation scale treats destabilizing and consolidating effects as degrees along a shared interval rather than as a binary classification.

## Canonical Form

- Unit of analysis: focal patent, paper, technology, citation neighborhood, or portfolio.
- Typical representation: signed scalar ranging from consolidating to destabilizing.
- Measurement target: degree of trajectory reinforcement or redirection.
- Empirical signature: scores can cluster near neutral, with tails representing stronger consolidation or disruption.

## Uses in Science of Science

- Interprets [disruption index](../measures/disruption_index.md) as a graded trajectory-change measure rather than a disruptive/non-disruptive label.
- Helps compare marginal shifts and large breaks in the same framework.
- Connects [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md) to distributional analysis of change.
- Supports robustness checks around [CD-index time windows](../measures/cd_index_time_windows.md), because degree can change as future citation neighborhoods grow.

## Operationalization

- Define the focal item, predecessor set, and future citation window.
- Classify future items by whether they cite the focal item, its predecessors, or both.
- Convert those triad states into a signed score, usually bounded from strong consolidation to strong disruption.
- Analyze both the central distribution and the tail cases instead of thresholding too early.

## Evidence and Validations

- Verified full-text evidence from Funk and Owen-Smith (2017) describes `CDt` as structural, dynamic, continuous, and valenced.
- Their formulation ranges from `-1` for maximal consolidation to `1` for maximal destabilization, with neutral and intermediate values between the extremes.
- The paper explicitly contrasts this with categorical accounts of competency-enhancing and competency-destroying discontinuities, arguing that a technology's effect on the status quo is a matter of degree.
- Their reported `CD5` distribution, centered near zero with bounded tails, demonstrates why distributional interpretation is needed.

## Caveats

- Continuous scores can invite false precision when citation coverage is thin.
- Near-zero values can reflect mixed effects, weak effects, or insufficient future-citation evidence.
- Thresholds may still be useful for summaries, but should be reported as analytic choices rather than natural categories.

## Links

- [disruption index](../measures/disruption_index.md)
- [modified CD index](../measures/modified_cd_index.md)
- [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md)
- [CD-index time windows](../measures/cd_index_time_windows.md)
- [disruption and consolidation](../mechanisms/disruption_consolidation.md)
- [patent disruption face-validity cases](../validations/patent_disruption_face_validity_cases.md)
- [impact direction-magnitude decoupling](../validations/impact_direction_magnitude_decoupling.md)

## References

- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; WoS: unknown; SciSciNet: W2303284028]

## Metadata

- Concept ID: `continuous_disruption_consolidation_scale`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Funk and Owen-Smith (2017) (2017)
- Primary reference DOI: `10.1287/mnsc.2015.2366`
- OpenAlex ID: `W2303284028`
- Dimensions ID: `pub.1064718099`
- SciSciNet ID: `W2303284028`
- Aliases: graded disruption scale; continuous CD scale; disruption-consolidation continuum; valenced trajectory-change scale
